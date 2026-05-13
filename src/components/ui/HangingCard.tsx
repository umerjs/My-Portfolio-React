import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Html,
  RoundedBox,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

/* ---------------- Hook ---------------- */
function Hook() {
  return (
    <group position={[0, 3.2, 0]}>
      {/* mounting plate */}
      <mesh castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.06, 32]} />
        <meshStandardMaterial color="#cfcfcf" metalness={1} roughness={0.25} />
      </mesh>
      {/* hook ring */}
      <mesh position={[0, -0.18, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.12, 0.025, 16, 48]} />
        <meshStandardMaterial color="#d4d4d4" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

/* ---------------- Rope ---------------- */
function Rope({ endRef }: { endRef: React.MutableRefObject<THREE.Vector3> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const start = useMemo(() => new THREE.Vector3(0, 3.0, 0), []);

  useFrame(() => {
    if (!meshRef.current) return;
    const end = endRef.current;
    const mid = new THREE.Vector3(
      (start.x + end.x) / 2,
      (start.y + end.y) / 2 - 0.05,
      (start.z + end.z) / 2,
    );
    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    const geo = new THREE.TubeGeometry(curve, 24, 0.022, 8, false);
    meshRef.current.geometry.dispose();
    meshRef.current.geometry = geo;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <tubeGeometry
        args={[
          new THREE.CatmullRomCurve3([start, start, start]),
          24,
          0.022,
          8,
          false,
        ]}
      />
      <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.05} />
    </mesh>
  );
}

/* ---------------- Card UI (DOM in 3D) ---------------- */
function CardFace() {
  return (
    <div
      style={{ width: 320, height: 460 }}
      className="relative flex flex-col rounded-[22px] overflow-hidden font-sans"
    >
      {/* gradient surface */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1d] via-[#111114] to-[#0a0a0c]" />
      {/* top shine */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.07] to-transparent" />
      {/* gold hairline */}
      <div className="absolute inset-x-6 top-[88px] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative flex items-center justify-between px-5 pt-4 text-[10px] tracking-[0.25em] text-white/50 uppercase">
        <span>Developer</span>
        <span className="text-primary">/ 2026</span>
      </div>

      <div className="relative flex flex-col items-center pt-6">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#c9a96a]/40 to-transparent blur-md" />
          <img
            src="https://avatars.githubusercontent.com/u/178928829?v=4"
            alt="Profile"
            width={104}
            height={104}
            className="relative h-[104px] w-[104px] rounded-full object-cover ring-1 ring-white/10"
          />
        </div>
        <h2 className="mt-5 text-[22px] font-semibold tracking-tight text-white font-syne">
          Umer Memon
        </h2>
        <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-primary font-syne">
          Full Stack Developer
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap justify-center gap-1.5 px-6">
        {["React", "TypeScript", "Three.js", "Tailwind"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-end justify-between gap-3 px-5 pb-5">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/40">
            ID
          </span>
          <span className="text-[12px] font-mono text-white/80">
            0x004 · 2026
          </span>
          <span className="mt-1 text-[9px] tracking-[0.25em] uppercase text-white/40">
            Access
          </span>
          <span className="text-[11px] text-white/70">All Areas</span>
        </div>
        {/* QR */}
        <div className="grid grid-cols-8 gap-[2px] rounded-md bg-white p-1.5">
          {Array.from({ length: 64 }).map((_, i) => {
            // deterministic pseudo-pattern
            const on = ((i * 53 + 7) % 7) % 2 === 0 || i < 3 || i % 9 === 0;
            return (
              <div
                key={i}
                className={`h-[6px] w-[6px] ${on ? "bg-black" : "bg-white"}`}
              />
            );
          })}
        </div>
      </div>

      {/* bottom accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ---------------- Card ---------------- */
type CardProps = {
  cardEndRef: React.MutableRefObject<THREE.Vector3>;
  reducedMotion: boolean;
};

function Card({ cardEndRef, reducedMotion }: CardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const angle = useRef(0);
  const angVel = useRef(0);
  const tilt = useRef(new THREE.Vector2(0, 0));
  const targetTilt = useRef(new THREE.Vector2(0, 0));
  const { pointer } = useThree();

  const pivotY = 3.0; // hook attach point Y
  const cardHalf = 1.15; // distance from pivot to card center
  const stiffness = 6.0;
  const damping = 1.4;

  useFrame((_, dt) => {
    if (!groupRef.current) return;
    const delta = Math.min(dt, 0.05);

    // pointer-driven nudge (force on pendulum)
    targetTilt.current.set(pointer.x, pointer.y);
    tilt.current.lerp(targetTilt.current, reducedMotion ? 0.05 : 0.08);

    if (!reducedMotion) {
      // pendulum equation: a = -k*theta - c*omega + force
      const force = tilt.current.x * 0.6;
      const accel =
        -stiffness * angle.current - damping * angVel.current + force;
      angVel.current += accel * delta;
      angle.current += angVel.current * delta;
    } else {
      angle.current = tilt.current.x * 0.05;
    }

    // idle float (small)
    const t = performance.now() / 1000;
    const idle = reducedMotion ? 0 : Math.sin(t * 0.9) * 0.015;

    const a = angle.current + idle;
    // position card so it hangs from pivot
    const cx = Math.sin(a) * cardHalf;
    const cy = pivotY - Math.cos(a) * cardHalf;

    groupRef.current.position.set(cx, cy, 0);
    groupRef.current.rotation.z = a;
    // subtle pitch from vertical pointer
    groupRef.current.rotation.x = tilt.current.y * 0.15;
    groupRef.current.rotation.y = tilt.current.x * 0.2;

    // expose top-of-card for rope endpoint (in world space)
    const top = new THREE.Vector3(0, cardHalf - 0.02, 0).applyEuler(
      groupRef.current.rotation,
    );
    cardEndRef.current.set(
      groupRef.current.position.x + top.x,
      groupRef.current.position.y + top.y,
      groupRef.current.position.z + top.z,
    );
  });

  return (
    <group ref={groupRef}>
      {/* lanyard clip */}
      <mesh position={[0, cardHalf - 0.02, 0]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.05]} />
        <meshStandardMaterial color="#bdbdbd" metalness={1} roughness={0.3} />
      </mesh>
      {/* card body */}
      <RoundedBox
        args={[1.6, 2.3, 0.05]}
        radius={0.11}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#0c0c0e"
          metalness={0.3}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
          reflectivity={0.4}
        />
      </RoundedBox>

      {/* DOM UI on front */}
      <Html
        transform
        occlude
        position={[0, 0, 0.027]}
        distanceFactor={1.8}
        style={{ pointerEvents: "none" }}
      >
        <CardFace />
      </Html>

      {/* subtle back accent */}
      <mesh position={[0, 0, -0.026]}>
        <planeGeometry args={[1.5, 2.2]} />
        <meshStandardMaterial color="#0a0a0c" roughness={0.7} metalness={0.1} />
      </mesh>
    </group>
  );
}

/* ---------------- Scene ---------------- */
function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const cardEndRef = useRef(new THREE.Vector3(0, 1.85, 0));

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[-4, 2, -2]}
        intensity={0.5}
        color="#c9a96a"
      />
      <Environment preset="apartment" />

      <Hook />
      <Rope endRef={cardEndRef} />
      <Card cardEndRef={cardEndRef} reducedMotion={reducedMotion} />

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.45}
        scale={8}
        blur={2.6}
        far={4}
      />
    </>
  );
}

/* ---------------- Public Component ---------------- */
export default function HangingCard({
  className = "",
}: {
  className?: string;
}) {
  // Initialize reduced motion based on the user's preference to avoid setting state synchronously in the effect.
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <div
      className={`relative h-[600px] w-full md:h-[680px] ${className}`}
      style={{ touchAction: "none" }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.7, 5.2], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
