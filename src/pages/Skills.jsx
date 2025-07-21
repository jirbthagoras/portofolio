"use client";

import golang from "../assets/19063015-mastering-control-structures-in-golang.png";
import devops from "../assets/873635-devops-testing-services-agile-testing.jpg";
import database from "../assets/database-cloud-flat-illustration-n2r3j1una39jrj85.jpg";
import php from "../assets/789558-top-notch-programming-hd-desktop-wallpaper-php-course-1920x1080-wallpaper-teahubio.jpg";
import typescript from "../assets/7990028.png";
import { useState, useEffect } from "react";
import {
  Code,
  Server,
  Database,
  Terminal,
  Cpu,
  Layers,
  MessageSquare,
} from "lucide-react";
import { data } from "react-router-dom";

const SkillCard = ({ title, icon, children, delay, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Header Section */}
      <div className="h-40 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-b border-slate-200 dark:border-slate-600 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-12 w-12 bg-slate-200 dark:bg-slate-600 rounded-md flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-lg font-mono font-medium text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </h3>
          <div className="h-px bg-slate-200 dark:bg-slate-700 mt-2"></div>
        </div>

        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
};

const SkillSection = ({ title, items, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    green: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    purple: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    orange: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  };

  return (
    <div className="mb-3 last:mb-0">
      <h4 className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-widest">
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, index) => (
          <span
            key={index}
            className={`px-2 py-0.5 text-xs font-mono rounded border border-slate-200 dark:border-slate-600 ${colorClasses[color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Skills
        </h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          An overview of my technical skills as a backend developer specializing
          in Golang and TypeScript.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillCard
          title="Golang"
          icon={<Code className="h-6 w-6 text-slate-500" />}
          delay={100}
          image={golang}
        >
          <SkillSection
            title="core"
            items={["API Development", "Concurrency"]}
            color="blue"
          />
          <SkillSection
            title="frameworks"
            items={["fiber", "gorm"]}
            color="green"
          />
        </SkillCard>

        <SkillCard
          title="TypeScript"
          icon={<Code className="h-6 w-6 text-slate-500" />}
          delay={150}
          image={typescript}
        >
          <SkillSection
            title="core"
            items={["type-systems", "backend", "api-integration", "functional"]}
            color="blue"
          />
          <SkillSection title="frameworks" items={["express"]} color="green" />
          <SkillSection title="tools" items={["prisma"]} color="purple" />
        </SkillCard>

        <SkillCard
          title="PHP"
          icon={<Code className="h-6 w-6 text-slate-500" />}
          delay={200}
          image={php}
        >
          <SkillSection
            title="core"
            items={["api-dev", "fullstack"]}
            color="blue"
          />
          <SkillSection title="frameworks" items={["laravel"]} color="green" />
          <SkillSection
            title="ecosystem"
            items={["laravel-tools"]}
            color="purple"
          />
        </SkillCard>

        <SkillCard
          title="databases"
          icon={<Database className="h-6 w-6 text-slate-500" />}
          delay={250}
          image={database}
        >
          <SkillSection
            title="relational"
            items={["postgresql", "mysql"]}
            color="blue"
          />
          <SkillSection
            title="nosql"
            items={["mongodb", "redis", "dynamodb", "firebase"]}
            color="green"
          />
          <SkillSection
            title="design"
            items={["schema-design"]}
            color="orange"
          />
        </SkillCard>

        <SkillCard
          title="DevOps"
          icon={<Server className="h-6 w-6 text-slate-500" />}
          delay={300}
          image={devops}
        >
          <SkillSection
            title="containers"
            items={["docker", "compose"]}
            color="blue"
          />
          <SkillSection
            title="ci-cd"
            items={["github-actions"]}
            color="green"
          />
          <SkillSection title="cloud" items={["aws"]} color="purple" />
          <SkillSection title="iac" items={["terraform"]} color="orange" />
        </SkillCard>

        <SkillCard
          title="ETC"
          icon={<MessageSquare className="h-6 w-6 text-slate-500" />}
          delay={350}
        >
          <SkillSection
            title="Message Broker"
            items={["rabbitmq", "kafka"]}
            color="blue"
          />
        </SkillCard>
      </div>
    </div>
  );
};

export default Skills;
