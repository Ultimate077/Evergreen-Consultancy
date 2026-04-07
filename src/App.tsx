/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Menu, 
  X, 
  Scale, 
  Search, 
  Medal, 
  Handshake, 
  PieChart, 
  Users, 
  UserCheck, 
  ClipboardCheck, 
  Laptop, 
  GraduationCap,
  ListChecks,
  UserPlus,
  Filter,
  FileEdit,
  MessageSquare,
  CheckCircle2,
  Timer,
  Star,
  Eye,
  Gavel,
  TrendingUp,
  Award,
  Landmark,
  ShieldCheck,
  Ban,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'applicant' | 'partner'>('applicant');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type: 'applicant' | 'partner') => {
    setFormType(type);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const subject = formType === 'applicant' ? 'New Job Application' : 'New Partnership Inquiry';
    const body = Object.entries(data)
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join('\n');
    
    const mailtoUrl = `mailto:evrgreenrecruit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 py-4 shadow-md' : 'bg-white py-6 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-2xl font-serif font-bold text-evergreen-forest">
            <Leaf className="text-evergreen-gold" size={28} />
            Evergreen
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-evergreen-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-evergreen-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-evergreen-gold"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen min-h-[600px] flex items-center bg-evergreen-forest text-white pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-evergreen-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connecting Top Talents with Dream Jobs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
              We power Nigeria's workforce with merit-based, technology-driven recruitment solutions, delivering excellence for government parastatals and the private sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-evergreen-gold text-evergreen-charcoal px-8 py-4 rounded font-bold text-lg hover:bg-evergreen-gold/90 transition-all hover:-translate-y-1 shadow-lg"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-evergreen-forest mb-6 relative inline-block">
              Who We Are
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-evergreen-gold" />
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
              Evergreen Recruitment Consultancy is a premier talent acquisition and workforce advisory firm in Nigeria. Founded on the principle that the right people drive the greatest impact, we bridge the gap between exceptional talent and visionary organizations.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {[
              { name: 'Integrity', icon: Scale },
              { name: 'Transparency', icon: Search },
              { name: 'Merit', icon: Medal },
              { name: 'Equal Opportunity', icon: Handshake },
              { name: 'Data-Driven', icon: PieChart },
            ].map((value) => (
              <motion.div 
                key={value.name}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-lg text-center border-b-4 border-transparent hover:border-evergreen-gold hover:bg-white hover:shadow-xl transition-all group"
              >
                <value.icon className="mx-auto mb-4 text-evergreen-forest group-hover:scale-110 transition-transform" size={40} />
                <h4 className="font-sans font-semibold text-lg">{value.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-evergreen-forest mb-6 relative inline-block">
              Our Service Pillars
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-evergreen-gold" />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
              Comprehensive HR solutions designed to scale your organizational success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Workforce Planning & Advisory', 
                desc: 'Strategic structuring and talent mapping to align your human capital seamlessly with long-term organizational goals.',
                icon: Users
              },
              { 
                title: 'Recruitment & Talent Acquisition', 
                desc: 'End-to-end talent sourcing focusing on quality, cultural fit, and strict meritocracy across all organizational levels.',
                icon: UserCheck
              },
              { 
                title: 'Assessment & Selection', 
                desc: 'Rigorous evaluation frameworks and testing methodologies to identify and secure top-tier candidates.',
                icon: ClipboardCheck
              },
              { 
                title: 'Digital Recruitment Management', 
                desc: 'Leveraging modern HR technology systems for streamlined, efficient, and data-driven hiring processes.',
                icon: Laptop
              },
              { 
                title: 'Capacity Building Support', 
                desc: "Continuous training and onboarding strategies to equip your workforce with the skills needed for tomorrow's challenges.",
                icon: GraduationCap
              },
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-evergreen-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                <service.icon className="text-evergreen-forest mb-6 group-hover:text-evergreen-gold transition-colors" size={48} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-evergreen-forest mb-6 relative inline-block">
              Transparent Recruitment Framework
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-evergreen-gold" />
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
              Our 6-step methodology ensures a fair, rigorous, and completely merit-based selection process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
              {[
                { title: 'Needs Assessment', icon: ListChecks },
                { title: 'Job Profiling', icon: UserPlus },
                { title: 'Application Screening', icon: Filter },
                { title: 'Testing & Assessment', icon: FileEdit },
                { title: 'Interview & Evaluation', icon: MessageSquare },
                { title: 'Final Selection', icon: CheckCircle2 },
              ].map((step, idx) => (
                <motion.div 
                  key={step.title}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-24 h-24 bg-white border-2 border-evergreen-forest rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-evergreen-forest group-hover:text-white transition-all shadow-lg">
                    <step.icon size={32} />
                  </div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-evergreen-forest mb-6">
                Why Choose Evergreen?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We don't just fill vacancies; we architect high-performing teams. By partnering with us, organizations mitigate hiring risks and guarantee long-term workforce excellence.
              </p>
              <button 
                onClick={() => openModal('applicant')}
                className="bg-evergreen-forest text-white px-8 py-4 rounded font-bold text-lg hover:bg-evergreen-forest/90 transition-all shadow-lg inline-block"
              >
                Apply Now
              </button>
            </motion.div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Reduced Hiring Time', desc: 'Streamlined processes that drastically cut down time-to-hire.', icon: Timer },
                { title: 'Quality Hires', desc: 'Ensuring only the most capable and fitting talents are selected.', icon: Star },
                { title: 'Transparent Process', desc: 'Full visibility into every stage of our recruitment methodology.', icon: Eye },
                { title: 'Litigation-Free', desc: 'Strict compliance with labor laws to protect your organization.', icon: Gavel },
                { title: 'Better Performance', desc: 'Candidates proven to elevate overall workplace productivity.', icon: TrendingUp },
                { title: 'Verified Talent Pool', desc: 'Access to thoroughly vetted professionals across industries.', icon: Award },
              ].map((benefit, idx) => (
                <motion.div 
                  key={benefit.title}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-evergreen-gold/10 rounded-lg flex items-center justify-center text-evergreen-gold shrink-0">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-evergreen-forest mb-6 relative inline-block">
              Flexible Engagement Models
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-evergreen-gold" />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
              Tailored collaboration frameworks to suit your exact human capital requirements.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['Project-Based', 'Annual Retainer', 'Outsourced Partnership', 'Hybrid Collaboration'].map((model) => (
              <motion.div 
                key={model}
                variants={fadeInUp}
                className="bg-gray-50 px-8 py-4 rounded-full border border-evergreen-forest/10 font-medium text-evergreen-forest hover:bg-evergreen-forest hover:text-white hover:shadow-lg transition-all cursor-default"
              >
                {model}
              </motion.div>
            ))}
          </motion.div>
          <p className="text-gray-500 italic">* Pricing and timelines are customized depending on the specific scope of work.</p>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-evergreen-forest text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Civil Service Regulations', icon: Landmark },
              { title: 'Equal Opportunity Policy', icon: Users },
              { title: 'Strict Data Protection', icon: ShieldCheck },
              { title: 'Anti-Corruption Standard', icon: Ban },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <item.icon className="text-evergreen-gold" size={32} />
                <span className="font-medium text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-evergreen-forest mb-10 max-w-4xl mx-auto">
              Ready to Build a Future-Ready Workforce?
            </h2>
            <button 
              onClick={() => openModal('partner')}
              className="bg-evergreen-gold text-evergreen-charcoal px-12 py-5 rounded font-bold text-xl hover:bg-evergreen-gold/90 transition-all hover:-translate-y-1 shadow-xl inline-block"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-evergreen-charcoal text-white/80 pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <a href="#" className="text-3xl font-serif font-bold text-white mb-6 inline-block">
                <Leaf className="text-evergreen-gold inline mr-2" size={32} />
                Evergreen
              </a>
              <p className="mb-8 leading-relaxed">
                Connecting Top Talents with Dream Jobs. The trusted recruitment partner for Nigeria's private sector and government parastatals.
              </p>
                <a href="https://wa.me/2349126848316" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </a>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-evergreen-gold transition-colors">{link.name}</a></li>
                ))}
                <li><a href="#engagement" className="hover:text-evergreen-gold transition-colors">Engagement Models</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-8">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-evergreen-gold transition-colors">Workforce Advisory</a></li>
                <li><a href="#services" className="hover:text-evergreen-gold transition-colors">Talent Acquisition</a></li>
                <li><a href="#services" className="hover:text-evergreen-gold transition-colors">Assessment Testing</a></li>
                <li><a href="#services" className="hover:text-evergreen-gold transition-colors">Digital HR</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-8">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="text-evergreen-gold shrink-0" size={24} />
                  <span>12 Innovation Drive, Central Business District, Abuja, Nigeria</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-evergreen-gold shrink-0" size={24} />
                  <span>evrgreenrecruit@gmail.com</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-evergreen-gold shrink-0" size={24} />
                  <span>+2349126848316</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Evergreen Recruitment Consultancy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Icon */}
      <a 
        href="https://wa.me/2349126848316" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-evergreen-charcoal/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-evergreen-forest transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-evergreen-forest mb-4">Submission Successful!</h3>
                    <p className="text-gray-600 text-lg">
                      Thank you for reaching out. Our team will review your details and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold text-evergreen-forest mb-2">
                      {formType === 'applicant' ? 'Join Our Talent Pool' : 'Partner With Us'}
                    </h3>
                    <p className="text-gray-600 mb-8">
                      {formType === 'applicant' 
                        ? 'Fill in your details below to be considered for top opportunities in Nigeria.' 
                        : 'Tell us about your organizational needs and let us build your future workforce.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                          <input 
                            required 
                            name="fullName"
                            type="text" 
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-evergreen-gold focus:ring-2 focus:ring-evergreen-gold/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                          <input 
                            required 
                            name="email"
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-evergreen-gold focus:ring-2 focus:ring-evergreen-gold/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                          <input 
                            required 
                            name="phone"
                            type="tel" 
                            placeholder="+234 ..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-evergreen-gold focus:ring-2 focus:ring-evergreen-gold/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                            {formType === 'applicant' ? 'Desired Position' : 'Organization Name'}
                          </label>
                          <input 
                            required 
                            name={formType === 'applicant' ? 'position' : 'organization'}
                            type="text" 
                            placeholder={formType === 'applicant' ? 'e.g. Senior Manager' : 'e.g. ABC Corp'}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-evergreen-gold focus:ring-2 focus:ring-evergreen-gold/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          {formType === 'applicant' ? 'Brief Bio / Experience' : 'Service Requirements'}
                        </label>
                        <textarea 
                          rows={4}
                          name="details"
                          placeholder={formType === 'applicant' ? 'Tell us about your professional background...' : 'Describe the talent or advisory services you need...'}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-evergreen-gold focus:ring-2 focus:ring-evergreen-gold/20 outline-none transition-all resize-none"
                        />
                      </div>

                      {formType === 'applicant' && (
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Upload CV (PDF)</label>
                          <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-evergreen-gold transition-colors cursor-pointer">
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
                            <p className="text-gray-500">Click or drag to upload your resume</p>
                          </div>
                        </div>
                      )}

                      <button 
                        type="submit"
                        className="w-full bg-evergreen-forest text-white py-4 rounded-lg font-bold text-lg hover:bg-evergreen-forest/90 transition-all shadow-lg"
                      >
                        Submit Application
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
