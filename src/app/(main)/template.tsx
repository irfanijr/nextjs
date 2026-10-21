"use client";

import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

function Template({ children }: TemplateProps) {
  return <div className="animate-fade-slide">{children}</div>;
}

export default Template;
