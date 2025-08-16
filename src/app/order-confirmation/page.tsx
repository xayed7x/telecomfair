
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const OrderConfirmationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Your order has been placed successfully. You will receive a confirmation email shortly.
      </p>
      <Link href="/shop">
        <Button size="lg">Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
