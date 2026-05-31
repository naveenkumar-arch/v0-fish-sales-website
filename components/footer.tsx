'use client'

import { motion } from 'framer-motion'
import { Fish } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    { title: 'Products', items: ['All Fish', 'Aquariums', 'Accessories', 'Care Guides'] },
    { title: 'Content', items: ['Videos', 'Blog', 'Tutorials', 'Community'] },
    { title: 'Company', items: ['About Us', 'Contact', 'Careers', 'FAQ'] },
    { title: 'Legal', items: ['Privacy', 'Terms', 'Returns', 'Shipping'] },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Aqua Elite</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Premium fish species and immersive aquatic content for enthusiasts worldwide.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-foreground">{column.title}</h4>
              <ul className="space-y-2">
                {column.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Aqua Elite. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'Instagram', 'Facebook', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
