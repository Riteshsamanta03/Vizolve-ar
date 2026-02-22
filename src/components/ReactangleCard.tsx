import { ArrowRight } from "lucide-react";

interface RectangleCardProps {
  title: string;
  description: string;
  image: string;
  link?: string; // optional link added
  className?: string;
}

const RectangleCard = ({
  title,
  description,
  image,
  link,
  className = "",
}: RectangleCardProps) => {

  const CardContent = (
    <div
      className={`
        group relative
        w-full max-w-[700px]
        rounded-2xl
        overflow-hidden
        bg-gradient-to-b from-[#111111] to-[#070707]
        border border-white/5
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-[0_0_16px_rgba(239,58,42,0.15)]
        ${link ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[320px] sm:h-[300px] md:h-[300px]
            object-cover
            transition-all duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-white/80 mb-2 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-white/60 max-w-[500px]">
          {description}
        </p>
      </div>
    </div>
  );

  // if link exists → wrap with anchor
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  // otherwise normal card
  return CardContent;
};

export default RectangleCard;
