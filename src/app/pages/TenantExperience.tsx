import { ScrollReveal } from "../components/AnimationWrappers";
import { Coffee, Dumbbell, Users, Wifi, Calendar, Award, Heart, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export function TenantExperience() {
  const experiences = [
    {
      icon: Coffee,
      title: "Premium Amenities",
      description: "From artisan cafés to wellness centers, every detail is designed for your comfort",
      image: "https://images.unsplash.com/photo-1606244516049-f59420bb8925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhbWVuaXRpZXMlMjBjYWZlJTIwbG91bmdlfGVufDF8fHx8MTc3MTkyNTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with like-minded professionals through curated networking events",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTI1OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Smart building systems and high-speed connectivity that keep you ahead",
      image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MDUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: "Wellness Programs",
      description: "State-of-the-art fitness centers, yoga studios, and wellness workshops"
    },
    {
      icon: Wifi,
      title: "Smart Technology",
      description: "Building app, keyless entry, and intelligent climate control"
    },
    {
      icon: Calendar,
      title: "Events & Networking",
      description: "Regular community events, professional development, and social gatherings"
    },
    {
      icon: Award,
      title: "Concierge Services",
      description: "Dedicated support team available 24/7 for all your needs"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "On-site dining, coffee bars, and catering services"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible spaces, outdoor terraces, and quiet zones for focus"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzE4NDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tenant experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              More Than Just Office Space
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A complete workplace ecosystem designed for your success and well-being
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-block px-4 py-2 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded-full mb-6">
                <span className="text-xl font-semibold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider">
                  The X-Office Experience
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Where Work Meets Life
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We've reimagined the workplace experience to support your team's productivity, 
                well-being, and growth at every turn.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <ScrollReveal delay={0.1}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6">
                      <experience.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Comprehensive Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every detail thoughtfully designed to enhance your workplace experience
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                What Our Tenants Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Hear from the businesses that call X-Office Parks home
              </p>
            </div>
          </ScrollReveal>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[
                {
                  quote: "X-Office Parks has transformed how we work. The amenities and community make it feel less like an office and more like a second home.",
                  author: "Sarah Chen",
                  title: "CEO, TechVision Inc.",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The attention to detail and commitment to tenant satisfaction is unmatched. Our team's productivity and morale have never been higher.",
                  author: "Michael Rodriguez",
                  title: "Operations Director, Global Finance Corp",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The sustainable practices and LEED certification align perfectly with our company values. It's rare to find such a perfect partnership.",
                  author: "Jennifer Park",
                  title: "Director of Sustainability, EcoTech Solutions",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "Outstanding location, world-class amenities, and exceptional management. X-Office Parks exceeded all our expectations for our new headquarters.",
                  author: "David Kumar",
                  title: "CFO, FinanceFirst Group",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The flexibility and support during our rapid growth phase was invaluable. X-Office Parks truly partners with their tenants for success.",
                  author: "Amanda Foster",
                  title: "VP of Operations, StartupHub",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "Modern infrastructure, reliable services, and a vibrant tenant community. This is the workspace of the future, available today.",
                  author: "Robert Thompson",
                  title: "Managing Partner, Legal Associates LLP",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "Impressive wellness programs and amenities that genuinely care for employee well-being. Our team loves coming to work here.",
                  author: "Lisa Wang",
                  title: "Head of HR, GlobalTech Industries",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The smart building technology and seamless digital experience make every day more efficient. X-Office Parks is ahead of the curve.",
                  author: "James Martinez",
                  title: "CTO, Digital Innovations Co.",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                // Duplicate the testimonials for seamless loop
                {
                  quote: "X-Office Parks has transformed how we work. The amenities and community make it feel less like an office and more like a second home.",
                  author: "Sarah Chen",
                  title: "CEO, TechVision Inc.",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The attention to detail and commitment to tenant satisfaction is unmatched. Our team's productivity and morale have never been higher.",
                  author: "Michael Rodriguez",
                  title: "Operations Director, Global Finance Corp",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "The sustainable practices and LEED certification align perfectly with our company values. It's rare to find such a perfect partnership.",
                  author: "Jennifer Park",
                  title: "Director of Sustainability, EcoTech Solutions",
                  image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmclMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTkyNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                },
                {
                  quote: "Outstanding location, world-class amenities, and exceptional management. X-Office Parks exceeded all our expectations for our new headquarters.",
                  author: "David Kumar",
                  title: "CFO, FinanceFirst Group",
                  image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTkxODMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[90vw] md:w-[450px] p-8 bg-muted/30 rounded-lg border border-border"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] dark:from-[#0A0A0A] dark:to-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Experience It Yourself
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a tour and discover how X-Office Parks can elevate your workplace experience
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
            >
              Book a Tour
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}