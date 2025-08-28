import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-saffron">
                <span className="text-lg font-bold text-primary-foreground">ગુ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Gujarat Nasta</span>
                <span className="text-xs opacity-80">Authentic Sukha Nasta</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Bringing you the authentic taste of Gujarat with traditional recipes 
              passed down through generations. Made with love, delivered fresh.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Home
              </a>
              <a href="/products" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                All Products
              </a>
              <a href="/about" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Contact
              </a>
              <a href="/blog" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Recipes & Blog
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <a href="/products/sev" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Sev & Bhujia
              </a>
              <a href="/products/farsan" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Traditional Farsan
              </a>
              <a href="/products/mathri" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Mathri & Crackers
              </a>
              <a href="/products/mix" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Snack Mixes
              </a>
              <a href="/products/festive" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                Festival Specials
              </a>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@gujaratnasta.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <p className="text-xs opacity-80">Get updates on new products and offers</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80 text-center md:text-left">
              © 2024 Gujarat Nasta. All rights reserved. | Made with ❤️ in Gujarat
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="/privacy" className="hover:opacity-100 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:opacity-100 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/shipping" className="hover:opacity-100 hover:text-primary transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;