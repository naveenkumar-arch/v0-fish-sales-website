'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Truck, Award } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Premium Quality',
    description: 'Hand-selected specimens with guaranteed health and vitality'
  },
  {
    icon: Shield,
    title: 'Safe Delivery',
    description: 'Specialized insulated packaging to ensure optimal conditions'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Express delivery to minimize travel stress for your fish'
  },
  {
    icon: Award,
    title: 'Expert Support',
    description: '24/7 customer care from experienced aquarists'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Features() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/5 to-background dark:via-blue-950/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Why Choose Aqua Elite
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Experience excellence in every aspect of your aquatic journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:bg-card hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
