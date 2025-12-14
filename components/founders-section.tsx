"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const founder = {
  name: "Hafiz Talha",
  role: "Founder",
  bio: "Visionary leader behind Autonomia, dedicated to revolutionizing businesses through intelligent automation and agentic AI solutions.",
  image: "/images/hafiz-talha.jpg",
  upworkLink: "https://www.upwork.com/agencies/1995917097037164296/",
}

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-card/50">
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
            Meet the <span className="text-neon-magenta">Founder</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The mind behind Autonomia&apos;s vision of intelligent automation.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl overflow-hidden hover:neon-border-magenta transition-all duration-300 max-w-sm w-full"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={founder.image || "/placeholder.svg"}
                alt={`${founder.name} - ${founder.role}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                {founder.name}
              </h3>
              <p className="text-neon-magenta mb-4">{founder.role}</p>
              <p className="text-muted-foreground text-sm mb-6">{founder.bio}</p>
              <div className="flex justify-center">
                <motion.a
                  href={founder.upworkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-neon-magenta/10 text-neon-magenta border border-neon-magenta hover:bg-neon-magenta hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  <span>Hire Agency on Upwork</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
