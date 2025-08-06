"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ModeToggle = () => {
    const { setTheme, theme } = useTheme();
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  };

  return (
    <header className="bg-luxury-dark text-white shadow-2xl sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-luxury-gray py-2 md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-luxury-gold" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-luxury-gold" />
              <span>Keshabpur, Khulna</span>
            </div>
          </div>
          <div className="text-luxury-gold font-medium">
            ★ Trusted Since 2020 ★
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-luxury-gold text-luxury-dark p-2 rounded-lg font-bold text-xl">
              TC
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold to-white bg-clip-text text-transparent">
                Telecom Fair
              </h1>
              <p className="text-xs text-gray-300">Premium Mobile Experience</p>
            </div>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search phones, accessories..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="hover:text-luxury-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-luxury-gold transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/services"
              className="hover:text-luxury-gold transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-luxury-gold transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-luxury-gold transition-colors font-medium"
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="border-luxury-gold bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90"
            >
              Visit Store
            </Button>
            <ModeToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search phones, accessories..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block rounded-md py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block rounded-md py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              Shop
            </Link>
            <Link
              href="/services"
              className="block rounded-md py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block rounded-md py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-md py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="w-full mt-2 border-luxury-gold bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90"
            >
              Visit Store
            </Button>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
