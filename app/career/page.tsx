import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Import or define the TimelineItem component
import { TimelineItem } from "@/components/Layout/TimelineItem";

export default function ResumePage() {
  return (
    <div className="min-h-screen w-full relative overflow-auto bg-black">
      {/* <BackgroundGradientAnimation className="absolute inset-0 z-0" /> */}
      
      {/* Fixed navigation at the top */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-black backdrop-blur-md border-b border-gray-800/50">
        <Menu />
      </div>

      {/* Content container with proper scrolling */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24 overflow-auto">
        {/* Resume content with proper spacing from fixed nav */}
        <div className="container max-w-4xl mt-24 mb-16 text-white">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Klaudio Luku
              </h1>
              <h2 className="text-xl text-gray-300 mt-2">
                Aerospace Engineer | Software Developer | Tutor
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <Badge variant="outline" className="text-blue-400 border-blue-400/30 px-3 py-1">
                React
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-400/30 px-3 py-1">
                Next.js
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-400/30 px-3 py-1">
                OpenFOAM
              </Badge>
              <Badge variant="outline" className="text-yellow-400 border-yellow-400/30 px-3 py-1">
                MATLAB
              </Badge>
            </div>
          </div>

          {/* Summary section */}
          <Card className="bg-gray-900/50 border-gray-800 mb-10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">Professional Summary</h3>
              <p className="text-gray-300">
                Dual-skilled engineer with expertise in both software development and mechanical engineering. 
                Specialized in computational fluid dynamics and full-stack web development.
                {/* Replace with your actual summary */}
              </p>
            </CardContent>
          </Card>

          {/* Tabs for different sections */}
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-gray-900/70">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <TimelineItem 
                title="Senior Software Engineer"
                organization="Company Name"
                period="2021 - Present"
                location="City, Country"
                description="Led the development of a complex simulation platform using React and TypeScript.
                Implemented CI/CD pipelines and mentored junior developers."
              />
              
              <TimelineItem 
                title="Mechanical Engineer"
                organization="Engineering Firm"
                period="2018 - 2021"
                location="City, Country"
                description="Performed CFD analysis using OpenFOAM. Designed and optimized fluid systems
                for industrial applications."
              />
              
              {/* Add more experiences as needed */}
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6">
              <TimelineItem 
                title="Master of Science, Mechanical Engineering"
                organization="University Name"
                period="2016 - 2018"
                location="City, Country"
                description="Specialized in Computational Fluid Dynamics. Thesis: 'Title of Your Thesis'"
              />
              
              <TimelineItem 
                title="Bachelor of Science, Engineering"
                organization="University Name"
                period="2012 - 2016"
                location="City, Country"
                description="Graduated with honors. GPA: 3.9/4.0"
              />
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-md font-medium text-blue-400">Programming Languages</h4>
                        <p className="text-gray-300 mt-1">JavaScript, TypeScript, Python, C++</p>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-blue-400">Web Technologies</h4>
                        <p className="text-gray-300 mt-1">React, Next.js, Node.js, TailwindCSS</p>
                      </div>
                      <div>
                        <h4 className="text-md font-medium text-blue-400">Engineering Tools</h4>
                        <p className="text-gray-300 mt-1">OpenFOAM, MATLAB, SolidWorks, ANSYS</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Soft Skills */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-4">Soft Skills</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">•</span> Project Management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">•</span> Technical Leadership
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">•</span> Cross-functional Collaboration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">•</span> Problem Solving
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">•</span> Technical Writing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact section */}
          <div className="mt-12">
            <Separator className="mb-8 bg-gray-800" />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4">
                <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  your.email@example.com
                </a>
                <Separator orientation="vertical" className="h-6 bg-gray-700" />
                <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link 
                  href="https://github.com/realriven" 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://linkedin.com/in/" 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}