import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Highlights", href: "/#insights" },
  { label: "About", href: "/about", isRoute: true },
  { label: "Careers", href: "/careers", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 link-underline"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 link-underline"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium px-6 py-3 rounded-[40px] transition-all duration-300 hover:scale-[1.03]"
              onClick={() => navigate("/contact")}
            >
              Talk to an Expert
            </Button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="lg:hidden p-2.5 -mr-2"
            onClick={() =>
              setIsMobileMenuOpen(true)
            }
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

        </div>
      </div>
      <MobileMenu
  open={isMobileMenuOpen}
  setOpen={setIsMobileMenuOpen}
/>
    </header>
  );
};

export default Header;