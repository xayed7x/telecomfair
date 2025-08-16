
"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const { totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment here.
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase.",
    });
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" type="text" required />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" type="text" required />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" type="text" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" type="text" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" type="text" placeholder="XXX" required />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-luxury-dark text-white hover:bg-luxury-dark/90">
              Place Order
            </Button>
          </form>
        </div>
        <div className="lg:col-span-1">
          <div className="p-6 border rounded-lg sticky top-24">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
