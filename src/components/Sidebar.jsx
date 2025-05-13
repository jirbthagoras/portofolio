"use client"

import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import {
  ChevronDown,
  ChevronRight,
  Code,
  User,
  Briefcase,
  Mail,
  Search,
  BookOpen,
  FileText,
  Github,
  Package,
  Server,
  Database,
  Terminal,
} from "lucide-react"

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState({
    gettingStarted: true,
    projects: false,
    skills: false,
    api: false,
  })
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile && !isOpen) setIsOpen(true)
    }

    const handleClickOutside = (event) => {
      if (isMobile && isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, isOpen, setIsOpen])

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const mainNavItems = [
    {
      id: "gettingStarted",
      label: "Getting Started",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        // { path: "/", label: "Introduction", icon: <User className="h-4 w-4" /> },
        // { path: "/installation", label: "Installation", icon: <Package className="h-4 w-4" /> },
        { path: "/", label: "Quick Start", icon: <Terminal className="h-4 w-4" /> },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Code className="h-5 w-5" />,
      items: [
        { path: "/projects", label: "Overview", icon: <FileText className="h-4 w-4" /> },
        // { path: "/projects/web", label: "Web Projects", icon: <Globe className="h-4 w-4" /> },
        // { path: "/projects/api", label: "API Projects", icon: <Server className="h-4 w-4" /> },
      ],
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Briefcase className="h-5 w-5" />,
      items: [
        { path: "/skills", label: "Overview", icon: <FileText className="h-4 w-4" /> },
        // { path: "/skills/golang", label: "Golang", icon: <Code className="h-4 w-4" /> },
        // { path: "/skills/typescript", label: "TypeScript", icon: <Code className="h-4 w-4" /> },
      ],
    },
  ]

  const utilityNavItems = [
    // { path: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
    { path: "https://github.com/jirbthagoras", label: "GitHub", icon: <Github className="h-5 w-5" />, external: true },
  ]

  const filteredNavItems = searchQuery
    ? mainNavItems
        .map((section) => ({
          ...section,
          items: section.items.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
        .filter((section) => section.items.length > 0)
    : mainNavItems

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`h-[calc(100vh-4rem)] border-r border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800 
          ${isOpen ? "w-72" : "w-0 md:w-16"} 
          transition-all duration-300 overflow-hidden
          ${isMobile ? (isOpen ? "fixed left-0 top-16 z-40" : "hidden") : "sticky top-16"}
        `}
      >
        <div className="h-full overflow-y-auto font-mono">
          {/* Search */}
          <div className={`p-4 ${!isOpen && "md:hidden"}`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="px-3 py-2">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ml-2">
              {isOpen ? "Documentation" : ""}
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-3 pb-24">
            <ul className="space-y-1">
              {filteredNavItems.map((section) => (
                <li key={section.id} className="mb-2">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between px-2 py-2 text-left rounded-md transition-colors
                      ${isOpen ? "hover:bg-slate-200 dark:hover:bg-slate-700" : ""}
                      ${expandedSections[section.id] ? "bg-slate-200 dark:bg-slate-700" : ""}
                      text-slate-700 dark:text-slate-300
                    `}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{section.icon}</span>
                      {isOpen && <span className="font-medium">{section.label}</span>}
                    </div>
                    {isOpen && (
                      <span className="transform transition-transform duration-200">
                        {expandedSections[section.id] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Section items */}
                  {isOpen && expandedSections[section.id] && (
                    <ul className="mt-1 ml-4 pl-4 border-l border-slate-300 dark:border-slate-600 space-y-1">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center gap-2 px-2 py-1.5 text-sm rounded-md ${
                                isActive
                                  ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100 font-medium"
                                  : "text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700"
                              }`
                            }
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Divider */}
              {isOpen && (
                <li className="my-4">
                  <div className="border-t border-slate-200 dark:border-slate-700"></div>
                </li>
              )}

              {/* Utility navigation */}
              {utilityNavItems.map((item) => (
                <li key={item.path}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700"
                    >
                      {item.icon}
                      {isOpen && <span>{item.label}</span>}
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-2 py-2 rounded-md ${
                          isActive
                            ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100"
                            : "text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700"
                        }`
                      }
                    >
                      {item.icon}
                      {isOpen && <span>{item.label}</span>}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Version info */}
          {isOpen && (
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span>Version 1.0.0</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span>© 2025</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

// Add missing icon
const Globe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

// Add missing icon
const Lock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export default Sidebar
