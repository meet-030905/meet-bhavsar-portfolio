import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personal } from '../data/portfolioData.js'

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const socials = [
  {
    icon: Github,
    href: personal.github,
    label: 'GitHub',
    color: 'text-white hover:text-purple-300 hover:border-purple-500/50',
  },
  {
    icon: Linkedin,
    href: personal.linkedin,
    label: 'LinkedIn',
    color: 'text-[#58a6ff] hover:text-blue-300 hover:border-blue-500/50',
  },
  {
    icon: Mail,
    href: `mailto:${personal.email}`,
    label: 'Email',
    color: 'text-purple-300 hover:text-purple-200 hover:border-purple-400/50',
  },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-dark-900 border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-display font-bold text-xs text-white">
                {personal.initials}
              </div>
              <span className="font-display font-semibold text-white">{personal.name}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Full Stack Developer · React.js, JavaScript, PHP, MySQL & MongoDB.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 list-none">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-slate-500 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center gap-2.5 text-sm font-medium glass border border-white/10 px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${color}`}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/40 to-blue-600/40 border border-purple-500/30 text-purple-400 hover:text-white transition-all duration-300"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
