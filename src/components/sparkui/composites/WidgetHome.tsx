"use client"

import * as React from "react"

export interface WidgetHomeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "stats" | "feature" | "testimonial" | "pricing"
  size?: "sm" | "md" | "lg"
  title?: string
  description?: string
  value?: string | number
  icon?: React.ReactNode
  action?: React.ReactNode
  image?: string
}

const WidgetHome = React.forwardRef<HTMLDivElement, WidgetHomeProps>(
  (
    {
      variant = "card",
      size = "md",
      title,
      description,
      value,
      icon,
      action,
      image,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const getSizeStyles = () => {
      switch (size) {
        case "sm":
          return {
            padding: "16px",
            minHeight: "120px",
          }
        case "lg":
          return {
            padding: "32px",
            minHeight: "200px",
          }
        default:
          return {
            padding: "24px",
            minHeight: "160px",
          }
      }
    }

    const getVariantStyles = () => {
      const baseStyles = {
        background: "var(--ig-background-surface-on-clear-subtle)",
        border: "1px solid var(--ig-border-soft)",
        borderRadius: "var(--ig-border-radius-large)",
        transition: "all var(--ig-transition-duration) ease",
        ...getSizeStyles(),
      }

      switch (variant) {
        case "stats":
          return {
            ...baseStyles,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center" as const,
            background: "var(--ig-background-primary-subtle)",
            borderColor: "var(--ig-border-primary-soft)",
          }
        case "feature":
          return {
            ...baseStyles,
            display: "flex",
            flexDirection: "column" as const,
            gap: "16px",
            background: "var(--ig-background-surface-on-clear-soft)",
            cursor: "pointer",
            ":hover": {
              background: "var(--ig-background-surface-on-clear-subtle)",
              transform: "translateY(-2px)",
              boxShadow: "var(--ig-elevation-level-2)",
            }
          }
        case "testimonial":
          return {
            ...baseStyles,
            background: "var(--ig-background-secondary-subtle)",
            borderColor: "var(--ig-border-secondary-soft)",
            fontStyle: "italic",
          }
        case "pricing":
          return {
            ...baseStyles,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            textAlign: "center" as const,
            background: "var(--ig-background-success-subtle)",
            borderColor: "var(--ig-border-success-soft)",
          }
        default:
          return {
            ...baseStyles,
            display: "flex",
            flexDirection: "column" as const,
            gap: "12px",
          }
      }
    }

    const renderContent = () => {
      if (children) {
        return children
      }

      switch (variant) {
        case "stats":
          return (
            <>
              {icon && (
                <div style={{ 
                  marginBottom: "12px",
                  color: "var(--ig-text-primary)"
                }}>
                  {icon}
                </div>
              )}
              {value && (
                <div style={{ 
                  font: "var(--ig-typography-heading-large-bold)",
                  color: "var(--ig-text-primary)",
                  marginBottom: "8px"
                }}>
                  {value}
                </div>
              )}
              {title && (
                <h3 style={{ 
                  font: "var(--ig-typography-heading-xxsmall-medium)",
                  color: "var(--ig-text-bold)",
                  margin: 0
                }}>
                  {title}
                </h3>
              )}
              {description && (
                <p style={{ 
                  font: "var(--ig-typography-body-small-regular)",
                  color: "var(--ig-text-medium)",
                  margin: 0
                }}>
                  {description}
                </p>
              )}
            </>
          )

        case "feature":
          return (
            <>
              {icon && (
                <div style={{ 
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--ig-background-primary-soft)",
                  borderRadius: "var(--ig-border-radius-large)",
                  color: "var(--ig-text-primary)"
                }}>
                  {icon}
                </div>
              )}
              {title && (
                <h3 style={{ 
                  font: "var(--ig-typography-heading-xsmall-bold)",
                  color: "var(--ig-text-bold)",
                  margin: 0
                }}>
                  {title}
                </h3>
              )}
              {description && (
                <p style={{ 
                  font: "var(--ig-typography-body-medium-regular)",
                  color: "var(--ig-text-medium)",
                  margin: 0,
                  lineHeight: "1.6"
                }}>
                  {description}
                </p>
              )}
              {action}
            </>
          )

        case "testimonial":
          return (
            <>
              {description && (
                <blockquote style={{ 
                  font: "var(--ig-typography-body-medium-regular)",
                  color: "var(--ig-text-medium)",
                  margin: "0 0 16px 0",
                  lineHeight: "1.6"
                }}>
                  "{description}"
                </blockquote>
              )}
              {title && (
                <cite style={{ 
                  font: "var(--ig-typography-body-small-medium)",
                  color: "var(--ig-text-bold)",
                  fontStyle: "normal"
                }}>
                  — {title}
                </cite>
              )}
            </>
          )

        case "pricing":
          return (
            <>
              {title && (
                <h3 style={{ 
                  font: "var(--ig-typography-heading-xsmall-bold)",
                  color: "var(--ig-text-bold)",
                  margin: "0 0 8px 0"
                }}>
                  {title}
                </h3>
              )}
              {value && (
                <div style={{ 
                  font: "var(--ig-typography-heading-medium-bold)",
                  color: "var(--ig-text-success)",
                  margin: "0 0 16px 0"
                }}>
                  {value}
                </div>
              )}
              {description && (
                <p style={{ 
                  font: "var(--ig-typography-body-small-regular)",
                  color: "var(--ig-text-medium)",
                  margin: "0 0 20px 0",
                  lineHeight: "1.5"
                }}>
                  {description}
                </p>
              )}
              {action}
            </>
          )

        default:
          return (
            <>
              {image && (
                <img 
                  src={image} 
                  alt={title || "Widget image"}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "var(--ig-border-radius)",
                    marginBottom: "12px"
                  }}
                />
              )}
              {icon && (
                <div style={{ 
                  marginBottom: "12px",
                  color: "var(--ig-text-primary)"
                }}>
                  {icon}
                </div>
              )}
              {title && (
                <h3 style={{ 
                  font: "var(--ig-typography-heading-xxsmall-bold)",
                  color: "var(--ig-text-bold)",
                  margin: 0
                }}>
                  {title}
                </h3>
              )}
              {description && (
                <p style={{ 
                  font: "var(--ig-typography-body-small-regular)",
                  color: "var(--ig-text-medium)",
                  margin: "8px 0 0 0",
                  lineHeight: "1.5"
                }}>
                  {description}
                </p>
              )}
              {action && (
                <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                  {action}
                </div>
              )}
            </>
          )
      }
    }

    return (
      <div
        ref={ref}
        className={className}
        style={{
          ...getVariantStyles(),
          ...style,
        }}
        {...props}
      >
        {renderContent()}
      </div>
    )
  },
)

WidgetHome.displayName = "WidgetHome"

export { WidgetHome }