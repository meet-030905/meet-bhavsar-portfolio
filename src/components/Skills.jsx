import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

/* Tech icon SVGs — inline for zero external dependency */
const TechIcon = ({ name }) => {
  const icons = {
    html5: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#E44D26" d="M5 3l2.2 24.5L16 30l8.8-2.5L27 3z"/>
        <path fill="#F16529" d="M16 27.8l7.1-2L25 7H16z"/>
        <path fill="#EBEBEB" d="M16 13H11.2l-.3-3.7H16V5.8H7.3l.8 9.2H16zm0 9.2l-.1.1-3.8-1-.2-2.6H8.2l.5 5.7 7.2 2z"/>
        <path fill="#fff" d="M16 13v4h4.3l-.4 4.8-3.9 1v4.2l7.2-2 .1-.7 1.1-12.3H16zm0-7.2v3.5h8.5l.3-3.5z"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#1572B6" d="M5 3l2.2 24.5L16 30l8.8-2.5L27 3z"/>
        <path fill="#33A9DC" d="M16 27.8l7.1-2L25 7H16z"/>
        <path fill="#fff" d="M16 13h-4.8l-.2-2.2H16V6.8H7.5l.6 6.8-.2 2.4H16zm0 8.4l-.1.1-3.2-.9-.2-2H8.8l.4 4.8 6.7 1.9.1-.1z"/>
        <path fill="#EBEBEB" d="M16 13v3.6h4.3l-.4 4.5-3.9 1v3.8l6.8-1.9.5-5.3.5-5.7H16zm0-6.2v3.5h8.4l.3-3.5z"/>
      </svg>
    ),
    js: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
        <path fill="#323330" d="M9 26.4l2.4-1.5c.5.8.9 1.5 1.9 1.5 1 0 1.6-.4 1.6-1.9v-10h3v10c0 3.1-1.8 4.5-4.5 4.5-2.4 0-3.8-1.3-4.4-2.6zm11.3-.3l2.4-1.4c.6 1.1 1.4 1.9 2.8 1.9 1.2 0 1.9-.6 1.9-1.4 0-1-.7-1.3-2-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.5-3.6 4-3.6 1.7 0 3 .6 3.9 2.2l-2.3 1.5c-.5-.8-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.7 1.7l.7.3c2.3 1 3.7 2 3.7 4.3 0 2.5-1.9 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.9z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="16" cy="16" rx="13" ry="5"/>
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/>
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/>
        </g>
      </svg>
    ),
    php: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="15" ry="10" fill="#8892BE"/>
        <path fill="#fff" d="M7 19l1.4-7h2.4l-.3 1.5h1.7c1.5 0 2.1.7 1.8 2.1l-.5 3.4H11l.5-3.2c.1-.6 0-.8-.6-.8H9.4L8.7 19zm8.5 0l1.4-7h2.4l-.3 1.5h1.7c1.5 0 2.1.7 1.8 2.1l-.5 3.4h-2.5l.5-3.2c.1-.6 0-.8-.6-.8h-1.1L17.2 19zm5.5-3.5c.4-2.2 1.7-3.5 4-3.5h3l-.4 2H26c-.8 0-1.3.4-1.5 1.5s.1 1.5 1 1.5h1.7l-.4 2H24c-2 0-2.8-1.3-2.5-3.5z"/>
      </svg>
    ),
    mysql: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#4479A1" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z"/>
        <path fill="#fff" d="M9 22V10h1.8l3.9 7.5L18.6 10H20v12h-1.8v-8.7l-3.2 6.1h-1l-3.2-6.1V22zm14.5-2.5c0 1.5-1.2 2.7-2.7 2.7h-.9v-1.7h.9c.5 0 .9-.4.9-.9v-9.3H23v9.2z"/>
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#13AA52" d="M16 2C9 2 3 8 3 16s6 14 13 14 13-6 13-14S23 2 16 2z"/>
        <path fill="#fff" d="M16.5 7v18l-1-.4C10.7 21.7 8 18.5 8 16c0-3.3 2.8-7 8.5-9zm1 0C23.2 9 26 12.7 26 16c0 2.5-2.7 5.7-7.5 8.6l-1 .4V7z"/>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#339933" d="M16 2L2.6 9.5v15L16 32l13.4-7.5v-15z"/>
        <path fill="#fff" d="M16 6.5l9.4 5.3v10.5L16 27.5l-9.4-5.2V11.8zm-2 14.8v-7l-2.3 1.4v4.5l2.3 1.1zm4 0l2.3-1.1v-4.5L18 14.3v7zm-2-8.2l2.1-1.2-2.1-1.2-2.1 1.2 2.1 1.2z"/>
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#38BDF8" d="M16 7c-3.6 0-5.8 1.8-6.7 5.3.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3.9.9 2 2 4.3 2 3.6 0 5.8-1.8 6.7-5.3-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3C19.4 8 18.3 7 16 7zm-6.7 8c-3.6 0-5.8 1.8-6.7 5.3.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3.9.9 2 2 4.3 2 3.6 0 5.8-1.8 6.7-5.3-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-.9-.9-2-2-4.3-2z"/>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#F05032" d="M29.5 14.5l-12-12a2.1 2.1 0 00-3 0l-2.6 2.6 3.3 3.3a2.5 2.5 0 013.2 3.2l3.2 3.2a2.5 2.5 0 11-1.5 1.5l-3-3v7.8a2.5 2.5 0 11-2 0V13.2a2.5 2.5 0 01-1.4-3.3L8.4 6.7l-5.9 5.9a2.1 2.1 0 000 3l12 12a2.1 2.1 0 003 0l11.9-11.9a2.1 2.1 0 000-3.2z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#fff" d="M16 2A14 14 0 002 16c0 6.2 4 11.4 9.5 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.1-.4 3.8 1.4a13 13 0 017 0C23.1 8.4 24.2 8.8 24.2 8.8c.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.6v3.9c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16A14 14 0 0016 2z"/>
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <path fill="#007ACC" d="M29 5.9L22.4 2.4a2 2 0 00-2.2.3L3.5 17.3a1.3 1.3 0 000 2l1.8 1.6a1.3 1.3 0 001.7.1L27 7.2v18.4L7 11.4a1.3 1.3 0 00-1.7.1L3.5 13a1.3 1.3 0 000 2l16.7 15.6a2 2 0 002.2.3L29 27.1A2 2 0 0030 25.4V7.6a2 2 0 00-1-1.7z"/>
      </svg>
    ),
  }
  return icons[name] || (
    <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 text-xs font-bold">
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}


function SkillCard({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 }
      }}
      className="glass border border-white/8 rounded-2xl p-6 flex flex-col items-center gap-4 group hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300 tilt-card"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-dark-600 to-dark-500 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <TechIcon name={skill.icon} />
      </div>
      <span className="font-display font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  let globalDelay = 0

  return (
    <section
      id="skills"
      className="section-padding bg-dark-900 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-700/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I Work With"
          subtitle="A growing toolkit — picked up through coursework, self-study, and hands-on projects."
        />

        <div className="space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display font-semibold text-xl text-white">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((skill) => {
                  const d = (globalDelay++ * 0.08)
                  return (
                    <SkillCard key={skill.name} skill={skill} delay={d} />
                  )
                })}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
