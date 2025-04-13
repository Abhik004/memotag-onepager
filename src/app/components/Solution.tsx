// components/Solution.tsx
"use client"
import { motion } from 'framer-motion';
import { FaBrain, FaHeartbeat, FaChartLine } from 'react-icons/fa';

export function Solution() {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our AI-Powered Solution
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <FaBrain className="w-full h-full p-2" />,
              title: "Cognitive Tracking",
              text: "Continuous monitoring of memory patterns and cognitive function"
            },
            { 
              icon: <FaHeartbeat className="w-full h-full p-2" />,
              title: "Health Integration",
              text: "Sync with wearable devices for comprehensive health data"
            },
            { 
              icon: <FaChartLine className="w-full h-full p-2" />,
              title: "Predictive Analytics",
              text: "AI-driven insights for early intervention opportunities"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}