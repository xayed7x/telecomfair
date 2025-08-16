
import { NextPage } from "next";
import { testimonials } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const AboutPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Telecom Fair
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for premium mobile devices and expert services in Keshabpur. Since 2020, we have been committed to providing our community with genuine products, fair prices, and exceptional customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img src="/hero-accessories.jpg" alt="Our Store" className="rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our mission is to bridge the technology gap by making the latest mobile devices and accessories accessible to everyone in our community. We believe in building lasting relationships with our customers through transparency, reliability, and a shared passion for technology.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Providing 100% genuine products with official warranties.</li>
              <li>Offering expert and timely customer service.</li>
              <li>Ensuring competitive and transparent pricing.</li>
              <li>Contributing positively to our local community.</li>
            </ul>
          </div>
        </div>

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
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
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
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4 dark:border-gray-700">
                    <div className="font-semibold text-luxury-dark dark:text-luxury-gold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

      </div>
    </div>
  );
};

export default AboutPage;
