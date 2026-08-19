// A lightweight, hand-built "browser window" preview used instead of stock
// photography — reliable (no external image loads), on-brand, and distinct
// per business type.
type MockupType =
  | "clinic" | "bakery" | "salon" | "fitness" | "ceramics" | "law"
  | "local" | "product" | "service" | "landing";

interface Palette {
  bg: string;
  bar: string;
  block: string;
  dark?: boolean;
}

const PALETTES: Record<MockupType, Palette> = {
  clinic: { bg: "#EAF1EC", bar: "#2B5C4B", block: "#C9DCD1" },
  bakery: { bg: "#FBEFE4", bar: "#B5432B", block: "#F0D4BC" },
  salon: { bg: "#F1ECF4", bar: "#5B4A72", block: "#DED2E6" },
  fitness: { bg: "#20211D", bar: "#F6F3EA", block: "#3A3B34", dark: true },
  ceramics: { bg: "#F3EEE4", bar: "#8A6E4B", block: "#E3D6BE" },
  law: { bg: "#EDEDE9", bar: "#201F1B", block: "#D6D3CA" },
  local: { bg: "#EAF1EC", bar: "#2B5C4B", block: "#C9DCD1" },
  product: { bg: "#FBEFE4", bar: "#B5432B", block: "#F0D4BC" },
  service: { bg: "#F1ECF4", bar: "#5B4A72", block: "#DED2E6" },
  landing: { bg: "#EDEDE9", bar: "#201F1B", block: "#D6D3CA" },
};

interface WebsiteMockupProps {
  type?: MockupType;
  label?: string;
  className?: string;
}

export default function WebsiteMockup({ type = "local", label, className = "" }: WebsiteMockupProps) {
  const p = PALETTES[type] || PALETTES.local;
  const text = p.dark ? "#F6F3EA" : "#201F1B";

  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-black/10 shadow-[0_18px_40px_-16px_rgba(32,31,27,0.35)] flex flex-col ${className}`}
      style={{ backgroundColor: p.bg }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/10 shrink-0">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
      </div>
      <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ backgroundColor: p.bar }}>
        <div className="h-2.5 w-16 rounded-sm" style={{ backgroundColor: text, opacity: 0.85 }} />
        <div className="flex gap-2">
          <span className="h-1.5 w-6 rounded-sm" style={{ backgroundColor: text, opacity: 0.4 }} />
          <span className="h-1.5 w-6 rounded-sm" style={{ backgroundColor: text, opacity: 0.4 }} />
          <span className="h-1.5 w-8 rounded-sm" style={{ backgroundColor: text, opacity: 0.6 }} />
        </div>
      </div>
      <div className="px-4 sm:px-8 py-5 sm:py-10 space-y-3 sm:space-y-5 flex-1 flex flex-col justify-center">
        <div className="h-3 sm:h-4 w-3/4 sm:w-1/2 rounded-sm" style={{ backgroundColor: p.block }} />
        <div className="h-3 sm:h-4 w-1/2 sm:w-1/3 rounded-sm" style={{ backgroundColor: p.block }} />
        <div className="h-6 sm:h-8 w-24 sm:w-32 rounded-sm mt-3" style={{ backgroundColor: p.bar }} />
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-6 max-w-md">
          <div className="aspect-square rounded-sm" style={{ backgroundColor: p.block }} />
          <div className="aspect-square rounded-sm" style={{ backgroundColor: p.block }} />
          <div className="aspect-square rounded-sm" style={{ backgroundColor: p.block }} />
        </div>
      </div>
      {label && (
        <div className="absolute top-2 right-2 text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded-sm bg-white text-charcoal">
          {label}
        </div>
      )}
    </div>
  );
}
