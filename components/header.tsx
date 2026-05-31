'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, Fish, LogOut, User, LogIn, UserPlus, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/lib/auth-store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  const categories = ['Freshwater', 'Saltwater', 'Plants', 'Accessories']

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    router.push('/')
  }

  const handleCategoryClick = (category: string) => {
    setCategoryMenuOpen(false)
    router.push(`/catalog?category=${category}`)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">Aqua Elite</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Products with Dropdown */}
            <div className="relative group">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onMouseEnter={() => setCategoryMenuOpen(true)}
                onMouseLeave={() => setCategoryMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {categoryMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setCategoryMenuOpen(true)}
                    onMouseLeave={() => setCategoryMenuOpen(false)}
                    className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-2xl overflow-hidden min-w-48"
                  >
                    {categories.map((cat, i) => (
                      <motion.button
                        key={cat}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full px-4 py-3 text-left hover:bg-primary/10 text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {cat}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#videos"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Videos
            </motion.a>
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </motion.a>
          </nav>

          {/* Right Side - Cart & Auth */}
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <motion.a
                href="/cart"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative hidden sm:block"
              >
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </motion.a>
            )}

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <ChevronDown className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-2xl overflow-hidden w-56"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-border bg-muted/50">
                        <p className="font-semibold text-foreground">{user?.name}</p>
                        <p className="text-xs text-foreground/60">{user?.email}</p>
                      </div>

                      {/* Menu Items */}
                      <Link href="/dashboard">
                        <button className="w-full px-4 py-3 text-left hover:bg-primary/10 text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Dashboard
                        </button>
                      </Link>
                      <Link href="/cart">
                        <button className="w-full px-4 py-3 text-left hover:bg-primary/10 text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 md:hidden">
                          <ShoppingCart className="w-4 h-4" />
                          Cart
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 text-left hover:bg-destructive/10 text-foreground hover:text-destructive transition-colors font-medium flex items-center gap-2 border-t border-border"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="gap-1">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="gap-1">
                    <UserPlus className="w-4 h-4" />
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 flex flex-col gap-2"
          >
            {/* Mobile Products Menu */}
            <div className="px-2">
              <p className="text-sm font-semibold text-foreground/60 px-2 py-1">Categories</p>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategoryClick(cat)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left py-2 px-2 text-foreground hover:text-primary transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>

            <a href="#videos" className="py-2 px-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Videos
            </a>
            <a href="#about" className="py-2 px-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="py-2 px-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>

            {/* Mobile Auth Buttons */}
            {!isAuthenticated && (
              <div className="border-t border-border pt-4 mt-4 flex flex-col gap-2 px-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full gap-1">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full gap-1">
                    <UserPlus className="w-4 h-4" />
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {isAuthenticated && (
              <div className="border-t border-border pt-4 mt-4 px-2">
                <button
                  onClick={() => {
                    handleLogout()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-destructive/10 text-foreground hover:text-destructive transition-colors font-medium flex items-center gap-2 rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

