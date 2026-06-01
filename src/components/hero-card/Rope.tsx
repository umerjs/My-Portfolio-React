import { motion, type MotionValue, useTransform } from "framer-motion";
import { ROPE_HEIGHT, ENTRANCE_DURATION } from "./constants";

interface RopeProps {
  ropeSway: MotionValue<number>;
}

export function Rope({ ropeSway }: RopeProps) {
  const ropeSkew = useTransform(ropeSway, (v) => v * 0.3);

  return (
    <motion.div
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
      <motion.div
        className="relative overflow-hidden"
        style={{
          width: 18,
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
            borderRadius: 3,
            background:
              "linear-gradient(90deg, #1a2240 0%, #2a3a6a 20%, #1e2e5a 50%, #2a3a6a 80%, #1a2240 100%)",
          }}
        />

        {/* Woven fabric texture — crosshatch pattern */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 3,
            backgroundImage: [
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
              "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 3px)",
            ].join(", "),
          }}
        />

        {/* Gold stripe down the center (event lanyard style) */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 3,
            background: [
              "linear-gradient(90deg, transparent 25%, rgba(201,169,106,0.35) 35%, rgba(201,169,106,0.5) 45%, rgba(201,169,106,0.5) 55%, rgba(201,169,106,0.35) 65%, transparent 75%)",
            ].join(", "),
          }}
        />

        {/* Edge stitching on both sides */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 3,
            backgroundImage: [
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 5px)",
            ].join(", "),
            backgroundPosition: "left 2px center, right 2px center",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "1.5px 100%, 1.5px 100%",
          }}
        />

        {/* 3D shadow on left edge */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "30%",
            borderRadius: "3px 0 0 3px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 100%)",
          }}
        />

        {/* Subtle highlight on right edge */}
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: "20%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 100%)",
          }}
        />
      </motion.div>

      {/* Metal clip assembly */}
      <div className="flex flex-col items-center" style={{ marginTop: -1 }}>
        {/* Upper clip body */}
        <div
          style={{
            width: 26,
            height: 8,
            borderRadius: "2px 2px 0 0",
            background:
              "linear-gradient(180deg, #c8c8c8 0%, #989898 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.2)",
          }}
        />
        {/* Clip slot */}
        <div
          style={{
            width: 26,
            height: 12,
            borderRadius: "0 0 3px 3px",
            background:
              "linear-gradient(180deg, #b0b0b0 0%, #888888 50%, #707070 100%)",
            boxShadow:
              "0 3px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          {/* Slot cutout */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 10,
              height: 5,
              borderRadius: 2,
              background: "rgba(0,0,0,0.4)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
            }}
          />
        </div>
        {/* Lower gripping tab */}
        <div
          style={{
            width: 20,
            height: 5,
            borderRadius: "0 0 3px 3px",
            background:
              "linear-gradient(180deg, #989898 0%, #686868 100%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </motion.div>
  );
}
