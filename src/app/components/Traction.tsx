"use client"
import { motion } from 'framer-motion';

export function Traction() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Real Impact, Proven Results
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg max-w-3xl mx-auto mb-10">
        MemoTag is already making waves in dementia care with preorders, partnerships, and measurable outcomes.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-3xl bg-purple-50 dark:bg-purple-950 shadow-xl dark:shadow-gray-800/10 border border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-semibold mb-2">2K+ Preorders</h3>
          <p>Caregivers and clinics are signing up in advance for MemoTag solutions.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-3xl bg-purple-50 dark:bg-purple-950 shadow-xl dark:shadow-gray-800/10 border border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-semibold mb-2">12 Clinical Pilots</h3>
          <p>Running trials with healthcare systems across 3 continents.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-8 rounded-3xl bg-purple-50 dark:bg-purple-950 shadow-xl dark:shadow-gray-800/10 border border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-semibold mb-2">5 Strategic Partners</h3>
          <p>Backed by leaders in health tech and AI innovation.</p>
        </motion.div>
      </div>
    </section>
  );
}