"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certificates = [
  "TCS ION Career Edge Young Professional Certification (Covers Communication Skills and Soft Skills).",
  "Certified Course in Web Development – Udemy.",
  "Infosys Certificates in HTML, CSS, JavaScript, and React.",
  "Machine Learning Certificate – Coursera.",
  "Python Language Certificate – Google.",
]

const achievements = [
  "Published 3 Articles for GeeksforGeeks Platform (Article Writing Fest).",
  "Solved 200+ Problems on LeetCode, GeeksforGeeks, and HackerRank.",
  "Achieved Rank 100 in Coding Ninjas' Tricolour Code Fest (DSA Test over 2 months).",
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

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Certificates & Achievements
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certificates */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Certificates
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {certificates.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
