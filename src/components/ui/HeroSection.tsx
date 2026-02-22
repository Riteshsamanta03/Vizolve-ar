import heroWaves from "@/assets/hero-waves.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
      <img
        src={heroWaves}
        alt="Abstract wave background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">About Us</h1>
        <p className="text-muted-foreground text-sm tracking-wide">
          <span className="opacity-70">Vizolve</span>
          <span className="mx-2 opacity-40">/</span>
          <span>Overview</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
