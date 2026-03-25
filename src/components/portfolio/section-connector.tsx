"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SectionConnectorProps {
  variant?: "dots" | "line" | "chevron" | "wave";
  className?: string;
}

const SectionConnector: React.FC<SectionConnectorProps> = ({
  variant = "dots",
  className,
}) => {
  return (
    <ScrollReveal className={cn("flex justify-center py-4", className)}>
      <div className="flex flex-col items-center gap-1.5">
        {variant === "dots" && (
          <>
            <span className="bg-primary/30 h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="bg-primary/20 h-1 w-1 rounded-full" />
            <span className="bg-primary/10 h-0.5 w-0.5 rounded-full" />
          </>
        )}
        {variant === "line" && (
          <div className="from-primary/30 via-primary/10 h-16 w-px bg-linear-to-b to-transparent" />
        )}
        {variant === "chevron" && (
          <div className="text-primary/25 flex flex-col items-center gap-0.5">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              className="animate-float"
              style={{ animationDuration: "3s" }}
            >
              <path
                d="M1 1L8 7L15 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              className="animate-float opacity-50"
              style={{ animationDuration: "3s", animationDelay: "0.3s" }}
            >
              <path
                d="M1 1L6 5L11 1"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        {variant === "wave" && (
          <svg
            width="60"
            height="12"
            viewBox="0 0 60 12"
            fill="none"
            className="text-primary/15"
          >
            <path
              d="M0 6C10 6 10 2 20 2S30 6 40 6 50 2 60 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionConnector;
