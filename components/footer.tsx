"use client";

import { motion } from "framer-motion";
import { Heart, Github, Moon } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border-t mt-8 sm:mt-16"
    >
      <div className="container max-w-2xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
          {/* Logo i nazwa */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="font-bold text-base sm:text-lg">DreamyCalc</span>
          </motion.div>

          {/* Główny tekst */}
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md px-4">
            Your personal sleep assistant. Calculate optimal sleep times based on
            90-minute sleep cycles for better rest and productivity.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </motion.a>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-muted-foreground"
            >
              Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-red-500" /> by
              You
            </motion.span>
          </div>

          {/* Copyright */}
          <div className="text-[10px] sm:text-xs text-muted-foreground/70 pt-3 sm:pt-4 border-t w-full">
            <p>© {new Date().getFullYear()} DreamyCalc. All rights reserved.</p>
            <p className="mt-1">
              Sleep better, live better. 🌙✨
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
