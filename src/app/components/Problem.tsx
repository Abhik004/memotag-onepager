"use client"
import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold mb-6">
        The Dementia Care Crisis
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg max-w-3xl mx-auto mb-10">
        Over 55 million people live with dementia globally, and 60% go undiagnosed until it’s too late. Caregivers struggle with identifying behavioral patterns and managing physical-cognitive health.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">55M+ Affected</h3>
          <p>Millions globally suffer from dementia and its effects.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">60% Undiagnosed</h3>
          <p>Lack of early detection results in delayed care.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Caregiver Burnout</h3>
          <p>Manual tracking and care lead to exhaustion and errors.</p>
        </motion.div>
      </div>
    </section>
  );
}