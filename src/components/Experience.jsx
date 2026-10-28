import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react'
import { experience } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

export default function Experience() {
  if (!experience || experience.length === 0) return null

  return (
    <section
      id="experience"
      className="section-padding bg-dark-800 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-700/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Work Experience"
          title="Internship Experience"
          subtitle="Hands-on professional experience in a real-world development environment."
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass border border-purple-500/30 rounded-2xl p-7 md:p-9 relative overflow-hidden hover:border-purple-500/60 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] transition-all duration-300"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6">
                  {/* Left: role info */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/40 to-blue-600/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={22} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-xl">{job.role}</h3>
                      <p className="text-purple-400 font-semibold text-base mt-0.5">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-slate-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-500" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: badges */}
                  <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 border border-green-500/30 text-green-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Completed
                    </span>
                    {job.certificate && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                        <Award size={11} /> Certificate Earned
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{job.description}</p>

                {/* Responsibilities */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Responsibilities</p>
                  <ul className="grid sm:grid-cols-2 gap-2 list-none">
                    {job.responsibilities.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech used */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
