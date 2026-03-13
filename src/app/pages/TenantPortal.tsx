import { ScrollReveal } from "../components/AnimationWrappers";
import { Lock, FileText, Wrench, CreditCard, Calendar, Mail, Bell, Shield } from "lucide-react";
import { useState } from "react";

export function TenantPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would authenticate against a backend
    setIsLoggedIn(true);
  };

  const portalFeatures = [
    {
      icon: FileText,
      title: "Lease Documents",
      description: "Access your lease agreement and related documents anytime"
    },
    {
      icon: CreditCard,
      title: "Payment Management",
      description: "View invoices, make payments, and track payment history"
    },
    {
      icon: Wrench,
      title: "Service Requests",
      description: "Submit and track maintenance and service requests"
    },
    {
      icon: Calendar,
      title: "Book Amenities",
      description: "Reserve conference rooms, parking, and building amenities"
    },
    {
      icon: Mail,
      title: "Messages",
      description: "Direct communication with property management team"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Stay updated on building news and important announcements"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MDUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tenant Portal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Secure Portal
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
              Tenant Portal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your centralized hub for all property management needs
            </p>
          </ScrollReveal>
        </div>
      </section>

      {!isLoggedIn ? (
        // Login Section
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Features */}
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                    Manage Everything in One Place
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our secure tenant portal provides 24/7 access to all the tools and information you need.
                  </p>

                  <div className="space-y-6">
                    {portalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Login Form */}
              <ScrollReveal delay={0.2}>
                <div className="max-w-md mx-auto w-full">
                  <div className="p-8 lg:p-10 bg-card rounded-lg border border-border shadow-xl">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#B8860B] to-[#D4AF37] mx-auto mb-6">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-center mb-2">
                      Sign In to Portal
                    </h3>
                    <p className="text-muted-foreground text-center mb-8">
                      Enter your credentials to access your account
                    </p>

                    <form onSubmit={handleLogin} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={credentials.email}
                          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                          className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          value={credentials.password}
                          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                          className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#B8860B] dark:focus:ring-[#D4AF37]"
                          placeholder="••••••••"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <a href="#" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline">
                          Forgot password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
                      >
                        Sign In
                      </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <a href="#" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline font-medium">
                        Contact Support
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border text-sm text-center">
                    <Shield className="w-5 h-5 text-[#B8860B] dark:text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Your data is protected with enterprise-grade security and encryption
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ) : (
        // Dashboard (Mock - shown after login)
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-light mb-2">Welcome Back</h2>
                  <p className="text-muted-foreground">
                    Last login: February 24, 2026 at 9:30 AM
                  </p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-6 py-2 bg-muted/30 border border-border rounded hover:bg-muted transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Next Payment Due", value: "March 1, 2026", color: "from-[#B8860B] to-[#D4AF37]" },
                { label: "Open Requests", value: "2", color: "from-blue-600 to-blue-400" },
                { label: "Unread Messages", value: "5", color: "from-purple-600 to-purple-400" },
                { label: "Upcoming Bookings", value: "3", color: "from-green-600 to-green-400" }
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className={`text-3xl font-light bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Portal Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalFeatures.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <button className="p-8 bg-card rounded-lg border border-border hover:border-[#B8860B]/30 dark:hover:border-[#D4AF37]/30 transition-all text-left w-full group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Support Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl font-light mb-6 tracking-tight">
                Need Help?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is available to assist you with any portal-related questions
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:support@xofficeparks.com"
                  className="px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-muted/30 border border-border text-foreground font-medium rounded hover:bg-muted transition-all"
                >
                  View Help Center
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
