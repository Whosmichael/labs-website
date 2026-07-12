'use client'

import { motion } from 'framer-motion'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description:
      'We analyze your business needs and technical requirements to create a tailored roadmap.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our architects design scalable solutions aligned with your strategic objectives.',
  },
  {
    number: '03',
    title: 'Development & Implementation',
    description:
      'Agile development with continuous integration and rigorous quality assurance.',
  },
  {
    number: '04',
    title: 'Deployment & Optimization',
    description:
      'Seamless deployment with monitoring and ongoing optimization for peak performance.',
  },
]

export function Process() {
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
          <h2 className="heading-lg mb-4 font-display">Our Process</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A proven methodology for delivering exceptional results, every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 transform -translate-x-1/2 hidden lg:block" />

          {/* Steps */}
          <motion.div
            className="space-y-12 lg:space-y-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className="flex-1 lg:text-right" style={{ direction: index % 2 === 0 ? 'initial' : 'initial' }}>
                  <div className="lg:mr-12">
                    <h3 className="text-xl font-bold mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-lg font-bold text-accent-foreground shadow-lg glow-accent"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content placeholder for even distribution */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
