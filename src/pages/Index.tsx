import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WhyVizolve from '@/components/WhyVizolve';
import Insights from '@/components/Insights';

import FAQ from '@/components/FAQ';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';
import PageTransition from '@/components/animations/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <TrustedBy />
          <Services />
          <Industries />
          <WhyVizolve />
          <Insights />
          <Careers />
          <FAQ />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
