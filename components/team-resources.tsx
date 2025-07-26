"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Users, Database, Palette, Code, Key } from "lucide-react"

export function TeamResources() {
  const [activeTab, setActiveTab] = useState("client")

  const resources = {
    client: [
      {
        title: "Client Portal Access",
        description: "Direct access to client project dashboards and communication tools",
        url: "#",
        type: "Portal",
      },
      {
        title: "Project Status Updates",
        description: "Real-time updates on all active client projects and deliverables",
        url: "#",
        type: "Dashboard",
      },
      {
        title: "Client Feedback System",
        description: "Centralized system for collecting and managing client feedback",
        url: "#",
        type: "Tool",
      },
    ],
    research: [
      {
        title: "Market Research Database",
        description: "Comprehensive database of market trends, competitor analysis, and industry insights",
        url: "#",
        type: "Database",
      },
      {
        title: "User Research Templates",
        description: "Standardized templates for user interviews, surveys, and usability testing",
        url: "#",
        type: "Template",
      },
      {
        title: "Analytics Dashboard",
        description: "Real-time analytics and reporting tools for data-driven decision making",
        url: "#",
        type: "Dashboard",
      },
    ],
    templates: [
      {
        title: "Project Proposal Template",
        description: "Standardized template for creating compelling project proposals",
        url: "#",
        type: "Template",
      },
      {
        title: "Strategy Framework",
        description: "Proven framework for developing comprehensive strategic plans",
        url: "#",
        type: "Framework",
      },
      {
        title: "Presentation Templates",
        description: "Professional presentation templates for client meetings and pitches",
        url: "#",
        type: "Template",
      },
    ],
    brand: [
      {
        title: "Brand Guidelines",
        description: "Complete brand identity guidelines including logos, colors, and typography",
        url: "#",
        type: "Guide",
      },
      {
        title: "Asset Library",
        description: "Centralized library of brand assets, images, and marketing materials",
        url: "#",
        type: "Library",
      },
      {
        title: "Voice & Tone Guide",
        description: "Guidelines for maintaining consistent brand voice across all communications",
        url: "#",
        type: "Guide",
      },
    ],
    tools: [
      {
        title: "Design System",
        description: "Comprehensive design system with components, patterns, and guidelines",
        url: "#",
        type: "System",
      },
      {
        title: "Collaboration Tools",
        description: "Suite of tools for team collaboration, file sharing, and project management",
        url: "#",
        type: "Tools",
      },
      {
        title: "Development Resources",
        description: "Code repositories, development guidelines, and technical documentation",
        url: "#",
        type: "Resources",
      },
    ],
    access: [
      {
        title: "VPN Configuration",
        description: "Setup guide and credentials for secure VPN access to company resources",
        url: "#",
        type: "Config",
      },
      {
        title: "Software Licenses",
        description: "Access to licensed software and tools required for daily work",
        url: "#",
        type: "License",
      },
      {
        title: "API Documentation",
        description: "Complete API documentation and access credentials for integrations",
        url: "#",
        type: "Docs",
      },
    ],
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "client":
        return <Users className="h-4 w-4" />
      case "research":
        return <Database className="h-4 w-4" />
      case "templates":
        return <FileText className="h-4 w-4" />
      case "brand":
        return <Palette className="h-4 w-4" />
      case "tools":
        return <Code className="h-4 w-4" />
      case "access":
        return <Key className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getResourceBorderColor = (tab: string) => {
    switch (tab) {
      case "client":
        return "border-blue-500"
      case "research":
        return "border-purple-500"
      case "templates":
        return "border-green-500"
      case "brand":
        return "border-pink-500"
      case "tools":
        return "border-indigo-500"
      case "access":
        return "border-cyan-500"
      default:
        return "border-gray-500"
    }
  }

  return (
    <Card className="bg-slate-900 shadow-md rounded-2xl border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <FileText className="h-5 w-5 text-blue-400" />
          Team Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="client"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("client")}
              <span className="hidden sm:inline">Client</span>
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("research")}
              <span className="hidden sm:inline">Research</span>
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("templates")}
              <span className="hidden sm:inline">Templates</span>
            </TabsTrigger>
            <TabsTrigger
              value="brand"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("brand")}
              <span className="hidden sm:inline">Brand</span>
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("tools")}
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger
              value="access"
              className="flex items-center gap-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400"
            >
              {getTabIcon("access")}
              <span className="hidden sm:inline">Access</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(resources).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid gap-4">
                {items.map((resource, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800 rounded-xl p-4 border-l-4 ${getResourceBorderColor(
                      key,
                    )} hover:bg-slate-750 transition-colors border border-slate-700`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium text-white">{resource.title}</h4>
                          <Badge className="bg-slate-700 text-slate-300 border-slate-600">{resource.type}</Badge>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">{resource.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300 hover:bg-slate-700 p-2"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
