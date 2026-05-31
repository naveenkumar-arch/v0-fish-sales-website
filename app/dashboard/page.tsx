'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, User as UserIcon, LogOut } from 'lucide-react'
import { useAuthStore } from '@/lib/auth-store'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const recentOrders = [
    { id: 'ORD-001', product: 'Koi Fish Premium', price: '$89.99', date: '2024-05-28', status: 'Delivered' },
    { id: 'ORD-002', product: 'Yellow Tang', price: '$59.99', date: '2024-05-25', status: 'Shipped' },
    { id: 'ORD-003', product: 'Amazon Sword Plant', price: '$12.99', date: '2024-05-20', status: 'Delivered' },
  ]

  const wishlist = [
    { id: 5, name: 'Discus Showpiece', price: '$124.99' },
    { id: 12, name: 'Seahorse Pair', price: '$179.99' },
    { id: 15, name: 'Mandarin Fish', price: '$69.99' },
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-blue-50/5 dark:to-blue-950/5">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-2 text-balance">My Dashboard</h1>
            <p className="text-foreground/60 text-lg">Welcome back, {user.name}</p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-primary"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                  <p className="text-foreground/60 mb-4">{user.email}</p>
                  <p className="text-sm text-foreground/50">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="px-6 py-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg font-semibold flex items-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </motion.button>
              </div>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground/60 text-sm font-medium mb-1">Total Orders</p>
                    <p className="text-4xl font-bold text-primary">12</p>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground/60 text-sm font-medium mb-1">Total Spent</p>
                    <p className="text-4xl font-bold text-secondary">$1,248.50</p>
                  </div>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💳</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground/60 text-sm font-medium mb-1">Wishlist Items</p>
                    <p className="text-4xl font-bold text-accent">{wishlist.length}</p>
                  </div>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {recentOrders.map((order, i) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{order.product}</p>
                        <p className="text-sm text-foreground/60">{order.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{order.price}</p>
                        <p className="text-xs text-foreground/60">{order.date}</p>
                      </div>
                      <div className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {order.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className="w-full mt-6" onClick={() => router.push('/orders')}>
                  View All Orders
                </Button>
              </Card>
            </motion.div>

            {/* Wishlist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Your Wishlist</h3>
                <div className="space-y-4">
                  {wishlist.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      onClick={() => router.push(`/product/${item.id}`)}
                      className="p-3 border border-border/50 rounded-lg hover:bg-muted/50 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                      <p className="font-semibold text-foreground text-sm">{item.name}</p>
                      <p className="text-sm text-primary font-bold mt-1">{item.price}</p>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6" onClick={() => router.push('/catalog')}>
                  Browse More
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
