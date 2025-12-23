"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Target, TrendingUp, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "IEEE Data Visualization Challenge",
    achievement: "3rd Place",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Oracle Data Science Professional Certification",
    achievement: "2025",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Target,
    title: "NK Securities Hackathon",
    achievement: "Top 250 teams (98.12% accuracy)",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Aeroclub RecSys Cup",
    achievement: "Top 75",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "CBSE Mathematics (Standard)",
    achievement: "Top 0.1% nationwide",
    color: "from-purple-500 to-violet-500",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <Trophy className="w-10 h-10" />
          Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-accent-blue font-medium">
                  {achievement.achievement}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

