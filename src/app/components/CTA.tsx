"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const textResponse = await res.text();
      const data = textResponse ? JSON.parse(textResponse) : {};

      if (!res.ok) {
        throw new Error(data.error || 'Failed to join waitlist. Please try again.');
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Submission error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Problem joining the waitlist. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="px-6 py-20 max-w-2xl mx-auto text-center text-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4 pb-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Be the First to Experience MemoTag
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg mb-8"
      >
        Join our waitlist and stay informed about upcoming releases and beta access.
      </motion.p>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:w-auto rounded-lg border border-gray-300  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Join Waitlist'}
          </button>
        </form>
      ) : (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-green-600 dark:text-green-400 font-medium p-3 bg-green-50 rounded-lg mt-4"
        >
          Thank you! You've been added to the waitlist.
        </motion.p>
      )}
      {error && (
        <p className="mt-4 text-red-600 dark:text-red-400 text-sm">
          {error}
        </p>
      )}
    </section>
  );
}
