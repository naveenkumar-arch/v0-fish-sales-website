'use client'

import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const products = [
  {
    id: 1,
    name: 'Koi Fish Premium',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 128,
    featured: true,
  },
  {
    id: 2,
    name: 'Discus Showpiece',
    price: '$124.99',
    image: 'https://images.unsplash.com/photo-1534917617694-0f55a2df8f05?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 94,
    featured: true,
  },
  {
    id: 3,
    name: 'Neon Tetra Collection',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 156,
    featured: false,
  },
  {
    id: 4,
    name: 'Angelfish Pair',
    price: '$54.99',
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963c2b?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 72,
    featured: false,
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
    transition: { duration: 0.5 },
  },
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-blue-50/5 dark:to-blue-950/5">
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
            Our Featured Collection
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Hand-selected premium fish species from around the world, carefully curated for quality and vitality
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-muted h-64 sm:h-72">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {product.featured && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-3 left-3 bg-white/80 backdrop-blur hover:bg-white p-2 rounded-full shadow-md"
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-accent text-accent'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-auto space-y-4">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button size="lg" className="font-semibold px-8 py-6 rounded-lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
