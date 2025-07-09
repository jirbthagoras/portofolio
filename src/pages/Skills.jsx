"use client";

import { useState, useEffect } from "react";
import { Code, Server, Database, Terminal, Cpu, Layers } from "lucide-react";

const SkillCard = ({ title, icon, skills, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white font-mono dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 p-2 bg-blue-100 dark:bg-blue-900 rounded-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-hidden">
          <pre className="font-mono text-sm">
            <code>{skills}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("golang");

  const golangSkills = `{
  "language": "Golang",
  "expertise": [
    "API Development",
    "concurrency",
  ],
  "frameworks": [
    "fiber",
    "gorm"
  ],
}`;

  const phpSkills = `{
  "language": "PHP",
  "expertise": [
    "API Development",
    "Fullstack App Development",
  ],
  "frameworks": [
    "laravel"
  ],
  "tools": [
    "Laravel Ecosystems",
  ]
}`;

  const typescriptSkills = `{
  "language": "TypeScript",
  "expertise": [
    "Type Systems",
    "Backend Development",
    "API Integration",
    "Functional Programming"
  ],
  "frameworks": [
    "Express",
  ],
  "tools": [
    "Prisma"
  ]
}`;

  const databaseSkills = `{
  "relational": [
    "PostgreSQL",
    "MySQL",
  ],
  "noSQL": [
    "MongoDB",
    "Redis",
    "DynamoDB",
    "Firebase"
  ],
  "expertise": [
    "Schema Design",
  ]
}`;

  const devOpsSkills = `{
  "containerization": [
    "Docker",
    "Docker compose"
  ],
  "CICD": [
    "GitHub Actions Workflow",
  ],
  "cloud": [
    "AWS",
    "HashiCorp's Terraform"
  ]
}`;

  const messageBrokers = `{
  "technology": [
    "RabbitMQ",
    "Kafka",
  ],
}`;

  return (
    <div className="space-y-8 animate-fadeIn font-mono">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          An overview of my technical skills as a backend developer specializing
          in Golang and TypeScript.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <>
          <SkillCard
            title="Go"
            icon={
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={golangSkills}
            delay={200}
          />
          <SkillCard
            title="TS"
            icon={
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={typescriptSkills}
            delay={200}
          />
          <SkillCard
            title="PHP"
            icon={
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={phpSkills}
            delay={200}
          />
          <SkillCard
            title="Databases"
            icon={
              <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={databaseSkills}
            delay={200}
          />
          {/* <SkillCard
              title="System Design"
              icon={<Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
              skills={systemDesignSkills}
              delay={300}
            /> */}
          <SkillCard
            title="DevOps"
            icon={
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={devOpsSkills}
            delay={400}
          />
          <SkillCard
            title="Message Broker"
            icon={
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            }
            skills={messageBrokers}
            delay={400}
          />
        </>
      </div>
    </div>
  );
};

export default Skills;
