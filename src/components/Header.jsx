"use client";
import { Link } from "react-router-dom";
import {
  Moon,
  Sun,
  ExternalLink,
  Menu,
  X,
  Github,
  BookOpen,
} from "lucide-react";

const Header = ({
  toggleSidebar,
  isSidebarOpen,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <header className="font-mono sticky top-0 z-50 w-full border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="font-bold text-xl hidden md:inline-block text-slate-900 dark:text-white">
              DevDocs
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="https://github.com/jirbthagoras"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 text-slate-700 dark:text-white"
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
              <ExternalLink className="h-3 w-3 ml-0.5" />
            </a>
          </nav>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
