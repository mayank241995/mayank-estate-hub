import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      beds: 5,
      baths: 4,
      area: "4,500 sq ft",
      type: "Villa"
    },
    {
      id: 2,
      image: property2,
      title: "Modern Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      area: "2,800 sq ft",
      type: "Penthouse"
    },
    {
      id: 3,
      image: property3,
      title: "Contemporary Townhouse",
      location: "San Francisco, CA",
      price: "$1,800,000",
      beds: 4,
      baths: 3,
      area: "3,200 sq ft",
      type: "Townhouse"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most desirable locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="property-card bg-card rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
                  {property.type}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg font-bold">
                  {property.price}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <Button variant="gold" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;