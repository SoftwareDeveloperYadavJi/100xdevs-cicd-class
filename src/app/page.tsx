import React from 'react';
import Image from "next/image";
import { Github, Linkedin, Mail, Code2, BookOpen, Award, Terminal } from 'lucide-react';


// @ts-expect-error
const ExperienceCard = ({ title, company, period, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-blue-400 mt-1">{company}</p>
    <p className="text-gray-400 text-sm mt-1">{period}</p>
    <p className="text-gray-300 mt-3">{description}</p>
  </div>
);

// @ts-expect-error
const ProjectCard = ({ title, description, tech, link }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <a href={link} target="_blank" className="text-blue-400 hover:text-blue-300">
        <Github className="w-5 h-5" />
      </a>
    </div>
    <p className="text-gray-300 mt-3">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      
      {/* @ts-expect-error */}
      {tech.map((t, i) => (
        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
          {t}
        </span>
      ))}
    </div>
  </div>
);


// @ts-expect-error
const Stats = ({ icon: Icon, title, value }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
    <Icon className="w-6 h-6 text-blue-400 mb-2" />
    <h4 className="text-gray-300 text-sm">{title}</h4>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <Image
              className="rounded-full border-4 border-blue-500 shadow-lg"
              src="/Profile.jpeg"
              alt="Nitin Yadav"
              width={180}
              height={180}
              priority
            />
            <h1 className="mt-6 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Nitin Yadav
            </h1>
            <p className="mt-4 text-xl text-gray-300">Backend Engineer | DevOps | Cybersecurity Specialist</p>
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com/SoftwareDeveloperYadavJi" target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/devnitin" target="_blank"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:nitiny1524@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stats icon={Code2} title="Challenges Solved" value="250+" />
          <Stats icon={Terminal} title="Projects Completed" value="15+" />
          <Stats icon={BookOpen} title="Years Experience" value="3+" />
          <Stats icon={Award} title="Certifications" value="5+" />
        </div>
      </div>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ExperienceCard
            title="Senior Backend Engineer"
            company="TechCorp Solutions"
            period="2022 - Present"
            description="Led development of scalable microservices architecture, improving system performance by 40%. Implemented robust security measures and mentored junior developers."
          />
          <ExperienceCard
            title="DevOps Engineer"
            company="CloudTech Systems"
            period="2020 - 2022"
            description="Architected and maintained CI/CD pipelines, reducing deployment time by 60%. Managed AWS infrastructure and implemented monitoring solutions."
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="SecondBrain"
            description="Intelligent bookmarking system with advanced search and categorization capabilities."
            tech={["Node.js", "MongoDB", "Redis", "Docker"]}
            link="https://github.com/SoftwareDeveloperYadavJi/secondbrain.git"
          />
          <ProjectCard
            title="DecideNow"
            description="Real-time voting application with instant results and analytics dashboard."
            tech={["NestJS", "Redis", "WebSocket", "PostgreSQL"]}
            link="https://github.com/SoftwareDeveloperYadavJi/DecideNow.git"
          />
          <ProjectCard
            title="Course Selling Platform"
            description="Secure e-learning platform with payment integration and content management."
            tech={["Express.js", "MongoDB", "JWT", "Stripe"]}
            link="https://github.com/SoftwareDeveloperYadavJi/teachme.git"
          />
          <ProjectCard
            title="Women Safety App"
            description="Real-time incident reporting system with emergency response integration."
            tech={["AWS", "Node.js", "MongoDB", "WebSocket"]}
            link="https://github.com/SoftwareDeveloperYadavJi/women-safety-backend.git"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Node.js", "Python", "AWS", "Docker",
            "Kubernetes", "MongoDB", "PostgreSQL", "Redis",
            "CI/CD", "Security", "System Design", "API Design"
          ].map((skill, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}