import { ShoppingCart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-saffron">
            <span className="text-lg font-bold text-primary-foreground">ગુ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Gujarat Nasta</span>
            <span className="text-xs text-muted-foreground">Authentic Sukha Nasta</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">+91 98765 43210</span>
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-primary text-primary-foreground">
              0
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;