import React from "react";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InterestCarousel from "@/components/ui/interest-carousel";

export default function GamingPage() {
  const favoriteGames = [
    {
      title: "Portal 2",
      category: "Puzzle/Platformer",
      year: 2011,
      opinion: "Valve created the perfect blend of gameplay and narrative. Portal 2 uses its puzzle mechanics not just as challenges but as storytelling devices, creating emotional moments through environmental design and brilliant writing.",
      whyILoveIt: "It's a masterclass in game design where every element serves multiple purposes. The puzzles teach you the rules while advancing the story. GLaDOS and Wheatley are some of the best-written characters in gaming, and the co-op mode extends the experience perfectly."
    },
    {
      title: "The Witcher 3: Wild Hunt",
      category: "Action RPG",
      year: 2015,
      opinion: "CD Projekt RED set a new standard for open-world storytelling. Every quest, no matter how small, feels meaningful and connected to the world. Geralt's journey is deeply personal while addressing larger themes about family, choice, and consequence.",
      whyILoveIt: "The side quests are often better than main stories in other games. The world feels lived-in and real, not just a backdrop for combat. The way player choices ripple through the narrative creates a unique sense of agency and responsibility."
    },
    {
      title: "Half-Life 2",
      category: "First-Person Shooter",
      year: 2004,
      opinion: "Valve revolutionized environmental storytelling and physics-based gameplay. Half-Life 2 shows instead of tells, creating immersion through consistent world-building and intuitive game mechanics that feel natural.",
      whyILoveIt: "It trusted players to understand complex ideas through gameplay rather than exposition. The physics engine wasn't just a technical showcase - it was integral to puzzles and combat. The atmosphere of oppression under the Combine is communicated entirely through environmental design."
    },
    {
      title: "Civilization VI",
      category: "Turn-Based Strategy",
      year: 2016,
      opinion: "Firaxis created the ultimate 'just one more turn' experience. Civ VI balances historical accuracy with engaging gameplay, creating emergent narratives as civilizations rise, clash, and fall throughout history.",
      whyILoveIt: "It's digital chess on a massive scale. Every decision has consequences that ripple through centuries. The district system encourages long-term planning, and the AI personalities make each leader feel distinct. It satisfies both the engineer and historian in me."
    },
    {
      title: "Ori and the Will of the Wisps",
      category: "Metroidvania/Platformer",
      year: 2020,
      opinion: "Moon Studios crafted an emotional journey through stunning hand-painted environments and precise platforming. It proves that games can be beautiful art while delivering challenging, satisfying gameplay.",
      whyILoveIt: "The visual design is breathtaking - every frame could be a painting. But it's not just pretty; the level design is intricate and rewarding. The way it handles themes of loss, growth, and sacrifice through minimal dialogue but maximum emotional impact is incredible."
    },
    {
      title: "Factorio",
      category: "Automation/Simulation",
      year: 2020,
      opinion: "Wube Software created the ultimate engineering game. Factorio scratches the same itch as programming - breaking down complex problems into smaller, manageable systems and optimizing for efficiency.",
      whyILoveIt: "It's programming made visual and tactile. The satisfaction of designing an efficient production line, then scaling it up, then optimizing it further - it never ends. It appeals directly to the engineer's mindset of continuous improvement and systems thinking."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-gradient-to-br from-slate-900 via-emerald-900/20 to-blue-900/20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      </div>
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-emerald-500/20">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-7xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-600 bg-clip-text text-transparent">
              Gaming & Interactive Media
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Interactive experiences that blend storytelling, problem-solving, and creativity
            </p>
          </div>

          {/* Main Carousel */}
          <div className="mb-16">
            <InterestCarousel 
              items={favoriteGames}
              title="Games That Shaped My Understanding of Interactive Design"
            />
          </div>

          {/* Philosophy Section */}
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Gaming Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Gaming is the only medium where the audience actively participates in the narrative. Great games 
                  don't just tell stories - they let you live them. They teach through interaction, create empathy 
                  through agency, and solve problems through play. As both an engineer and creative person, I'm 
                  fascinated by how games balance technical complexity with intuitive user experience.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Like well-designed software, great games have elegant systems that handle complexity behind simple 
                  interfaces. They're interactive problem-solving experiences that can teach us about design, 
                  narrative, and human psychology. The best games make their mechanics feel natural while revealing 
                  deeper truths about choice, consequence, and creativity.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}