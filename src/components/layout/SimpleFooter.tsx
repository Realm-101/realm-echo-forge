"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export const SimpleFooter = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Realm101 Holdings. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Realm-101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
