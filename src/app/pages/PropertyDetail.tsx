import { ScrollReveal } from "../components/AnimationWrappers";
import { Link, useParams } from "react-router";
import { MapPin, Square, Users, Leaf, Train, Coffee, Dumbbell, Car, ArrowLeft, Building } from "lucide-react";

export function PropertyDetail() {
  const { id } = useParams();

  // Mock property data - in real app, this would come from an API
  const property = {
    id: id || "skyline-tower",
    name: "Skyline Tower",
    location: "123 Business Boulevard, New York, NY 10001",
    size: "850,000 sq ft",
    floors: "45 Floors",
    occupancy: "98%",
    leed: "Platinum",
    yearBuilt: "2020",
    type: "Class A Office",
    image: "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg1NjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Skyline Tower represents the pinnacle of modern office design, offering breathtaking views, state-of-the-art amenities, and a prestigious address in the heart of Manhattan's business district."
  };

  const amenities = [
    { icon: Coffee, name: "On-site Café", description: "Artisan coffee and fresh dining options" },
    { icon: Dumbbell, name: "Fitness Center", description: "24/7 state-of-the-art gym facilities" },
    { icon: Car, name: "Parking", description: "Secure underground parking garage" },
    { icon: Train, name: "Transit Hub", description: "Direct access to major transit lines" },
    { icon: Building, name: "Conference Center", description: "Executive meeting rooms and event spaces" },
    { icon: Leaf, name: "Green Spaces", description: "Rooftop gardens and outdoor terraces" }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MDUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1687945727613-a4d06cc41024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxODQ3MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1606244516049-f59420bb8925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhbWVuaXRpZXMlMjBjYWZlJTIwbG91bmdlfGVufDF8fHx8MTc3MTkyNTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
          <ScrollReveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="px-4 py-2 bg-[#B8860B] text-white text-sm font-semibold rounded-full">
                {property.occupancy} Occupied
              </div>
              <div className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                LEED {property.leed}
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                {property.type}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-4">
              {property.name}
            </h1>
            <div className="flex items-center text-xl text-white/90">
              <MapPin className="w-6 h-6 mr-2" />
              {property.location}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Property Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Size", value: property.size },
              { label: "Floors", value: property.floors },
              { label: "Year Built", value: property.yearBuilt },
              { label: "Occupancy", value: property.occupancy }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="text-center">
                  <div className="text-3xl font-light text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                  Redefining Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With floor-to-ceiling windows, cutting-edge technology infrastructure, and 
                  meticulously designed common areas, this property provides an unparalleled 
                  work environment for forward-thinking organizations.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
                >
                  Schedule a Tour
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                {[
                  "Floor-to-ceiling glass facades with panoramic views",
                  "Advanced HVAC and air filtration systems",
                  "Smart building technology and IoT integration",
                  "High-speed fiber optic connectivity",
                  "24/7 security and concierge services",
                  "LEED Platinum certified sustainable design",
                  "Flexible floor plates for custom layouts",
                  "Electric vehicle charging stations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                World-Class Amenities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything your team needs to thrive, all in one place
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6">
                    <amenity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight text-center">
              Experience the Space
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] dark:from-[#0A0A0A] dark:to-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Ready to Make This Your Home?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our leasing team to schedule a personalized tour and discuss availability
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
                >
                  Contact Leasing Team
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded border border-white/20 hover:bg-white/20 transition-all"
                >
                  View More Properties
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
