import { ArrowRight } from "lucide-react";

interface SquareCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const SquareCard = ({
  title,
  description,
  image,
  className = "",
}: SquareCardProps) => {
  return (
    <div
      className={`
        group relative
        w-full h-[320px]
        rounded-2xl
        overflow-hidden
        bg-gradient-to-b from-[#111111] to-[#070707]
        border border-white/5
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-[0_0_30px_rgba(239,58,42,0.15)]
        ${className}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            opacity-90
            transition-all duration-700
            group-hover:scale-105
            group-hover:opacity-60
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="
          text-xl font-semibold text-white/68 mb-2
          transition-colors duration-300
          group-hover:text-primary
        ">
          {title}
        </h3>

        <p className="text-sm text-white/60">
          {description}
        </p>

        {/* <ArrowRight className="
          absolute bottom-6 right-6
          w-5 h-5
          text-white/40
          transition-all duration-300
          group-hover:text-primary
          group-hover:translate-x-1
        "/> */}
      </div>
    </div>
  );
};

export default SquareCard;
