"use client"
export function Footer() {
    return (
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MemoTag. All rights reserved.
      </footer>
    );
  }