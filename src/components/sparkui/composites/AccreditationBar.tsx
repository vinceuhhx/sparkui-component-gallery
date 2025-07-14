"use client"

import * as React from "react"
import { Typography } from "../Typography"
import { Grid, GridCol } from "../Grid"

export interface AccreditationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  logos?: Array<{
    src: string
    alt: string
    name: string
  }>
}

export const AccreditationBar = React.forwardRef<
  HTMLDivElement,
  AccreditationBarProps
>(
  (
    {
      title = "Accreditations & Recognitions",
      subtitle = "SD Worx is an international recognized organisation always striving to offer the best service to our customers",
      logos = [
        { src: "/placeholder.svg", alt: "Gartner", name: "Gartner" },
        { src: "/placeholder.svg", alt: "Certification", name: "ISAE 3402" },
        { src: "/placeholder.svg", alt: "ISAE 3402", name: "ISAE 3402" },
        { src: "/placeholder.svg", alt: "NelsonHall", name: "NelsonHall" },
        { src: "/placeholder.svg", alt: "CAF", name: "CAF" },
        { src: "/placeholder.svg", alt: "ISO 27001", name: "ISO 27001" }
      ],
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`py-6 ${className || ''}`}
        style={{
          backgroundColor: "var(--ig-background-page-clear)",
          color: "var(--ig-text-bold)"
        }}
        {...props}
      >
        <div className="ig-container">
          {/* Header Section */}
          <div 
            className="mb-6"
            style={{ textAlign: "center" }}
          >
            <Typography 
              level={2} 
              weight="bold" 
              color="bold"
              className="mb-3"
            >
              {title}
            </Typography>
            <Typography 
              level={4} 
              weight="regular" 
              color="medium"
              style={{ 
                maxWidth: "600px", 
                margin: "0 auto" 
              }}
            >
              {subtitle}
            </Typography>
          </div>

          {/* Logos Grid */}
          <Grid>
            {logos.slice(0, 6).map((logo, index) => (
              <GridCol 
                key={index}
                span={2}
                className="position-relative"
              >
                <div
                  style={{
                    padding: "var(--ig-size-200)",
                    backgroundColor: "var(--ig-background-surface-on-clear-subtle)",
                    border: "1px solid var(--ig-border-soft)",
                    borderRadius: "var(--ig-border-radius)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80px",
                    transition: "all var(--ig-transition-duration) ease"
                  }}
                  className="interactive-highlight"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "60px",
                      objectFit: "contain",
                      filter: "var(--ig-opacity-disabled)"
                    }}
                  />
                </div>
              </GridCol>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
)

AccreditationBar.displayName = "AccreditationBar"