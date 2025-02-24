"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Volume2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <Volume2 className="h-8 w-8 text-indigo-600 animate-pulse" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            VoiceFlow
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            Features
          </button>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            Pricing
          </button>
          <SignedOut>
            <SignInButton>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 font-medium">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="px-4">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 hover:scale-110 transition-transform",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <button className="text-gray-600 hover:text-indigo-600 transition-colors font-medium py-2">
              Features
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors font-medium py-2">
              Pricing
            </button>
            <SignedOut>
              <SignInButton>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 font-medium w-full">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="px-4">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 hover:scale-110 transition-transform",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
