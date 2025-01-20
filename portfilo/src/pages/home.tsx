import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "../components/TypeWriter";
import { FaReact, FaNodeJs, FaCode, FaChalkboardTeacher, FaPaintBrush, FaGraduationCap, FaLaptopCode, FaFigma, FaCamera } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiAdobexd, SiDocker, SiAdobephotoshop, SiCanva } from 'react-icons/si';
import { MdDeveloperMode, MdDesignServices, MdSchool } from 'react-icons/md';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface Role {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  skills: string[];
  projects: Project[];
}

const roles: Role[] = [
  {
    title: "INNOVATOR",
    icon: FaLaptopCode,
    description: "Pushing Technological Boundaries",
    color: "border-white/10",
    skills: [
      "Quantum Computing",
      "Neural Networks",
      "Blockchain Systems",
      "AI Integration"
    ],
    projects: [
      {
        title: "Project Zero",
        description: "Next-generation autonomous systems",
        image: "/assets/project1.png",
        technologies: ["Quantum", "AI", "Neural"]
      }
    ]
  },
  {
    title: "Teacher",
    icon: FaChalkboardTeacher,
    description: "Sharing knowledge and inspiring others",
    color: "from-green-500 to-emerald-500",
    skills: [
      "Programming Education",
      "Workshop Facilitation",
      "Curriculum Development",
      "Student Mentoring"
    ],
    projects: [
      {
        title: "Coding Workshop Platform",
        description: "Interactive learning environment",
        image: "/assets/project2.png",
        technologies: ["Next.js", "Firebase", "WebRTC"]
      }
    ]
  },
  {
    title: "Designer",
    icon: FaPaintBrush,
    description: "Creating beautiful user experiences",
    color: "from-purple-500 to-pink-500",
    skills: [
      "UI/UX Design",
      "Visual Design",
      "Prototyping",
      "Brand Identity"
    ],
    projects: [
      {
        title: "Design System",
        description: "Comprehensive brand guidelines",
        image: "/assets/project3.png",
        technologies: ["Figma", "Adobe XD", "Illustrator"]
      }
    ]
  },
  {
    title: "Photographer",
    icon: FaCamera,
    description: "Capturing moments and telling stories",
    color: "from-amber-500 to-orange-500",
    skills: [
      "Portrait Photography",
      "Event Photography",
      "Photo Editing",
      "Lighting Setup"
    ],
    projects: [
      {
        title: "Photography Portfolio",
        description: "Collection of professional photographs",
        image: "/assets/photo-portfolio.png",
        technologies: ["Photoshop", "Lightroom", "Camera Equipment"]
      }
    ]
  }
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, #ffffff05 0%, transparent 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        
        <div className="relative w-full">
          <div className="max-w-[90rem] mx-auto px-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="text-[20vw] font-bold text-center leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20"
            >
              NOVA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 space-y-8"
            >
              <p className="text-center text-white/60 text-xl tracking-[0.2em] uppercase">
                Digital Innovation Lab
              </p>
              
              <div className="grid grid-cols-4 gap-px bg-white/5">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1.5 }}
                    className="group relative bg-black"
                  >
                    <div className="p-12 border-t border-white/5 transition-colors duration-500">
                      <role.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-500" />
                      <h3 className="mt-8 text-sm text-white/60 group-hover:text-white tracking-widest">
                        {role.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {roles.map((role, index) => (
        <section key={role.title} className="py-32 bg-black border-t border-white/5">
          <div className="max-w-[90rem] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[1fr,2fr] gap-16"
            >
              <div className="space-y-16">
                <h2 className="text-[5vw] font-bold text-white/80 tracking-tighter leading-none">
                  {role.title}
                </h2>
                <div className="grid grid-cols-2 gap-px bg-white/5">
                  {role.skills.map((skill) => (
                    <div key={skill} className="p-8 bg-black">
                      <span className="text-white/60 text-sm tracking-wider">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-px">
                {role.projects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="group relative overflow-hidden bg-zinc-900/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-[21/9] relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-1000"
                      />
                      <div className="absolute inset-0 flex items-end p-12">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {project.title}
                          </h3>
                          <div className="flex gap-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-white/60 tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[5vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">
              Initiate
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-12 py-6 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-opacity-90 transition-colors"
            >
              Connect
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
