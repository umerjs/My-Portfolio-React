import { CARD_BORDER_RADIUS, DEFAULT_PROFILE } from "./constants";
import type { CardProfile } from "./types";
import linkedinQr from "@/assets/Linkedin.webp";

/* ══════════════════════════════════════════════════════════════
   EDITABLE DIMENSIONS — tweak these to adjust the card layout
   ══════════════════════════════════════════════════════════════ */
const QR_SIZE = 56; // QR code width/height in px
const AVATAR_SIZE = 98; // avatar width/height in px
const PADDING_X = 20; // horizontal padding in px  (20 = px-5)
const PADDING_Y = 36; // vertical padding in px     (16 = py-4)

interface CardFaceProps {
  profile?: CardProfile;
}

export function CardFace({ profile = DEFAULT_PROFILE }: CardFaceProps) {
  return (
    <div
      className="relative flex flex-col overflow-hidden font-sans"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: CARD_BORDER_RADIUS,
        background:
          "linear-gradient(180deg, #1a1a20 0%, #121216 30%, #0a0a0e 100%)",
      }}
    >
      {/* background glow — edit the 0.10 opacity and 55% size */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,169,106,0.10) 0%, transparent 55%)",
        }}
      />
      {/* inner card border */}
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-10 flex flex-col h-full"
        style={{ padding: `${PADDING_Y}px ${PADDING_X}px` }}
      >
        {/* ═══ ROW 1: Label ═══ */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Developer
          </span>
          <span className="text-[10px] font-semibold text-[#c9a96a] tracking-widest">
            {profile.year}
          </span>
        </div>

        {/* ═══ ROW 2: Avatar + Name ═══ */}
        <div className="flex flex-col items-center mt-4">
          <div className="relative mb-3">
            <div
              className="absolute -inset-2 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,169,106,0.30) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              fetchPriority="high"
              className="rounded-full object-cover"
              style={{
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
                border: "2px solid rgba(201,169,106,0.45)",
                boxShadow:
                  "0 0 0 4px rgba(201,169,106,0.08), 0 6px 24px rgba(0,0,0,0.55)",
              }}
            />
          </div>
          <h2
            className="text-[21px] font-bold text-white tracking-tight"
            style={{ lineHeight: 1.2 }}
          >
            {profile.name}
          </h2>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a96a]">
            {profile.title}
          </p>
        </div>

        {/* ═══ DIVIDER ═══ */}
        <div
          className="mx-auto w-3/4 h-px my-3"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,106,0.45), transparent)",
          }}
        />

        {/* ═══ ROW 3: Stack Badges ═══ */}
        <div className="flex flex-wrap justify-center gap-1.5 px-1">
          {profile.stackBadges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-[3px] text-[10px] font-medium rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* ═══ SPACER — pushes bottom section down ═══ */}
        <div className="flex-1" />

        {/* ═══ ROW 4: Bottom — QR + ID / Access ═══ */}
        <div className="flex items-end justify-between pt-3 border-t border-white/[0.06]">
          {/* ID / Access */}
          <div className="flex gap-6">
            <div>
              <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-0.5">
                ID
              </div>
              <div className="font-mono text-[11px] text-white/75">
                {profile.idCode}
              </div>
            </div>
            <div>
              <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-0.5">
                Access
              </div>
              <div className="text-[11px] text-white/75">
                {profile.accessLevel}
              </div>
            </div>
          </div>

          {/* QR code */}
          <div
            style={{
              padding: 3,
              background: "#ffffff",
              borderRadius: 8,
              boxShadow:
                "0 3px 10px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,106,0.25)",
            }}
          >
            <img
              src={linkedinQr}
              alt="Muhammad Umer LinkedIn profile QR code — connect on LinkedIn"
              width={QR_SIZE}
              height={QR_SIZE}
              style={{
                width: QR_SIZE,
                height: QR_SIZE,
                borderRadius: 4,
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
