import React from "react";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InterestCarousel from "@/components/ui/interest-carousel";

export default function MusicPage() {
  const favoriteAlbums = [
    {
      title: "The Dark Side of the Moon",
      category: "Progressive Rock",
      year: 1973,
      opinion: "Pink Floyd created a sonic journey that transcends individual songs to become a complete experience. The album explores themes of conflict, greed, time, and mental illness with unprecedented musical sophistication.",
      whyILoveIt: "It's like listening to a perfectly engineered system where every element serves the whole. The seamless transitions, the way themes develop and return, the balance between experimental soundscapes and memorable melodies - it's musical architecture at its finest."
    },
    {
      title: "Kind of Blue",
      category: "Jazz",
      year: 1959,
      opinion: "Miles Davis captured lightning in a bottle with this modal jazz masterpiece. It's simultaneously accessible and infinitely complex, revealing new layers with each listen.",
      whyILoveIt: "The improvisation feels effortless yet purposeful, like watching master craftsmen work. There's a mathematical beauty to how the musicians communicate and build upon each other's ideas. It proves that the most profound statements often come from simplicity executed perfectly."
    },
    {
      title: "Radiohead - OK Computer",
      category: "Alternative Rock",
      year: 1997,
      opinion: "Radiohead predicted our digital alienation two decades before it became obvious to everyone else. The album perfectly captures the anxiety of technological progress and social disconnection.",
      whyILoveIt: "It's prescient in ways that still give me chills. The way they use electronic elements not as gimmicks but as emotional tools, creating an atmosphere of beautiful melancholy that somehow feels both futuristic and timeless."
    },
    {
      title: "Daft Punk - Random Access Memories",
      category: "Electronic",
      year: 2013,
      opinion: "A love letter to disco, funk, and the golden age of studio recording. Daft Punk proved that electronic music could be both cutting-edge and deeply rooted in musical tradition.",
      whyILoveIt: "The production quality is insane - every instrument sits perfectly in the mix. It's electronic music that celebrates human musicianship rather than replacing it. The album has this nostalgic future feeling that's uniquely beautiful."
    },
    {
      title: "Björk - Homogenic",
      category: "Experimental Electronic",
      year: 1997,
      opinion: "Björk created a perfect fusion of organic and electronic elements, using string arrangements alongside cutting-edge beats to explore themes of love, nature, and identity.",
      whyILoveIt: "It's fearlessly experimental yet emotionally direct. The way she uses her voice as another instrument, the innovative production techniques, the raw emotional power - it expanded my understanding of what music could be."
    },
    {
      title: "Bach - The Well-Tempered Clavier",
      category: "Classical/Baroque",
      year: 1722,
      opinion: "Bach's mathematical approach to composition creates music that is both intellectually satisfying and emotionally moving. It's the perfect intersection of structure and expression.",
      whyILoveIt: "As an engineer, I'm fascinated by how Bach solved musical problems with such elegance. Every note has a purpose, every voice serves the whole, yet it never feels mechanical. It's like studying the source code of Western music."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      </div>
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-green-500/20">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-7xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent">
              Music & Sound
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Exploring the mathematical beauty and emotional power of musical expression
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <InterestCarousel 
              items={favoriteAlbums}
              title="Albums That Changed How I Think About Music"
            />
          </div>

          {/* Philosophy Section */}
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Music Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Music is mathematics made beautiful. There's something deeply satisfying about how rhythm, harmony, 
                  and melody follow mathematical principles while creating purely emotional experiences. Whether it's 
                  Bach's perfect counterpoint, the complex time signatures in prog rock, or the innovative production 
                  techniques in electronic music, I'm drawn to the technical craftsmanship behind great music.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Like engineering elegant solutions, the best music balances complexity with accessibility, innovation 
                  with tradition. It's problem-solving in sound - how do you create something that moves people while 
                  pushing the boundaries of what's possible? That intersection of art and science is endlessly fascinating 
                  to me.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}