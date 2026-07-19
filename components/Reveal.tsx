"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({ as, children, delay = 0, className, ...props }: Props<T>) {
  const reduced = useReducedMotion();
  const Component = motion.create(as ?? "div");
  return (
    <Component
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: .7, delay: delay / 1000, ease: [.2, .7, .2, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
