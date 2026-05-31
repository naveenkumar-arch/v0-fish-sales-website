export interface Product {
  id: number
  name: string
  price: number
  category: 'Freshwater' | 'Saltwater' | 'Plants' | 'Accessories'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
  featured: boolean
  specs: { label: string; value: string }[]
  benefits: string[]
}

export const products: Product[] = [
  // Freshwater Fish - Beginner
  {
    id: 1,
    name: 'Goldfish Standard',
    price: 19.99,
    category: 'Freshwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1585088504174-6e2fcc66a21c?w=800&h=600&fit=crop',
    rating: 4.5,
    reviews: 234,
    description: 'Hardy goldfish perfect for beginners, bright orange coloring and friendly personality.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '3-4 inches' },
      { label: 'Lifespan', value: '10-15 years' },
      { label: 'Tank Size', value: '20+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Easy to care for', 'Long lifespan', 'Beautiful color', 'Hardy species']
  },
  {
    id: 2,
    name: 'Neon Tetra Collection',
    price: 34.99,
    category: 'Freshwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 156,
    description: 'Vibrant neon tetras with striking blue and red stripes. Great for community tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '1-1.5 inches' },
      { label: 'School Size', value: '6+ fish' },
      { label: 'Tank Size', value: '10+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Peaceful community fish', 'Stunning colors', 'Social behavior', 'Affordable']
  },
  {
    id: 3,
    name: 'Guppy Rainbow Pack',
    price: 29.99,
    category: 'Freshwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1599904231211-d4a1e4feb047?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 189,
    description: 'Colorful guppies with rainbow patterns, ideal for beginners and community tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '1-2 inches' },
      { label: 'Pack Size', value: '5 fish' },
      { label: 'Tank Size', value: '5+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Colorful varieties', 'Easy to breed', 'Active swimmers', 'Great for beginners']
  },
  {
    id: 4,
    name: 'Corydoras Catfish Trio',
    price: 39.99,
    category: 'Freshwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963c2b?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 142,
    description: 'Peaceful bottom feeders that help keep your tank clean. Perfect community fish.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '1-2 inches' },
      { label: 'Group Size', value: '3+ fish' },
      { label: 'Tank Size', value: '15+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Great cleanup crew', 'Peaceful nature', 'Entertaining behavior', 'Hardy fish']
  },

  // Freshwater Fish - Intermediate
  {
    id: 5,
    name: 'Angelfish Pair Premium',
    price: 54.99,
    category: 'Freshwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1573835526014-f3550bf1cf68?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 267,
    description: 'Graceful angelfish with striking vertical stripes. Perfect for planted tanks.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '3-6 inches' },
      { label: 'Pair Count', value: '2 fish' },
      { label: 'Tank Size', value: '30+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Stunning appearance', 'Pair bonding', 'Graceful swimmers', 'Good feeders']
  },
  {
    id: 6,
    name: 'Pleco Catfish Premium',
    price: 64.99,
    category: 'Freshwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1544922874-a3fb6f492fe1?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 198,
    description: 'Large armored catfish, excellent algae eater for bigger tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '12-18 inches' },
      { label: 'Lifespan', value: '10-20 years' },
      { label: 'Tank Size', value: '50+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Excellent algae control', 'Long lifespan', 'Unique appearance', 'Hardy']
  },
  {
    id: 7,
    name: 'Betta Fish Exotic',
    price: 44.99,
    category: 'Freshwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1535217302882-a66d6a8c1c20?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 312,
    description: 'Vibrant male betta with flowing fins, stunning color varieties available.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '2-3 inches' },
      { label: 'Lifespan', value: '3-5 years' },
      { label: 'Tank Size', value: '5+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Stunning colors', 'Low maintenance', 'Unique personality', 'Aggressive display']
  },
  {
    id: 8,
    name: 'Discus Fish Showpiece',
    price: 124.99,
    category: 'Freshwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534917617694-0f55a2df8f05?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 289,
    description: 'Premium discus with intricate patterns, centerpiece of any aquarium.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '4-5 inches' },
      { label: 'Lifespan', value: '8-10 years' },
      { label: 'Tank Size', value: '40+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Stunning patterns', 'Elegant swimmers', 'Premium quality', 'Social fish']
  },

  // Freshwater Fish - Advanced
  {
    id: 9,
    name: 'Koi Fish Premium',
    price: 89.99,
    category: 'Freshwater',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1559831260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 401,
    description: 'Hand-selected premium Kohaku Koi with vibrant red and white markings.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '6-8 inches' },
      { label: 'Lifespan', value: '15-25 years' },
      { label: 'Tank Size', value: '500+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Premium quality', 'Long lifespan', 'Beautiful markings', 'Status symbol']
  },
  {
    id: 10,
    name: 'Oscar Fish Pair',
    price: 79.99,
    category: 'Freshwater',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 156,
    description: 'Large intelligent oscars with personality, require spacious tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '10-12 inches' },
      { label: 'Pair Count', value: '2 fish' },
      { label: 'Tank Size', value: '100+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Highly intelligent', 'Interactive pets', 'Impressive size', 'Strong personality']
  },
  {
    id: 11,
    name: 'Cichlid Assortment Premium',
    price: 149.99,
    category: 'Freshwater',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1576484309366-eac1e759b72d?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 223,
    description: 'Mixed cichlid collection with brilliant colors and complex behaviors.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '4-8 inches' },
      { label: 'Pack Count', value: 'Mixed species' },
      { label: 'Tank Size', value: '75+ gallons' },
      { label: 'Water Type', value: 'Freshwater' },
    ],
    benefits: ['Multiple species', 'Colorful display', 'Behavioral interest', 'Breeding pairs']
  },

  // Saltwater Fish - Beginner
  {
    id: 12,
    name: 'Clownfish Pair',
    price: 49.99,
    category: 'Saltwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1534043464124-b8e11a651b5d?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 345,
    description: 'Classic orange and white clownfish, hardy and friendly for beginners.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '3-4 inches' },
      { label: 'Pair Count', value: '2 fish' },
      { label: 'Tank Size', value: '50+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Hardy species', 'Popular choice', 'Easy to feed', 'Iconic fish']
  },
  {
    id: 13,
    name: 'Yellow Tang',
    price: 59.99,
    category: 'Saltwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 287,
    description: 'Bright yellow tropical tang, excellent algae eater for reef tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '5-8 inches' },
      { label: 'Lifespan', value: '10-15 years' },
      { label: 'Tank Size', value: '75+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Bright color', 'Algae control', 'Active swimmers', 'Hardy fish']
  },
  {
    id: 14,
    name: 'Royal Dottyback',
    price: 74.99,
    category: 'Saltwater',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1568847260347-41fa6d4f3c84?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 198,
    description: 'Stunning purple and red dottyback, adds vibrant color to tanks.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '2-3 inches' },
      { label: 'Lifespan', value: '5-8 years' },
      { label: 'Tank Size', value: '30+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Vibrant colors', 'Active behavior', 'Hardy species', 'Reef safe']
  },

  // Saltwater Fish - Intermediate
  {
    id: 15,
    name: 'Blue Tang Fish',
    price: 89.99,
    category: 'Saltwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 267,
    description: 'Stunning blue tang with white stripes, requires experienced care.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '5-6 inches' },
      { label: 'Lifespan', value: '20+ years' },
      { label: 'Tank Size', value: '100+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Beautiful blue color', 'Long lifespan', 'Active behavior', 'Iconic species']
  },
  {
    id: 16,
    name: 'Mandarin Fish',
    price: 99.99,
    category: 'Saltwater',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 312,
    description: 'One of the most beautiful fish, with intricate blue and orange patterns.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Size', value: '2-3 inches' },
      { label: 'Lifespan', value: '5-8 years' },
      { label: 'Tank Size', value: '50+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Stunning patterns', 'Unique appearance', 'Peaceful nature', 'Premium quality']
  },

  // Saltwater Fish - Advanced
  {
    id: 17,
    name: 'Seahorse Premium Pair',
    price: 179.99,
    category: 'Saltwater',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1577354727975-d4f4e6c89e78?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 189,
    description: 'Delicate seahorses, require specialized care and low-flow environment.',
    inStock: false,
    featured: true,
    specs: [
      { label: 'Size', value: '4-6 inches' },
      { label: 'Pair Count', value: '2 fish' },
      { label: 'Tank Size', value: '40+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Unique appearance', 'Breeding capable', 'Graceful movers', 'Premium specimen']
  },
  {
    id: 18,
    name: 'Lion Fish Striped',
    price: 149.99,
    category: 'Saltwater',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 145,
    description: 'Ornate lionfish with venomous spines, for expert aquarists only.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Size', value: '10-12 inches' },
      { label: 'Lifespan', value: '5-10 years' },
      { label: 'Tank Size', value: '100+ gallons' },
      { label: 'Water Type', value: 'Saltwater' },
    ],
    benefits: ['Dramatic appearance', 'Unique behavior', 'Impressive size', 'Expert challenge']
  },

  // Aquatic Plants - Beginner
  {
    id: 19,
    name: 'Amazon Sword Plant',
    price: 12.99,
    category: 'Plants',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1516484400734-6cf17ad485dc?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 234,
    description: 'Hardy aquatic plant with broad green leaves, perfect for beginners.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Height', value: '12-20 inches' },
      { label: 'Growth Rate', value: 'Moderate' },
      { label: 'Light Requirement', value: 'Medium' },
      { label: 'CO2 Required', value: 'No' },
    ],
    benefits: ['Easy to grow', 'Low maintenance', 'Fish hiding spots', 'Beautiful foliage']
  },
  {
    id: 20,
    name: 'Java Fern Plant',
    price: 9.99,
    category: 'Plants',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 289,
    description: 'Low-maintenance plant with lacy green fronds, excellent for beginners.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Height', value: '8-12 inches' },
      { label: 'Growth Rate', value: 'Slow' },
      { label: 'Light Requirement', value: 'Low-Medium' },
      { label: 'CO2 Required', value: 'No' },
    ],
    benefits: ['Very hardy', 'Shade tolerant', 'Unique texture', 'Affordable']
  },
  {
    id: 21,
    name: 'Anubias Nana Plant',
    price: 14.99,
    category: 'Plants',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1585433707802-83d5b814b5a6?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 167,
    description: 'Compact plant with rounded leaves, perfect for foreground placement.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Height', value: '4-6 inches' },
      { label: 'Growth Rate', value: 'Very Slow' },
      { label: 'Light Requirement', value: 'Low' },
      { label: 'CO2 Required', value: 'No' },
    ],
    benefits: ['Compact size', 'Very hardy', 'Algae resistant', 'Long lasting']
  },

  // Aquatic Plants - Intermediate
  {
    id: 22,
    name: 'Rotala Rotundifolia',
    price: 7.99,
    category: 'Plants',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1485906767925-fdc76c8f5eb6?w=800&h=600&fit=crop',
    rating: 4.5,
    reviews: 198,
    description: 'Stem plant with red-colored foliage, requires moderate lighting.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Height', value: '12-24 inches' },
      { label: 'Growth Rate', value: 'Fast' },
      { label: 'Light Requirement', value: 'High' },
      { label: 'CO2 Required', value: 'No' },
    ],
    benefits: ['Attractive color', 'Fast growth', 'Easy trimming', 'Carpeting plant']
  },
  {
    id: 23,
    name: 'Ludwigia Plant Red',
    price: 10.99,
    category: 'Plants',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1589977582749-8905e0a1e2cf?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 212,
    description: 'Colorful stem plant with red undersides, perfect for vibrant scapes.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Height', value: '10-20 inches' },
      { label: 'Growth Rate', value: 'Fast' },
      { label: 'Light Requirement', value: 'High' },
      { label: 'CO2 Required', value: 'No' },
    ],
    benefits: ['Vibrant coloring', 'Decent growth', 'Unique texture', 'Easy propagation']
  },

  // Accessories - Beginner
  {
    id: 24,
    name: 'Premium Glass Aquarium 20L',
    price: 49.99,
    category: 'Accessories',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1540932164986-c3f3f8c3a6d1?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 567,
    description: 'High-quality glass aquarium with dimensions 24x12x12 inches.',
    inStock: true,
    featured: true,
    specs: [
      { label: 'Capacity', value: '20 gallons' },
      { label: 'Dimensions', value: '24x12x12 inches' },
      { label: 'Material', value: 'Premium glass' },
      { label: 'Weight', value: '175 lbs' },
    ],
    benefits: ['Crystal clear', 'Durable construction', 'Perfect starter size', 'Great value']
  },
  {
    id: 25,
    name: 'Aquarium Filter System',
    price: 34.99,
    category: 'Accessories',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518606847213-a3e3de787ae8?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 423,
    description: 'Powerful external filter with multi-stage filtration system.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Flow Rate', value: '300 GPH' },
      { label: 'Tank Size', value: 'Up to 20 gallons' },
      { label: 'Noise Level', value: 'Very quiet' },
      { label: 'Media Type', value: 'Mechanical & biological' },
    ],
    benefits: ['Efficient filtration', 'Quiet operation', 'Easy maintenance', 'Great value']
  },
  {
    id: 26,
    name: 'LED Aquarium Light Pro',
    price: 39.99,
    category: 'Accessories',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 612,
    description: 'Full-spectrum LED light with adjustable brightness and timer.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Power', value: '30W' },
      { label: 'Color Spectrum', value: 'Full spectrum' },
      { label: 'Features', value: 'Timer & dimmer' },
      { label: 'Coverage', value: 'Up to 20 gallons' },
    ],
    benefits: ['Energy efficient', 'Plant growth support', 'Timer included', 'Great colors']
  },

  // Accessories - Intermediate
  {
    id: 27,
    name: 'Premium Substrate Mix',
    price: 24.99,
    category: 'Accessories',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 356,
    description: 'Nutrient-rich substrate blend for planted aquariums.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Weight', value: '5 lbs' },
      { label: 'Type', value: 'Mixed substrate' },
      { label: 'pH Impact', value: 'Neutral' },
      { label: 'Fertility', value: 'High nutrient' },
    ],
    benefits: ['Plant growth', 'Beneficial bacteria', 'Great color', 'Long lasting']
  },
  {
    id: 28,
    name: 'CO2 Injection System',
    price: 64.99,
    category: 'Accessories',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 289,
    description: 'Complete CO2 system for planted tanks, includes regulator and diffuser.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Bottle Size', value: '5 lbs' },
      { label: 'Regulator Type', value: 'Dual gauge' },
      { label: 'Tank Size', value: 'Up to 40 gallons' },
      { label: 'Diffusion', value: 'Atomic diffuser' },
    ],
    benefits: ['Plant enhancement', 'Precise control', 'Complete system', 'Easy setup']
  },
  {
    id: 29,
    name: 'Water Testing Kit Pro',
    price: 29.99,
    category: 'Accessories',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f26558?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 478,
    description: '6-in-1 water testing kit with comprehensive parameters.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Test Parameters', value: '6 in 1' },
      { label: 'Test Count', value: '100 tests' },
      { label: 'Results Time', value: '30 seconds' },
      { label: 'Accuracy', value: 'High precision' },
    ],
    benefits: ['Accurate testing', 'Easy to use', 'Comprehensive', 'Great value']
  },

  // Accessories - Advanced
  {
    id: 30,
    name: 'Premium Aquarium Stand 75G',
    price: 199.99,
    category: 'Accessories',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 234,
    description: 'Heavy-duty stand with storage and built-in filtration cabinet.',
    inStock: true,
    featured: false,
    specs: [
      { label: 'Capacity', value: '75 gallons' },
      { label: 'Material', value: 'Premium hardwood' },
      { label: 'Storage', value: 'Yes, bottom cabinet' },
      { label: 'Assembly', value: 'Professional grade' },
    ],
    benefits: ['Sturdy construction', 'Storage included', 'Beautiful finish', 'Professional look']
  }
]
