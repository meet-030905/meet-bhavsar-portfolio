import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

const CATEGORIES = ['All', 'Frontend', 'Full Stack']

const categoryColors = {
  Frontend:   'from-purple-600/30 to-purple-800/20 border-purple-500/30',
  Backend:    'from-blue-600/30 to-blue-800/20 border-blue-500/30',
  'Full Stack':'from-indigo-600/30 to-purple-800/20 border-indigo-500/30',
}

const techColors = [
  'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
]

function PlaceholderThumbnail({ category, title }) {
  const gradient = categoryColors[category] || categoryColors.Frontend
  const initials = title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="font-display font-bold text-4xl text-white/30">{initials}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef(null)

  // Subtle JS tilt on mouse move
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.01)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform = ''
    cardRef.current.style.transition = 'transform 0.4s ease'
    setTimeout(() => { if (cardRef.current) cardRef.current.style.transition = '' }, 400)
  }, [])

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass border border-white/8 rounded-2xl overflow-hidden flex flex-col project-card"
      aria-label={`Project: ${project.title}`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <PlaceholderThumbnail category={project.category} title={project.title} />
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full glass border border-white/15 text-white">
          {project.category}
        </span>

        {/* Status badge */}
        {project.status === 'in-progress' && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300">
            <Clock size={11} /> In Progress
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
          <p className="text-purple-400 text-sm mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs rounded-full border ${techColors[i % techColors.length]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3 border-t border-white/8">
                {project.features?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Key Features</p>
                    <ul className="space-y-1 list-none">
                      {project.features.map((f, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.contribution && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">My Contribution</p>
                    <p className="text-sm text-slate-300">{project.contribution}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer links */}
        <div className="mt-auto pt-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
              >
                <Github size={14} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-purple-500/10"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={() => setExpanded(v => !v)}
            aria-expanded={expanded}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            {expanded ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> Details</>}
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="section-padding bg-dark-800 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="My Work"
          title="Project Showcase"
          subtitle="A collection of projects I've built during my MCA studies and self-directed learning."
        />

        {/* Category filter */}
        <ScrollReveal>
          <div
            className="flex flex-wrap justify-center gap-2 mb-12"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/30'
                    : 'glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
