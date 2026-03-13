import { ScrollReveal } from "../components/AnimationWrappers";
import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";

export function About() {
  const leadership = [
    {
      name: "Michael Chen",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "With over 25 years of experience in commercial real estate, Michael leads our vision for sustainable growth and innovation."
    },
    {
      name: "Sarah Rodriguez",
      title: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Sarah's expertise in operations excellence ensures our properties deliver exceptional experiences every day."
    },
    {
      name: "David Thompson",
      title: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "David brings strategic financial leadership with a proven track record in value creation and sustainable growth."
    },
    {
      name: "Emily Park",
      title: "Chief Sustainability Officer",
      image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Emily drives our environmental and social initiatives, leading the industry in sustainable real estate practices."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MTgxMjk0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              Building the Future of Work
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Three decades of excellence in creating inspiring workplaces
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Milestones Timeline */}
      <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded-full mb-6">
                <span className="text-xl font-semibold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider">
                  Our Journey
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Milestones That Matter
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Three decades of innovation, growth, and industry leadership
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B8860B] via-[#D4AF37] to-[#B8860B] hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {[
                {
                  year: "1995",
                  title: "Foundation",
                  description: "X-Office Parks founded with our first property in Mumbai, establishing a vision for premium workplace environments.",
                  align: "left"
                },
                {
                  year: "2000",
                  title: "National Expansion",
                  description: "Expanded operations to Delhi NCR and Bangalore, establishing presence in India's fastest-growing tech hubs.",
                  align: "right"
                },
                {
                  year: "2005",
                  title: "Portfolio Growth",
                  description: "Reached 5 million sq ft milestone across 8 major cities, becoming one of India's leading office park developers.",
                  align: "left"
                },
                {
                  year: "2010",
                  title: "Green Building Pioneer",
                  description: "Launched India's first platinum LEED-certified office campus, setting new sustainability standards for the industry.",
                  align: "right"
                },
                {
                  year: "2015",
                  title: "Tech Integration",
                  description: "Introduced smart building technologies and IoT infrastructure, revolutionizing tenant experience and building efficiency.",
                  align: "left"
                },
                {
                  year: "2018",
                  title: "Global Recognition",
                  description: "Awarded 'Best Office Real Estate Developer in Asia' and expanded portfolio to 12 million sq ft.",
                  align: "right"
                },
                {
                  year: "2020",
                  title: "Wellness Focus",
                  description: "Pioneered post-pandemic workplace wellness programs with touchless technology and enhanced air quality systems.",
                  align: "left"
                },
                {
                  year: "2023",
                  title: "Net Zero Commitment",
                  description: "Announced commitment to achieve net-zero carbon emissions across entire portfolio by 2030.",
                  align: "right"
                },
                {
                  year: "2025",
                  title: "Future of Work",
                  description: "Reached 15 million sq ft across 25 cities, serving 500+ companies with next-generation flexible workspace solutions.",
                  align: "left"
                }
              ].map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    milestone.align === "right" ? "lg:text-left" : "lg:text-right"
                  }`}>
                    {/* Content */}
                    <div className={`${
                      milestone.align === "right" ? "lg:col-start-2" : "lg:col-start-1"
                    }`}>
                      <div className="relative inline-block">
                        {/* Year Badge */}
                        <div className="inline-flex items-center justify-center mb-4">
                          <div className="px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-full shadow-lg">
                            <span className="text-2xl font-bold text-white">
                              {milestone.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-lg hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all">
                        <h3 className="text-2xl font-semibold mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full border-4 border-background transform -translate-x-1/2 shadow-lg">
                      <div className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Our Vision & Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guiding principles that shape everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "We pursue the highest standards in every aspect of our work, from property management to tenant service.",
                color: "from-[#B8860B] to-[#D4AF37]"
              },
              {
                icon: Eye,
                title: "Innovation",
                description: "We embrace new ideas and technologies to create workspaces that meet the evolving needs of modern business.",
                color: "from-[#D4AF37] to-[#E6C85A]"
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We build lasting relationships through transparency, honesty, and unwavering commitment to our partners.",
                color: "from-[#B8860B] to-[#D4AF37]"
              },
              {
                icon: TrendingUp,
                title: "Sustainability",
                description: "We're dedicated to creating positive environmental and social impact in everything we do.",
                color: "from-[#D4AF37] to-[#E6C85A]"
              }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded-full mb-6">
                <span className="text-xl font-semibold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider">
                  Leadership
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Meet Our Executive Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced leaders driving innovation and excellence across our organization
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-[#B8860B] dark:text-[#D4AF37] font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                By the Numbers
              </h2>
              <p className="text-xl text-white/80">
                Our commitment to excellence, measured
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { numValue: 30, suffix: "+", display: "30+", label: "Years of Excellence" },
              { numValue: 15, suffix: "M+", display: "15M+", label: "Square Feet" },
              { numValue: 500, suffix: "+", display: "500+", label: "Tenant Companies" },
              { numValue: 25, suffix: "", display: "25", label: "Major Markets" },
              { numValue: 98, suffix: "%", display: "98%", label: "Client Satisfaction" },
              { numValue: 15, suffix: "+", display: "15+", label: "LEED Buildings" },
              { numValue: 2000, suffix: "+", display: "2,000+", label: "Team Members" },
              { numValue: 12, suffix: "B+", display: "$12B+", label: "Assets Under Management", prefix: "$" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light mb-2 bg-gradient-to-r from-[#D4AF37] to-[#E6C85A] bg-clip-text text-transparent">
                    <AnimatedCounter 
                      end={stat.numValue} 
                      duration={2.5}
                      suffix={stat.suffix}
                      prefix={stat.prefix || ""}
                      className="inline-block"
                    />
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Awards & Recognition
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry recognition for our commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2025",
                award: "Best Office Real Estate Company",
                organization: "Commercial Real Estate Awards"
              },
              {
                year: "2024",
                award: "Sustainability Leader of the Year",
                organization: "Green Building Council"
              },
              {
                year: "2024",
                award: "Top Workplace Culture",
                organization: "Forbes America's Best Employers"
              },
              {
                year: "2023",
                award: "Innovation in Property Management",
                organization: "BOMA International"
              },
              {
                year: "2023",
                award: "Excellence in ESG",
                organization: "Global Real Estate Sustainability Benchmark"
              },
              {
                year: "2022",
                award: "Customer Service Excellence",
                organization: "CoreNet Global"
              }
            ].map((award, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 bg-muted/30 rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all">
                  <div className="text-[#B8860B] dark:text-[#D4AF37] font-semibold mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{award.award}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}