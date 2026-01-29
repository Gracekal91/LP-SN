"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(
                    from calc(var(--start) * 1deg),
                    hsl(0 0% 100% / 0.3) 0%,
                    hsl(0 0% 100% / 0.5) calc(100% / var(--repeating-conic-gradient-times)),
                    hsl(0 0% 100% / 0.3) calc(100% / var(--repeating-conic-gradient-times))
                  )`
                : `repeating-conic-gradient(
                    from calc(var(--start) * 1deg),
                    hsl(210 100% 55% / 0.4) 0%,
                    hsl(210 100% 65% / 0.7) calc(100% / var(--repeating-conic-gradient-times)),
                    hsl(220 100% 55% / 0.4) calc(100% / var(--repeating-conic-gradient-times))
                  )`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute -inset-px hidden rounded-[inherit] opacity-[var(--active)] transition-opacity duration-300 md:block",
          glow &&
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[var(--gradient)] after:[filter:blur(var(--blur))] after:[transform:translate(-50%,-50%)] after:[background-size:calc(100%+2*var(--spread))_calc(100%+2*var(--spread))] after:[background-position:center_center]",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
      >
        <div
          className={cn(
            "glow absolute inset-[calc(-1*var(--glowingeffect-border-width))] rounded-[inherit] border-[length:var(--glowingeffect-border-width)] border-transparent",
            "[background:padding-box_transparent,border-box_var(--gradient)]",
            "[mask:linear-gradient(transparent,transparent),conic-gradient(from_calc((var(--start)-60)*1deg),transparent_0deg,white_calc(1turn/var(--repeating-conic-gradient-times)),transparent_calc(1turn/var(--repeating-conic-gradient-times)))]",
            "[mask-composite:exclude]",
            "[mask-mode:alpha]"
          )}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
