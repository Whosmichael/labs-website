'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, MessageCircle, Calendar } from 'lucide-react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const engagementCards = [
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    description: 'Quick questions? Reach us instantly on WhatsApp for real-time support.',
    buttonText: 'Start Chat',
    href: 'https://wa.me/1234567890',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Mail,
    title: 'Send an Email',
    description: 'Share details about your project. We&apos;ll respond within 24 hours.',
    buttonText: 'Email Us',
    href: 'mailto:hello@synergylabs.com',
    color: 'from-indigo-600 to-indigo-700',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a meeting with our team directly. No back-and-forth emails.',
    buttonText: 'Book Now',
    href: 'https://cal.com/synergylabs',
    color: 'from-violet-600 to-violet-700',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4 font-display text-balance">
            Let&apos;s Get in Touch
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Choose your preferred way to connect. We&apos;re ready to discuss how we can transform your vision.
          </p>
        </motion.div>

        {/* Engagement Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {engagementCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl bg-muted/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-8 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Glassmorphic Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute -inset-1/2 bg-gradient-to-r ${card.color} blur-3xl opacity-20 animate-pulse`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`inline-flex w-fit p-3 rounded-lg bg-gradient-to-br ${card.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>

                  {/* CTA Button */}
                  <a href={card.href} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="w-full py-3 px-4 rounded-lg gradient-accent text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {card.buttonText}
                    </motion.button>
                  </a>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/30 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-foreground/60 text-sm">
            Not sure where to start?{' '}
            <a href="#contact" className="text-accent hover:underline font-medium">
              Pick any option above
            </a>
            {' '}and we&apos;ll guide you from there.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
