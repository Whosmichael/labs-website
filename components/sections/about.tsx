'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

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
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="heading-lg mb-6 font-display">Who We Are</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Founded in 2020, Synergy Labs is a premier technology consulting firm specializing in enterprise AI, machine learning, and software engineering. We partner with Fortune 500 companies to drive digital transformation and accelerate innovation.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'AI & Machine Learning Expertise',
                'Enterprise-Grade Solutions',
                'Dedicated Support Team',
                '24/7 Monitoring & Optimization',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-foreground/70 leading-relaxed">
              Our team of 150+ experts brings together decades of combined experience from top tech companies and research institutions.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 relative h-96"
          >
            <div className="absolute inset-0 gradient-accent rounded-2xl opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl border border-border p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">15+</div>
                <p className="text-foreground/70">Years of Combined Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
