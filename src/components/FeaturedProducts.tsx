import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import product images
import sevImage from "@/assets/product-sev.jpg";
import bhujiaImage from "@/assets/product-bhujia.jpg";
import mathriImage from "@/assets/product-mathri.jpg";
import farsanImage from "@/assets/product-farsan.jpg";

const products = [
  {
    id: 1,
    name: "Traditional Sev",
    price: "₹299",
    originalPrice: "₹399",
    image: sevImage,
    rating: 4.8,
    reviews: 156,
    description: "Crispy gram flour noodles made with traditional spices",
    badge: "Best Seller",
    weight: "500g"
  },
  {
    id: 2,
    name: "Aloo Bhujia",
    price: "₹249",
    originalPrice: "₹329",
    image: bhujiaImage,
    rating: 4.7,
    reviews: 89,
    description: "Spicy potato-based crispy snack with aromatic herbs",
    badge: "Popular",
    weight: "400g"
  },
  {
    id: 3,
    name: "Gujarati Mathri",
    price: "₹199",
    originalPrice: "₹259",
    image: mathriImage,
    rating: 4.9,
    reviews: 203,
    description: "Flaky, crispy round crackers perfect with tea",
    badge: "Traditional",
    weight: "300g"
  },
  {
    id: 4,
    name: "Special Farsan Mix",
    price: "₹349",
    originalPrice: "₹449",
    image: farsanImage,
    rating: 4.6,
    reviews: 124,
    description: "Assorted traditional snacks in one delicious mix",
    badge: "Premium",
    weight: "600g"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites loved by thousands of customers across India
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-warm transition-all duration-300 border-0 shadow-card">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                  
                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 h-8 w-8 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Discount Badge */}
                  <div className="absolute bottom-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                    25% OFF
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                    <span className="text-xs text-muted-foreground">{product.weight}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gradient-saffron hover:bg-saffron-dark text-primary-foreground">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;