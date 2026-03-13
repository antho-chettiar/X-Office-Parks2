import { ScrollReveal } from "../components/AnimationWrappers";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      city: "Mumbai",
      address: "Nariman Point, Makers Chambers IV",
      postal: "Mumbai, Maharashtra 400021",
      phone: "+91 22 6789 1234",
      email: "mumbai@xofficeparks.com"
    },
    {
      city: "Bangalore",
      address: "MG Road, Prestige Towers, 7th Floor",
      postal: "Bangalore, Karnataka 560001",
      phone: "+91 80 4567 8900",
      email: "bangalore@xofficeparks.com"
    },
    {
      city: "Delhi NCR",
      address: "Connaught Place, DLF Centre",
      postal: "New Delhi, Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@xofficeparks.com"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MTgxMjk0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Let's discuss how we can help elevate your workspace
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-light mb-6 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="leasing">Office Leasing</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="investment">Investment Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37] resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-4xl font-light mb-6 tracking-tight">
                  Our Offices
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Visit one of our locations or reach out to the office nearest you.
                </p>

                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="p-6 bg-muted/30 rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all"
                    >
                      <h3 className="text-2xl font-semibold mb-4 text-[#B8860B] dark:text-[#D4AF37]">
                        {office.city}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div className="text-muted-foreground">
                            <div>{office.address}</div>
                            <div>{office.postal}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="mt-12 p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] dark:from-[#0A0A0A] dark:to-[#1A1A1A] rounded-lg text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Our team is available Monday through Friday, 8:00 AM - 6:00 PM EST
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+18005551234"
                      className="flex items-center space-x-3 text-[#D4AF37] hover:text-[#E6C85A] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">+1 (800) 555-1234</span>
                    </a>
                    <a
                      href="mailto:info@xofficeparks.com"
                      className="flex items-center space-x-3 text-[#D4AF37] hover:text-[#E6C85A] transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">info@xofficeparks.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-muted/30">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#B8860B] dark:text-[#D4AF37] mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              Interactive map would be integrated here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}