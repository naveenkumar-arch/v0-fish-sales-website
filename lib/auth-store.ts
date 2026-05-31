import { create } from 'zustand'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    console.log('[v0] Attempting login for:', email)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Validate email format
    if (!email.includes('@')) {
      throw new Error('Invalid email format')
    }
    
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const user: User = {
      id: `user_${Date.now()}`,
      name: email.split('@')[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      createdAt: new Date()
    }

    console.log('[v0] Login successful for:', user.email)
    set({ user, isAuthenticated: true })
    localStorage.setItem('aqua-user', JSON.stringify(user))
  },

  register: async (name: string, email: string, password: string) => {
    console.log('[v0] Attempting registration for:', email)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!name.trim()) {
      throw new Error('Name is required')
    }

    if (!email.includes('@')) {
      throw new Error('Invalid email format')
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const user: User = {
      id: `user_${Date.now()}`,
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      createdAt: new Date()
    }

    console.log('[v0] Registration successful for:', user.email)
    set({ user, isAuthenticated: true })
    localStorage.setItem('aqua-user', JSON.stringify(user))
  },

  logout: () => {
    console.log('[v0] User logged out')
    set({ user: null, isAuthenticated: false })
    localStorage.removeItem('aqua-user')
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: user !== null })
  }
}))

// Initialize auth state from localStorage
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('aqua-user')
  if (stored) {
    try {
      const user = JSON.parse(stored)
      useAuthStore.getState().setUser(user)
    } catch (error) {
      console.error('[v0] Failed to restore user from localStorage:', error)
    }
  }
}
