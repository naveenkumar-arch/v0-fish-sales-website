import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ProductShowcase from '@/components/product-showcase'
import VideoLibrary from '@/components/video-library'
import Features from '@/components/features'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <VideoLibrary />
      <Features />
      <ContactSection />
      <Footer />
    </main>
  )
}
