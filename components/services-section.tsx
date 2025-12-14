"use client"

import { motion } from "framer-motion"
import { Bot, Workflow, Server, Cog, Brain, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom LLM agents that handle complex workflows, from customer support to data analysis, designed for your unique needs.",
    color: "neon-green",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connecting disparate apps to run on autopilot. We integrate your tools to create seamless, automated business processes.",
    color: "neon-cyan",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Robust, scalable server-side systems built for performance. APIs, databases, and infrastructure that grows with you.",
    color: "neon-magenta",
  },
  {
    icon: Brain,
    title: "Machine Learning Integration",
    description:
      "Embed intelligent predictions and insights directly into your applications with custom ML models and pipelines.",
    color: "neon-green",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Analyze and optimize existing workflows to eliminate bottlenecks and improve operational efficiency.",
    color: "neon-cyan",
  },
  {
    icon: Zap,
    title: "Real-time Data Processing",
    description:
      "Build systems that process and react to data in real-time, enabling instant insights and automated responses.",
    color: "neon-magenta",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
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
            Our <span className="text-neon-green">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation solutions that transform how your business operates. From intelligent agents to robust
            backend systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[0]
}) {
  const Icon = service.icon
  const glowClass =
    service.color === "neon-green"
      ? "group-hover:neon-border-green"
      : service.color === "neon-cyan"
        ? "group-hover:neon-border-cyan"
        : "group-hover:neon-border-magenta"

  const iconColor =
    service.color === "neon-green"
      ? "text-neon-green"
      : service.color === "neon-cyan"
        ? "text-neon-cyan"
        : "text-neon-magenta"

  return (
    <motion.div whileHover={{ y: -5 }} className="group h-full">
      <Card className={`h-full bg-card border-border transition-all duration-300 ${glowClass}`}>
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${iconColor}`}>
            <Icon size={24} />
          </div>
          <CardTitle className="text-foreground">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
