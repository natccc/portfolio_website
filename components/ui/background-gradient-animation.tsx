"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/theme-context";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "bg-gray-50",
  gradientBackgroundEnd = "bg-gray-50",
  firstColor = "210, 180, 255", // Soft pastel lavender
  secondColor = "255, 228, 225", // Soft pastel pink
  thirdColor = "230, 230, 255", // Soft pastel blue
  fourthColor = "255, 245, 230", // Soft pastel peach
  fifthColor = "240, 240, 240", // Very light pastel grey
  pointerColor = "220, 204, 255", // Soft pastel purple

  // firstColor = "189, 228, 255", // Pastel blue
  // secondColor = "255, 204, 229", // Pastel pink
  // thirdColor = "204, 255, 255", // Pastel cyan
  // fourthColor = "255, 204, 204", // Pastel coral/red
  // fifthColor = "255, 255, 204", // Pastel yellow
  // pointerColor = "230, 204, 255", // Pastel lavender

  // firstColor = "173, 216, 230", // Pastel blue
  // secondColor = "255, 182, 193", // Pastel pink
  // thirdColor = "176, 224, 230", // Pastel cyan
  // fourthColor = "255, 160, 122", // Pastel coral
  // fifthColor = "250, 250, 210", // Pastel yellow
  // pointerColor = "216, 191, 216", // Pastel lavender



  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

const {theme} = useTheme()

   useEffect(() => {
     // Set colors for dark or light mode
    // document.body.style.setProperty(
    //   "--gradient-background-start",
    //   theme === "dark" ? "#1a1a1a" : gradientBackgroundStart // Dark background for dark mode
    // );
    // document.body.style.setProperty(
    //   "--gradient-background-end",
    //   theme === "dark" ? "#333333" : gradientBackgroundEnd // Darker background for dark mode
    // );
     document.body.style.setProperty(
       "--first-color",
       theme==='dark' ? "110, 80, 140" : firstColor // Darker purple for dark mode
     );
     document.body.style.setProperty(
       "--second-color",
       theme==='dark' ? "150, 60, 100" : secondColor // Darker pink for dark mode
     );
     document.body.style.setProperty(
       "--third-color",
       theme==='dark' ? "90, 90, 120" : thirdColor // Darker blue for dark mode
     );
     document.body.style.setProperty(
       "--fourth-color",
       theme==='dark' ? "120, 50, 50" : fourthColor // Darker peach for dark mode
     );
     document.body.style.setProperty(
       "--fifth-color",
       theme==='dark' ? "100, 100, 100" : fifthColor // Darker grey for dark mode
     );
     document.body.style.setProperty(
       "--pointer-color",
       theme==='dark' ? "180, 160, 255" : pointerColor // Pointer color for dark mode
     );
     document.body.style.setProperty("--size", size);
     document.body.style.setProperty("--blending-value", blendingValue);
   }, [
     theme==='dark',
     gradientBackgroundStart,
     gradientBackgroundEnd,
     firstColor,
     secondColor,
     thirdColor,
     fourthColor,
     fifthColor,
     pointerColor,
     size,
     blendingValue,
   ]);
  
  
  




  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
