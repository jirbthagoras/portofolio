"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out using the form
          below or through my social media channels.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </section>

        <section className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 text-slate-600 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 text-slate-600 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-4">Availability</h2>
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400">I'm currently available for:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Full-time positions</li>
                <li>Contract work</li>
                <li>Freelance projects</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
            <pre className="font-mono text-sm overflow-x-auto">
              <code>{`// Let's connect
const contact = {
  email: "contact@example.com",
  github: "github.com/yourusername",
  linkedin: "linkedin.com/in/yourusername",
  twitter: "@yourusername"
};`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
