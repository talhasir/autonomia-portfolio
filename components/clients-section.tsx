"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Autonomia transformed our customer support operations with their AI agents. Response times dropped by 80% and customer satisfaction soared.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc",
    rating: 5,
  },
  {
    quote:
      "The workflow automation they built saved us over 1,000 hours per month. Their technical expertise and business understanding is unmatched.",
    author: "Michael Torres",
    role: "Operations Director, ScaleUp",
    rating: 5,
  },
  {
    quote:
      "Professional, efficient, and truly experts in their field. The backend architecture they designed handles our peak traffic effortlessly.",
    author: "Emily Watson",
    role: "Founder, DataDrive",
    rating: 5,
  },
]

const clients = ["TechFlow Inc", "ScaleUp", "DataDrive", "CloudNine", "AIVentures", "AutomateNow"]

export function ClientsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Trusted by <span className="text-neon-cyan">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our clients trust us to deliver exceptional results. Here&apos;s what they have to say.
          </p>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-secondary/50 border border-border rounded-lg"
            >
              <span className="text-muted-foreground font-medium">{client}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-card border border-border rounded-xl hover:neon-border-cyan transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-neon-green text-neon-green" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="text-foreground font-medium">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
