import { ScrollReveal } from "../components/AnimationWrappers";
import { Link } from "react-router";
import { MapPin, Square, TrendingUp, Search } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [filter, setFilter] = useState("all");

  const properties = [
    {
      id: "skyline-tower",
      name: "Skyline Tower",
      location: "New York, NY",
      type: "Class A Office",
      size: "850,000 sq ft",
      occupancy: "98%",
      leed: "Platinum",
      image: "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg1NjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "innovation-plaza",
      name: "Innovation Plaza",
      location: "San Francisco, CA",
      type: "Class A Office",
      size: "650,000 sq ft",
      occupancy: "95%",
      leed: "Gold",
      image: "https://images.unsplash.com/photo-1766943961535-ca3a88eb79ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwZXZlbmluZ3xlbnwxfHx8fDE3NzE5MjU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "metro-center",
      name: "Metro Center",
      location: "Chicago, IL",
      type: "Class A Office",
      size: "720,000 sq ft",
      occupancy: "100%",
      leed: "Platinum",
      image: "https://images.unsplash.com/photo-1759850426415-8888ea55b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGUlMjB1cmJhbiUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE5MjU5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "tech-hub",
      name: "Tech Hub",
      location: "Austin, TX",
      type: "Class A Office",
      size: "500,000 sq ft",
      occupancy: "92%",
      leed: "Gold",
      image: "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg1NjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "waterfront-tower",
      name: "Waterfront Tower",
      location: "Seattle, WA",
      type: "Class A Office",
      size: "780,000 sq ft",
      occupancy: "97%",
      leed: "Platinum",
      image: "https://images.unsplash.com/photo-1766943961535-ca3a88eb79ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwZXZlbmluZ3xlbnwxfHx8fDE3NzE5MjU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "downtown-square",
      name: "Downtown Square",
      location: "Boston, MA",
      type: "Class A Office",
      size: "620,000 sq ft",
      occupancy: "94%",
      leed: "Gold",
      image: "https://images.unsplash.com/photo-1759850426415-8888ea55b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGUlMjB1cmJhbiUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE5MjU5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg1NjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Premium office spaces in the world's most dynamic business markets
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-12 pr-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-light text-foreground">{properties.length}</div>
                <div className="text-sm text-muted-foreground">Properties</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-light text-foreground">4.5M+</div>
                <div className="text-sm text-muted-foreground">Total Sq Ft</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-light text-foreground">96%</div>
                <div className="text-sm text-muted-foreground">Avg Occupancy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <ScrollReveal key={property.id} delay={index * 0.1}>
                <Link to={`/portfolio/${property.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="px-3 py-1 bg-[#B8860B] text-white text-xs font-semibold rounded-full">
                        {property.occupancy} Occupied
                      </div>
                      <div className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                        LEED {property.leed}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm">
                        <Square className="w-4 h-4 mr-2 text-[#B8860B] dark:text-[#D4AF37]" />
                        <span className="font-medium">{property.size}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{property.type}</div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] dark:from-[#0A0A0A] dark:to-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Find Your Perfect Space
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you discover the ideal workspace for your business needs
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
            >
              Contact Our Team
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
