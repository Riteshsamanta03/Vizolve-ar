import { Link } from "react-router-dom";


interface PremiumFeatureCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  variant?: "full" | "half";
}

const PremiumFeatureCard = ({
  title,
  description,
  image,
  href = "#",
  variant = "half",
}: PremiumFeatureCardProps) => {

  const isFull = variant === "full";

  return (
    <div
      className="
        group relative w-full
        rounded-2xl
        overflow-hidden

        bg-gradient-to-br
        from-[#0b0b0b]
        via-[#0a0a0a]
        to-[#050505]

        hover:bg-[#000000]

        border border-white/[0.08]

        transition-all duration-300
      "
    >

      {/* Glow */}
      <div className="
        absolute inset-0
        opacity-100 group-hover:opacity-0
        transition-opacity duration-300
        pointer-events-none
      ">
        <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#ff3131]/20 blur-[120px] rounded-full"/>
        <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[#ff3131]/20 blur-[120px] rounded-full"/>
      </div>


      {/* Content */}
      <div className={`
        relative flex items-center justify-between
        ${isFull ? "p-8 md:p-12" : "p-5 md:p-7"}
        gap-6 md:gap-10
      `}>

        {/* TEXT */}
        <div className="flex-1">

          {/* TITLE */}
          <h3
            className={`
              font-semibold
              ${isFull ? "text-2xl md:text-3xl mb-4" : "text-lg md:text-xl mb-2"}
              text-white
              group-hover:text-[#ff3131]
              transition-colors duration-300
            `}
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className={`
              text-white/60
              ${isFull ? "text-base md:text-lg mb-6" : "text-sm md:text-base mb-4"}
            `}
          >
            {description}
          </p>


          {/* BUTTON */}
          <Link
  to={href}
  className={`
    inline-block
    rounded-full
    font-medium

    ${isFull
      ? "px-6 py-2.5 text-sm"
      : "px-4 py-1.5 text-xs"
    }

    bg-white/75
    text-black

    group-hover:bg-[#ff3131]
    group-hover:text-white

    transition-all duration-300
  `}
>
  Explore Service
</Link>

          {/* <a
            href={href}
            className={`
              inline-block
              rounded-full
              font-medium

              ${isFull
                ? "px-6 py-2.5 text-sm"
                : "px-4 py-1.5 text-xs"
              }

              bg-white/50
              text-black

              group-hover:bg-[#ff3131]
              group-hover:text-white

              transition-all duration-300
            `}
          >
            Explore Service
          </a> */}

        </div>


        {/* IMAGE */}
        <div
          className={`
            flex-shrink-0 rounded-xl overflow-hidden

            ${isFull
              ? "w-[200px] sm:w-[280px] md:w-[360px] lg:w-[400px] aspect-[16/10]"
              : "w-[140px] sm:w-[170px] md:w-[200px] aspect-[16/10]"
            }
          `}
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>

      </div>

    </div>
  );
};

export default PremiumFeatureCard;
