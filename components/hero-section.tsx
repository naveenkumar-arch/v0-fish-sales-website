'use client'

import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-background via-blue-50/5 to-background dark:via-blue-950/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-screen text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              ✨ Welcome to Premium Aquatics
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight"
          >
            Experience the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Ocean&apos;s Beauty
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl text-balance"
          >
            Discover our curated collection of premium fish species, exotic aquatic life, and immersive video content from the world&apos;s most vibrant underwater ecosystems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 py-6 rounded-lg gap-2">
              <Play className="w-5 h-5" />
              Watch Videos
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-12 w-full max-w-md"
          >
            {[
              { number: '5K+', label: 'Fish Species' },
              { number: '8K', label: 'Video Quality' },
              { number: '100%', label: 'Premium' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50"
              >
                <div className="text-2xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs text-foreground/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <ChevronDown className="w-6 h-6 text-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
