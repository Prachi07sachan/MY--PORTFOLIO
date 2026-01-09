"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* ✅ Profile Picture */}
          <div className="flex justify-center">
            <Image
              src="/mypic.jpg"   // 🔹 Your uploaded image
              alt="Prachi Sachan"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* ✅ About Text + Tech Stack Knowledge */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="font-semibold">Prachi Sachan</span>, a MERN Stack
              Developer with strong problem-solving skills and a passion for building
              impactful web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I specialize in React, Node.js, MongoDB, and Express, with experience
              in developing projects like Food Delivery App, Chrome Extensions, and
              PSIT Notes.com.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy tackling DSA challenges and continuously
              improving my skills to deliver scalable and efficient solutions.
            </p>

            {/* ✅ Tech Stack Knowledge Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Tech Stack Knowledge</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <span className="p-2 bg-muted rounded-lg text-center">HTML</span>
                <span className="p-2 bg-muted rounded-lg text-center">CSS</span>
                <span className="p-2 bg-muted rounded-lg text-center">JavaScript</span>
                <span className="p-2 bg-muted rounded-lg text-center">React</span>
                <span className="p-2 bg-muted rounded-lg text-center">Node.js</span>
                <span className="p-2 bg-muted rounded-lg text-center">Express.js</span>
                <span className="p-2 bg-muted rounded-lg text-center">MongoDB</span>
                <span className="p-2 bg-muted rounded-lg text-center">C++</span>
                <span className="p-2 bg-muted rounded-lg text-center">Git & GitHub</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
