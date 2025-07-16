import * as React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ig-grid", className)}
      {...props}
    />
  )
);
Grid.displayName = "Grid";

export interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanXxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  startSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  startMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  startLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  startXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  startXxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const GridCol = React.forwardRef<HTMLDivElement, GridColProps>(
  ({ 
    className, 
    span, 
    spanSm, 
    spanMd, 
    spanLg, 
    spanXl, 
    spanXxl,
    start,
    startSm,
    startMd,
    startLg,
    startXl,
    startXxl,
    ...props 
  }, ref) => {
    const classes = [
      span && `ig-col-${span}`,
      spanSm && `ig-col-sm-${spanSm}`,
      spanMd && `ig-col-md-${spanMd}`,
      spanLg && `ig-col-lg-${spanLg}`,
      spanXl && `ig-col-xl-${spanXl}`,
      spanXxl && `ig-col-xxl-${spanXxl}`,
      start && `ig-col-start-${start}`,
      startSm && `ig-col-sm-start-${startSm}`,
      startMd && `ig-col-md-start-${startMd}`,
      startLg && `ig-col-lg-start-${startLg}`,
      startXl && `ig-col-xl-start-${startXl}`,
      startXxl && `ig-col-xxl-start-${startXxl}`,
      className,
    ].filter(Boolean).join(" ");

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);
GridCol.displayName = "GridCol";