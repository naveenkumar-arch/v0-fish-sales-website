'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Filter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const allProducts = [
  { id: 1, name: 'Koi Fish Premium', price: '$89.99', image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=500&h=500&fit=crop', category: 'Featured', rating: 4.9 },
  { id: 2, name: 'Discus Showpiece', price: '$124.99', image: 'https://images.unsplash.com/photo-1534917617694-0f55a2df8f05?w=500&h=500&fit=crop', category: 'Premium', rating: 4.8 },
  { id: 3, name: 'Neon Tetra Collection', price: '$34.99', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop', category: 'Beginner', rating: 4.7 },
  { id: 4, name: 'Angelfish Pair', price: '$54.99', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963c2b?w=500&h=500&fit=crop', category: 'Intermediate', rating: 4.9 },
  { id: 5, name: 'Betta Fish Exotic', price: '$44.99', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop', category: 'Premium', rating: 4.6 },
  { id: 6, name: 'Goldfish Standard', price: '$19.99', image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=500&h=500&fit=crop', category: 'Beginner', rating: 4.5 },
  { id: 7, name: 'Guppy Rainbow Pack', price: '$29.99', image: 'https://images.unsplash.com/photo-1534917617694-0f55a2df8f05?w=500&h=500&fit=crop', category: 'Beginner', rating: 4.8 },
  { id: 8, name: 'Pleco Catfish', price: '$64.99', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963c2b?w=500&h=500&fit=crop', category: 'Intermediate', rating: 4.7 },
  { id: 9, name: 'Oscar Fish Pair', price: '$79.99', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop', category: 'Intermediate', rating: 4.9 },
  { id: 10, name: 'Cichlid Assortment', price: '$149.99', image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=500&h=500&fit=crop', category: 'Premium', rating: 4.8 },
]

const categories = ['All', 'Featured', 'Beginner', 'Intermediate', 'Premium']

export default function CatalogPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price) - parseFloat(b.price)
    if (sortBy === 'price-high') return parseFloat(b.price) - parseFloat(a.price)
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  const handleViewDetails = (productId: number) => {
    console.log(`[v0] Viewing product details for product ID: ${productId}`)
    router.push(`/product/${productId}`)
  }

  const handleAddToCart = (productId: number, productName: string) => {
    console.log(`[v0] Added ${productName} (ID: ${productId}) to cart from catalog`)
    router.push('/cart')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <main className="overflow-hidden">
      <Header />
      
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-blue-50/5 dark:to-blue-950/5">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">
              Premium Fish Catalog
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Browse our complete collection of premium fish species, carefully selected for quality and vitality
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-background border border-border hover:bg-card'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {sortedProducts.map(product => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden bg-muted h-64">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <motion.button
                        onClick={() => handleViewDetails(product.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold flex items-center gap-2"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-4 text-sm text-foreground/60">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span>({product.rating})</span>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <motion.button
                        onClick={() => handleAddToCart(product.id, product.name)}
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

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-foreground/60 mb-12"
          >
            Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
