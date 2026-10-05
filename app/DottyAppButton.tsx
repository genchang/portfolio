export const DOTTY_APP_STORE_URL =
  "https://apps.apple.com/app/dotty-cozy-life-tracker/id6811135963";

export default function DottyAppButton() {
  return (
    <a
      href={DOTTY_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dotty on the App Store"
      className="inline-flex items-center justify-center h-9 px-3 rounded-full bg-white border border-[rgba(50,64,79,0.1)] transition-[border-color,box-shadow] hover:border-[#F69F9D] hover:shadow-[0_2px_8px_rgba(246,159,157,0.25)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/dotty_logo.svg" alt="" width={53} height={28} className="h-7 w-auto" />
    </a>
  );
}
