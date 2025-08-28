import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-snacks.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-warm overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic Gujarati Sukha Nasta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 10,000+ families
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Authentic 
            <span className="text-primary block">Gujarati</span>
            <span className="text-transparent bg-gradient-gold bg-clip-text">Sukha Nasta</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Traditional recipes passed down through generations. Made with love, 
            delivered fresh to your doorstep. Experience the authentic taste of Gujarat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-saffron hover:bg-saffron-dark text-primary-foreground shadow-warm">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              View Products
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">100% Authentic Recipes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Fresh & Crispy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Free Home Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;