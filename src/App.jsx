import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Users, Github as Git, PencilRuler, Workflow, MessageCircle, ListTodo, Github, Twitter, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import ContactForm from './components/ContactForm';
import TeamMember from './components/TeamMember';
import avirajImage from './assets/photo.jpg';
import video from './assets/video.mp4';

function App() {
  const teamMembers = [
    {
      name: "Aviraj Bhaliya",
      role: "MERN Stack Developer",
      image: avirajImage,
      bio: "Passionate Full-Stack Developer building futuristic web solutions with AI-powered innovation.",
      github: "https://github.com",
      portfolio: "https://portfolio.dev",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      technologies: ["React", "Next.js", "Express", "MongoDB"]
    },
    {
      name: "Harsh Deradi",
      role: "Fullstack Developer",
      image: "https://avatars.githubusercontent.com/u/75111484?v=4",
      bio: "Bridging frontend elegance with backend power to create seamless applications.",
      github: "https://github.com",
      portfolio: "https://portfolio.dev",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      technologies: ["React", "Node.js", "Python", "C++"]
    },
    {
      name: "Khushi Patel",
      role: "Fullstack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFc7xveF8Cm1g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719015378671?e=1747872000&v=beta&t=zqABsr9glqsxKhvNh50Im88TIdrV4dIALQkrYlaqvLg",
      bio: "Turning ideas into reality with modern web development and AI-powered solutions.",
      github: "https://github.com",
      portfolio: "https://portfolio.dev",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      technologies: ["React", "SQL", "Express", "Node.js"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 bg-black/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Why Choose CodeQuad? 🚀
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code2 className="w-8 h-8 text-primary" />}
              title="AI-Powered Code Review"
              description="Analyze and improve your code quality with AI-driven insights and smart suggestions."
            />
            <FeatureCard 
              icon={<Terminal className="w-8 h-8 text-primary" />}
              title="Real-Time Code Execution"
              description="Run and debug code instantly with an integrated execution environment."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Seamless Collaboration"
              description="Chat, share files, and work together using interactive flowcharts and drawing tools."
            />
            <FeatureCard 
              icon={<Git className="w-8 h-8 text-primary" />}
              title="Version Control"
              description="Integrated Git-based version control for smooth project tracking and management."
            />
            <FeatureCard 
              icon={<Workflow className="w-8 h-8 text-primary" />}
              title="JIRA-Style Task Board"
              description="Plan, manage, and track your development tasks with an advanced task board."
            />
            <FeatureCard 
              icon={<PencilRuler className="w-8 h-8 text-primary" />}
              title="Wireframe to Code (FrameForge)"
              description="Convert your wireframe sketches into working code with AI-powered automation."
            />
          </div>
        </div>
      </motion.section>

      {/* FrameForge - Wireframe to Code Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 bg-black/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
              FrameForge: Wireframe to Code
            </h2>
            <p className="text-gray-300 mb-6">
              Draw your wireframes and instantly convert them into production-ready code. FrameForge is an AI-driven feature that accelerates your UI/UX workflow, allowing developers to build prototypes seamlessly.
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-black/50 rounded-xl p-4 border border-gray-800">
              <video 
                className="w-full h-full border-2 border-primary/50 rounded-lg"
                src={video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Meet the Team - QuadVerse */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 md:px-8 bg-black/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Meet Our Team - QuadVerse
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 CodeQuad by QuadVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
