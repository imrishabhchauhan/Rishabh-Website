'use client';

import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Mail, Megaphone, MousePointerClick, Search, Target, TrendingUp, Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tighter">
            Rohit<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-zinc-50 transition-colors">About</Link>
            <Link href="#services" className="hover:text-zinc-50 transition-colors">Services</Link>
            <Link href="#experience" className="hover:text-zinc-50 transition-colors">Experience</Link>
          </div>
          <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:opacity-90 transition-opacity">
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6">
                Driving Growth Through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Digital Marketing.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                Hi, I&apos;m Rohit Singh. A Professional Digital Marketing Expert with 10 years of experience scaling brands, optimizing conversions, and maximizing ROI.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:opacity-90 transition-opacity gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors">
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-zinc-900 ring-4 ring-orange-500/20 bg-zinc-900 shadow-2xl shadow-orange-500/20">
                <Image
                  src="/rishabh-chauhan.png"
                  alt="Rohit Singh"
                  fill
                  unoptimized={true}
                  className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-0 left-0 md:-left-8 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-bold text-zinc-50">300%</p>
                    <p className="text-sm text-zinc-400">Average ROI Delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-zinc-800/50 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800/50">
              {[
                { label: 'Years Experience', value: '10+' },
                { label: 'Projects Delivered', value: '250+' },
                { label: 'Ad Spend Managed', value: '$5M+' },
                { label: 'Client Retention', value: '95%' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center px-4"
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">My Expertise</h2>
            <p className="text-zinc-400 text-lg">Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'SEO Optimization', desc: 'Rank higher on search engines and drive organic, high-intent traffic to your website.' },
              { icon: MousePointerClick, title: 'PPC Campaigns', desc: 'Data-driven paid advertising on Google and Bing to maximize your return on ad spend.' },
              { icon: Megaphone, title: 'Social Media Marketing', desc: 'Engaging content and targeted ads across Facebook, Instagram, LinkedIn, and Twitter.' },
              { icon: Target, title: 'Conversion Rate Optimization', desc: 'A/B testing and UX improvements to turn more of your visitors into paying customers.' },
              { icon: Mail, title: 'Email Marketing', desc: 'Automated workflows and newsletter campaigns that nurture leads and drive retention.' },
              { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Deep dive into data to uncover actionable insights and refine marketing strategies.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 group-hover:bg-orange-500/20 flex items-center justify-center text-zinc-400 group-hover:text-orange-500 transition-colors mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-zinc-900/30 border-y border-zinc-800/50 py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">A Decade of Growth</h2>
              <p className="text-zinc-400 text-lg">My professional journey in the digital marketing landscape.</p>
            </div>

            <div className="space-y-12">
              {[
                { role: 'Head of Digital Marketing', company: 'TechGrowth Agency', period: '2020 - Present', desc: 'Leading a team of 15 marketers, managing multi-million dollar ad budgets, and driving 200% YoY growth for enterprise clients.' },
                { role: 'Senior Growth Marketer', company: 'ScaleUp Startup', period: '2016 - 2020', desc: 'Built the marketing engine from scratch. Scaled user acquisition through SEO and paid social, resulting in a successful Series B funding.' },
                { role: 'Digital Marketing Specialist', company: 'Creative Media', period: '2014 - 2016', desc: 'Managed end-to-end campaign execution, social media management, and performance reporting for e-commerce brands.' },
              ].map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:grid grid-cols-[1fr_auto_1fr] gap-8 items-start">
                    <div className="hidden md:block text-right pt-1">
                      <h3 className="text-xl font-heading font-semibold">{job.role}</h3>
                      <p className="text-orange-500 font-medium">{job.company}</p>
                    </div>
                    <div className="absolute left-0 md:relative flex flex-col items-center h-full">
                      <div className="w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500 z-10 mt-1.5" />
                      {i !== 2 && <div className="w-px h-full bg-zinc-800 absolute top-4" />}
                    </div>
                    <div className="pb-8 md:pb-0">
                      <div className="md:hidden mb-2">
                        <h3 className="text-xl font-heading font-semibold">{job.role}</h3>
                        <p className="text-orange-500 font-medium">{job.company}</p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-300 mb-4">
                        {job.period}
                      </span>
                      <p className="text-zinc-400 leading-relaxed">{job.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 relative z-10">
              Ready to scale your business?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto relative z-10">
              Let&apos;s collaborate to build a data-driven marketing strategy that delivers real, measurable growth.
            </p>
            <Link href="mailto:hello@rohitsingh.com" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:opacity-90 transition-opacity gap-2 relative z-10">
              <Mail className="w-5 h-5" /> Get in Touch
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-heading font-bold tracking-tighter">
            Rohit<span className="text-orange-500">.</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Rohit Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
