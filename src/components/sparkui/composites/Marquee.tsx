"use client"

import * as React from "react"
import { Typography } from "../Typography"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "reverse" | "vertical" | "bounce"
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  gradient?: boolean
  title?: string
  description?: string
  children: React.ReactNode
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      variant = "default",
      speed = "normal",
      pauseOnHover = false,
      gradient = false,
      title,
      description,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const childrenArray = React.Children.toArray(children)
    const itemCount = childrenArray.length
    const shouldAnimate = itemCount > 6
    const displayItems = shouldAnimate ? childrenArray : childrenArray.slice(0, 6)

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
      gap: "var(--spacing-4)",
      alignItems: "center",
      ...(isVertical ? {
        flexDirection: "column",
        minHeight: "100%",
      } : {
        flexDirection: "row",
        minWidth: shouldAnimate ? "100%" : "auto",
      }),
      ...(shouldAnimate && {
        animation: `marquee${isVertical ? 'Vertical' : ''} ${getSpeed()} linear infinite ${getDirection()}`,
      }),
    }

    const containerStyles: React.CSSProperties = {
      display: "flex",
      overflow: "hidden",
      userSelect: "none",
      position: "relative",
      width: "100%",
      ...(isVertical ? {
        flexDirection: "column",
        height: "400px",
      } : {
        flexDirection: "row",
        justifyContent: shouldAnimate ? "flex-start" : "center",
      }),
      ...(gradient && shouldAnimate && {
        maskImage: isVertical 
          ? "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)"
          : "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage: isVertical 
          ? "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)"
          : "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }),
      ...style,
    }

    // Add CSS keyframes
    React.useEffect(() => {
      if (typeof document !== 'undefined' && shouldAnimate) {
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
    }, [pauseOnHover, shouldAnimate])

    return (
      <div style={{ padding: "var(--spacing-6) 0" }}>
        {(title || description) && (
          <div style={{ 
            textAlign: "center", 
            marginBottom: "var(--spacing-6)",
            color: "var(--text-default)"
          }}>
            {title && (
              <Typography level={2} weight="bold" color="default" style={{ marginBottom: "var(--spacing-2)" }}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography level={4} weight="regular" color="medium">
                {description}
              </Typography>
            )}
          </div>
        )}
        
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
            {displayItems}
          </div>
          {shouldAnimate && (
            <div 
              className="marquee-content"
              style={marqueeStyles}
              aria-hidden="true"
            >
              {displayItems}
            </div>
          )}
        </div>
      </div>
    )
  },
)

Marquee.displayName = "Marquee"

export { Marquee }