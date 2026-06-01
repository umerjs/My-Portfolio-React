import { motion, type MotionValue, useTransform } from "framer-motion";
import { ROPE_HEIGHT, ENTRANCE_DURATION, COLORS } from "./constants";

interface RopeProps {
  ropeSway: MotionValue<number>;
}

export function Rope({ ropeSway }: RopeProps) {
  const ropeSkew = useTransform(ropeSway, (v) => v * 0.4);

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
      <div
        className="relative flex items-center justify-center"
        style={{ width: 40, height: 14 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 40,
            height: 14,
            background:
              "linear-gradient(180deg, #e8e8e8 0%, #b0b0b0 30%, #888 60%, #666 100%)",
            boxShadow:
              "0 3px 8px rgba(0,0,0,0.5), inset 0 1.5px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="absolute top-0.5 left-1/2 -translate-x-1/2 w-4 h-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>

      <div className="relative -mt-0.5" style={{ width: 18, height: 18 }}>
        <div
          className="rounded-full border-[2.5px]"
          style={{
            width: 18,
            height: 18,
            borderColor: COLORS.silver,
            background: "transparent",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 8px rgba(201,169,106,0.1)",
          }}
        />
      </div>

      <motion.div
        className="relative"
        style={{
          width: 3,
          height: ROPE_HEIGHT,
          skewX: ropeSkew,
          transformOrigin: "top center",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #111 0%, #333 30%, #444 50%, #222 70%, #111 100%)",
            boxShadow: "1px 0 4px rgba(0,0,0,0.4), 0 0 6px rgba(201,169,106,0.05)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-[1px] w-[1.5px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.1) 100%)",
          }}
        />
      </motion.div>

      <div
        className="relative -mt-0.5 flex items-center justify-center"
        style={{ width: 30, height: 16 }}
      >
        <div
          className="rounded-[4px]"
          style={{
            width: 30,
            height: 12,
            background:
              "linear-gradient(180deg, #d0d0d0 0%, #a0a0a0 40%, #888 60%, #777 100%)",
            boxShadow:
              "0 3px 6px rgba(0,0,0,0.4), inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm"
          style={{
            width: 10,
            height: 4,
            background: "rgba(0,0,0,0.4)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </motion.div>
  );
}
