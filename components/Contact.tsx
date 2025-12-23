"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-dark-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 mb-4">
          Open to AI, product, and full-stack engineering opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12 mb-8">
          <motion.a
            href="mailto:palaksoni20105@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </motion.a>

          <motion.a
            href="https://github.com/palaksoni0408"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/palak-soni-292280288"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-dark-border text-gray-500"
        >
          <p>Designed & built with Next.js, Tailwind CSS, and Framer Motion</p>
          <p className="mt-2 text-sm">© 2025 Palak Soni. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

