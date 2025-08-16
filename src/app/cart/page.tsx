
"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({cartCount} items)</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Link href="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p className="text-lg font-bold text-luxury-blue">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-20 text-center"
                      />
                    </div>
                    <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between font-bold text-xl mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link href="/checkout">
                <Button size="lg" className="w-full bg-luxury-dark text-white hover:bg-luxury-dark/90">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
