import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface PillCardProps {
  icon?: LucideIcon;
  image?: string;
  label?: string;
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

const PillCard = ({ icon: Icon, image, label, title, description, href, className = '' }: PillCardProps) => {
  const content = (
    <>
      {/* Icon or Image */}
      {/* <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-350 group-hover:scale-105">
        {Icon && <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors duration-350" />}
        {image && <img src={image} alt={title} className="w-30 h-22 object-cover rounded-full" />}
      </div> */}
      <div className="w-20 h-28 flex items-center justify-center mb-4 transition-transform duration-350 group-hover:scale-105">
  {image ? (
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover rounded-full border"
    />
  ) : (
    Icon && (
      <Icon className="w-10 h-10 text-white/70 group-hover:text-white transition-colors duration-350" />
    )
  )}
</div>


      {/* Label */}
      {label && (
        <span className="text-[11px] font-medium uppercase tracking-[2px] text-muted-foreground group-hover:text-white/80 transition-colors duration-350 mb-2">
          {label}
        </span>
      )}

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-white text-center leading-snug mb-1 px-2">
        {title}
      </h3>

      {/* Description (optional, truncated) */}
      {description && (
        <p className="text-xs text-muted-foreground text-center leading-relaxed line-clamp-2 px-2 group-hover:text-white/70 transition-colors duration-350">
          {description}
        </p>
      )}

      {/* Arrow */}
      {/* <div className="mt-auto pt-4">
        <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-350" />
      </div> */}
    </>
  );

  const cardClasses = `
    group relative flex flex-col items-center justify-center text-center
    w-full max-w-[300px] mx-auto h-[400px]
    rounded-[999px] px-7 py-10
    bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_100%/0.08)]
    transition-all duration-[350ms] ease-out cursor-pointer
    hover:bg-primary hover:border-primary
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-[0_20px_40px_hsl(2_100%_61%/0.15)]
    ${className}
  `;

  if (href) {
    return (
      <Link to={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
};

export default PillCard;
