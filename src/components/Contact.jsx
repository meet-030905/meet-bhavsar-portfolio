import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

const initialForm = { name: '', email: '', subject: '', message: '' }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data) {
  const errors = {}
  if (!data.name.trim())    errors.name    = 'Name is required.'
  if (!data.email.trim())   errors.email   = 'Email is required.'
  else if (!emailRegex.test(data.email)) errors.email = 'Enter a valid email.'
  if (!data.subject.trim()) errors.subject = 'Subject is required.'
  if (!data.message.trim()) errors.message = 'Message is required.'
  if (data.message.length > 0 && data.message.length < 10)
    errors.message = 'Message must be at least 10 characters.'
  return errors
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  ...(personal.phone ? [{
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[\s+]/g, '')}`,
  }] : []),
  {
    icon: Github,
    label: 'GitHub',
    value: personal.github?.replace('https://', '') || '—',
    href: personal.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: personal.linkedin,
  },
  ...(personal.location ? [{
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  }] : []),
]

export default function Contact() {
  const [form, setForm]     = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name]) {
      setErrors(prev => {
        const updated = validate({ ...form, [name]: value })
        return { ...prev, [name]: updated[name] }
      })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    const updated = validate(form)
    setErrors(prev => ({ ...prev, [name]: updated[name] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    // ---------------------------------------------------------------------------
    // INTEGRATION POINT
    // Replace the mailto fallback below with your preferred form backend:
    //   • Formspree: POST to https://formspree.io/f/YOUR_ID
    //   • EmailJS: use emailjs.send(...)
    //   • Any REST API endpoint
    //
    // Currently opens the user's email client as a graceful fallback.
    // ---------------------------------------------------------------------------
    setStatus('sending')
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`
    )}`
    window.location.href = mailto
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
      setTouched({})
    }, 800)
  }

  const inputClass = (field) =>
    `w-full bg-dark-700 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 ${
      errors[field] && touched[field]
        ? 'border-red-500/60'
        : 'border-white/10 hover:border-white/20'
    }`

  return (
    <section
      id="contact"
      className="section-padding bg-dark-800 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-700/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="I'd love to hear from recruiters, developers, and potential collaborators. Drop me a message!"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <p className="text-slate-400 leading-relaxed">
                Whether you have an internship opportunity, a project idea, or just want to connect —
                my inbox is open. I&apos;ll do my best to respond promptly.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4 p-4 glass border border-white/8 rounded-xl hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                      <p className="text-sm text-slate-200 group-hover:text-white transition-colors truncate max-w-[180px]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return (
                  <ScrollReveal key={item.label} delay={i * 0.1}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </ScrollReveal>
                )
              })}
            </div>
          </div>

          {/* Right: form */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="glass border border-white/8 rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Full Name <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jane Smith"
                    className={inputClass('name')}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    aria-invalid={!!(errors.name && touched.name)}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Email Address <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jane@example.com"
                    className={inputClass('email')}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    aria-invalid={!!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Subject <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Internship Opportunity / Project Collaboration"
                  className={inputClass('subject')}
                  aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                  aria-invalid={!!(errors.subject && touched.subject)}
                />
                {errors.subject && touched.subject && (
                  <p id="subject-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} />{errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Message <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me what's on your mind..."
                  className={`${inputClass('message')} resize-none`}
                  aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  aria-invalid={!!(errors.message && touched.message)}
                />
                {errors.message && touched.message && (
                  <p id="message-error" role="alert" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} />{errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-900/30"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Opening email client…
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>

              {/* Success feedback */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    role="status"
                    aria-live="polite"
                    className="flex items-center gap-2 text-sm text-green-300 bg-green-500/10 border border-green-500/30 px-4 py-3 rounded-xl"
                  >
                    <CheckCircle size={16} />
                    Your email client has been opened. Please send the pre-filled message from there.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
