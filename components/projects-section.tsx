"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description: "A full-stack food delivery application with cart and order features.",
    githubUrl: "https://github.com/Prachi07sachan/FoodDeliveryApp",
    demoUrl: "https://dummy-demo-link.com/food-delivery", 
    image: "https://media.designrush.com/inspiration_images/256684/conversions/Food_Delivery_1_f7815fee3660-desktop.jpg",
  },
  {
    id: 2,
    title: "PSIT Notes.com",
    description: "A platform to share and access academic notes for PSIT students.",
    githubUrl: "https://github.com/Prachi07sachan/PSIT-Notes.com",
    demoUrl: "https://dummy-demo-link.com/psit-notes",
    image: "https://static.vecteezy.com/system/resources/previews/000/270/946/original/vector-online-education-web-banner.jpg",
  },
  {
    id: 3,
    title: "Social Media Analyzer",
    description: "Analyzes social media trends and user engagement with data visualization.",
    githubUrl: "https://github.com/Prachi07sachan/Social-Media-Analyzer",
    demoUrl: "https://social-media-analyzer-1-83nk.onrender.com/",
    image: "https://th.bing.com/th/id/OIP.710xQIfNDQLinncWZxgzWwHaDn?w=318&h=170&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 4,
    title: "Chrome Extension - Cricket Updates",
    description: "A Chrome extension to display live cricket updates in real time.",
    githubUrl: "https://github.com/Prachi07sachan/Chrome-Extension",
    demoUrl: "https://dummy-demo-link.com/chrome-extension",
    image: "data:image/webp;base64,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",
  },
  {
    id: 5,
    title: "Chess Game",
    description: "A multiplayer chess game built with modern web technologies.",
    githubUrl: "https://github.com/Prachi07sachan/Chess-Game",
    demoUrl: "https://playchessgamehere.netlify.app/",
    image: "https://www.bing.com/th/id/OIP.HJBVolETRFO6oaOTD2GYJAHaEk?w=256&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 6,
    title: "Text To Speech Converter",
    description: "Converts text into speech using modern JavaScript APIs.",
    githubUrl: "https://github.com/Prachi07sachan/Text-To-Speech-Converter",
    demoUrl: "https://text-to-voice-converter-49b5b5.netlify.app",
    image: "data:image/webp;base64,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",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex space-x-3">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> Code
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}