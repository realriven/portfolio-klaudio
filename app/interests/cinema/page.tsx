import React from "react";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InterestCarousel from "@/components/ui/interest-carousel";

export default function CinemaPage() {
  const favoriteMovies = [
    {
      title: "Inception",
      category: "Sci-Fi Thriller",
      year: 2010,
      opinion: "A masterpiece of layered storytelling that challenges the audience to think deeply about reality, dreams, and the nature of consciousness. Nolan's intricate plot structure mirrors the complexity of the dreams within dreams concept.",
      whyILoveIt: "It's not just a movie; it's a puzzle that rewards multiple viewings. Each watch reveals new details and deeper meanings. The way it combines philosophical questions with stunning practical effects creates an experience that stays with you long after leaving the theater."
    },
    {
      title: "The Godfather",
      category: "Crime Drama",
      year: 1972,
      opinion: "The ultimate character study disguised as a crime saga. Coppola crafted a story that transcends its genre to become a meditation on power, family, and the corruption of the American Dream.",
      whyILoveIt: "The film operates on multiple levels - it's simultaneously an intimate family drama and an epic tale of power. The attention to detail, the stellar performances, and the way it makes you empathize with morally complex characters is simply extraordinary."
    },
    {
      title: "Blade Runner 2049",
      category: "Sci-Fi Drama",
      year: 2017,
      opinion: "Villeneuve achieved the impossible - creating a sequel that honors the original while standing completely on its own. The film explores themes of identity, memory, and what it means to be human with stunning visual poetry.",
      whyILoveIt: "The cinematography is breathtaking, but it's not just beautiful for beauty's sake. Every frame serves the story and emotional journey. It's a rare sequel that actually deepens the philosophical questions of the original rather than simply repeating them."
    },
    {
      title: "Spirited Away",
      category: "Animated Fantasy",
      year: 2001,
      opinion: "Miyazaki's masterpiece that proves animation can be the most powerful storytelling medium. It's a coming-of-age story wrapped in environmental allegory, told through the most imaginative fantasy world ever created.",
      whyILoveIt: "The hand-drawn animation has a warmth and soul that CGI often lacks. Every creature, every background detail tells a story. It combines childlike wonder with mature themes in a way that speaks to both kids and adults on different levels."
    },
    {
      title: "Parasite",
      category: "Dark Comedy Thriller",
      year: 2019,
      opinion: "Bong Joon-ho created a perfect blend of genres that serves as a scathing critique of class inequality. The film is simultaneously funny, thrilling, and deeply disturbing - a mirror held up to modern society.",
      whyILoveIt: "It's masterful filmmaking that uses every cinematic tool - production design, cinematography, sound design - to reinforce its themes. The way it shifts tones while maintaining narrative coherence is incredible. It's both entertaining and intellectually challenging."
    },
    {
      title: "Mad Max: Fury Road",
      category: "Action Adventure",
      year: 2015,
      opinion: "George Miller proved that action cinema can be both visceral and artistic. It's essentially a two-hour chase scene that manages to have more character development and storytelling than most dialogue-heavy dramas.",
      whyILoveIt: "The practical effects and stunts create a kinetic energy that CGI can't match. But beyond the spectacle, it's a story about redemption, survival, and hope told almost entirely through visual storytelling. It's pure cinema."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10 animate-pulse"></div>
      </div>
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-7xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 bg-clip-text text-transparent">
              Cinema & Film
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Exploring storytelling through the lens of cinema - from blockbusters to art house films
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <InterestCarousel 
              items={favoriteMovies}
              title="Favorite Films & Why They Matter"
            />
          </div>

          {/* Philosophy Section */}
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Cinema Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  I believe cinema is one of the most powerful storytelling mediums because it combines visual artistry, 
                  narrative structure, performance, and technical craft into a singular experience. Great films don't just 
                  entertain; they challenge our perspectives, evoke emotions we didn't know we had, and create lasting 
                  connections to the human experience.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Like engineering elegant solutions to complex problems, filmmaking requires balancing multiple variables 
                  - story, character, visuals, sound - to create something greater than the sum of its parts. The best 
                  films are like well-architected systems: every element serves a purpose and contributes to the overall 
                  vision.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}