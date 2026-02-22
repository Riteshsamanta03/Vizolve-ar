import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/animations/PageTransition';
import AnimatedSection from '@/components/animations/AnimatedSection';
import AnimatedItem from '@/components/animations/AnimatedItem';
import { supabase } from '@/integrations/supabase/client';
import officeBg from '@/assets/office-bg.avif';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.contactNumber || !formData.message) {
      toast({ title: "All fields are required", description: "Please fill in all the fields before submitting.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;
      toast({ title: "Request submitted!", description: "We'll get back to you within 24 hours." });
      setFormData({ firstName: '', lastName: '', email: '', contactNumber: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({ title: "Something went wrong", description: "Please try again later or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
       <Header />
      <div className="min-h-screen flex flex-col bg-[#050505]">
       
        
        {/* Hero Section */}
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${officeBg})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]/95" />
          </div>
          <div className="relative z-10 section-container py-24 sm:py-32 text-center">
            <AnimatedSection>
              <AnimatedItem>
                <p className="section-label justify-center mb-4">Contact</p>
              </AnimatedItem>
              <AnimatedItem>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-[-1px]">Contact Us</h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-[#a1a1aa] mt-4">Vizolve / Connect</p>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#050505]">
          <div className="section-container">
            <AnimatedSection>
              <AnimatedItem>
                <div className="text-center mb-12 sm:mb-16">
                  <p className="section-label justify-center mb-4">Get In Touch</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white">
                    Let's Start a <span className="text-primary">Conversation</span>
                  </h2>
                </div>
              </AnimatedItem>
              
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                <AnimatedItem>
                  <div className="space-y-6 sm:space-y-8">
                    <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
                      At Vizolve, we build reliable, scalable, and intelligent digital solutions that help businesses grow. Our focus is on clean engineering, modern design, and AI-driven innovation.
                    </p>
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">What we do</h3>
                      <ul className="space-y-3">
                        {['Website Development', 'Mobile App Development', 'AI Automations', 'Custom AI Agents'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#a1a1aa]">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="/#services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group">
                      Explore our services
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </AnimatedItem>
                
                <AnimatedItem>
                  <div className="card-dark p-6 sm:p-8 lg:p-10">
                    <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6">Please note: all fields are required.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white/80 font-medium text-sm">First Name</Label>
                        <Input id="firstName" name="firstName" type="text" placeholder="Enter your first name" value={formData.firstName} onChange={handleInputChange} className="h-12 rounded-[10px] border-white/10 bg-[#0c0c0c] text-white placeholder:text-[#6b7280] focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white/80 font-medium text-sm">Last Name</Label>
                        <Input id="lastName" name="lastName" type="text" placeholder="Enter your last name" value={formData.lastName} onChange={handleInputChange} className="h-12 rounded-[10px] border-white/10 bg-[#0c0c0c] text-white placeholder:text-[#6b7280] focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/80 font-medium text-sm">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} className="h-12 rounded-[10px] border-white/10 bg-[#0c0c0c] text-white placeholder:text-[#6b7280] focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-white/80 font-medium text-sm">Contact Number</Label>
                        <Input id="contactNumber" name="contactNumber" type="tel" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleInputChange} className="h-12 rounded-[10px] border-white/10 bg-[#0c0c0c] text-white placeholder:text-[#6b7280] focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/80 font-medium text-sm">Message</Label>
                        <Textarea id="message" name="message" placeholder="Tell us about your project or inquiry" value={formData.message} onChange={handleInputChange} rows={4} className="rounded-[10px] border-white/10 bg-[#0c0c0c] text-white placeholder:text-[#6b7280] focus:border-primary transition-colors resize-none" />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-[#ff5252] text-white font-medium rounded-[10px] transition-all duration-300 hover:scale-[1.01]">
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </form>
                  </div>
                </AnimatedItem>
              </div>
            </AnimatedSection>
          </div>
        </section>

        
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
