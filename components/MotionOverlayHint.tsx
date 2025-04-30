"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { EyeOff } from "lucide-react";

export default function MotionOverlayHint({
  description,
  neverShowText,
}: {
  description: string;
  neverShowText: string;
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [visible, setVisible] = useState(false);
  const [showPermission, setShowPermission] = useState(false);

  useEffect(() => {
    const localShow = localStorage.getItem("showPermission");

    if (localShow !== "false") {
      setShowPermission(true);
      localStorage.setItem("showPermission", "true");

      if (isInView) {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-1", {
        "pointer-events-none": !visible,
      })}
    >
      <AnimatePresence>
        {visible && showPermission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="size-full flex flex-col items-center justify-center bg-neutral-800/60 backdrop-blur-sm text-white rounded-md"
          >
            <motion.div
              animate={{ x: ["-20px", "20px", "-20px"] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="text-4xl mb-3"
            >
              🤚
            </motion.div>
            <p className="text-sm opacity-90">{description}</p>
            <Button
              size="sm"
              onClick={() => localStorage.setItem("showPermission", "false")}
              className="absolute bottom-5 mt-4 text-blue-300 hover:text-bluesssssssssssssssssssssssss-400"
              variant="link"
            >
              <EyeOff className="mr-px" />
              {neverShowText}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
