'use client'

import { motion } from 'framer-motion'
import { Play, Eye } from 'lucide-react'
import { Card } from '@/components/ui/card'

const videos = [
  {
    id: 1,
    title: 'Coral Reef Symphony',
    views: '2.4M',
    duration: '12:34',
    thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Deep Ocean Mysteries',
    views: '1.8M',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Tropical Paradise',
    views: '3.1M',
    duration: '14:05',
    thumbnail: 'https://images.unsplash.com/photo-1584345604694-ef3f5b9b3f7a?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Bioluminescent Wonders',
    views: '2.7M',
    duration: '11:42',
    thumbnail: 'https://images.unsplash.com/photo-1573865526014-f3550bf1cf68?w=800&h=450&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function VideoLibrary() {
  return (
    <section id="videos" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            8K Video Gallery
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Immerse yourself in stunning 8K quality footage of the world&apos;s most beautiful aquatic ecosystems
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-shadow">
                {/* Thumbnail */}
                <div className="relative overflow-hidden bg-muted h-48 sm:h-56">
                  <motion.img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </motion.button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                    {video.duration}
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                    8K
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-1 text-foreground/60 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Large Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="overflow-hidden border-0 shadow-2xl h-96">
            <div className="relative w-full h-full group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1400&h=600&fit=crop"
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground p-6 rounded-full shadow-2xl"
                >
                  <Play className="w-8 h-8 fill-current" />
                </motion.button>
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Ultimate Aquatic Journey</h3>
                  <p className="text-white/80">A breathtaking exploration of ocean wonders</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
