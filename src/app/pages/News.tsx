import { ScrollReveal } from "../components/AnimationWrappers";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { useState } from "react";

export function News() {
  const [filter, setFilter] = useState("all");

  const categories = ["All", "Corporate News", "Sustainability", "Market Insights", "Community"];

  const articles = [
    {
      title: "X-Office Parks Announces Major Portfolio Expansion",
      category: "Corporate News",
      date: "February 20, 2026",
      excerpt: "Strategic acquisition of five Class A office buildings across major U.S. markets, adding 2.5 million square feet to our portfolio.",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTI1OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      title: "Achieving Net Zero Carbon by 2030: Our Roadmap",
      category: "Sustainability",
      date: "February 15, 2026",
      excerpt: "Detailed plan outlining our path to carbon neutrality, including renewable energy investments and efficiency upgrades.",
      image: "https://images.unsplash.com/photo-1769697264013-d460d0c72785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzE5MTU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      title: "The Future of Work: Hybrid Office Trends 2026",
      category: "Market Insights",
      date: "February 10, 2026",
      excerpt: "Analysis of emerging workplace trends and how we're adapting our spaces to meet evolving tenant needs.",
      image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MDUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      title: "Community Investment: $5M Committed to Local Programs",
      category: "Community",
      date: "February 5, 2026",
      excerpt: "Announcing expanded community partnerships focused on education, workforce development, and neighborhood revitalization.",
      image: "https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzE4NDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      title: "Skyline Tower Achieves LEED Platinum Certification",
      category: "Sustainability",
      date: "January 28, 2026",
      excerpt: "Our flagship New York property recognized for exceptional sustainability performance and environmental design.",
      image: "https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg1NjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    },
    {
      title: "Q4 2025 Market Report: Office Sector Resilience",
      category: "Market Insights",
      date: "January 20, 2026",
      excerpt: "Strong performance across our portfolio with 96% average occupancy and growing tenant demand for premium spaces.",
      image: "https://images.unsplash.com/photo-1759850426415-8888ea55b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGUlMjB1cmJhbiUyMHNreWxpbmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE5MjU5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    }
  ];

  const filteredArticles = filter === "all" 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxOTI1OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              News & Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay informed about our latest developments and industry perspectives
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category.toLowerCase())}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === category.toLowerCase()
                    ? "bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {filter === "all" && (
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <h2 className="text-3xl font-semibold mb-12">Featured Stories</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.filter(a => a.featured).map((article, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-6 aspect-[16/10]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-white dark:bg-black text-foreground text-sm font-semibold rounded-full">
                          {article.category}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </div>
                      <h3 className="text-3xl font-semibold group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-[#B8860B] dark:text-[#D4AF37] font-medium pt-2 group-hover:translate-x-2 transition-transform">
                        <span>Read More</span>
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold mb-12">
              {filter === "all" ? "Recent Articles" : `${categories.find(c => c.toLowerCase() === filter)} Articles`}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white dark:bg-black text-foreground text-xs font-semibold rounded-full">
                        {article.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-[#B8860B] dark:text-[#D4AF37] text-sm font-medium pt-2">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] dark:from-[#0A0A0A] dark:to-[#1A1A1A] text-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Stay Updated
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Subscribe to receive our latest news and insights directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
