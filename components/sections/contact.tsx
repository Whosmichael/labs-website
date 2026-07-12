'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Heart, Share2 } from 'lucide-react'

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

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@synergylabs.com',
    link: 'mailto:hello@synergylabs.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Innovation Drive, San Francisco, CA',
    link: '#',
  },
]

const socialLinks = [
  { icon: Heart, href: '#', label: 'Sponsor' },
  { icon: Share2, href: '#', label: 'Share' },
]

export function Contact() {
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
          <h2 className="heading-lg mb-4 font-display">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your business? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold font-display mb-8">
              Let&apos;s Connect
            </h3>

            {/* Contact Info Items */}
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a
                  key={info.label}
                  href={info.link}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              )
            })}

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-foreground/60 mb-4">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button className="w-full">Send Message</Button>

            <p className="text-xs text-foreground/60 text-center">
              We&apos;ll get back to you within 24 hours.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
