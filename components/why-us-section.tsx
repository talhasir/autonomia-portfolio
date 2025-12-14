"use client"

import { motion } from "framer-motion"
import { Zap, Target, TrendingUp, Shield, Clock, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Speed",
    description: "Rapid development and deployment. We deliver working solutions in weeks, not months.",
    color: "neon-green",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Precision-engineered systems that perform exactly as specified, every single time.",
    color: "neon-cyan",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Architecture that grows with your business. From startup to enterprise scale.",
    color: "neon-magenta",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Battle-tested systems with 99.9% uptime. Your automation runs when you need it.",
    color: "neon-green",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support. We're always here when you need us.",
    color: "neon-cyan",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    description: "We're invested in your success. Long-term relationships, not just projects.",
    color: "neon-magenta",
  },
]

export function WhyUsSection() {
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
            Why <span className="text-neon-green">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What sets Autonomia apart from the rest.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const iconColor =
              reason.color === "neon-green"
                ? "text-neon-green"
                : reason.color === "neon-cyan"
                  ? "text-neon-cyan"
                  : "text-neon-magenta"

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 ${iconColor}`}
                >
                  <Icon size={24} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
