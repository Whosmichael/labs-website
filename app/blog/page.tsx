'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Building Enterprise AI Solutions That Scale',
    excerpt:
      'Explore the architectural patterns and best practices for deploying AI systems that handle millions of requests while maintaining reliability.',
    category: 'Engineering',
    date: 'Jul 10, 2026',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'The Future of Machine Learning in Business',
    excerpt:
      'How ML is transforming decision-making across industries, from predictive analytics to automated operations and beyond.',
    category: 'AI & ML',
    date: 'Jul 5, 2026',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Lessons from Scaling a Boutique Engineering Firm',
    excerpt:
      'Key insights on building high-performing teams, delivering enterprise-grade solutions, and maintaining quality at scale.',
    category: 'Company',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'AI-Powered Automation: A Practical Guide',
    excerpt:
      'A step-by-step approach to identifying, implementing, and optimizing AI automation workflows in your organization.',
    category: 'Tutorials',
    date: 'Jun 20, 2026',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'Why Enterprise Security Matters for AI Products',
    excerpt:
      'Understanding the unique security challenges of AI systems and how to build robust defenses from day one.',
    category: 'Security',
    date: 'Jun 12, 2026',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Introducing Synergy Labs to the World',
    excerpt:
      'Our mission, vision, and what drives us to deliver exceptional AI and software engineering solutions for the modern enterprise.',
    category: 'Company',
    date: 'Jun 1, 2026',
    readTime: '4 min read',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="heading-xl mb-4 font-display">Blog</h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Insights on AI, engineering, and building enterprise-grade software
              from the Synergy Labs team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.12_0.001_280)] to-[oklch(0.08_0.001_280)] overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl gradient-accent opacity-20" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors font-display">
                    {post.title}
                  </h2>

                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-foreground/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
