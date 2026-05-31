'use client'

import { motion } from 'framer-motion'
import { Heart, Share2, Star, Check, ArrowLeft } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function ProductDetailPage() {
  const product = {
    id: 1,
    name: 'Koi Fish Premium - Kohaku',
    price: 89.99,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=800&h=600&fit=crop',
    category: 'Featured',
    inStock: true,
    description: 'Stunning premium Kohaku Koi fish featuring vibrant red and white markings. Perfect for established aquariums or ponds.',
    specs: [
      { label: 'Size', value: '6-8 inches' },
      { label: 'Water Type', value: 'Freshwater' },
      { label: 'Temperature', value: '65-72°F' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '15-25 years' },
      { label: 'Tank Size', value: '500+ gallons' },
    ],
    benefits: [
      'Hand-selected for premium coloration',
      'Healthy and quarantined',
      'Insured shipping included',
      '30-day money-back guarantee',
    ],
  }

  const similarProducts = [
    { id: 2, name: 'Sanke Koi Fish', price: '$99.99', image: 'https://images.unsplash.com/photo-1534917617694-0f55a2df8f05?w=500&h=500&fit=crop' },
    { id: 3, name: 'Showa Koi Fish', price: '$109.99', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop' },
    { id: 4, name: 'Asagi Koi Fish', price: '$94.99', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963c2b?w=500&h=500&fit=crop' },
  ]

  return (
    <main className="overflow-hidden">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link href="/catalog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Catalog
              </Button>
            </Link>
          </motion.div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-full cursor-pointer shadow-lg"
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                  {product.category}
                </div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-foreground/70 text-lg">{product.description}</p>
              </div>

              {/* Price & Stock */}
              <div className="border-t border-b border-border py-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">${product.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-green-600">In Stock</span>
                    </>
                  ) : (
                    <span className="font-semibold text-destructive">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 bg-green-50/50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200/50 dark:border-green-900/30">
                {product.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-lg"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 border border-border hover:bg-muted rounded-lg"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 border-0 shadow-lg">
              <h2 className="text-2xl font-bold mb-8">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="p-4 bg-muted/30 rounded-lg"
                  >
                    <p className="text-foreground/60 text-sm font-medium mb-2">{spec.label}</p>
                    <p className="text-lg font-bold text-foreground">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Similar Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer">
                    <div className="relative overflow-hidden h-48 bg-muted">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{p.price}</span>
                        <Button size="sm">View</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
