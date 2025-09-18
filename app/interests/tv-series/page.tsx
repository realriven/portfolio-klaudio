import React from "react";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InterestCarousel from "@/components/ui/interest-carousel";

export default function TVSeriesPage() {
  const favoriteSeries = [
    {
      title: "Breaking Bad",
      category: "Crime Drama",
      year: 2008,
      opinion: "Vince Gilligan created the perfect character transformation study. Walter White's evolution from sympathetic teacher to ruthless criminal is executed with surgical precision, showing how small compromises can lead to complete moral collapse.",
      whyILoveIt: "It's masterclass in pacing and character development. Every episode serves the larger narrative while being compelling on its own. The attention to detail, from the chemistry accuracy to the visual symbolism, shows what happens when writers respect their audience's intelligence."
    },
    {
      title: "True Detective (Season 1)",
      category: "Crime Thriller",
      year: 2014,
      opinion: "Nic Pizzolatto crafted a meditation on time, philosophy, and human nature disguised as a police procedural. McConaughey and Harrelson's performances elevate already excellent writing to create something truly haunting.",
      whyILoveIt: "The non-linear storytelling perfectly mirrors the themes about time being a flat circle. It's philosophical without being pretentious, dark without being nihilistic. The cinematography and atmosphere create a sense of dread that stays with you."
    },
    {
      title: "The Sopranos",
      category: "Crime Drama",
      year: 1999,
      opinion: "David Chase revolutionized television by proving that TV could be as complex and nuanced as the best films. Tony Soprano remains one of the most complex characters ever written - simultaneously sympathetic and monstrous.",
      whyILoveIt: "It's therapy sessions, family dinners, and brutal violence all woven together into something that feels completely real. The way it explores masculinity, family, and the American Dream through the lens of organized crime is brilliant."
    },
    {
      title: "Mad Men",
      category: "Period Drama",
      year: 2007,
      opinion: "Matthew Weiner created a perfect time capsule of 1960s America while telling deeply personal stories about identity, authenticity, and the cost of the American Dream. Don Draper's journey is about more than advertising - it's about who we really are.",
      whyILoveIt: "The period detail is impeccable, but it's not just nostalgia. It uses the past to examine timeless themes about identity and belonging. The visual storytelling is incredible - every costume, set piece, and camera angle serves the narrative."
    },
    {
      title: "Westworld (Season 1)",
      category: "Sci-Fi Drama",
      year: 2016,
      opinion: "Jonathan Nolan and Lisa Joy created a stunning exploration of consciousness, free will, and what makes us human. The puzzle-box narrative structure mirrors the maze at the show's center, rewarding careful viewers with deeper meaning.",
      whyILoveIt: "It asks the big questions about consciousness and reality while delivering incredible performances and stunning visuals. The way it reveals information changes everything you thought you knew. It's science fiction that uses its premise to explore philosophical depth."
    },
    {
      title: "The Wire",
      category: "Crime Drama",
      year: 2002,
      opinion: "David Simon created the most realistic portrayal of urban America ever put on television. It's not just about crime - it's about institutions, economics, and how systems shape and constrain human behavior.",
      whyILoveIt: "Each season examines a different aspect of Baltimore - police, docks, politics, education, media - showing how they're all connected. It's like a sociological study that happens to be incredibly entertaining. The writing treats every character with dignity and complexity."
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
              Television & Series
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Long-form storytelling that explores complex characters and themes over time
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <InterestCarousel 
              items={favoriteSeries}
              title="Series That Redefined Television for Me"
            />
          </div>

          {/* Philosophy Section */}
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Television Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Television at its best offers something cinema can't: time. The ability to develop characters and 
                  themes over dozens of hours creates a unique intimacy and depth. Great series don't just tell stories; 
                  they create lived experiences where we grow alongside the characters and explore complex themes with 
                  the nuance they deserve.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Like building complex software systems, great television requires long-term vision, careful planning, 
                  and the ability to evolve while maintaining consistency. The best showrunners are like lead architects 
                  - they understand that every episode must serve both the immediate story and the larger structure.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}