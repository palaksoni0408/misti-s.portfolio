"use client";

import { motion } from "framer-motion";
import { Users, Award, Building2 } from "lucide-react";

const leadershipRoles = [
  {
    icon: Building2,
    title: "Science & Technical Council, RGIPT",
    role: "Executive (Product & Design)",
    period: "Aug 2024 – Apr 2025",
    description: "Led product design and digital content initiatives. Contributed to branding, UI/UX decisions, and outreach strategy.",
  },
  {
    icon: Users,
    title: "Kaltarang RGIPT",
    role: "Sponsorship Team",
    period: "Jan 2024 – Apr 2024",
    description: "Managed sponsorship coordination and external communications.",
  },
];

const communityMemberships = [
  {
    icon: Users,
    title: "Women Techmakers",
    role: "Member",
    period: "Jun 2025 – Present",
  },
  {
    icon: Building2,
    title: "IEEE RGIPT Student Branch",
    role: "Student Member",
    period: "Nov 2023 – Present",
  },
  {
    icon: Building2,
    title: "ACM RGIPT Student Chapter",
    role: "Student Member",
    period: "Oct 2023 – Present",
  },
  {
    icon: Building2,
    title: "GeeksForGeeks RGIPT Chapter",
    role: "Student Member",
    period: "Nov 2023 – Present",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <Award className="w-10 h-10" />
          Leadership & Community
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Leadership Roles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadershipRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <Icon className="w-8 h-8 text-accent-blue mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">{role.title}</h4>
                  <p className="text-accent-violet font-medium mb-2">{role.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{role.period}</p>
                  <p className="text-gray-300">{role.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Community Memberships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityMemberships.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <Icon className="w-6 h-6 text-accent-emerald mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-1">{member.title}</h4>
                  <p className="text-accent-violet text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.period}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

