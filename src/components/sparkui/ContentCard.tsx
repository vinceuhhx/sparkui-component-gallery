import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import { ArrowRight } from "lucide-react";
import "./ContentCard.css";

export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  description?: string;
  mediaSlot?: React.ReactNode;
  buttonSlot?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  imageClassName?: string;
  children?: React.ReactNode;
  background?: "white" | "grey";
}

// Content Card Button Component
interface ContentCardButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const ContentCardButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ContentCardButtonProps>(
  ({ children, href, onClick, icon = <ArrowRight size={16} /> }, ref) => {
    const className = "content-card-button";
    
    if (href) {
      return (
        <a 
          ref={ref as React.Ref<HTMLAnchorElement>} 
          href={href} 
          className={className}
        >
          {children}
          <span className="content-card-button__icon">{icon}</span>
        </a>
      );
    }
    
    return (
      <button 
        ref={ref as React.Ref<HTMLButtonElement>} 
        onClick={onClick} 
        className={className}
      >
        {children}
        <span className="content-card-button__icon">{icon}</span>
      </button>
    );
  }
);
ContentCardButton.displayName = "ContentCardButton";

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      className,
      title,
      description,
      mediaSlot,
      buttonSlot,
      buttonText,
      buttonHref,
      onButtonClick,
      imageClassName,
      children,
      background = "white",
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      "content-block-card", 
      `content-block-card--${background}`,
      className
    );

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {mediaSlot && (
          <div className={cn("content-block-card__image-container", imageClassName)}>
            {mediaSlot}
          </div>
        )}
        
        <div className="content-block-card__content">
          {title && (
            <Typography level={5} weight="bold" className="content-block-card__title">
              {title}
            </Typography>
          )}
          
          {description && (
            <p className="content-block-card__description">{description}</p>
          )}
          
          {children}
          
          <div className="content-block-card__button">
            {buttonSlot || (buttonText && (
              <ContentCardButton 
                href={buttonHref} 
                onClick={onButtonClick}
              >
                {buttonText}
              </ContentCardButton>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ContentCard.displayName = "ContentCard";

export interface ContentCardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
}

export const ContentCardContainer = React.forwardRef<HTMLDivElement, ContentCardContainerProps>(
  ({ className, title, children, ...props }, ref) => (
    <div ref={ref} className="content-block-container" {...props}>
      {title && (
        <Typography level={2} weight="bold" className="content-block-container__title">
          {title}
        </Typography>
      )}
      <div className={cn("content-block-container__grid", className)}>
        {children}
      </div>
    </div>
  )
);

ContentCardContainer.displayName = "ContentCardContainer";
