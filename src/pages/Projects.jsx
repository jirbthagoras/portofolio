const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Project
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and secure checkout process.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions and forecasts for locations worldwide.",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A documentation-style portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "React Router"],
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Browse through my recent projects. Each project demonstrates different skills and technologies I've worked
          with.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
          <pre className="font-mono text-sm overflow-x-auto">
            <code>{`project/
├── src/
│   ├── handlers/
│   │   ├── userHandler.j
│   ├── services/
│   │   ├── userService.j
│   ├── route/
│   │   └── routes.j
│   └── index.j
└── Dockerfile`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}

export default Projects
