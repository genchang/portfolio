import Link from "next/link";
import CaseStudyIndex from "../CaseStudyIndex";
import SaFlagIcon from "../SaFlagIcon";

const INDEX_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "mapping-the-journey", label: "Customer journeys" },
  { id: "visualising-the-future", label: "Concepts & prototyping" },
  { id: "foundations", label: "Design system" },
  { id: "impact", label: "Impact" },
];

export default function VisionBankCaseStudy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-[220px_1fr] gap-8">
        {/* Sticky left index */}
        <aside className="px-6 pt-10">
          <div className="sticky top-10">
            <CaseStudyIndex items={INDEX_ITEMS} backHref="/" backLabel="Back" />
          </div>
        </aside>

        <main className="min-w-0">
          {/* Hero / title block */}
          <section
            id="overview"
            className="px-6 pt-10 pb-16 max-w-[900px] w-full scroll-mt-10"
          >
            <div className="flex items-center gap-3 mb-8">
              {[
                "UX/UI Designer",
                "9 months",
                "Figma",
                "Mobile",
                "Tablet",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] uppercase leading-[20px] px-3 py-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 400,
                    color: "rgba(50,64,79,0.58)",
                    border: "1px solid rgba(50,64,79,0.1)",
                    borderRadius: "999px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-[64px] leading-[72px] tracking-[-0.5px] text-[#32404f] mb-8"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Vision Bank
            </h1>

            <p
              className="text-[22px] leading-[32px] text-[#32404f] max-w-[720px]"
              style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
            >
              Designing a scalable digital banking experience for{" "}
              <em style={{ fontWeight: 400 }}>
                one of Saudi Arabia&apos;s first fully digital banks.
              </em>
            </p>
          </section>

          {/* Hero image */}
          <section className="px-6 pb-24">
            <div className="max-w-[900px] w-full">
              <div
                className="w-full bg-[#eff2f7] overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  border: "1px solid rgba(50,64,79,0.1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bank/hero.png"
                  alt="Vision Bank product overview"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </section>

          {/* Body sections */}
          <div className="max-w-[900px] w-full px-6 flex flex-col gap-24 pb-24">
            {/* 01 — Context */}
            <section id="context" className="scroll-mt-10">
              <div
                className="text-[13px] uppercase leading-[20px] mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "#e65f2e",
                  letterSpacing: "0.5px",
                }}
              >
                01 — Context
              </div>
              <h2
                className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                Helping shape a fully digital bank
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  Vision Bank was one of Saudi Arabia&apos;s first fully
                  digital banks, created to provide modern banking solutions
                  tailored to citizens across the Kingdom.
                </p>
                <p>
                  I joined the project as part of the UX/UI and design
                  systems team, helping shape customer journeys, scalable UI
                  patterns, and white-label banking foundations across
                  mobile and web.
                </p>
                <p>
                  Over the course of nine months, I worked across multiple
                  streams of the product — from analysing customer journeys
                  and defining UI patterns to building concept prototypes
                  and contributing to a multi-product design system library.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Responsibilities
              </h3>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{
                  listStyleType: "disc",
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <li>Customer journey analysis</li>
                <li>UX/UI design</li>
                <li>Design systems</li>
                <li>White-label banking frameworks</li>
                <li>Wireframing and prototyping</li>
                <li>Component documentation</li>
                <li>Stakeholder collaboration</li>
              </ul>
            </section>

            {/* 02 — Mapping the journey */}
            <section id="mapping-the-journey" className="scroll-mt-10">
              <div
                className="text-[13px] uppercase leading-[20px] mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "#e65f2e",
                  letterSpacing: "0.5px",
                }}
              >
                02 — Customer journeys
              </div>
              <h2
                className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                Analysing customer journeys
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  The client provided a series of banking flows and business
                  requirements created by business analysts, which the
                  design team translated into low-fidelity customer journeys
                  across both retail and SME banking experiences.
                </p>
                <p>
                  Because the product was still being defined, many journeys
                  evolved continuously as new requirements, stakeholder
                  feedback, and technical considerations surfaced throughout
                  the project. My role focused on helping visualise these
                  flows in a scalable way while ensuring the experiences
                  remained intuitive, consistent, and aligned with iOS
                  usability guidelines.
                </p>
                <p>
                  Alongside the UX work, I also contributed toward building
                  the foundations of the white-label design system, which
                  became increasingly important as the product ecosystem
                  expanded.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Main contributions
              </h3>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{
                  listStyleType: "disc",
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Analysing customer journeys and translating business
                  requirements into wireframes and UX flows
                </li>
                <li>
                  Contributing toward the white-label design system strategy
                  and structure
                </li>
                <li>
                  Creating reusable iOS-focused components, styles, and
                  documentation
                </li>
                <li>
                  Designing low and high-fidelity wireframes across retail
                  and SME banking apps
                </li>
                <li>
                  Ensuring UX principles and platform-specific guidelines
                  were consistently applied
                </li>
              </ul>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Challenges
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  One of the biggest challenges was navigating the number of
                  stakeholders involved in the decision-making process.
                  Requirements and feedback often shifted mid-stream, which
                  created misalignment around priorities and implementation
                  expectations.
                </p>
                <p>
                  To reduce friction and improve collaboration, smaller
                  workshops were introduced with only the necessary
                  stakeholders involved. This helped streamline discussions,
                  reduce conflicting feedback loops, and create clearer
                  alignment before design work progressed further.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Lessons
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  This project highlighted the importance of clearly
                  defining what &ldquo;ready&rdquo; and &ldquo;done&rdquo;
                  mean at the beginning of a project.
                </p>
              </div>

              <Pullquote>
                Without strong alignment upfront, the design process became
                more reactive than iterative — with time often spent
                resolving planning gaps that should have been clarified
                before design tasks began.
              </Pullquote>

              <div
                className="flex flex-col gap-5 mt-6"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  It reinforced how important structured planning and
                  implementation alignment are in creating efficient product
                  teams.
                </p>
              </div>

              <figure className="mt-10 w-full overflow-hidden bg-[#eff2f7]" style={{ border: "1px solid rgba(50,64,79,0.1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bank/section2_journeys.png"
                  alt="Customer journey analysis and reusable wireframes"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </figure>
            </section>

            {/* 03 — Visualising the future */}
            <section id="visualising-the-future" className="scroll-mt-10">
              <div
                className="text-[13px] uppercase leading-[20px] mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "#e65f2e",
                  letterSpacing: "0.5px",
                }}
              >
                03 — Concepts & prototyping
              </div>
              <h2
                className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                Visualising through concepts and prototyping
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  During the early stages of the product, concept designs
                  were explored to help define the visual tone and future
                  direction of the banking experience.
                </p>
                <p>
                  Using inspiration from existing banking products,
                  interaction trends, and the client&apos;s proposed colour
                  palettes, I created a series of mobile and tablet concepts
                  focused on creating a clean, modern, and minimal banking
                  experience. These concepts included interactive
                  prototypes, motion explorations, and micro-interactions
                  to help stakeholders better visualise how the product
                  could feel in practice.
                </p>
                <p>
                  Although the final approved visual direction later shifted
                  toward a different style, the concept phase played an
                  important role in exploring possibilities and shaping
                  early product conversations.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Main contributions
              </h3>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{
                  listStyleType: "disc",
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Creating mobile banking concepts, mockups, and
                  interactive prototypes
                </li>
                <li>
                  Designing tablet banking concepts and responsive layouts
                </li>
                <li>
                  Exploring motion design and micro-interactions for key
                  banking journeys
                </li>
                <li>
                  Producing presentation-ready visuals and prototype videos
                  for stakeholder reviews
                </li>
                <li>
                  Extending newly approved visual styles across future
                  product screens and components
                </li>
              </ul>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Challenges
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  One of the more difficult aspects of the concept phase
                  was the lack of established branding or visual direction
                  from marketing.
                </p>
              </div>

              <Pullquote>
                With minimal constraints, there was a very broad
                interpretation of what the app could look and feel like.
                Feedback often became more subjective around personal
                visual preference rather than solving product problems.
              </Pullquote>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Lessons
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  This phase taught me the importance of aligning on
                  product vision and visual direction before heavily
                  investing in exploratory concept work.
                </p>
                <p>
                  While concepts are valuable for sparking conversations
                  and creating excitement, they become significantly more
                  effective when paired with clearer strategic direction
                  and stakeholder alignment early in the process.
                </p>
              </div>

              <figure
                className="mt-10 w-full overflow-hidden bg-[#eff2f7]"
                style={{
                  border: "1px solid rgba(50,64,79,0.1)",
                  aspectRatio: "12 / 5",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bank/section3_concepts.png"
                  alt="High-fidelity UI concepts and prototype explorations"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 40%",
                  }}
                />
              </figure>
            </section>

            {/* 04 — Building the foundations */}
            <section id="foundations" className="scroll-mt-10">
              <div
                className="text-[13px] uppercase leading-[20px] mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "#e65f2e",
                  letterSpacing: "0.5px",
                }}
              >
                04 — Design system
              </div>
              <h2
                className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                Strategising a multi-product design system library
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  As the product ecosystem expanded, the need for a
                  scalable and maintainable design system became
                  increasingly important.
                </p>
                <p>
                  Before high-fidelity screens could be rolled out
                  consistently across products, the design system
                  foundations needed to account for scalability,
                  white-label flexibility, responsiveness, and long-term
                  maintainability.
                </p>
                <p>
                  To support this, I helped structure the system around a
                  shared base UI kit that could be published into multiple
                  product libraries and then styled independently based on
                  brand requirements. This allowed the team to maintain
                  consistency across products while still supporting future
                  visual variations.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Main contributions
              </h3>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{
                  listStyleType: "disc",
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Structuring the design system architecture for
                  multi-product consistency
                </li>
                <li>
                  Creating responsive high-fidelity components using Figma
                  best practices
                </li>
                <li>
                  Establishing reusable patterns and scalable component
                  libraries
                </li>
                <li>
                  Writing detailed documentation for usage, maintenance,
                  and contributions
                </li>
                <li>
                  Maintaining and evolving the design system as product
                  requirements changed
                </li>
              </ul>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Challenges
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  I was given ownership of the design system while also
                  balancing broader product responsibilities, which
                  created a significant overlap between strategic systems
                  work and ongoing backlog tasks.
                </p>
              </div>

              <Pullquote>
                Because the design system needed to function as a product
                in itself, I shifted focus toward ensuring its long-term
                scalability and usability for the wider design team.
              </Pullquote>

              <div
                className="flex flex-col gap-5 mt-6"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  This included refining component structures, improving
                  documentation, and creating clearer implementation
                  guidance so designers could work more efficiently during
                  high-fidelity rollout phases.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Lessons
              </h3>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  This project became one of my first opportunities to
                  work deeply within a large-scale design system
                  environment.
                </p>
                <p>
                  It strengthened my understanding of scalable component
                  architecture, documentation practices, and systems
                  thinking — and ultimately sparked my long-term interest
                  in specialising further within design systems and
                  scalable product design.
                </p>
              </div>

              <figure className="mt-10 w-full overflow-hidden bg-[#eff2f7]" style={{ border: "1px solid rgba(50,64,79,0.1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bank/section4_designsystem.png"
                  alt="Multi-product design system structure"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </figure>

              <figure className="mt-6 w-full overflow-hidden bg-[#eff2f7]" style={{ border: "1px solid rgba(50,64,79,0.1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bank/section4_thumbnails.png"
                  alt="Design system component thumbnails"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </figure>
            </section>

            {/* 05 — Impact */}
            <section id="impact" className="scroll-mt-10">
              <div
                className="text-[13px] uppercase leading-[20px] mb-4"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 500,
                  color: "#e65f2e",
                  letterSpacing: "0.5px",
                }}
              >
                05 — Impact
              </div>
              <h2
                className="text-[36px] leading-[44px] tracking-[-0.2px] text-[#32404f] mb-6"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 300 }}
              >
                Building consistency across products
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <p>
                  The work contributed toward creating a more scalable and
                  consistent banking experience across both mobile and
                  tablet platforms.
                </p>
                <p>
                  A major focus of the project was establishing the early
                  structural foundations for the design system. I helped
                  define a layered system approach where a shared
                  black-and-white base UI kit acted as the core foundation
                  for reusable components and interaction patterns.
                </p>
                <p>
                  From there, separate retail and SME libraries could
                  inherit the same component structure and behaviour while
                  applying their own branding, colour palettes, and visual
                  styling. This allowed the products to maintain
                  consistency in usability and implementation while still
                  feeling distinct for different audiences.
                </p>
                <p>
                  Although the design system continued evolving after my
                  involvement, the initial structure, organisation, and
                  scalable approach helped create a stronger foundation
                  for future designers and product expansion.
                </p>
              </div>

              <h3
                className="text-[20px] leading-[28px] text-[#32404f] mt-10 mb-4"
                style={{ fontFamily: "var(--font-tiempos)", fontWeight: 400 }}
              >
                Outcomes
              </h3>
              <ul
                className="flex flex-col gap-2 pl-5"
                style={{
                  listStyleType: "disc",
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 400,
                  color: "#32404f",
                  fontSize: "17px",
                  lineHeight: "28px",
                }}
              >
                <li>
                  Established the foundational structure for a scalable
                  multi-product design system
                </li>
                <li>
                  Improved consistency across retail and SME banking
                  experiences
                </li>
                <li>
                  Enabled white-label flexibility through shared component
                  foundations
                </li>
                <li>
                  Reduced duplicated design effort through reusable UI
                  patterns and libraries
                </li>
                <li>
                  Supported more efficient high-fidelity rollout workflows
                  for future designers
                </li>
                <li>
                  Created scalable component and documentation foundations
                  for long-term system growth
                </li>
              </ul>
            </section>

          </div>

          {/* Next / back link */}
          <section className="px-6 pb-24 max-w-[900px] w-full">
            <Link
              href="/"
              className="flex items-center gap-2 text-[15px] uppercase leading-[22.5px]"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                color: "#32404f",
              }}
            >
              <BackArrow />
              Back to all work
            </Link>
          </section>
        </main>
      </div>

      {/* Footer — matches home */}
      <footer
        className="flex items-center justify-between px-6 py-[20px]"
        style={{ borderTop: "1px solid rgba(50,64,79,0.1)" }}
      >
        <div className="flex items-center gap-1">
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            Designed with
          </span>
          <HeartIcon />
          <span
            className="text-[15px] uppercase leading-[22.5px]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 400,
              color: "rgba(50,64,79,0.58)",
            }}
          >
            by Gen • Cape Town
          </span>
          <SaFlagIcon />
        </div>
      </footer>
    </div>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="py-4 mt-10"
      style={{
        fontFamily: "var(--font-tiempos)",
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "26px",
        lineHeight: "36px",
        color: "#32404f",
        borderLeft: "2px solid #e65f2e",
        paddingLeft: "24px",
      }}
    >
      {children}
    </blockquote>
  );
}

function BackArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-1"
      aria-hidden="true"
    >
      <path
        d="M7.5 13C7.5 13 1.5 9.2 1.5 5a3 3 0 0 1 6-0.4A3 3 0 0 1 13.5 5c0 4.2-6 8-6 8Z"
        stroke="rgba(50,64,79,0.58)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
