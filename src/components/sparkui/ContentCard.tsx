
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  description?: string;
  mediaSlot?: React.ReactNode;
  buttonSlot?: React.ReactNode;
  variant?: "default" | "reverse" | "wide";
  imageClassName?: string;
  children?: React.ReactNode;
}

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      className,
      title,
      description,
      mediaSlot,
      buttonSlot,
      variant = "default",
      imageClassName,
      children,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      "content-block-card",
      variant === "reverse" && "content-block-card--reverse",
      variant === "wide" && "content-block-card--wide",
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
            <h3 className="content-block-card__title">{title}</h3>
          )}
          
          {description && (
            <p className="content-block-card__description">{description}</p>
          )}
          
          {children}
          
          {buttonSlot && (
            <div className="content-block-card__button">
              {buttonSlot}
            </div>
          )}
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
        <h2 className="content-block-container__title">{title}</h2>
      )}
      <div className={cn("content-block-container__grid", className)}>
        {children}
      </div>
    </div>
  )
);

ContentCardContainer.displayName = "ContentCardContainer";
