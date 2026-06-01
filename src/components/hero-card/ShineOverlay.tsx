// src/components/hero-card/ShineOverlay.tsx
// Reflection is now a fixed static sheen — no mouse-driven movement
// that was previously sliding over and ruining the card content.

export function ShineOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px]">
      {/* Top-left corner static sheen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 25%, transparent 50%)",
        }}
      />
      {/* Subtle gold edge rim along top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(201,169,106,0.45) 40%, rgba(201,169,106,0.45) 60%, transparent 95%)",
        }}
      />
    </div>
  );
}