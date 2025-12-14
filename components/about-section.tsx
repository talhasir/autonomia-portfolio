"use client"

import { motion } from "framer-motion"
import { Target, Eye, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with intelligent automation that eliminates repetitive tasks and unlocks human potential for creative, high-value work.",
    color: "neon-green",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where every business, regardless of size, has access to enterprise-grade automation and AI capabilities.",
    color: "neon-cyan",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "We combine deep technical expertise with a business-first mindset. Every solution is tailored to deliver measurable ROI and seamless integration.",
    color: "neon-magenta",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
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
            About <span className="text-neon-green">Autonomia</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We are a specialized agency focused on building intelligent software agents and robust backend systems. Our
            team combines expertise in AI, automation, and software engineering to deliver solutions that transform
            businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            const borderClass =
              pillar.color === "neon-green"
                ? "border-neon-green/30 hover:neon-border-green"
                : pillar.color === "neon-cyan"
                  ? "border-neon-cyan/30 hover:neon-border-cyan"
                  : "border-neon-magenta/30 hover:neon-border-magenta"
            const iconColor =
              pillar.color === "neon-green"
                ? "text-neon-green"
                : pillar.color === "neon-cyan"
                  ? "text-neon-cyan"
                  : "text-neon-magenta"

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 bg-card border ${borderClass} rounded-xl transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 ${iconColor}`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
