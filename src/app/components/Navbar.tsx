import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export function Navbar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 0.95)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/tenant-experience", label: "Tenant Experience" },
    { path: "/esg", label: "ESG" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Determine text color based on scroll and theme
  const getTextColor = (isActiveLink: boolean) => {
    if (isActiveLink) {
      return "text-[#B8860B] dark:text-[#D4AF37]";
    }
    // When scrolled in dark mode, use dark text for visibility
    if (scrolled && theme === "dark") {
      return "text-gray-900 hover:text-gray-700";
    }
    return "text-foreground/80 hover:text-foreground";
  };

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-sm flex items-center justify-center">
              <span className="text-white font-semibold text-lg">X</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-semibold tracking-tight transition-colors group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] ${
                scrolled && theme === "dark" ? "text-gray-900" : "text-foreground"
              }`}>
                X-Office Parks
              </span>
              <span className={`text-[10px] uppercase tracking-wider ${
                scrolled && theme === "dark" ? "text-gray-600" : "text-muted-foreground"
              }`}>
                Premium Workspaces
              </span>
            </div>
          </Link> */}
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">

            <img
              src={logo}
              alt="X-Office Parks Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col">
              <span
                className={`text-lg font-semibold tracking-tight transition-colors group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] ${
                  scrolled && theme === "dark"
                    ? "text-gray-900"
                    : "text-foreground"
                }`}
              >
                X-Office Parks
              </span>

              <span
                className={`text-[10px] uppercase tracking-wider ${
                  scrolled && theme === "dark"
                    ? "text-gray-600"
                    : "text-muted-foreground"
                }`}
              >
                Premium Workspaces
              </span>
            </div>

          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`relative z-10 ${getTextColor(isActive(link.path))}`}
                >
                  {link.label}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#B8860B]/10 dark:bg-[#D4AF37]/10 rounded"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className={`w-5 h-5 ${scrolled ? "text-gray-900" : "text-[#D4AF37]"}`} />
                ) : (
                  <Moon className="w-5 h-5 text-[#B8860B]" />
                )}
              </button>
            )}

            {/* Tenant Portal Button */}
            <Link
              to="/tenant-portal"
              className="hidden md:flex px-5 py-2.5 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-sm font-medium rounded hover:shadow-lg hover:shadow-[#B8860B]/20 transition-all"
            >
              Tenant Portal
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}