'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const products = [
  {
    title: 'SynergyAI Platform',
    description:
      'Enterprise AI platform with pre-built models, custom training capabilities, and real-time inference.',
    features: [
      'No-code model builder',
      'Real-time predictions',
      'Automated retraining',
      'Multi-model deployment',
    ],
    gradient: 'from-accent via-accent/80 to-accent/60',
  },
  {
    title: 'DataVault Enterprise',
    description:
      'Secure, scalable data management solution with advanced analytics and governance.',
    features: [
      'Data lakehouse architecture',
      'Compliance automation',
      'Advanced querying',
      'Real-time dashboards',
    ],
    gradient: 'from-accent/80 via-accent/60 to-accent/40',
  },
]

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4 font-display">Featured Products</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Industry-leading platforms trusted by enterprises across the globe.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              className="group relative rounded-2xl overflow-hidden border border-border"
              variants={cardVariants}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30`}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 font-display">
                  {product.title}
                </h3>
                <p className="text-foreground/70 mb-8 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-full justify-between group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
