"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

// Your slide data is correct and remains the same.
const heroSlides = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    subtitle: "Revolutionary Titanium Design",
    description:
      "Experience the latest in mobile technology with our premium iPhone collection",
    price: "৳155,000",
    originalPrice: "৳165,000",
    image: "/hero-iphone.jpg",
    bgGradient: "from-gray-900 via-blue-900 to-purple-900",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "AI-Powered Excellence",
    description:
      "Unleash creativity with the most advanced Galaxy smartphone ever made",
    price: "৳135,000",
    originalPrice: "৳145,000",
    image: "/hero-samsung.jpg",
    bgGradient: "from-gray-900 via-indigo-900 to-cyan-900",
  },
  {
    id: 3,
    title: "Premium Accessories",
    subtitle: "Complete Your Setup",
    description: "Original accessories and cases for all your mobile devices",
    price: "Starting ৳500",
    originalPrice: null,
    image: "/hero-accessories.jpg",
    bgGradient: "from-gray-900 via-emerald-900 to-teal-900",
  },
];

// --- The Mobile Layout (Correct and Unchanged) ---
const MobileLayout = ({ slide }: { slide: (typeof heroSlides)[0] }) => (
  <div className={`w-full bg-gradient-to-br ${slide.bgGradient} pt-10 pb-12`}>
    <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
      <div className="relative w-full max-w-[280px] max-h-[300px] overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          width={400}
          height={400}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="text-white space-y-3">
        <h1 className="text-4xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-luxury-gold to-white bg-clip-text text-transparent">
            {slide.title}
          </span>
        </h1>
        <h2 className="text-lg font-medium text-gray-300">{slide.subtitle}</h2>
      </div>
      <div className="flex items-end gap-3">
        <div className="text-3xl font-bold text-luxury-gold">{slide.price}</div>
        {slide.originalPrice && (
          <div className="text-md text-gray-400 line-through">
            {slide.originalPrice}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-3 px-4 pt-2">
        <Button
          size="lg"
          className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold"
        >
          Shop Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-black hover:bg-white hover:text-black"
        >
          Visit Store
        </Button>
      </div>
    </div>
  </div>
);

// --- The Desktop Layout - RESTORED TO YOUR ORIGINAL PERFECT VERSION ---
const DesktopLayout = ({ slide }: { slide: (typeof heroSlides)[0] }) => (
  // This JSX is now guaranteed to be the same consistent layout for all slides.
  <div
    className={`h-full w-full bg-gradient-to-br ${slide.bgGradient} flex items-center`}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="text-white space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-luxury-gold to-white bg-clip-text text-transparent">
                {slide.title}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
              {slide.subtitle}
            </h2>
          </div>

          <p className="text-lg text-gray-300 max-w-lg">{slide.description}</p>

          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-luxury-gold">
              {slide.price}
            </div>
            {slide.originalPrice && (
              <div className="text-lg text-gray-400 line-through">
                {slide.originalPrice}
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-gray-200"
            >
              Visit Store
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-luxury-gold fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div>•</div>
            <div>1000+ Happy Customers</div>
            <div>•</div>
            <div>Genuine Products</div>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-3xl transform scale-150"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              width={500}
              height={500}
              priority
              className="relative z-10 max-w-md h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* This container correctly handles the height for both layouts */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {isMobile ? (
          <MobileLayout slide={activeSlide} />
        ) : (
          <DesktopLayout slide={activeSlide} />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute z-20 inset-y-0 left-2 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/10 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute z-20 inset-y-0 right-2 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/10 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? "bg-luxury-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
