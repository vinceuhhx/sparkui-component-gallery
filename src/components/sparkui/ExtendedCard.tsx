import * as React from "react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from "./Card";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Body } from "./Body";
import "./ExtendedCard.css";

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
          <div className="ig-profile-header">
            {avatar && (
              <img 
                src={avatar} 
                alt={name}
                className="ig-avatar"
              />
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
            <div className="ig-stats">
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
          <div className="ig-feature-header">
            {icon && (
              <div className="ig-feature-icon">
                {icon}
              </div>
            )}
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
          </div>
        </CardHeader>
        <CardBody>
          {features && (
            <ul className="ig-feature-list">
              {features.map((feature, index) => (
                <li key={index} className="ig-feature-item">
                  <Typography level={5}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
        {(primaryAction || secondaryAction) && (
          <CardFooter>
            <div className="ig-feature-actions">
              {primaryAction && (
                <Button 
                  variant="filled" 
                  color="primary" 
                  onClick={primaryAction.onClick}
                  className="ig-button"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={secondaryAction.onClick}
                  className="ig-button"
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
          <div className="ig-metric-header">
            <div>
              <CardSubtitle>{title}</CardSubtitle>
              <Typography level={3} weight="bold" className="ig-metric-value">
                {value}
              </Typography>
            </div>
            {trend && (
              <div className="ig-metric-trend">
                {trend}
              </div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          {change && (
            <div className={`ig-metric-change ig-metric-change--${change.direction}`}>
              <Typography level={6} weight="medium">
                {change.direction === "up" ? "↗" : change.direction === "down" ? "↘" : "→"} {change.value}
              </Typography>
            </div>
          )}
          {description && (
            <Body size="small" className="ig-metric-description">
              {description}
            </Body>
          )}
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
          <div className="ig-content-image">
            <img src={image} alt={title} />
          </div>
        )}
        <CardHeader>
          {category && (
            <Typography level={6} weight="medium" className="ig-content-category">
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
            <div className="ig-content-tags">
              {tags.map((tag, index) => (
                <span key={index} className="ig-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardBody>
        <CardFooter>
          <div className="ig-content-footer">
            <div className="ig-content-meta">
              {author && (
                <Typography level={6} className="ig-content-author">
                  {author}
                </Typography>
              )}
              {(date || readTime) && (
                <Typography level={6} className="ig-content-details">
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