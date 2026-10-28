import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import Scene3D from './Scene3D.jsx'

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const socials = [
  {
    icon: Github,
    href: personal.github,
    label: 'GitHub',
    color: 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40',
  },
  {
    icon: Linkedin,
    href: personal.linkedin,
    label: 'LinkedIn',
    color: 'bg-[#0A66C2]/20 border-[#0A66C2]/50 text-[#58a6ff] hover:bg-[#0A66C2]/35 hover:border-[#0A66C2]',
  },
  {
    icon: Mail,
    href: `mailto:${personal.email}`,
    label: 'Email Me',
    color: 'bg-purple-600/20 border-purple-500/50 text-purple-300 hover:bg-purple-600/35 hover:border-purple-400',
  },
]

export default function Hero({ prefersReducedMotion = false }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion) return
    const { clientX, clientY } = e
    const { innerWidth: w, innerHeight: h } = window
    setMouse({
      x: (clientX / w - 0.5) * 2,
      y: (clientY / h - 0.5) * 2,
    })
  }, [prefersReducedMotion])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const lines = personal.headline.split('\n')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
      onMouseMove={handleMouseMove}
      aria-labelledby="hero-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-28 lg:py-0">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Role badge */}
            <motion.div
              custom={0} variants={textVariants} initial="hidden" animate="visible"
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-sm text-purple-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                {personal.tagline}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              id="hero-heading"
              custom={1} variants={textVariants} initial="hidden" animate="visible"
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            {/* Headline */}
            <motion.div
              custom={2} variants={textVariants} initial="hidden" animate="visible"
              className="font-display font-semibold text-2xl md:text-3xl text-slate-200 leading-snug"
            >
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? line : <span className="gradient-text-purple">{line}</span>}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={3} variants={textVariants} initial="hidden" animate="visible"
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg"
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4} variants={textVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:-translate-y-0.5"
              >
                Explore My Projects <ArrowRight size={16} />
              </a>

              {personal.resumeFile ? (
                <a
                  href={personal.resumeFile}
                  download
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white glass border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download size={16} /> Download Resume
                </a>
              ) : (
                <button
                  disabled
                  title="Resume not yet added — see portfolioData.js"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-500 glass border border-white/5 cursor-not-allowed"
                >
                  <Download size={16} /> Resume (Coming Soon)
                </button>
              )}
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={5} variants={textVariants} initial="hidden" animate="visible"
              className="flex items-center flex-wrap gap-3 mt-2"
            >
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 font-medium text-sm ${color}`}
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D scene ── */}
          <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-[560px]">
            <Scene3D mouseX={mouse.x} mouseY={mouse.y} prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-purple-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
