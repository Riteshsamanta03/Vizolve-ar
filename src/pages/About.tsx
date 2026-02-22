import HeroSection from "@/components/ui/HeroSection";
import StatsSection from "@/components/ui/StatsSection";
import StorySection from "@/components/ui/StorySection";
import TeamSection from "@/components/ui/TeamSection";
import TimelineSection from "@/components/ui/TimelineSection";
import ValuesSection from "@/components/ui/ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/ui/LeadershipSection";
import PageTransition from "@/components/animations/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <Header />
    <main className="bg-black text-white  ">

      {/* Hero */}
      <HeroSection />

      {/* Story */}
      <StorySection />

      {/* <StatsSection /> */}

      {/* Timeline */}
      <TimelineSection />

      {/* Values */}
      {/* <ValuesSection /> */}

      {/* Team */}
      {/* <TeamSection /> */}
       
       <LeadershipSection />
      

    </main>
    <Footer />
    </PageTransition>
  );
};

export default About;
