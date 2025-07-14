import * as React from "react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, type CardProps } from "./Card";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Body } from "./Body";

// Profile Card Component
export interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatar?: string;
  actions?: React.ReactNode;
  stats?: { label: string; value: string }[];
  variant?: "clear" | "subtle" | "strong";
  shadow?: boolean;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ name, title, description, avatar, actions, stats, variant = "clear", shadow = true }, ref) => {
    return (
      <Card ref={ref} variant={variant} shadow={shadow} className="ig-card--profile">
        <CardHeader>
          <div className="ig-grid ig-grid--auto-fit" style={{ gridTemplateColumns: "auto 1fr auto", gap: "var(--ig-size-150)" }}>
            {avatar && (
              <div className="ig-avatar-container">
                <img 
                  src={avatar} 
                  alt={name}
                  className="ig-avatar ig-avatar--medium"
                  style={{ 
                    width: "var(--ig-size-600)", 
                    height: "var(--ig-size-600)",
                    borderRadius: "var(--ig-border-radius-large)"
                  }}
                />
              </div>
            )}
            <div className="ig-profile-info">
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{title}</CardSubtitle>
            </div>
            {actions && (
              <div className="ig-profile-actions">
                {actions}
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <Body size="medium" className="ig-profile-description">
            {description}
          </Body>
          {stats && (
            <div className="ig-stats ig-grid ig-grid--auto-fit" style={{ gap: "var(--ig-size-200)", marginTop: "var(--ig-size-200)" }}>
              {stats.map((stat, index) => (
                <div key={index} className="ig-stat-item">
                  <Typography level={5} weight="bold" className="ig-stat-value">
                    {stat.value}
                  </Typography>
                  <Typography level={6} className="ig-stat-label">
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    );
  }
);
ProfileCard.displayName = "ProfileCard";

// Feature Card Component
export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  variant?: "clear" | "subtle" | "strong";
  shadow?: boolean;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, features, primaryAction, secondaryAction, variant = "subtle", shadow = true }, ref) => {
    return (
      <Card ref={ref} variant={variant} shadow={shadow} className="ig-card--feature">
        <CardHeader>
          <div className="ig-feature-header" style={{ textAlign: "center", padding: "var(--ig-size-200)" }}>
            {icon && (
              <div className="ig-feature-icon" style={{ marginBottom: "var(--ig-size-150)", display: "flex", justifyContent: "center" }}>
                {icon}
              </div>
            )}
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
          </div>
        </CardHeader>
        <CardBody>
          {features && (
            <ul className="ig-feature-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {features.map((feature, index) => (
                <li key={index} className="ig-feature-item" style={{ 
                  padding: "var(--ig-size-050) 0",
                  borderBottom: index < features.length - 1 ? "1px solid var(--ig-border-soft)" : "none"
                }}>
                  <Typography level={5} className="ig-feature-text">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
        {(primaryAction || secondaryAction) && (
          <CardFooter>
            <div className="ig-grid ig-grid--auto-fit" style={{ gap: "var(--ig-size-100)", width: "100%" }}>
              {primaryAction && (
                <Button 
                  variant="filled" 
                  color="primary" 
                  onClick={primaryAction.onClick}
                  style={{ flex: 1 }}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={secondaryAction.onClick}
                  style={{ flex: 1 }}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// Metric Card Component
export interface MetricCardProps {
  title: string;
  value: string;
  change?: { value: string; direction: "up" | "down" | "neutral" };
  description?: string;
  trend?: React.ReactNode;
  variant?: "clear" | "subtle" | "strong";
  shadow?: boolean;
}

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ title, value, change, description, trend, variant = "clear", shadow = true }, ref) => {
    return (
      <Card ref={ref} variant={variant} shadow={shadow} className="ig-card--metric">
        <CardHeader>
          <div className="ig-grid" style={{ gridTemplateColumns: "1fr auto", alignItems: "start" }}>
            <div>
              <CardSubtitle>{title}</CardSubtitle>
              <CardTitle style={{ fontSize: "var(--ig-font-size-heading-medium)", marginTop: "var(--ig-size-050)" }}>
                {value}
              </CardTitle>
            </div>
            {trend && (
              <div className="ig-metric-trend">
                {trend}
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <div className="ig-metric-details">
            {change && (
              <div className="ig-metric-change" style={{ marginBottom: description ? "var(--ig-size-100)" : 0 }}>
                <Typography 
                  level={6}
                  weight="medium"
                  style={{ 
                    color: change.direction === "up" ? "var(--ig-text-success)" : 
                           change.direction === "down" ? "var(--ig-text-danger)" : 
                           "var(--ig-text-medium)"
                  }}
                >
                  {change.direction === "up" ? "↗" : change.direction === "down" ? "↘" : "→"} {change.value}
                </Typography>
              </div>
            )}
            {description && (
              <Body size="small" className="ig-metric-description">
                {description}
              </Body>
            )}
          </div>
        </CardBody>
      </Card>
    );
  }
);
MetricCard.displayName = "MetricCard";

// Content Card Component
export interface ContentCardProps {
  image?: string;
  category?: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  actions?: React.ReactNode;
  variant?: "clear" | "subtle" | "strong";
  shadow?: boolean;
}

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ image, category, title, excerpt, author, date, readTime, tags, actions, variant = "clear", shadow = true }, ref) => {
    return (
      <Card ref={ref} variant={variant} shadow={shadow} className="ig-card--content">
        {image && (
          <div className="ig-content-image" style={{ 
            width: "100%", 
            height: "200px", 
            overflow: "hidden",
            borderRadius: "var(--ig-border-radius) var(--ig-border-radius) 0 0"
          }}>
            <img 
              src={image} 
              alt={title}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover"
              }}
            />
          </div>
        )}
        <CardHeader>
          {category && (
            <Typography level={6} weight="medium" className="ig-content-category" style={{ 
              color: "var(--ig-text-primary)",
              marginBottom: "var(--ig-size-050)"
            }}>
              {category.toUpperCase()}
            </Typography>
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Body size="medium" className="ig-content-excerpt">
            {excerpt}
          </Body>
          {tags && (
            <div className="ig-content-tags" style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "var(--ig-size-050)", 
              marginTop: "var(--ig-size-150)" 
            }}>
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="ig-tag"
                  style={{
                    padding: "var(--ig-size-025) var(--ig-size-100)",
                    backgroundColor: "var(--ig-background-soft)",
                    borderRadius: "var(--ig-border-radius-small)",
                    fontSize: "var(--ig-font-size-caption)"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardBody>
        <CardFooter>
          <div className="ig-grid" style={{ gridTemplateColumns: "1fr auto", alignItems: "center" }}>
            <div className="ig-content-meta">
              {author && (
                <Typography level={6} className="ig-content-author">
                  {author}
                </Typography>
              )}
              {(date || readTime) && (
                <Typography level={6} className="ig-content-details" style={{ color: "var(--ig-text-soft)" }}>
                  {date} {date && readTime && "•"} {readTime}
                </Typography>
              )}
            </div>
            {actions && (
              <div className="ig-content-actions">
                {actions}
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    );
  }
);
ContentCard.displayName = "ContentCard";