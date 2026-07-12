'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import pwcLogo from '../image/images.png'
import deloitteLogo from '../image/delo.jpeg'
import bcgLogo from '../image/bcg.png'
import wizLogo from '../image/wiz ai.jpeg'
import kredivoLogo from '../image/kredivo.png'
import kumparanLogo from '../image/kumpa.png'

const logos = [
  { src: pwcLogo, alt: 'PwC', x: '5%', y: '10%', rotate: -6, width: 70, opacity: 0.14, blur: false },
  { src: deloitteLogo, alt: 'Deloitte', x: '55%', y: '5%', rotate: 3, width: 80, opacity: 0.10, blur: true },
  { src: bcgLogo, alt: 'BCG', x: '10%', y: '60%', rotate: -3, width: 75, opacity: 0.18, blur: false },
  { src: wizLogo, alt: 'Wiz.ai', x: '60%', y: '55%', rotate: 5, width: 65, opacity: 0.12, blur: false },
  { src: kredivoLogo, alt: 'Kredivo', x: '35%', y: '35%', rotate: -2, width: 60, opacity: 0.08, blur: true },
  { src: kumparanLogo, alt: 'Kumparan', x: '68%', y: '25%', rotate: 4, width: 70, opacity: 0.15, blur: false },
]

function FounderCredentialsCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-96 rounded-2xl overflow-hidden cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 gradient-accent rounded-2xl blur-2xl transition-opacity duration-500"
        style={{ opacity: hovered ? 0.35 : 0.2 }}
      />

      {/* Card */}
      <div
        className="relative h-full rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.12_0.001_280)] to-[oklch(0.08_0.001_280)] backdrop-blur-sm flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 0 30px rgba(79,107,255,0.15), 0 0 60px rgba(79,107,255,0.08), 0 20px 40px rgba(0,0,0,0.3)'
            : '0 0 20px rgba(79,107,255,0.08), 0 10px 30px rgba(0,0,0,0.2)',
          borderColor: hovered ? 'rgba(255,255,255,0.18)' : undefined,
        }}
      >
        {/* Logo background layer */}
        {logos.map((logo, i) => (
          <img
            key={logo.alt}
            src={typeof logo.src === 'string' ? logo.src : logo.src.src}
            alt=""
            className="absolute object-contain select-none pointer-events-none"
            style={{
              left: logo.x,
              top: logo.y,
              width: logo.width,
              opacity: logo.opacity,
              rotate: `${logo.rotate}deg`,
              filter: `grayscale(1) brightness(2) contrast(0.8)${logo.blur ? ' blur(2px)' : ''}`,
              transition: `transform 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.04}s, opacity 0.5s ease`,
              transform: hovered
                ? `rotate(${logo.rotate}deg) translate(${(i % 2 === 0 ? 1 : -1) * 6}px, ${(i % 3 === 0 ? 1 : -1) * 4}px)`
                : `rotate(${logo.rotate}deg)`,
            }}
          />
        ))}

        {/* Foreground content */}
        <div className="relative z-10 text-center px-8 max-w-sm">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">
          Execution-tested at the highest levels
          </h3>

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4" />

          {/* <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            PwC &bull; Deloitte &bull; BCG &bull; Wiz.ai &bull; Kredivo &bull; Kumparan
          </p> */}

          <p className="text-xs text-foreground/40 leading-relaxed">
            Experience spanning strategy, finance, product, engineering, AI, and digital transformation.
          </p>
        </div>
      </div>
    </div>
  )
}

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
    <section id="about" className="scroll-mt-20 py-20 px-4 bg-muted/30">
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
              Founded in 2026, Synergy Labs is a premier boutique engineering collective specializing in enterprise AI, machine learning, and software engineering.
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
              Our lean team of founders brings together elite experience from MBB consulting, Big 4, top startups, and leading AI firms.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2"
          >
            <FounderCredentialsCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
