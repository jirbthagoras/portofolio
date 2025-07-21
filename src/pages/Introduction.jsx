import { useState, useEffect } from "react";
import profilePhoto from "../assets/profile.jpeg";
import {
  Code,
  Server,
  Users,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  GitBranch,
  Star,
  Activity,
  Terminal,
} from "lucide-react";

const Introduction = () => {
  const [copied, setCopied] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const codeSnippet = `// Get developer info
jirb := &Engineer{
  name: "Jabriel Hans Talula",
  role: "Backend Developer",
  school: "SMK Negeri 8 Semarang",
  goal: "Software Engineer",
  passion: "Making world better through code"
};`;

  const stats = [
    {
      label: "Experience",
      value: "2+ Years",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      label: "Projects",
      value: "15+",
      icon: <GitBranch className="h-4 w-4" />,
    },
    { label: "Technologies", value: "8+", icon: <Code className="h-4 w-4" /> },
    { label: "Focus", value: "Backend", icon: <Server className="h-4 w-4" /> },
  ];

  const features = [
    {
      title: "Backend Development",
      description: "Building robust API services with modern technologies",
      icon: <Server className="h-6 w-6" />,
      tech: ["Golang", "TypeScript", "Laravel"],
      color: "bg-blue-500",
      delay: "delay-100",
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete web applications with seamless integration",
      icon: <Code className="h-6 w-6" />,
      tech: ["Laravel", "NextJS"],
      color: "bg-green-500",
      delay: "delay-200",
    },
    {
      title: "Project Management",
      description: "Leading small teams to achieve project success",
      icon: <Users className="h-6 w-6" />,
      tech: ["Leadership", "Agile", "Team Building"],
      color: "bg-purple-500",
      delay: "delay-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div
        id="hero"
        data-animate
        className={`relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 transition-all duration-1000 ${
          visibleSections.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
                    <Terminal className="h-3 w-3" />
                    <span>v1.0.0</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active</span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                  Developer
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Documentation
                  </span>
                </h1>

                <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="prose prose-lg dark:prose-invert font-mono max-w-none">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Welcome to my{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Developer Documentation
                  </strong>{" "}
                  — a comprehensive guide to my journey, skills, and projects as
                  a Backend Developer.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src={profilePhoto}
                  alt="Jabriel Hans Talula"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-800 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example Section */}
      <div
        id="code-example"
        data-animate
        className={`max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections["code-example"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold font-mono text-slate-900 dark:text-white">
              Initialize Engineer
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-mono max-w-2xl mx-auto">
              Here's a quick overview of my configuration and setup
            </p>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono ml-2">
                    engineer.go
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(codeSnippet)}
                  className="flex items-center gap-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors text-slate-300 text-sm"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6">
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                  <code className="language-javascript">
                    <span className="text-slate-500">
                      // Make an Developer instance
                    </span>
                    {"\n"}
                    <span className="text-blue-400">jirb</span>{" "}
                    <span className="text-white">:=</span>{" "}
                    <span className="text-slate-400">&Engineer</span>
                    {""}
                    <span className="text-yellow-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">name</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-400">
                      "Jabriel Hans Talula"
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">role</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-400">"Backend Developer"</span>
                    <span className="text-slate-400">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">school</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-400">
                      "SMK Negeri 8 Semarang"
                    </span>
                    <span className="text-slate-400">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">goal</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-400">"Software Engineer"</span>
                    <span className="text-slate-400">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-400">passion</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-orange-400">
                      "Making world better through code"
                    </span>
                    {"\n"}
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="text-slate-400">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div
        id="quote"
        data-animate
        className={`bg-gradient-to-r from-blue-600 to-purple-600 py-16 transition-all duration-1000 ${
          visibleSections.quote
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="text-6xl text-white/20 font-serif">"</div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-white font-mono leading-relaxed">
              Don't observe the world inside a magnifier
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="h-px w-12 bg-white/30"></div>
              <span className="font-mono text-sm">Personal Philosophy</span>
              <div className="h-px w-12 bg-white/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        data-animate
        className={`max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.features
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold font-mono text-slate-900 dark:text-white">
              Core Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-mono max-w-2xl mx-auto">
              Comprehensive skillset covering full development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  visibleSections.features
                    ? `opacity-100 translate-y-0 ${feature.delay}`
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${feature.color} rounded-t-2xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Card Section */}
      <div
        id="profile-card"
        data-animate
        className={`bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-16 transition-all duration-1000 ${
          visibleSections["profile-card"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                  Jabriel Hans Talula
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-mono">
                  Software Engineer | Backend Specialization
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for opportunities
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/jirbthagoras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-mono">GitHub</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jabriel-hans-talula-51230b320/"
                  className="group flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-mono">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
