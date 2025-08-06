import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Headphones, Wrench } from 'lucide-react';

const ServiceBoxes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-luxury-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-luxury-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Mobiles</h3>
              <p className="text-gray-600">Latest smartphones from top brands with official warranty</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessories</h3>
              <p className="text-gray-600">Original cases, chargers & more accessories for all devices</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Repair Services</h3>
              <p className="text-gray-600">Professional mobile servicing and repair solutions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;