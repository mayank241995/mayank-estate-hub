import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const words = ["Home", "Villa", "Land", "House"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // pehle fade-out karo
      setFade(false);

      // 500ms baad word change karke fade-in karo
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2500); // har 2.5 sec me change

    return () => clearInterval(interval);
  }, []);

  const scrollToProperties = () => {
    const element = document.getElementById("properties");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-8">
          Find Your{" "}
          <span
            className={`text-yellow-400 inline-block transition-all duration-500 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {words[currentWordIndex]}
          </span>
        </h1>

       <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto px-4">
  Discover Your Ideal Lifestyle in a Premier Gated Community with Over <span className="font-semibold text-yellow-400">40 Luxurious Amenities</span>, 
  just minutes from <span className="font-semibold">Vemgal KIADB Industrial Area</span>and the <span className="font-semibold">Satellite Ring Road</span>. 
  Unlock the door to your dream lifestyle today!
</p>
        <Button variant="gold"size="lg"onClick={scrollToProperties}className="text-lg px-8 py-6 rounded-full  mt-8"
        >
          Explore Properties
        </Button>
      </div>
    {/* Scroll indicator */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProperties} 
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
          </section>
        );
};

export default Hero;
