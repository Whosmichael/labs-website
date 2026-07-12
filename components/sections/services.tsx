'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Code2,
  BarChart3,
  Zap,
  Shield,
  Users,
} from 'lucide-react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Custom AI solutions powered by the latest models and frameworks to automate complex business processes.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Scalable, production-ready applications built with modern technologies and best practices.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with advanced analytics and visualization tools.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Maximize efficiency and reduce costs through intelligent system optimization and automation.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security solutions ensuring GDPR, HIPAA, and SOC 2 compliance.',
  },
  {
    icon: Users,
    title: 'Consulting & Strategy',
    description:
      'Strategic guidance from industry experts to align technology with business objectives.',
  },
]

export function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4 font-display">Our Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative rounded-xl border border-border bg-muted/50 p-6 hover:border-accent/50 hover:bg-muted/70 transition-all duration-300 cursor-pointer overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="heading-md mb-3 font-display text-lg">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-accent/0 group-hover:border-accent/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
