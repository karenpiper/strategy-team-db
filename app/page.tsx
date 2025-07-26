"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAirtableUser } from "@/use-airtable-user"
import TeamDashboard from "@/components/team-dashboard"

export default function Home() {
  const { user, login, isLoading } = useAirtableUser()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
  }

  const handleDemoLogin = async (demoUser: { email: string; password: string; name: string; role: string }) => {
    await login(demoUser.email, demoUser.password)
  }

  if (user) {
    return <TeamDashboard />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900 border-slate-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
          <CardDescription className="text-center text-slate-400">
            Sign in to access your Strategy Team Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-400">Or try demo accounts</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() =>
                handleDemoLogin({
                  email: "karen.johnson@company.com",
                  password: "demo123",
                  name: "Karen Johnson",
                  role: "Project Manager",
                })
              }
              disabled={isLoading}
            >
              Demo: Karen Johnson (Project Manager)
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() =>
                handleDemoLogin({
                  email: "john.doe@company.com",
                  password: "demo123",
                  name: "John Doe",
                  role: "Lead Strategist",
                })
              }
              disabled={isLoading}
            >
              Demo: John Doe (Lead Strategist)
            </Button>
            <Button
              variant="outline"
              className="w-full bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() =>
                handleDemoLogin({
                  email: "jane.smith@company.com",
                  password: "demo123",
                  name: "Jane Smith",
                  role: "Senior Analyst",
                })
              }
              disabled={isLoading}
            >
              Demo: Jane Smith (Senior Analyst)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
