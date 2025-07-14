"use client"

import * as React from "react"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "reverse" | "vertical" | "bounce"
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  gradient?: boolean
  children: React.ReactNode
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      variant = "default",
      speed = "normal",
      pauseOnHover = false,
      gradient = false,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return "60s"
        case "fast":
          return "20s"
        default:
          return "40s"
      }
    }

    const getDirection = () => {
      switch (variant) {
        case "reverse":
          return "reverse"
        case "vertical":
          return "normal"
        case "bounce":
          return "alternate"
        default:
          return "normal"
      }
    }

    const isVertical = variant === "vertical"

    const marqueeStyles: React.CSSProperties = {
      display: "flex",
      minWidth: "100%",
      justifyContent: "space-around",
      ...(isVertical ? {
        flexDirection: "column",
        minHeight: "100%",
      } : {
        flexDirection: "row",
      }),
      animation: `marquee${isVertical ? 'Vertical' : ''} ${getSpeed()} linear infinite ${getDirection()}`,
    }

    const containerStyles: React.CSSProperties = {
      display: "flex",
      overflow: "hidden",
      userSelect: "none",
      position: "relative",
      ...(isVertical ? {
        flexDirection: "column",
        height: "400px",
      } : {
        flexDirection: "row",
        width: "100%",
      }),
      ...(gradient && {
        maskImage: isVertical 
          ? "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)"
          : "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage: isVertical 
          ? "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)"
          : "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }),
      ...(pauseOnHover && {
        ":hover > *": {
          animationPlayState: "paused"
        }
      }),
      ...style,
    }

    // Add CSS keyframes
    React.useEffect(() => {
      if (typeof document !== 'undefined') {
        const style = document.createElement('style')
        style.textContent = `
          @keyframes marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-100%); }
          }
          @keyframes marqueeVertical {
            from { transform: translateY(0%); }
            to { transform: translateY(-100%); }
          }
          .marquee-container:hover .marquee-content {
            animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
          }
        `
        document.head.appendChild(style)
        return () => {
          if (document.head.contains(style)) {
            document.head.removeChild(style)
          }
        }
      }
    }, [pauseOnHover])

    return (
      <div
        ref={ref}
        className={`marquee-container ${className || ''}`}
        style={containerStyles}
        {...props}
      >
        <div 
          className="marquee-content"
          style={marqueeStyles}
        >
          {children}
        </div>
        <div 
          className="marquee-content"
          style={marqueeStyles}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    )
  },
)

Marquee.displayName = "Marquee"

export { Marquee }