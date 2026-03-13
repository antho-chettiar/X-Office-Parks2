import { ScrollReveal } from "../components/AnimationWrappers";
import { Leaf, Users, Shield, TrendingUp, Droplet, Zap, Recycle, Award } from "lucide-react";

export function ESG() {
  const pillars = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Leading the industry in sustainable building practices and carbon reduction",
      metrics: [
        { value: "100%", label: "Renewable Energy" },
        { value: "40%", label: "Carbon Reduction" },
        { value: "85%", label: "Waste Diverted" }
      ]
    },
    {
      icon: Users,
      title: "Social",
      description: "Fostering inclusive communities and supporting local development",
      metrics: [
        { value: "50+", label: "Community Programs" },
        { value: "$5M", label: "Community Investment" },
        { value: "10K+", label: "Lives Impacted" }
      ]
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Maintaining the highest standards of transparency and ethical practice",
      metrics: [
        { value: "100%", label: "Board Independence" },
        { value: "AAA", label: "ESG Rating" },
        { value: "15+", label: "Industry Awards" }
      ]
    }
  ];

  const initiatives = [
    {
      icon: Zap,
      title: "Net Zero by 2030",
      description: "Committed to achieving carbon neutrality across our entire portfolio through renewable energy, efficiency upgrades, and carbon offsetting."
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Advanced water management systems reducing consumption by 50% while maintaining optimal building performance."
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Zero-waste goals with 85% waste diversion through comprehensive recycling and composting programs."
    },
    {
      icon: Award,
      title: "Green Building",
      description: "15+ LEED Platinum and Gold certified buildings setting industry benchmarks for sustainable design."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769697264013-d460d0c72785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzE5MTU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full mb-6">
              <Leaf className="w-5 h-5 text-green-300" />
              <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                ESG & Sustainability
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              Building a Better Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Our commitment to environmental stewardship, social responsibility, and ethical governance
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Our ESG Framework
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive approach to creating lasting positive impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    {pillar.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-light text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Our 2030 Commitments
              </h2>
              <p className="text-xl text-muted-foreground">
                Ambitious goals driving real change
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                goal: "Net Zero Carbon",
                progress: 65,
                description: "On track to achieve carbon neutrality across our entire portfolio by 2030"
              },
              {
                goal: "100% Renewable Energy",
                progress: 100,
                description: "All properties now powered by renewable energy sources"
              },
              {
                goal: "Zero Waste to Landfill",
                progress: 85,
                description: "Diverting 85% of waste through recycling and composting programs"
              },
              {
                goal: "Water Use Reduction",
                progress: 50,
                description: "50% reduction in water consumption through advanced management systems"
              }
            ].map((commitment, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{commitment.goal}</h3>
                    <span className="text-2xl font-light text-[#B8860B] dark:text-[#D4AF37]">
                      {commitment.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full mb-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-full transition-all"
                      style={{ width: `${commitment.progress}%` }}
                    />
                  </div>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Key Initiatives
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Programs driving meaningful environmental and social impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6">
                    <initiative.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Our Impact in Numbers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "15+", label: "LEED Certified Buildings" },
              { value: "40%", label: "Carbon Reduction Since 2020" },
              { value: "100%", label: "Renewable Energy" },
              { value: "85%", label: "Waste Diverted" },
              { value: "$5M", label: "Community Investment" },
              { value: "50+", label: "Social Programs" },
              { value: "10K+", label: "People Impacted" },
              { value: "AAA", label: "ESG Rating" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light mb-2 bg-gradient-to-r from-[#D4AF37] to-[#E6C85A] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                ESG Reports & Disclosures
              </h2>
              <p className="text-xl text-muted-foreground">
                Transparent reporting on our progress and commitments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "2025 ESG Annual Report", year: "2025", pages: "64 pages" },
              { title: "2024 Sustainability Impact Report", year: "2024", pages: "48 pages" },
              { title: "Carbon Disclosure Project", year: "2025", pages: "32 pages" },
              { title: "GRESB Real Estate Assessment", year: "2025", pages: "28 pages" }
            ].map((report, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 bg-muted/30 rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors">
                        {report.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{report.year}</span>
                        <span>•</span>
                        <span>{report.pages}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-sm font-medium rounded hover:shadow-lg transition-all">
                      Download
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
