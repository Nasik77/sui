// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const cardStyles = cva(["rounded-2xl", "shadow-notification"], {
  variants: {
    variant: {
      leaderboard: "bg-gradient-to-b from-[#768AF7] to-[#97A7FF] text-white",
      default: "bg-white/90",
      white: "bg-white",
    },
    spacing: {
      sm: "p-6",
      md: "p-8",
      lg: "p-10",
    },
  },
  defaultVariants: {
    variant: "default",
    spacing: "md",
  },
});

interface CardProps extends VariantProps<typeof cardStyles> {
  children: ReactNode;
}

export function Card({ children, ...styleProps }: CardProps) {
  return <div className={cardStyles(styleProps)}>{children}</div>;
}
