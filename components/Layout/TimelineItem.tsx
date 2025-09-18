import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
}

export function TimelineItem({ 
  title, 
  organization, 
  period, 
  location, 
  description 
}: TimelineItemProps) {
  return (
    <div className="relative pl-6 before:absolute before:left-0 before:top-[6px] before:h-full before:w-px before:bg-gray-700">
      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-blue-500"></div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <span className="text-blue-400 text-sm mt-1 md:mt-0">{period}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 mb-4">
            <span>{organization}</span>
            <span className="mt-1 md:mt-0">{location}</span>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}