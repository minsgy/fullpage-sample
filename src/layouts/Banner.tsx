interface BannerProps {
  children: string;
  bgColor?: string;
}

export const Banner = ({ children, bgColor }: BannerProps) => {
  return (
    <section
      className="bg-slate-600 snap-start h-screen w-screen flex items-center justify-center text-8xl"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </section>
  );
};
