
import { NextPage } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" className="dark:bg-gray-800 dark:text-white" />
              <Input type="email" placeholder="Your Email" className="dark:bg-gray-800 dark:text-white" />
              <Textarea placeholder="Your Message" className="dark:bg-gray-800 dark:text-white" />
              <Button size="lg" className="w-full bg-luxury-dark text-white hover:bg-luxury-dark/90">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Information</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold dark:text-white">Our Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">Main Road, Keshabpur, Khulna, Bangladesh</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold dark:text-white">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">contact@telecomfair.com</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold dark:text-white">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">+880 1234-567890</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
