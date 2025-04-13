"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-100 opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle at ${50 + Math.sin(rotation * 0.01) * 20}% ${50 + Math.cos(rotation * 0.01) * 20}%, rgba(37, 99, 235, 0.8), rgba(96, 165, 250, 0.4), rgba(219, 234, 254, 0.2))`,
        }}
      />
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white"
        >
          <span className="text-blue-600">AI Driven</span> Wearables for<br/> Proactive Caregiving
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
        >
          Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#cta" 
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all text-lg font-semibold"
          >
            Pre - Order Now
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#community" 
            className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all text-lg font-semibold"
          >
            Join Community
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-24 h-24 md:w-32 md:h-32"
      >
        
      </motion.div>
    </section>
  );
}