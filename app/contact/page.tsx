import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import social media logos
import LinkedInLogo from "@/public/images/svg/LinkedInLogo.svg";
import InstagramLogo from "@/public/images/svg/InstagramLogo.svg";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Professional Email",
      value: "klaudio.luku@email.com",
      description: "For work opportunities, collaborations, and professional inquiries",
      type: "email",
      primary: true
    },
    {
      title: "LinkedIn",
      value: "klaudio-luku-1075a0215",
      description: "Connect with me professionally and view my latest career updates",
      type: "linkedin",
      primary: true,
      icon: LinkedInLogo
    },
    {
      title: "GitHub",
      value: "realriven",
      description: "Check out my code repositories and open source contributions",
      type: "github",
      primary: false
    },
    {
      title: "Personal Email",
      value: "personal@email.com",
      description: "For casual conversations and non-work related topics",
      type: "email",
      primary: false
    }
  ];

  const interests = [
    "Engineering consulting and CFD projects",
    "Full-stack web development opportunities",
    "Technical mentoring and teaching",
    "Open source collaboration",
    "Speaking at conferences or events",
    "Freelance development projects"
  ];

  const availability = {
    status: "Open to Opportunities",
    types: ["Full-time positions", "Consulting projects", "Freelance work", "Collaboration"],
    location: "Remote • On-site • Hybrid",
    timeframe: "Available immediately"
  };

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's connect and explore opportunities for collaboration, development, or just have a great conversation
            </p>
          </div>

          {/* Availability Status */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm mb-12">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-semibold text-green-400">{availability.status}</span>
              </div>
              <p className="text-gray-300 mb-4">{availability.timeframe}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {availability.types.map((type, index) => (
                  <Badge key={index} variant="outline" className="border-green-500/30 text-green-300">
                    {type}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-400">{availability.location}</p>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Methods</h2>
              
              {contactMethods.map((method, index) => (
                <Card key={index} className={`bg-black/40 border-gray-800/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 ${method.primary ? 'ring-1 ring-purple-500/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {method.icon && (
                        <Image 
                          src={method.icon} 
                          alt={`${method.title} icon`} 
                          width={24} 
                          height={24}
                          className="mt-1"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          {method.title}
                          {method.primary && <Badge variant="default" className="bg-purple-600 text-xs">Primary</Badge>}
                        </h3>
                        <p className="text-purple-400 font-mono text-sm mb-2">{method.value}</p>
                        <p className="text-gray-300 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">What I'm Looking For</h2>
              
              <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {interests.map((interest, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="text-gray-300">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-purple-400">Professional inquiries:</strong> Within 24 hours</p>
                    <p><strong className="text-pink-400">Project discussions:</strong> Within 2-3 days</p>
                    <p><strong className="text-red-400">General messages:</strong> Within a week</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a challenging engineering problem, an exciting development project, 
                or just want to discuss the latest in technology, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Professional Email
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  View LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}