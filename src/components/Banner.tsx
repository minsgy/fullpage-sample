import React from "react";

interface BannerProps {
  title: string;
  bgColor?: string;
}

export const Banner = ({ title, bgColor }: BannerProps) => {
  return (
    <section
      className="bg-slate-600 snap-start h-screen w-screen flex items-center justify-center text-8xl"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {title}
    </section>
  );
};
