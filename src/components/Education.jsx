import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-dark-900 relative overflow-hidden"
      aria-labelledby="education-heading"
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="My academic journey in computer science and applications."
        />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="timeline-line" aria-hidden="true" />

          <div className="pl-14 space-y-8">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={i * 0.15}>
                <motion.article
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className={`relative glass border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    edu.status === 'current'
                      ? 'border-purple-500/40 hover:border-purple-500/70 shadow-lg shadow-purple-900/10'
                      : 'border-white/8 hover:border-white/20'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(3.5rem - 1rem)] top-8 -translate-x-1/2">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        edu.status === 'current'
                          ? 'border-purple-500 bg-purple-900/50'
                          : 'border-slate-600 bg-dark-700'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          edu.status === 'current' ? 'bg-purple-400 animate-pulse' : 'bg-slate-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={18} className="text-purple-400" />
                        <h3 className="font-display font-bold text-white text-lg">{edu.degree}</h3>
                      </div>
                      <p className="text-slate-300 font-medium">{edu.institution}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {edu.status === 'current' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                          Currently Enrolled
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Calendar size={13} /> {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">{edu.description}</p>
                  )}

                  {edu.gpa && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">
                      GPA / Score: <span className="font-semibold">{edu.gpa}</span>
                    </div>
                  )}
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
