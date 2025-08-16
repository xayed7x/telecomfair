
import { services } from "@/data/mockData";
import { NextPage } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ServicesPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of professional repair and maintenance services for your mobile devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                  <p className="font-semibold text-lg">Starts from: ${service.price}</p>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
