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
        group relative w-full h-full
        rounded-2xl overflow-hidden
        border border-white/[0.08]

        bg-gradient-to-br
        from-[#0b0b0b]
        via-[#0a0a0a]
        to-[#050505]

        transition-all duration-300
      "
    >

      {/* ===== Glow ===== */}
      <div className="
        absolute inset-0
        opacity-100 group-hover:opacity-0
        transition-opacity duration-300
        pointer-events-none
      ">
        <div className="absolute -top-24 -left-24 w-[260px] h-[260px] bg-[#ff3131]/20 blur-[120px] rounded-full"/>
        <div className="absolute -bottom-24 -right-24 w-[260px] h-[260px] bg-[#ff3131]/20 blur-[120px] rounded-full"/>
      </div>


      {/* ===== Content ===== */}
      <div
        className={`
          relative flex items-center justify-between
          gap-4 sm:gap-6 md:gap-10

          ${isFull
            ? "p-5 sm:p-8 md:p-12"
            : "p-4 sm:p-6 md:p-7"
          }
        `}
      >

        {/* ================= TEXT ================= */}
        <div className="flex-1">

          {/* ✅ TITLE FIXED */}
          <h3
            className={`
              font-semibold text-white
              leading-snug
              group-hover:text-[#ff3131]
              transition-colors duration-300

              max-w-[190px]
              sm:max-w-none

              ${
                isFull
                  ? "text-lg sm:text-2xl md:text-3xl mb-3 sm:mb-4"
                  : "text-base sm:text-lg md:text-xl mb-2"
              }
            `}
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className={`
              text-white/60 leading-relaxed
              ${
                isFull
                  ? "text-xs sm:text-base md:text-lg mb-4 sm:mb-6"
                  : "text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
              }
            `}
          >
            {description}
          </p>

          {/* BUTTON */}
          <Link
            to={href}
            className={`
              inline-block rounded-full font-medium
              px-4 py-1.5
              sm:px-6 sm:py-2.5
              text-xs sm:text-sm

              bg-white/80 text-black
              transition-all duration-300

              group-hover:bg-[#ff3131]
              group-hover:text-white
            `}
          >
            Explore Service
          </Link>

        </div>


        {/* ================= IMAGE ================= */}
        <div
          className={`
            flex-shrink-0 rounded-xl overflow-hidden

            ${
              isFull
                ? "w-[120px] sm:w-[260px] md:w-[360px] lg:w-[400px]"
                : "w-[90px] sm:w-[150px] md:w-[200px]"
            }

            aspect-[16/10]
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