import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl gradient-text mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 max-w-xl mx-auto text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
