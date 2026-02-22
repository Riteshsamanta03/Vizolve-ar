import teamOffice1 from "@/assets/team-office-1.jpg";
import teamOffice2 from "@/assets/team-office-2.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StorySection = () => {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      {/* Top row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Text */}
        <div ref={ref1} className="opacity-0">
          <div className="section-label mb-6">OUR STORY</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            <span className="border-l-4 border-primary pl-4 inline-block">
              Turning Vision into Solutions , Reliable Strategies{" "}
              <span className="heading-highlight">Meaningful Outcomes</span>
            </span>
          </h2>
        </div>

        {/* Right - Two small images */}
        <div ref={ref2} className="opacity-0 flex gap-4">
          <div className="card-rounded img-hover-zoom flex-1 relative">
            <img src={teamOffice1} alt="Team working" className="w-full h-48 md:h-56 object-cover rounded-2xl" />
            {/* <div className="absolute top-3 right-3 flex gap-2">
              <span className="bg-muted/80 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full">Tech Blog</span>
              <span className="bg-muted/80 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full">Trends ▸</span>
            </div> */}
          </div>
          <div className="card-rounded img-hover-zoom flex-1 relative">
            <img src={teamOffice2} alt="Team collaborating" className="w-full h-48 md:h-56 object-cover rounded-2xl" />
            <div className="absolute top-3 right-3 flex gap-2">
              {/* <span className="bg-muted/80 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full">Tech Blog</span>
              <span className="bg-muted/80 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full">Trends</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
        Left - Large image
        <div className="card-rounded img-hover-zoom">
          <img src={teamCollab} alt="Team collaboration" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
        </div>

        Right - Paragraph
        <div className="flex items-center">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam. Molestie
            nunc non blandit massa enim nec. Felis bibendum ut tristique et egestas quis ipsum
            suspendisse ultrices. Eros in cursus turpis massa tincidunt dui.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default StorySection;
