import React, { useRef, useId, useEffect } from 'react';

interface LiquidHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
}

export function LiquidHeading({ 
  children, 
  as = 'h2', 
  className = '' 
}: LiquidHeadingProps) {
  const filterId = useId().replace(/:/g, ''); // Ensure safe ID for SVG
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  
  const animationRef = useRef<number>(0);
  const isHovering = useRef(false);
  const startTime = useRef<number>(0);

  // Animation constants
  const DURATION = 800; // ms
  const PEAK_FREQUENCY = 0.035;
  const PEAK_SCALE = 15;

  const triggerAnimation = (x: number, y: number) => {
    if (turbulenceRef.current) {
      turbulenceRef.current.setAttribute('seed', Math.floor(x + y).toString());
    }
    startTime.current = performance.now();
    if (!animationRef.current) {
      animate(performance.now());
    }
  };

  const animate = (time: number) => {
    const elapsed = time - startTime.current;
    
    if (elapsed < DURATION) {
      const progress = Math.min(elapsed / DURATION, 1);
      
      // Calculate envelope: fast rise (0 to 0.2), slow fall (0.2 to 1.0)
      let intensity = 0;
      if (progress < 0.2) {
        intensity = progress / 0.2;
      } else {
        intensity = 1 - (progress - 0.2) / 0.8;
      }
      
      // Apply easing
      const easeIntensity = intensity * (2 - intensity); // simple ease-out

      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute('baseFrequency', (PEAK_FREQUENCY * easeIntensity).toString());
      }
      if (displacementRef.current) {
        displacementRef.current.setAttribute('scale', (PEAK_SCALE * easeIntensity).toString());
      }

      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (turbulenceRef.current) turbulenceRef.current.setAttribute('baseFrequency', '0');
      if (displacementRef.current) displacementRef.current.setAttribute('scale', '0');
      animationRef.current = 0;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    isHovering.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    triggerAnimation(x, y);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Only re-trigger if not animating so we don't restart constantly
    if (isHovering.current && !animationRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      triggerAnimation(x, y);
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const Component = as as React.ElementType;

  return (
    <>
      <Component
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ filter: `url(#${filterId})` }}
      >
        {children}
      </Component>
      
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0"
            numOctaves="1"
            result="turbulence"
          />
          <feDisplacementMap
            ref={displacementRef}
            in="SourceGraphic"
            in2="turbulence"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
}
