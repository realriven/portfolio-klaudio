import React from "react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import tech logos
import OpenFOAM from "@/public/images/svg/OpenFOAMLogo.svg";
import Matlab from "@/public/images/svg/MatlabLogo.svg";
import Python from "@/public/images/svg/PythonLogo.svg";
import Java from "@/public/images/svg/JavaLogo.svg";
import ReactLogo from "@/public/images/svg/ReactLogo.svg";
import TSLogo from "@/public/images/svg/TSLogo.svg";
import NextLogo from "@/public/images/svg/NextLogo.svg";

export default function SkillsPage() {
  const skillCategories = {
    engineering: {
      title: "Engineering & Simulation",
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "OpenFOAM", level: 90, icon: OpenFOAM, description: "Advanced CFD analysis and custom solver development" },
        { name: "MATLAB", level: 95, icon: Matlab, description: "Algorithm development and data analysis" },
        { name: "Ansys", level: 85, description: "FEM analysis and structural simulations" },
        { name: "SolidWorks", level: 80, description: "3D modeling and design" },
        { name: "ParaView", level: 75, description: "Scientific data visualization" },
        { name: "Simulink", level: 70, description: "System modeling and simulation" }
      ]
    },
    programming: {
      title: "Programming Languages",
      color: "from-pink-500 to-pink-700", 
      skills: [
        { name: "Python", level: 95, icon: Python, description: "Data science, automation, and backend development" },
        { name: "TypeScript", level: 90, icon: TSLogo, description: "Type-safe JavaScript for large applications" },
        { name: "Java", level: 85, icon: Java, description: "Enterprise applications and algorithms" },
        { name: "C++", level: 80, description: "High-performance computing and simulations" },
        { name: "JavaScript", level: 90, description: "Modern web development and Node.js" },
        { name: "SQL", level: 75, description: "Database design and optimization" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      color: "from-red-500 to-red-700",
      skills: [
        { name: "React", level: 90, icon: ReactLogo, description: "Component-based UI development" },
        { name: "Next.js", level: 85, icon: NextLogo, description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
        { name: "HTML/CSS", level: 90, description: "Semantic markup and responsive design" },
        { name: "Vue.js", level: 70, description: "Progressive JavaScript framework" },
        { name: "Sass/SCSS", level: 80, description: "Advanced CSS preprocessing" }
      ]
    },
    backend: {
      title: "Backend & Infrastructure",
      color: "from-orange-500 to-orange-700",
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 80, description: "Web application framework" },
        { name: "PostgreSQL", level: 75, description: "Relational database management" },
        { name: "MongoDB", level: 70, description: "NoSQL document database" },
        { name: "AWS", level: 75, description: "Cloud infrastructure and services" },
        { name: "Docker", level: 70, description: "Containerization and deployment" }
      ]
    },
    tools: {
      title: "Tools & Methodologies",
      color: "from-green-500 to-green-700",
      skills: [
        { name: "Git", level: 90, description: "Version control and collaboration" },
        { name: "Linux", level: 85, description: "System administration and scripting" },
        { name: "Agile/Scrum", level: 80, description: "Project management methodologies" },
        { name: "CI/CD", level: 75, description: "Continuous integration and deployment" },
        { name: "Testing", level: 80, description: "Unit, integration, and E2E testing" },
        { name: "API Design", level: 85, description: "RESTful and GraphQL APIs" }
      ]
    }
  };

  const SkillCard = ({ skill, categoryColor }: { skill: any; categoryColor: string }) => (
    <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {skill.icon && (
            <Image
              src={skill.icon}
              alt={`${skill.name} logo`}
              width={32}
              height={32}
              className="mr-3"
            />
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </div>
        </div>
        
        {/* Skill level bar */}
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Proficiency</span>
            <span className="text-purple-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${categoryColor} h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-black">
      <BackgroundGradientAnimation className="absolute inset-0 z-0 opacity-30" />
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800/50">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-7xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across engineering and software development
            </p>
          </div>

          {/* Skills Tabs */}
          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-black/50 border border-gray-800/50 mb-8">
              <TabsTrigger value="engineering" className="data-[state=active]:bg-purple-600">Engineering</TabsTrigger>
              <TabsTrigger value="programming" className="data-[state=active]:bg-pink-600">Programming</TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-red-600">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-orange-600">Backend</TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-green-600">Tools</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} categoryColor={category.color} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Summary Stats */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm mt-16">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">20+</div>
                  <p className="text-gray-300">Technologies Mastered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                  <p className="text-gray-300">Major Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                  <p className="text-gray-300">Core Specializations</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}