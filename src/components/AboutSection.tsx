import { CheckCircle, Users, Award, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "100% Authentic",
    description: "Traditional recipes passed down through generations"
  },
  {
    icon: Users,
    title: "Family Business",
    description: "Three generations of snack-making expertise"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients and spices used"
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Made fresh and delivered within 24 hours"
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Authentic Taste of <span className="text-primary">Gujarat</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over three generations, our family has been crafting the most authentic 
              Gujarati sukha nasta using time-honored recipes and traditional methods. 
              Each batch is made with love, using only the finest ingredients sourced 
              directly from local farmers.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Heritage Recipes:</span> 
                  {" "}Authentic formulations preserved since 1945
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Quality Promise:</span> 
                  {" "}No artificial colors, preservatives, or synthetic flavors
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Fresh Guarantee:</span> 
                  {" "}Made in small batches to ensure maximum freshness
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-saffron mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;