"use client"; 
import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {discount > 0 && (
            <Badge className="bg-red-500 text-white">-{discount}%</Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={handleWishlist}
          className={`absolute top-2 right-2 ${
            isWishlisted
              ? "bg-red-500 text-white border-red-500"
              : "bg-white/80"
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Link href={`/product/${product.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="bg-white text-luxury-dark hover:bg-luxury-gold"
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </Link>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Brand */}
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-luxury-blue transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-luxury-blue">
            ৳{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Features */}
        <div className="text-sm text-gray-600 mb-3">
          <p className="line-clamp-2">{product.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-luxury-dark text-white hover:bg-luxury-dark/90"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
          <div className="text-center">
            <Link href={`/product/${product.id}`}>
              <Button variant="link" className="text-luxury-blue p-0">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
