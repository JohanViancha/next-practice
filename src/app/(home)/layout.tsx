"use client";

import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Home layout");
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}
