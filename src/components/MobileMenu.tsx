import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Highlights", href: "/#insights" },
  { label: "About", href: "/about", isRoute: true },
  { label: "Careers", href: "/careers", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const navigate = useNavigate();

  /* ===== Scroll Lock ===== */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [open]);

  return createPortal(
    <>
      {/* ===== Overlay ===== */}
      <div
        className={`
          fixed inset-0 z-[998]
          bg-black/50 backdrop-blur-xl
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* ===== Drawer ===== */}
      <div
        className={`
          fixed top-0 right-0
          h-full
          w-[75%] max-w-[320px]
          z-[999]

          bg-gradient-to-br
          from-black via-[#050505] to-black

          backdrop-blur-[45px]
          border-l border-white/10
          shadow-[-10px_0_40px_rgba(0,0,0,0.7)]

          flex flex-col
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* ===== RED GLOW ===== */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-[420px] h-[420px] bg-[#ff3131]/25 blur-[160px] rounded-full"/>
          <div className="absolute bottom-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#ff3131]/15 blur-[140px] rounded-full"/>
        </div>

        {/* ===== Header ===== */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Logo />

          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-white hover:text-[#ff3131] transition" />
          </button>
        </div>

        {/* ===== Navigation ===== */}
        <nav className="flex flex-col gap-7 px-6 pt-10 text-lg">

          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-white/80
                  hover:text-[#ff3131]
                  transition-all duration-300
                "
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-white/80
                  hover:text-[#ff3131]
                  transition-all duration-300
                "
              >
                {item.label}
              </a>
            )
          )}

        </nav>

        {/* ===== CTA ===== */}
        <div className="mt-auto p-6">
          <Button
            className="
              w-full
              bg-[#ff3131]
              hover:bg-[#ff4a4a]
              text-white
              rounded-full
              py-6
              text-base
              font-medium
              transition-all duration-300
              hover:scale-[1.02]
              shadow-lg shadow-[#ff3131]/30
            "
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
          >
            Talk to an Expert
          </Button>
        </div>

      </div>
    </>,
    document.body
  );
};

export default MobileMenu;