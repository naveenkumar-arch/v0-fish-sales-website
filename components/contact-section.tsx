'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@aquaelite.com',
    link: 'mailto:contact@aquaelite.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Ocean City, CA 90210',
    link: '#'
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('[v0] Submitting contact form:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('[v0] Contact form submitted successfully')
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error('[v0] Error submitting contact form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            Get In Touch
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have questions? Our expert team is ready to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={i}
                  href={method.link}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => console.log(`[v0] Clicked ${method.title}`)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-foreground/60 text-sm mt-1">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-0 shadow-lg">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-foreground/60">We&apos;ve received your message and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div whileHover={{ y: -2 }}>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div whileHover={{ y: -2 }}>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ y: -2 }}>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="What is this about?"
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }}>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Your message..."
                      rows={5}
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
