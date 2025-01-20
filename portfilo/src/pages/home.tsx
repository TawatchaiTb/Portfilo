import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

// Define types for our data
interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-black">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Full Stack Developer & UI/UX Designer
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              View Projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <Image
              src="/your-photo.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
            >
              {skill.icon && (
                <skill.icon className="w-12 h-12 mb-4 text-black" />
              )}
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

const skills: Skill[] = [
  // Add your skills here
];

const projects: Project[] = [
  // Add your projects here
];

export default Home;
