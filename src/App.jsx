"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Introduction from "./pages/Introduction"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import "./index.css"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-white">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white dark:bg-slate-900 min-h-[calc(100vh-4rem)]">
            <div className="max-w-4xl mx-auto">
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add placeholder routes for the new sidebar items */}
                <Route path="/installation" element={<PlaceholderPage title="Installation" />} />
                <Route path="/quickstart" element={<PlaceholderPage title="Quick Start" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

// Placeholder component for new routes
const PlaceholderPage = ({ title }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>
      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg">This is a placeholder page for the {title} section. Content will be added here.</p>
      </section>
    </div>
  )
}

export default App
