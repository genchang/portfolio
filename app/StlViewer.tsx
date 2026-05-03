"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function StlViewer({
  src,
  background = "#f4f7f9",
  modelColor = "#32404f",
  autoRotate = true,
}: {
  src: string;
  background?: string;
  modelColor?: string;
  autoRotate?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(1, 1.5, 1);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.4);
    fill.position.set(-1, 0.5, -1);
    scene.add(fill);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.2;

    let mesh: THREE.Mesh | null = null;
    let raf = 0;
    let cancelled = false;

    const loader = new STLLoader();
    loader.load(
      src,
      (geometry) => {
        if (cancelled) return;
        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshStandardMaterial({
          color: modelColor,
          metalness: 0.05,
          roughness: 0.55,
          flatShading: false,
        });
        mesh = new THREE.Mesh(geometry, material);
        // Rotate so STL "up" (Z) becomes scene up (Y)
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        // Frame the model
        const box = new THREE.Box3().setFromObject(mesh);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());
        controls.target.copy(center);
        camera.position.copy(center);
        camera.position.x += size * 0.7;
        camera.position.y += size * 0.5;
        camera.position.z += size * 0.9;
        camera.near = size / 100;
        camera.far = size * 100;
        camera.updateProjectionMatrix();
        controls.update();
      },
      undefined,
      (err) => {
        console.error("STL load error:", err);
      },
    );

    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      if (mesh) {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      }
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [src, background, modelColor, autoRotate]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
    />
  );
}
