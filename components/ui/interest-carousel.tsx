"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InterestItem {
  title: string;
  category: string;
  opinion: string;
  whyILoveIt: string;
  image?: string;
  year?: number;
  rating?: number;
}

interface InterestCarouselProps {
  items: InterestItem[];
  title: string;
}

export default function InterestCarousel({ items, title }: InterestCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <div className="flex justify-center space-x-2 mb-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-110' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Carousel Card */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 min-h-[400px]">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">{currentItem.title}</h3>
                  {currentItem.year && (
                    <Badge variant="outline" className="border-green-500/50 text-green-300">
                      {currentItem.year}
                    </Badge>
                  )}
                </div>
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 mb-4">
                  {currentItem.category}
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">My Opinion</h4>
                  <p className="text-slate-300 leading-relaxed">{currentItem.opinion}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Why I Love It</h4>
                  <p className="text-slate-300 leading-relaxed">{currentItem.whyILoveIt}</p>
                </div>
              </div>
            </div>

            {/* Image placeholder or visual element */}
            <div className="w-full lg:w-80 h-64 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-lg flex items-center justify-center border border-slate-600/30">
              <div className="text-6xl opacity-30">
                {title.includes('Cinema') && '🎬'}
                {title.includes('Music') && '🎵'}
                {title.includes('TV') && '📺'}
                {title.includes('Gaming') && '🎮'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="border-slate-600 text-slate-300 hover:bg-blue-600/20 hover:border-blue-500/50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-slate-400 px-4">
          {currentIndex + 1} of {items.length}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="border-slate-600 text-slate-300 hover:bg-blue-600/20 hover:border-blue-500/50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}