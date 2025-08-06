import Link from 'next/link';
import { Star, MapPin, Phone, Clock } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceBoxes from '@/components/ServiceBoxes';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products, testimonials } from '@/data/mockData';

const Home = () => {
  // Featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Service Boxes */}
      <ServiceBoxes />

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-luxury-dark to-luxury-blue bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium mobile phones and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop">
              <Button size="lg" className="bg-luxury-dark text-white hover:bg-luxury-dark/90">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-luxury-dark to-luxury-blue bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Trusted by hundreds of satisfied customers in Keshabpur</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-luxury-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact CTA */}
      <section className="py-16 bg-luxury-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-luxury-gold to-white bg-clip-text text-transparent">
                  Visit Our Shop in Keshabpur
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience our premium collection in person. Get expert advice and hands-on 
                support from our experienced team.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">Main Road, Keshabpur</div>
                    <div className="text-gray-300">Khulna, Bangladesh</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">+880 1234-567890</div>
                    <div className="text-gray-300">Call for instant support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">Open 7 Days a Week</div>
                    <div className="text-gray-300">Sat-Thu: 9AM-9PM | Fri: 2PM-9PM</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90">
                    Get Directions
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-luxury-dark">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/location-map.jpg" 
                alt="Our Shop Location"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-luxury-dark to-luxury-blue bg-clip-text text-transparent">
                Why Choose Telecom Fair?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-luxury-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-luxury-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Genuine Products</h3>
                <p className="text-gray-600">
                  100% authentic products with official warranty from authorized dealers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  Professional after-sales service and technical support from our team
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Local Presence</h3>
                <p className="text-gray-600">
                  Trusted local business serving Keshabpur community since 2020
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;