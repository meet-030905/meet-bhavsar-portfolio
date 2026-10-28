import { motion } from 'framer-motion'
import { Code2, Layers, BrainCircuit, Briefcase } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

const iconMap = { Code2, Layers, BrainCircuit, Briefcase }

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-dark-800 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-700/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="A bit about my background, motivations, and where I'm headed."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio text */}
          <div className="space-y-6">
            {personal.about.split('\n\n').map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-2">
                {['React.js', 'JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full glass border border-purple-500/30 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: illustration + focus areas */}
          <div className="space-y-8">
            {/* Abstract 3D-feel illustration — CSS only */}
            <ScrollReveal delay={0.1}>
              <div className="relative h-52 flex items-center justify-center">
                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/25 to-blue-600/25 blur-2xl" />
                <div className="relative glass border border-white/10 rounded-3xl p-8 text-center max-w-xs mx-auto">
                  <div className="font-display font-bold text-5xl gradient-text mb-1">MCA</div>
                  <div className="text-sm text-slate-400">Master of Computer Applications</div>
                  <div className="mt-3 text-xs text-purple-400 font-medium tracking-wide">1st Year · Currently Enrolled</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Focus areas */}
            <ScrollReveal delay={0.2}>
              <div className="glass border border-white/8 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-white text-lg mb-5">
                  What I&apos;m Focused On
                </h3>
                <ul className="space-y-4 list-none">
                  {personal.focusAreas.map((item, i) => {
                    const Icon = iconMap[item.icon] || Code2
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/20 flex items-center justify-center">
                          <Icon size={16} className="text-purple-400" />
                        </span>
                        <span className="text-slate-300 text-sm">{item.text}</span>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
