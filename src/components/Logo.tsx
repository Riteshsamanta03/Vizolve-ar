import logoLight from '@/assets/vizolve-logo.webp';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoLight}
        alt="Vizolve - turning vision into solutions"
        className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
