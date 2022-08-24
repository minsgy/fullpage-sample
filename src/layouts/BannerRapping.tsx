import React from "react";

export const BannerRapping = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
      {children}
    </div>
  );
};
