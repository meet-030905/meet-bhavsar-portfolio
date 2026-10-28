import { motion } from 'framer-motion'
import { Award, ExternalLink, BookOpen, Trophy, Wrench } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

const typeConfig = {
  certification: { icon: Award,    color: 'from-purple-600/20 to-purple-800/10 border-purple-500/30', badge: 'Certification' },
  course:        { icon: BookOpen,  color: 'from-blue-600/20 to-blue-800/10 border-blue-500/30',       badge: 'Course' },
  achievement:   { icon: Trophy,    color: 'from-amber-600/20 to-amber-800/10 border-amber-500/30',    badge: 'Achievement' },
  workshop:      { icon: Wrench,    color: 'from-green-600/20 to-green-800/10 border-green-500/30',    badge: 'Workshop' },
}

export default function Certifications() {
  // Section is hidden when no certifications are configured
  if (!certifications || certifications.length === 0) {
    return (
      <section
        id="certifications"
        className="section-padding bg-dark-800 relative"
        aria-labelledby="certs-heading"
      >
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Achievements"
            subtitle="This section will display your certifications, courses, and achievements."
          />
          <div className="glass border border-dashed border-white/15 rounded-2xl p-12 max-w-xl mx-auto">
            <Award size={40} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed">
              No certifications added yet.
              Open <code className="text-purple-500/70">src/data/portfolioData.js</code> and
              add entries to the <code className="text-purple-500/70">certifications</code> array
              to display them here.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="certifications"
      className="section-padding bg-dark-800 relative overflow-hidden"
      aria-labelledby="certs-heading"
    >
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Achievements"
          subtitle="Courses completed, certifications earned, and milestones reached."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const config = typeConfig[cert.type] || typeConfig.certification
            const Icon = config.icon
            return (
              <ScrollReveal key={cert.id} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`glass bg-gradient-to-br ${config.color} rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-purple-400" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full glass border border-white/10 text-slate-400 font-medium">
                      {config.badge}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-sm text-purple-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-xs text-slate-500 mb-3">{cert.date}</p>
                    {cert.description && (
                      <p className="text-sm text-slate-400 leading-relaxed">{cert.description}</p>
                    )}
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify certificate: ${cert.title}`}
                      className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={12} /> Verify Certificate
                    </a>
                  )}
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
