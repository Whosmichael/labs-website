'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

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

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small projects and teams',
    features: [
      'Up to 5 users',
      '100 GB storage',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$4,999',
    period: '/month',
    description: 'Ideal for growing enterprises',
    features: [
      'Up to 50 users',
      '1 TB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
      'Advanced security',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'White-label options',
      'SLA guarantee',
      'On-premise deployment',
      'Custom features',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4 font-display">Pricing Plans</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Flexible pricing designed for businesses of all sizes. Choose the plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-accent/50 bg-accent/10 ring-1 ring-accent/30 md:scale-105'
                  : 'border-border bg-muted/50 hover:border-accent/30 hover:bg-muted/70'
              }`}
              variants={cardVariants}
              whileHover={!plan.highlighted ? 'hover' : {}}
            >
              {/* Featured badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
              <p className="text-foreground/70 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-foreground/60 ml-2">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full mb-8"
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                Get Started
              </Button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-foreground/70">
            All plans include 14-day free trial.{' '}
            <a href="#" className="text-accent hover:text-accent/80 font-semibold">
              See FAQs
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
