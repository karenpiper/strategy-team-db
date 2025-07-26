"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "sonner"

interface User {
  id: string
  fields: {
    Name: string
    Email: string
    Role: string
    Avatar?: string
    [key: string]: any
  }
}

interface AirtableUserContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
  isLoading: boolean
}

const AirtableUserContext = createContext<AirtableUserContextType | undefined>(undefined)

export function AirtableUserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("airtable-user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("airtable-user")
      }
    }
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("airtable-user", JSON.stringify(user))
    } else {
      localStorage.removeItem("airtable-user")
    }
  }, [user])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data based on email
      const mockUsers: Record<string, User> = {
        "karen.johnson@company.com": {
          id: "1",
          fields: {
            Name: "Karen Johnson",
            Email: "karen.johnson@company.com",
            Role: "Project Manager",
            Avatar: "/placeholder.svg?height=40&width=40&text=KJ&bg=3b82f6&color=fff",
          },
        },
        "john.doe@company.com": {
          id: "2",
          fields: {
            Name: "John Doe",
            Email: "john.doe@company.com",
            Role: "Lead Strategist",
            Avatar: "/placeholder.svg?height=40&width=40&text=JD&bg=10b981&color=fff",
          },
        },
        "jane.smith@company.com": {
          id: "3",
          fields: {
            Name: "Jane Smith",
            Email: "jane.smith@company.com",
            Role: "Senior Analyst",
            Avatar: "/placeholder.svg?height=40&width=40&text=JS&bg=f59e0b&color=fff",
          },
        },
      }

      const mockUser = mockUsers[email]
      if (mockUser && password === "demo123") {
        setUser(mockUser)
        toast.success(`Welcome back, ${mockUser.fields.Name}!`)
      } else {
        toast.error("Invalid email or password")
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    toast.success("Logged out successfully")
  }

  return (
    <AirtableUserContext.Provider value={{ user, login, logout, setUser, isLoading }}>
      {children}
    </AirtableUserContext.Provider>
  )
}

export function useAirtableUser() {
  const context = useContext(AirtableUserContext)
  if (context === undefined) {
    throw new Error("useAirtableUser must be used within an AirtableUserProvider")
  }
  return context
}
