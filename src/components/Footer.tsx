import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Youtube,
  ArrowUpRight,
  User2,
} from "lucide-react";

import { Link } from "react-router-dom";
import footerLogo from "@/assets/vizolve-logo-footer.webp";
import AnimatedSection from "./animations/AnimatedSection";
import AnimatedItem from "./animations/AnimatedItem";
import footerbg from "@/assets/footerbg.png";

/* ----------------------------------
   Social Links
-----------------------------------*/
const socialLinks = [
  {
    icon: Facebook,
    link: "https://facebook.com/",
  },
   {
    icon: Instagram,
    link: "https://instagram.com/",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/company/vizolve",
  },
  {
    icon: X,
    link: "https://twitter.com/",
  },
 
  // {
  //   icon: whatsapp,
  //   link: "https://youtube.com/",
  // },
];

/* ----------------------------------
   Footer Links
-----------------------------------*/
const footerLinks = {
  services: [
    { label: "Website Development", href: "/services/development" },
    { label: "Mobile App Development", href: "/services/development" },
    { label: "AI Automation", href: "/#services" },
    { label: "Custom AI Agents", href: "/#services" },
    { label: "Enterprise Solutions", href: "/#industries" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Leadership", href: "/about" },
    { label: "Careers", href: "/careers", isRoute: true },
    { label: "Partnerships", href: "*" },
    { label: "Press Releases", href: "*" },
  ],
  quickContact: [
    { label: "Get in touch", href: "/contact", isRoute: true },
    { label: "Explore careers", href: "/careers", isRoute: true },
    { label: "Learn about Vizolve", href: "/about" },
  ],
};

const Footer = () => {
  return (
    <footer id="contact" className="relative text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* ================= CTA ================= */}
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-6">

            <AnimatedItem>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-transparent stroke-text">
                Seeking Help? Let’s Talk
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <Link to="/contact" className="relative group">
                <div className="relative w-24 h-24 cursor-pointer">

                  {/* Rotating Text */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        />
                      </defs>

                      <text className="fill-white/70 text-[10px] uppercase tracking-[0.15em]">
                        <textPath href="#circlePath">
                          • Get In Touch • Get In Touch •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Center Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                </div>
              </Link>
            </AnimatedItem>

          </div>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-white/20" />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="section-container py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Logo Section */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-block mb-6">
              <img
                src={footerLogo}
                alt="Vizolve"
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              Enterprise-grade technology services including website and
              mobile development, AI automation, and custom AI agents.
              Turning vision into solutions.
            </p>

            {/* ✅ Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:shadow-[0_0_12px_rgba(255,59,59,0.4)] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Services */}
          <FooterColumn title="Services" links={footerLinks.services} />

          {/* Company */}
          <FooterColumn title="Company" links={footerLinks.company} />

          {/* Quick Contact */}
          <FooterColumn title="Quick Contact" links={footerLinks.quickContact} />

        </div>
      </div>

      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-white/20" />
      </div>

      {/* Bottom Bar */}
      <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/50">
          © 2026 Vizolve. All rights reserved.
        </p>

        <div className="flex gap-6 text-xs text-white/50">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>

    </footer>
  );
};

/* ----------------------------------
   Reusable Footer Column
-----------------------------------*/
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">
      {title}
    </h3>

    <nav className="space-y-3">
      {links.map((link, index) =>
        link.isRoute ? (
          <Link
            key={index}
            to={link.href}
            className="block text-sm text-white/60 hover:text-white"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={index}
            href={link.href}
            className="block text-sm text-white/60 hover:text-white"
          >
            {link.label}
          </a>
        )
      )}
    </nav>
  </div>
);

export default Footer;