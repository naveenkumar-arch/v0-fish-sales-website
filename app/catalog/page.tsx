'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthStore } from '@/lib/auth-store'
import { products } from '@/lib/products-db'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function CatalogContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isAuthenticated } = useAuthStore()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  if (!isAuthenticated) {
    return null
  }

  const categories = ['All', 'Freshwater', 'Saltwater', 'Plants', 'Accessories']

  const filteredProducts = selectedCategory === 'All' 
    ? products
    : products.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'featured') return b.featured ? 1 : -1
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
              Browse our complete collection of {sortedProducts.length} premium fish species and accessories
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
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
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
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto"
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
                  <div className="relative overflow-hidden bg-muted h-48">
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

                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}

                    {/* Stock Badge */}
                    {!product.inStock && (
                      <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.level}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-foreground/60 mb-3 line-clamp-1">{product.description}</p>
                    <div className="flex items-center gap-1 mb-4 text-sm text-foreground/60">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span>({product.rating})</span>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</div>
                      <motion.button
                        onClick={() => handleAddToCart(product.id, product.name)}
                        disabled={!product.inStock}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground py-2 rounded-lg font-semibold transition-colors"
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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
            Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogContent />
    </Suspense>
  )
}
