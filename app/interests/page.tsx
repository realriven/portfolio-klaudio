import React from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InterestsPage() {
  const interests = [
    {
      title: "Cinema & Film",
      href: "/interests/cinema",
      description: "Exploring storytelling through the lens of cinema - from blockbusters to art house films",
      color: "from-purple-500 to-purple-700",
      emoji: "🎬"
    },
    {
      title: "Music & Sound",
      href: "/interests/music", 
      description: "The soundtrack to creativity - how music shapes my work and inspiration",
      color: "from-pink-500 to-pink-700",
      emoji: "🎵"
    },
    {
      title: "TV Series & Shows",
      href: "/interests/tv-series",
      description: "Exploring complex narratives and character development through episodic storytelling",
      color: "from-red-500 to-red-700",
      emoji: "📺"
    },
    {
      title: "Gaming & Interactive Media",
      href: "/interests/gaming",
      description: "Exploring complex systems, problem-solving, and strategic thinking through interactive experiences",
      color: "from-orange-500 to-orange-700",
      emoji: "🎮"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-black">
      <BackgroundGradientAnimation className="absolute inset-0 z-0 opacity-30" />
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800/50">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-6xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Personal Interests
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond engineering and code - the passions that fuel creativity and provide inspiration
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {interests.map((interest, index) => (
              <Link key={index} href={interest.href} className="group">
                <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group-hover:scale-105 h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{interest.emoji}</span>
                      <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${interest.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                        {interest.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {interest.description}
                    </p>
                    <div className="mt-4 text-purple-400 group-hover:text-purple-300 transition-colors font-medium">
                      Explore →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Philosophy Section */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Life Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I believe that well-rounded interests make for better problem-solvers. The creativity sparked by 
                  film analysis informs my approach to user experience design. The pattern recognition developed 
                  through gaming enhances my debugging skills. The emotional intelligence gained from compelling 
                  narratives improves my ability to communicate complex technical concepts.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  These interests aren't just hobbies - they're integral parts of who I am as an engineer, 
                  developer, and creative problem-solver. They provide fresh perspectives, inspire innovative 
                  solutions, and remind me that the best technical work comes from understanding and connecting 
                  with human experiences.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}