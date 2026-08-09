import { m, type MotionValue, useTransform } from "framer-motion";
import { ROPE_HEIGHT, ENTRANCE_DURATION } from "./constants";

interface RopeProps {
  ropeSway: MotionValue<number>;
}

export function Rope({ ropeSway }: RopeProps) {
  const ropeSkew = useTransform(ropeSway, (v) => v * 0.3);

  return (
    <m.div
      className="relative z-10 flex flex-col items-center"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{
        duration: ENTRANCE_DURATION * 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      style={{ transformOrigin: "top center" }}
    >
      {/* Metal ceiling anchor — D-ring style */}
      <div className="flex flex-col items-center gap-px">
        <div
          style={{
            width: 44,
            height: 8,
            borderRadius: "4px 4px 2px 2px",
            background:
              "linear-gradient(180deg, #d0d0d0 0%, #909090 40%, #707070 100%)",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.5), inset 0 1.5px 0 rgba(255,255,255,0.6)",
          }}
        />
        <div
          style={{
            width: 20,
            height: 6,
            borderRadius: "0 0 3px 3px",
            background:
              "linear-gradient(180deg, #a0a0a0 0%, #808080 100%)",
            boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Metal ring connecting anchor to strap */}
      <div
        style={{
          width: 16,
          height: 14,
          borderRadius: "50%",
          border: "3px solid #aaa",
          marginTop: -1,
          background: "transparent",
          boxShadow: "0 2px 5px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      />

      {/* Woven fabric lanyard strap */}
      <m.div
        className="relative overflow-hidden"
        style={{
          width: 22,
          height: ROPE_HEIGHT,
          skewX: ropeSkew,
          transformOrigin: "top center",
          marginTop: -1,
        }}
      >
        {/* Strap base — dark navy fabric */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 4,
            background:
              "linear-gradient(90deg, #10162f 0%, #1e2e5a 25%, #2a3a6a 50%, #1e2e5a 75%, #10162f 100%)",
          }}
        />

        {/* Woven fabric texture — crosshatch pattern */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 4,
            backgroundImage: [
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)",
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
            ].join(", "),
          }}
        />

        {/* Gold stripe down the center (event lanyard style) */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 4,
            background: [
              "linear-gradient(90deg, transparent 30%, rgba(201,169,106,0.6) 40%, rgba(245,222,179,0.85) 50%, rgba(201,169,106,0.6) 60%, transparent 70%)",
            ].join(", "),
          }}
        />

        {/* Edge stitching on both sides */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 4,
            backgroundImage: [
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 5px)",
            ].join(", "),
            backgroundPosition: "left 2px center, right 2px center",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "2px 100%, 2px 100%",
          }}
        />

        {/* 3D shadow on left edge for rounded/physical look */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "35%",
            borderRadius: "4px 0 0 4px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
          }}
        />

        {/* Subtle highlight on right edge */}
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: "25%",
            background:
              "linear-gradient(270deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 70%, transparent 100%)",
          }}
        />
      </m.div>

      {/* Metal clip assembly */}
      <div className="flex flex-col items-center" style={{ marginTop: -1 }}>
        {/* Connection metal ring between strap and clip */}
        <div
          style={{
            width: 12,
            height: 10,
            borderRadius: "50%",
            border: "2.5px solid #bbb",
            background: "transparent",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            zIndex: 5,
          }}
        />
        
        {/* Upper clip body */}
        <div
          style={{
            width: 30,
            height: 9,
            borderRadius: "3px 3px 0 0",
            background:
              "linear-gradient(180deg, #d8d8d8 0%, #b0b0b0 40%, #888888 100%)",
            boxShadow:
              "inset 0 1.5px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.25)",
            marginTop: -2,
          }}
        />
        {/* Clip slot */}
        <div
          style={{
            width: 30,
            height: 14,
            borderRadius: "0 0 4px 4px",
            background:
              "linear-gradient(180deg, #c0c0c0 0%, #989898 50%, #787878 100%)",
            boxShadow:
              "0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1.5px 0 rgba(0,0,0,0.3)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Slot cutout */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 12,
              height: 6,
              borderRadius: 2,
              background: "rgba(0,0,0,0.5)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
            }}
          />
        </div>
        {/* Lower gripping tab bridging to the card */}
        <div
          style={{
            width: 22,
            height: 7,
            borderRadius: "0 0 4px 4px",
            background:
              "linear-gradient(180deg, #b0b0b0 0%, #707070 100%)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.35)",
            zIndex: 1,
            marginTop: -1,
          }}
        />
      </div>
    </m.div>
  );
}
