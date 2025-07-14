import webversal from "../assets/project/webversal.jpeg";
import setory from "../assets/project/setory.jpeg";
import mentai from "../assets/project/mentai.png";
import leafstyle from "../assets/project/leafstyle.png";

const ProjectCard = ({ title, description, tags, image, link }) => {
  console.log(image);
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={image}
          alt="No Image Available"
          className="w-full h-full object-cover"
        />
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Webversal",
      description: "A pure PHP project that serves as a CRM",
      tags: ["PHP", "Midtrans", "Git", "MySQL"],
      image: webversal,
      link: "https://github.com/jirbthagoras/Project-Based-Learning-Webversal-.git",
    },
    {
      title: "Emloyee attendance application",
      description:
        "Fullstack Laravel project. Digitalize your workplace attendance system!",
      tags: ["MySQL", "Livewire", "Laravel", "PHP"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/employee-attendance.git",
    },
    {
      title: "Setory: let's learn history",
      description:
        "A fullstack laravel application packed up with TailwindCSS, this project is dedicated for Techomfest 2024-2025",
      tags: ["Laravel", "Livewire", "Filament", "TailwindCSS", "MySQL"],
      image: setory,
      link: "https://github.com/jirbthagoras/setory.git",
    },
    {
      title: "MentAI",
      description:
        "React + Firebase application integrated with AI. In this project, we learn about how to integrate and utilize AI technology to help Mental Health Recovery",
      tags: ["JavaScript", "Firebase", "React", "React Router"],
      image: mentai,
      link: "https://github.com/jirbthagoras/Ment-Ai.git",
    },
    {
      title: "LeafStyle",
      description:
        "A lifectyle-changer app that have so much feature like marketplace, ai-based scanning, gamification and so much more.",
      tags: ["TypesScript", "Firebase", "NextJS", "TailwindCSS"],
      image: leafstyle,
      link: "https://github.com/jirbthagoras/leafstyle.git",
    },
    {
      title: "Job-board API service",
      description:
        "API service built with laravel. Search for Job easier with Job-Board",
      tags: ["Laravel", "PostgreSQL", "Eloquent", "JWT", "Swagger API docs"],
      image:
        "https://github.com/jirbthagoras/leafstyle.git/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/laravel-job-board-webservice.git",
    },
    {
      title: "Event Management API Service: GoVent",
      description: "An Event Management API service written in Golang stdlib",
      tags: [
        "MySQL",
        "GoLang",
        "Swagger API docs",
        "Golang Dependency Injector",
        "Layered Architecture",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/event-management.git",
    },
    {
      title: "Hon: Literacy Tracker App",
      description:
        "Literacy tracker app with feature like Goal Chaser and Email sender using RabbitMQ delayed message",
      tags: ["Docker", "RabbitMQ", "MySQL", "GoFiber", "GoLang", "JWT"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/leafstyle.git",
    },
    {
      title: "ChatsO: tcp based chat APP",
      description:
        "TCP based chat with feature like room, message, whisper, and nickname.",
      tags: ["GoLang", "Goroutine"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/tcp-chat.git",
    },
    {
      title: "Nutrize: nutrition recommendation API service",
      description:
        "An API service made for CodingCamp Capstone project. Integrated with Gemini AI",
      tags: [
        "ExpressJS",
        "TypeScript",
        "Prisma",
        "JWT",
        "Docker",
        "PostgreSQL",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/nutrition-recipe-be.git",
    },
    {
      title: "Pemilos",
      description:
        "I made an Pemilos API service that requires reliability, and data integration",
      tags: [
        "JWT",
        "Redis",
        "TypeScript",
        "MongoDB",
        "ExpressJS",
        "Mongoose",
        "Pusher",
        "Docker",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://github.com/jirbthagoras/pemilos-backend.git",
    },
  ];

  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Browse through my recent projects. Each project demonstrates different
          skills and technologies I've worked with.
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
  );
};

export default Projects;
