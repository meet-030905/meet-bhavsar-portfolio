import { Download, Eye, FileText } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ScrollReveal from './ScrollReveal.jsx'

export default function Resume() {
  const hasResume = Boolean(personal.resumeFile)

  return (
    <section
      id="resume"
      className="section-padding bg-dark-900 relative overflow-hidden"
      aria-labelledby="resume-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/8 to-blue-900/8 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <SectionHeading
          eyebrow="Career Documents"
          title="My Resume"
          subtitle="Download my latest resume to learn more about my skills, projects, and academic background."
        />

        <ScrollReveal>
          <div className="glass border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

            {/* Icon */}
            <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/30 flex items-center justify-center mb-8">
              <FileText size={36} className="text-purple-400" />
            </div>

            <h3 className="font-display font-bold text-white text-2xl mb-3">
              {personal.name}
            </h3>
            <p className="text-slate-400 mb-8 text-base">
              MCA Student · Web Developer (React.js, JavaScript, PHP, MySQL)
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {hasResume ? (
                <>
                  <a
                    href={personal.resumeFile}
                    download
                    aria-label="Download resume as PDF"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-900/40 hover:-translate-y-0.5"
                  >
                    <Download size={18} /> Download Resume
                  </a>
                  <a
                    href={personal.resumeFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume in browser"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white glass border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Eye size={18} /> View Resume
                  </a>
                </>
              ) : (
                <div className="space-y-4 w-full">
                  <button
                    disabled
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-slate-500 bg-white/5 border border-white/5 cursor-not-allowed"
                  >
                    <Download size={18} /> Resume Not Yet Added
                  </button>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To add your resume: place your PDF in the <code className="text-purple-500/60">/public/</code> folder
                    and update <code className="text-purple-500/60">personal.resumeFile</code> in{' '}
                    <code className="text-purple-500/60">src/data/portfolioData.js</code>.
                    <br />Example: <code className="text-purple-500/60">resumeFile: &quot;/resume.pdf&quot;</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
