import React from "react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const personalValues = [
    "Innovation",
    "Precision",
    "Continuous Learning",
    "Problem Solving",
    "Collaboration",
    "Quality"
  ];

  const interests = [
    { category: "Cinema", description: "Film analysis and critique" },
    { category: "Music", description: "Diverse genres and live performances" },
    { category: "Gaming", description: "Strategy and narrative-driven games" },
    { category: "Technology", description: "Emerging tech and innovations" }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-black">
      <BackgroundGradientAnimation className="absolute inset-0 z-0 opacity-50" />
      
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate engineer and developer with a unique blend of technical expertise 
              and creative problem-solving skills.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Personal Story */}
            <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  My career began with a deep fascination for engineering principles and computational modeling. 
                  Through my studies and professional experience, I've developed expertise in computational 
                  fluid dynamics, finite element methods, and advanced engineering simulations.
                </p>
                <p>
                  What sets me apart is my ability to bridge the gap between complex engineering concepts 
                  and modern software development. I've successfully transitioned from traditional engineering 
                  into full-stack development, bringing analytical thinking and precision to every project.
                </p>
                <p>
                  Today, I leverage both my engineering background and software development skills to create 
                  innovative solutions that are both technically sound and user-friendly. I believe in 
                  continuous learning and staying at the forefront of technology.
                </p>
              </CardContent>
            </Card>

            {/* Values & Approach */}
            <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {personalValues.map((value, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2 border-purple-500/30 text-purple-300">
                      {value}
                    </Badge>
                  ))}
                </div>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <strong className="text-purple-400">Innovation:</strong> I thrive on finding creative solutions to complex problems.
                  </p>
                  <p>
                    <strong className="text-pink-400">Precision:</strong> My engineering background ensures attention to detail in every project.
                  </p>
                  <p>
                    <strong className="text-red-400">Learning:</strong> I'm constantly exploring new technologies and methodologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Highlights */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm mb-16">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Professional Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Engineering</div>
                  <p className="text-gray-300">CFD & FEM Analysis</p>
                  <p className="text-sm text-gray-400">Advanced computational modeling and simulation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">Development</div>
                  <p className="text-gray-300">Full-Stack Solutions</p>
                  <p className="text-sm text-gray-400">Modern web applications and software architecture</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">Education</div>
                  <p className="text-gray-300">Teaching & Mentoring</p>
                  <p className="text-sm text-gray-400">Sharing knowledge and guiding others</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Interests */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Beyond Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                When I'm not coding or engineering, I enjoy exploring various creative and intellectual pursuits 
                that keep me inspired and balanced.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-900/50 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-2">{interest.category}</h4>
                    <p className="text-sm text-gray-400">{interest.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}