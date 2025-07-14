import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("ig-card", {
  variants: {
    variant: {
      clear: "ig-card--clear",
      subtle: "ig-card--subtle",
      strong: "ig-card--strong",
    },
    shadow: {
      true: "ig-card--shadow",
      false: "",
    },
  },
  defaultVariants: {
    variant: "clear",
    shadow: false,
  },
});

export interface CardProps extends VariantProps<typeof cardVariants>, React.HTMLAttributes<HTMLDivElement> {
  /** Use a different component for the root */
  asChild?: boolean;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { asChild = false, variant, shadow, className, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const classes = [
      cardVariants({ variant, shadow }),
      className,
    ].filter(Boolean).join(" ");

    return <Comp ref={ref} className={classes} {...props} />;
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ig-card__header", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={["ig-card__title", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={["ig-card__subtitle", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
CardSubtitle.displayName = "CardSubtitle";

export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ig-card__body", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
CardBody.displayName = "CardBody";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ig-card__footer", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";