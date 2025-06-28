import { motion } from 'framer-motion';

export default function GlassPanel({ children, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-lg p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}