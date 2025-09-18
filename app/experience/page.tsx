import React from "react";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TimelineItem } from "@/components/Layout/TimelineItem";

export default function ExperiencePage() {
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading full-stack development projects using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "Computational Engineer", 
      company: "Engineering Dynamics Ltd",
      period: "2021 - 2023",
      location: "Milan, Italy",
      description: "Specialized in CFD analysis and finite element modeling for aerospace and automotive applications. Developed custom simulation tools and automated workflows.",
      technologies: ["OpenFOAM", "MATLAB", "Python", "Ansys", "ParaView"]
    },
    {
      title: "Teaching Assistant",
      company: "University of Engineering",
      period: "2020 - 2021", 
      location: "University Campus",
      description: "Assisted in teaching computational mechanics and fluid dynamics courses. Developed educational materials and guided student projects.",
      technologies: ["MATLAB", "Simulink", "LaTeX", "Python"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Mechanical Engineering",
      institution: "Polytechnic University",
      period: "2019 - 2021",
      specialization: "Computational Fluid Dynamics",
      achievements: ["Summa Cum Laude", "Outstanding Thesis Award", "Research Publication"]
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering", 
      institution: "Technical University",
      period: "2015 - 2019",
      specialization: "Engineering Design",
      achievements: ["Dean's List", "Engineering Society President", "Capstone Project Excellence"]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Certified SolidWorks Professional",
    "Scrum Master Certification",
    "Advanced MATLAB Programming"
  ];

  return (
    <div className="min-h-screen w-full relative overflow-auto bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10 animate-pulse"></div>
      </div>
      
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <Menu />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 md:p-16 lg:p-24">
        <div className="container max-w-6xl mt-24 mb-16 text-white">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A journey through engineering excellence and software innovation
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-4"></span>
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                        <p className="text-lg text-blue-400 mb-1">{job.company}</p>
                        <p className="text-slate-400">{job.location}</p>
                      </div>
                      <Badge variant="outline" className="border-green-500/50 text-green-300 mt-2 lg:mt-0">
                        {job.period}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-slate-700/50 text-slate-300 hover:bg-blue-600/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4"></span>
              Education
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{edu.degree}</CardTitle>
                    <p className="text-green-400">{edu.institution}</p>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 w-fit">
                      {edu.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      <strong>Specialization:</strong> {edu.specialization}
                    </p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-300 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></span>
                Certifications & Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-blue-500/30 transition-colors">
                    <p className="text-white font-medium">{cert}</p>
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