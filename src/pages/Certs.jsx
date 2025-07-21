"use client";

import { useState, useEffect } from "react";
import {
  Award,
  Trophy,
  Calendar,
  ExternalLink,
  MapPin,
  Building,
  FileText,
} from "lucide-react";

const CertificationCard = ({
  title,
  issuer,
  date,
  type,
  status,
  image,
  description,
  credentialId,
  verifyUrl,
  location,
  delay,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700";
      case "expired":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-700";
      case "pending":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600";
    }
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Content Section */}
      <div className="p-5">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-mono font-medium text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              {title}
            </h3>
            <span
              className={`px-2 py-0.5 text-xs font-mono rounded border ${getStatusColor(status)}`}
            >
              {status}
            </span>
          </div>
          <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="space-y-3">
          {/* Issuer */}
          <div className="flex items-center gap-2">
            <Building className="h-3 w-3 text-slate-400" />
            <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
              {issuer}
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-slate-400" />
            <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
              {date}
            </span>
          </div>

          {/* Location (if provided) */}
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-slate-400" />
              <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
                {location}
              </span>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          )}

          {/* Verify URL */}
          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              take a look
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const CertificationSection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-mono font-medium text-slate-900 dark:text-slate-100 mb-1 tracking-tight">
        {title}
      </h2>
      <div className="h-px bg-slate-300 dark:bg-slate-600 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Certifications & Qualifications
        </h1>
        <div className="h-1 w-24 bg-blue-600"></div>
      </div>

      {/* Description */}
      <section className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Professional certifications, course completions, and awards that
          validate my technical expertise and continuous learning journey.
        </p>
      </section>

      {/* Professional Certifications */}
      <CertificationSection title="Awardings">
        <CertificationCard
          title="1st place winner: Codecollab Hackathon"
          issuer="Telkom University Purwokerto"
          date="2024-12-27"
          type="certificate"
          status="active"
          image="https://via.placeholder.com/48x48/FF9900/ffffff?text=AWS"
          description="I participated in a Software Development competition and make a Website with NextJS named Leafstyle, utilizes AI for the Recycle Scanning Feature"
          verifyUrl="https://drive.google.com/file/d/19bfeYvNO_dufYzg9HqFkeJQ9RpudbnjJ/view?usp=drive_link"
          delay={100}
        />

        <CertificationCard
          title="2nd place winner: Dinacom Software Development Competition"
          issuer="Universtias Dian Nuswantoro"
          date="2025-01-18"
          type="certificate"
          status="active"
          image="https://via.placeholder.com/48x48/00ADD8/ffffff?text=Go"
          description="I participated in a Software Development competition and make a Website with NextJS named Leafstyle, utilizes AI for the Recycle Scanning Feature"
          credentialId="GCP-GO-2023-005678"
          verifyUrl="https://drive.google.com/file/d/11c96iLid10B8PzBSxfnkGPW-tnPbO-Oh/view?usp=drive_link"
          delay={150}
        />

        <CertificationCard
          title="2nd place LKS Province Jawa Tengah: Cloud Computing"
          issuer="Dinas Pendidikan Dan Kebudayaan Provinsi Jawa Tengah"
          date="2025-04-28"
          type="certificate"
          status="active"
          description="I participated in a LKS competition: Cloud Computing at Province level, I try my best but at the end I got 2nd place winner, what an experience."
          verifyUrl="https://drive.google.com/file/d/1J3GprxXoF-ebCBgS5QBl-duodnkX3Jwr/view"
          delay={150}
        />
      </CertificationSection>

      {/* Course Completions */}
      <CertificationSection title="Completions">
        <CertificationCard
          title="Educourse: ReactJS path"
          issuer="Educouse by Telkom"
          date="2024-09-02"
          type="completion"
          status="completed"
          description="Comprehensive learning with ReactJS, the final project is to make a deal with UMKM and make a website to boost the productivity of thoes UMKM"
          verifyUrl="https://drive.google.com/file/d/1sLEyXw0TfTpDsn1JgEY0Iy_UwC-HACt0/view"
          delay={250}
        />

        <CertificationCard
          title="CodingCamp: Frontend Backend Path"
          issuer="DBS Foundation X Dicoding"
          date="2025-05-02"
          type="completion"
          status="completed"
          image="https://via.placeholder.com/48x48/A435F0/ffffff?text=🎯"
          description="Advanced system design concepts including distributed systems, scalability patterns, and architectural trade-offs."
          verifyUrl="https://drive.google.com/file/d/1Ycy0A_PT69thF4ZzKA3ojc3zLCxLjT8W/view?usp=drive_link"
          delay={300}
        />
      </CertificationSection>
    </div>
  );
};

export default Certifications;
