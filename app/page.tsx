import Image from "next/image";
import React from "react";
import Link from "next/link";

// Importing images
import OpenFOAM from "@/public/images/svg/OpenFOAMLogo.svg";
import Matlab from "@/public/images/svg/MatlabLogo.svg";
import Python from "@/public/images/svg/PythonLogo.svg";
import Java from "@/public/images/svg/JavaLogo.svg";
import ReactNative from "@/public/images/svg/ReactLogo.svg";
import TS from "@/public/images/svg/TSLogo.svg";

// Components
import Menu from "@/components/Layout/Menu";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Style definition
const techStackItems = [
  { icon: OpenFOAM, name: "OpenFOAM", category: "Engineering" },
  { icon: Matlab, name: "MATLAB", category: "Engineering" },
  { icon: Python, name: "Python", category: "Programming" },
  { icon: Java, name: "Java", category: "Programming" },
  { icon: ReactNative, name: "React", category: "Frontend" },
  { icon: TS, name: "TypeScript", category: "Programming" }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-auto bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10 animate-pulse"></div>
      </div>

      {/* Fixed navigation at the top */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <Menu/>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-8 pt-24">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 bg-clip-text text-transparent">
            Klaudio Luku
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            Engineering Excellence • Software Innovation • Technical Leadership
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Bridging the gap between engineering principles and cutting-edge software development, 
            with expertise spanning from computational fluid dynamics to modern web applications.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="/experience">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
              View My Experience
            </Button>
          </Link>
          <Link href="/projects/software">
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50">
              Explore Projects
            </Button>
          </Link>
        </div>

        {/* Tech Stack Section */}
        <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStackItems.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} Logo`}
                      width={48}
                      height={48}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-white text-sm font-medium mt-2">{tech.name}</p>
                  <Badge variant="secondary" className="text-xs mt-1 bg-slate-700/50 text-slate-400">
                    {tech.category}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <Link href="/interests" className="group">
            <Card className="bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Personal Interests
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Cinema, Music, Gaming & More
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/skills" className="group">
            <Card className="bg-slate-800/30 border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                  Skills & Expertise
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Technical proficiencies
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/contact" className="group">
            <Card className="bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Get In Touch
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Let's collaborate
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}