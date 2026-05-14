/**
 * CardFace — The front-facing content layer of the developer ID badge.
 *
 * Renders the editorial layout: profile photo, name, title, tech badges,
 * metadata, and QR code. Styled to resemble a premium tech conference
 * credential or luxury printed identity system.
 *
 * All visual details are pure CSS — no images except the avatar.
 */

import { CARD_BORDER_RADIUS, DEFAULT_PROFILE, COLORS } from './constants';
import type { CardProfile } from './types';

interface CardFaceProps {
  profile?: CardProfile;
}

export function CardFace({ profile = DEFAULT_PROFILE }: CardFaceProps) {
  return (
    <div
      className="relative flex flex-col overflow-hidden font-sans"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: CARD_BORDER_RADIUS,
      }}
    >
      {/* ─── Card surface gradient ─── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${COLORS.cardSurface} 0%, ${COLORS.cardBg} 40%, ${COLORS.cardDeep} 100%)`,
        }}
      />

      {/* ─── Subtle top-edge highlight (simulates overhead light) ─── */}
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background: `linear-gradient(180deg, ${COLORS.white07} 0%, transparent 100%)`,
        }}
      />

      {/* ─── Inner border highlight ─── */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          boxShadow: `inset 0 1px 0 ${COLORS.white10}, inset 0 -1px 0 rgba(255,255,255,0.03)`,
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-center justify-between px-5 pt-4">
          <span
            className="text-[10px] font-medium uppercase"
            style={{
              letterSpacing: '0.25em',
              color: COLORS.white50,
            }}
          >
            Developer
          </span>
          <span
            className="text-[10px] font-medium uppercase"
            style={{
              letterSpacing: '0.25em',
              color: COLORS.gold,
            }}
          >
            / {profile.year}
          </span>
        </div>

        {/* Gold hairline divider */}
        <div
          className="mx-6 mt-3 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${COLORS.goldMuted} 50%, transparent 100%)`,
          }}
        />

        {/* Avatar */}
        <div className="flex flex-col items-center pt-6">
          <div className="relative">
            {/* Avatar glow ring */}
            <div
              className="absolute -inset-1.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${COLORS.goldMuted} 0%, transparent 60%)`,
                filter: 'blur(8px)',
              }}
            />
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={104}
              height={104}
              className="relative h-[104px] w-[104px] rounded-full object-cover"
              style={{
                boxShadow: `0 0 0 1px ${COLORS.white10}, 0 8px 24px rgba(0,0,0,0.4)`,
              }}
              loading="eager"
            />
          </div>

          {/* Name */}
          <h2
            className="mt-5 text-[22px] font-semibold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {profile.name}
          </h2>

          {/* Title */}
          <p
            className="mt-1 text-[11px] font-medium uppercase"
            style={{
              letterSpacing: '0.22em',
              color: COLORS.gold,
            }}
          >
            {profile.title}
          </p>
        </div>

        {/* Stack badges */}
        <div className="mt-5 flex flex-wrap justify-center gap-1.5 px-6">
          {profile.stackBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full px-2.5 py-1 text-[10px] font-medium"
              style={{
                border: `1px solid ${COLORS.white10}`,
                background: COLORS.white05,
                color: COLORS.white70,
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-6" />

        {/* Bottom metadata row */}
        <div className="flex items-end justify-between px-5 pb-5">
          {/* ID + Access */}
          <div className="flex flex-col gap-1">
            <span
              className="text-[9px] font-medium uppercase"
              style={{ letterSpacing: '0.25em', color: COLORS.white40 }}
            >
              ID
            </span>
            <span
              className="font-mono text-[12px]"
              style={{ color: COLORS.white80 }}
            >
              {profile.idCode} · {profile.year}
            </span>
            <span
              className="mt-1 text-[9px] font-medium uppercase"
              style={{ letterSpacing: '0.25em', color: COLORS.white40 }}
            >
              Access
            </span>
            <span className="text-[11px]" style={{ color: COLORS.white70 }}>
              {profile.accessLevel}
            </span>
          </div>

          {/* QR code — deterministic dot pattern */}
          <div
            className="grid grid-cols-8 gap-[2px] rounded-md bg-white p-1.5"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            {Array.from({ length: 64 }).map((_, i) => {
              const on =
                ((i * 53 + 7) % 7) % 2 === 0 || i < 3 || i % 9 === 0;
              return (
                <div
                  key={i}
                  className="h-[6px] w-[6px]"
                  style={{ background: on ? '#000' : '#fff' }}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${COLORS.white10} 50%, transparent 100%)`,
          }}
        />
      </div>
    </div>
  );
}
