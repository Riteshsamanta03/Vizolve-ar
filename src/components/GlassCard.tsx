import { ArrowRight } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  image: string;
}

const GlassCard = ({ title, description, image }: GlassCardProps) => {
  return (
    <div
      className="
        group w-full
        rounded-xl md:rounded-2xl
        bg-white/[0.03]
        backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-300
        hover:border-primary/40
        hover:shadow-[0_0_25px_rgba(239,58,42,0.12)]
        hover:-translate-y-1
        overflow-hidden
      "
    >
      {/* FLEX CONTAINER */}
      <div className="flex items-center justify-between gap-4 p-4 md:p-8">

        {/* LEFT SIDE — TEXT */}
        <div className="flex-1">

          <h3
            className="
              text-base md:text-xl font-semibold text-white
              mb-1 md:mb-3
              group-hover:text-primary
              transition-colors duration-300
            "
          >
            {title}
          </h3>

          {/* Hide description on very small screens */}
          <p className="hidden sm:block text-white/60 text-sm md:text-base">
            {description}
          </p>

          {/* <ArrowRight
            className="
              mt-2 md:mt-4
              w-4 h-4 md:w-5 md:h-5
              text-white/40
              group-hover:text-primary
              group-hover:translate-x-1
              transition-all duration-300
            "
          /> */}

        </div>

 <div
  className="
    w-[140px]
    sm:w-[160px]
    lg:w-[180px]
    xl:w-[22%]
    aspect-[4/3]
    flex-shrink-0
    rounded-xl
    overflow-hidden
  "
>
  <img
    src={image}
    alt={title}
    className="
      w-full h-full object-cover
      transition-all duration-500
      group-hover:scale-105
    "
  />
</div>



      </div>
    </div>
  );
};

export default GlassCard;
