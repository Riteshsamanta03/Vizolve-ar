import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  User,
} from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ✅ Import Images (Production Safe) */
import arghyaImg from "@/assets/arghya.png";
import riteshImg from "@/assets/ritesh.png";

/* ----------------------------------
   Social Icon Mapping
-----------------------------------*/
const socialIcons = {
  portfolio: User,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
};

/* ----------------------------------
   Leaders Data
-----------------------------------*/
const leaders = [
  {
    name: "ARGHYA GHOSH",
    role: "Founder & CEO",
    image: arghyaImg,
    bio: "I am a passionate innovator who believe in turning ideas into impactful solutions. Our leadership focuses on creativity, technology, and strategic thinking to help businesses grow in a rapidly evolving digital world. We don’t just follow trends — we create solutions that drive progress.",
    socials: {
      portfolio: "https://arghyaghosh.online/",
      github: "https://github.com/Arghya-Ghosh75",
      linkedin: "https://www.linkedin.com/in/arghya-ghosh-41271a24b",
      instagram:
        "https://www.instagram.com/dilwale_krish?igsh=Z2E0Nnl3MzN6bTI=",
    },
  },
  {
    name: "RITESH SAMANTA",
    role: "Founder & CEO",
    image: riteshImg,
    bio: "I believe that technology is not just about building solutions — it’s about solving real business challenges. We lead with innovation, collaboration, and a commitment to delivering meaningful digital transformation. Guided by vision, committed to building meaningful technology.",
    socials: {
      portfolio: "https://riteshsamanta.vercel.app/",
      github: "https://github.com/Riteshsamanta03",
      linkedin: "https://www.linkedin.com/in/ritesh-samanta/",
      instagram:
        "https://www.instagram.com/iamritesh_03?igsh=MXF4amg2enc4MDVvZQ==",
    },
  },
];

/* ----------------------------------
   Component
-----------------------------------*/
const LeadershipSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      <div ref={ref} className="opacity-0">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">
            LEADERSHIP
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Meet The Visionaries{" "}
            <span className="heading-highlight">
              Behind Vizolve
            </span>
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Section */}
              <div className="relative mb-8">

                {/* Glow */}
                <div className="absolute -inset-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 blur-md" />

                {/* Accent Ring */}
                <div className="absolute -inset-1.5 rounded-full border-2 border-transparent border-t-primary border-r-primary group-hover:rotate-180 transition-transform duration-700" />

                {/* Image */}
                <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Dot Accent */}
                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,59,59,0.6)]" />
              </div>

              {/* Content */}
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                {leader.role}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                {leader.name}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                {leader.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {leader.socials &&
                  Object.entries(leader.socials).map(([key, link]) => {
                    const Icon = socialIcons[key];
                    if (!Icon) return null;

                    return (
                      <a
                        key={key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_12px_rgba(255,59,59,0.3)] transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;