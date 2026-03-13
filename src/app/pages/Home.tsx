import { motion, AnimatePresence, useMotionValue, useInView, animate } from "motion/react";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { ScrollReveal } from "../components/AnimationWrappers";
import { ArrowRight, Building2, Users, Leaf, TrendingUp, Award, Globe, ChevronRight } from "lucide-react";

// Counter Animation Component
function CountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Extract numeric value from string (e.g., "15M+" -> 15, "98%" -> 98)
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      
      const controls = animate(motionValue, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          // Format the number based on original format
          if (value.includes("M")) {
            setDisplayValue(latest.toFixed(1) + "M+");
          } else if (value.includes("B")) {
            setDisplayValue(latest.toFixed(1) + "B+");
          } else if (value.includes("%")) {
            setDisplayValue(Math.round(latest) + "%");
          } else if (value.includes("+")) {
            setDisplayValue(Math.round(latest) + "+");
          } else {
            setDisplayValue(Math.round(latest).toLocaleString());
          }
        }
      });

      return () => controls.stop();
    } else {
      // Reset to 0 when not in view
      setDisplayValue("0");
    }
  }, [isInView, value, motionValue]);

  return (
    <div ref={ref} className="text-4xl font-light mb-2 text-foreground">
      {displayValue}
    </div>
  );
}

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1758691736933-bb0f88fe2e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWxzJTIwbW9kZXJuJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBsb2JieXxlbnwxfHx8fDE3NzE5MzEzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professionals in modern office building lobby"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1768096865523-ca23d8811107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHdhbGtpbmclMjBjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGVudHJhbmNlfGVufDF8fHx8MTc3MTkzMTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Business people at corporate building entrance"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1758409426632-e0a240c52038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzfGVufDF8fHx8MTc3MTkzMTMyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Business professionals at glass office building"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwcGVvcGxlfGVufDF8fHx8MTc3MTkzMTMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Corporate office building exterior with people"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1758599543132-ba9b306d715e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3JrcGxhY2UlMjBwcm9mZXNzaW9uYWxzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTkzMTMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern workplace with professionals"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const portfolioHighlights = [
    {
      id: "skyline-tower",
      name: "Skyline Tower",
      location: "New York, NY",
      size: "850,000 sq ft",
      image: "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGlsbGFzdHJ5JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxOTI4OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "98%"
    },
    {
      id: "innovation-plaza",
      name: "Innovation Plaza",
      location: "San Francisco, CA",
      size: "650,000 sq ft",
      image: "https://images.unsplash.com/photo-1766943961535-ca3a88eb79ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwZXZlbmluZ3xlbnwxfHx8fDE3NzE5MjU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "95%"
    },
    {
      id: "metro-center",
      name: "Metro Center",
      location: "Chicago, IL",
      size: "720,000 sq ft",
      image: "https://images.unsplash.com/photo-1759850426415-8888ea55b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGUlMjB1cmJhbiUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE5MjU5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      occupancy: "100%"
    }
  ];

  const news = [
    {
      title: "X-Office Parks Announces Major Expansion",
      category: "Corporate News",
      date: "February 20, 2026",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTI1OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Achieving Net Zero Carbon by 2030",
      category: "Sustainability",
      date: "February 15, 2026",
      image: "https://images.unsplash.com/photo-1769697264013-d460d0c72785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzE5MTU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Custom Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[1.1]">
              Where Vision Meets
              <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] via-[#E6C85A] to-[#B8860B] bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Creating world-class office environments that inspire innovation and drive success
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Dots Navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-[#D4AF37] w-8' 
                  : 'bg-white/40 w-2.5 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Positioning Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-block px-4 py-2 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded-full mb-6">
                <span className="text-xl font-semibold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider">
                  Our Commitment
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Redefining the
                <span className="block text-[#B8860B] dark:text-[#D4AF37]">Modern Workplace</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over three decades, X-Office Parks has been at the forefront of creating 
                premium office environments that foster innovation, collaboration, and growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: "15M+", label: "Square Feet", color: "from-[#B8860B] to-[#D4AF37]" },
              { icon: Users, value: "500+", label: "Tenant Companies", color: "from-[#D4AF37] to-[#E6C85A]" },
              { icon: Globe, value: "25", label: "Major Markets", color: "from-[#B8860B] to-[#D4AF37]" },
              { icon: Award, value: "98%", label: "Client Satisfaction", color: "from-[#D4AF37] to-[#E6C85A]" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CountUp value={stat.value} />
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose X-Office Parks */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-block px-4 py-2 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded-full mb-6">
                  <span className="text-xl font-semibold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                  Excellence in Every Detail
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to quality, sustainability, and tenant satisfaction sets us 
                  apart as a leader in premium office real estate.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Strategic Locations",
                      description: "Prime locations in major business districts with exceptional connectivity and amenities."
                    },
                    {
                      title: "World-Class Design",
                      description: "Award-winning architecture and interiors that inspire creativity and productivity."
                    },
                    {
                      title: "Sustainable Operations",
                      description: "LEED-certified buildings with cutting-edge green technologies and practices."
                    },
                    {
                      title: "Tenant-First Service",
                      description: "Dedicated support teams ensuring exceptional experiences every day."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center mt-8 text-[#B8860B] dark:text-[#D4AF37] font-medium group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzE4NDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business professionals collaborating"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Workplace Experience */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Premium Workplace Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Every detail thoughtfully designed to elevate your business and inspire your team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MDUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Modern Workspaces",
                description: "Flexible, technology-enabled spaces designed for the future of work"
              },
              {
                image: "https://images.unsplash.com/photo-1606244516049-f59420bb8925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhbWVuaXRpZXMlMjBjYWZlJTIwbG91bmdlfGVufDF8fHx8MTc3MTkyNTk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "World-Class Amenities",
                description: "Premium facilities that enhance productivity and well-being"
              },
              {
                image: "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxODQ3MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Collaborative Spaces",
                description: "Innovative environments that foster creativity and teamwork"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/tenant-experience"
                className="inline-flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium group"
              >
                <span>Discover the Full Experience</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  Featured Properties
                </h2>
                <p className="text-lg text-muted-foreground">
                  Iconic buildings in the world's most dynamic markets
                </p>
              </div>
              <Link
                to="/portfolio"
                className="hidden md:flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium group"
              >
                <span>View All Properties</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((property, index) => (
              <ScrollReveal key={property.id} delay={index * 0.1}>
                <Link to={`/portfolio/${property.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#B8860B] text-white text-xs font-semibold rounded-full">
                      {property.occupancy} Occupied
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors">
                      {property.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{property.location}</p>
                    <p className="text-sm font-medium">{property.size}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12 md:hidden">
              <Link
                to="/portfolio"
                className="inline-flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium group"
              >
                <span>View All Properties</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ESG Preview */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#D4AF37]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1769697264013-d460d0c72785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzE5MTU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainable building"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full mb-6">
                  <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                    Sustainability
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                  Building a Sustainable Future
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to environmental stewardship and social responsibility drives 
                  every decision we make. From LEED-certified buildings to community engagement 
                  programs, we're creating lasting positive impact.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: "100%", label: "Renewable Energy" },
                    { value: "40%", label: "Carbon Reduction" },
                    { value: "85%", label: "Waste Diverted" },
                    { value: "15+", label: "LEED Buildings" }
                  ].map((stat, index) => (
                    <div key={index} className="border-l-2 border-[#B8860B] dark:border-[#D4AF37] pl-4">
                      <div className="text-3xl font-light text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/esg"
                  className="inline-flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium group"
                >
                  <span>Learn About Our ESG Initiatives</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  Latest News & Insights
                </h2>
                <p className="text-lg text-muted-foreground">
                  Stay informed about our latest developments and industry insights
                </p>
              </div>
              <Link
                to="/news"
                className="hidden md:flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium group"
              >
                <span>View All News</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link to="/news" className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-black text-foreground text-xs font-semibold rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <h3 className="text-2xl font-semibold group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-[#B8860B] dark:text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37,transparent_50%)]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Ready to Elevate Your Workspace?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Discover how X-Office Parks can provide the perfect environment for your business to thrive.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all flex items-center space-x-2 group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Properties
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}