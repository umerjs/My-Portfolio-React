import { CARD_BORDER_RADIUS, DEFAULT_PROFILE, COLORS } from "./constants";
import type { CardProfile } from "./types";
import qrCodeImg from "@/assets/Linkedin.png";

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
        background: `linear-gradient(180deg, #1a1a20 0%, #121216 30%, #0a0a0e 100%)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,169,106,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Developer
          </span>
          <span className="text-[11px] font-semibold text-[#c9a96a]">
            {profile.year}
          </span>
        </div>

        <div className="flex flex-col items-center mt-6">
          <div className="relative mb-4">
            <div
              className="absolute -inset-2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,169,106,0.25) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={96}
              height={96}
              className="rounded-full object-cover border-2 border-[#c9a96a]/30"
              style={{
                width: 96,
                height: 96,
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>
          <h2
            className="text-[22px] font-bold text-white tracking-tight"
            style={{ lineHeight: 1.2 }}
          >
            {profile.name}
          </h2>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a96a]">
            {profile.title}
          </p>
        </div>

        <div
          className="mx-auto w-3/4 h-px my-5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,106,0.4), transparent)",
          }}
        />

        <div className="flex flex-wrap justify-center gap-2 px-2">
          {profile.stackBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-[11px] font-medium rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex-1 min-h-0" />

        <div className="flex items-end justify-between mt-auto pt-3">
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-1">
              ID
            </div>
            <div className="font-mono text-[12px] text-white/80">
              {profile.idCode}
            </div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mt-2 mb-1">
              Access
            </div>
            <div className="text-[13px] text-white/80">
              {profile.accessLevel}
            </div>
          </div>

          <img
            src={qrCodeImg}
            alt="LinkedIn QR"
            className="w-[60px] h-[60px] rounded-md object-contain"
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
