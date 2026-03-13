import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-light text-[#B8860B] dark:text-[#D4AF37] mb-4">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-medium rounded hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-muted/30 border border-border text-foreground font-medium rounded hover:bg-muted transition-all"
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Portfolio
          </Link>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-muted-foreground mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/about" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline">
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/portfolio" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline">
              Portfolio
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/tenant-experience" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline">
              Tenant Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-[#B8860B] dark:text-[#D4AF37] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
