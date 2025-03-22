import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Users, Github as Git, Pencil, Send, Github, Twitter, Linkedin, Globe, Mail } from 'lucide-react';
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
      role: "Mern Stack Developer",
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
      <section className="py-20 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent"
          >
            Powerful Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Code2 className="w-8 h-8 text-primary" />}
              title="AI Code Review"
              description="Advanced code analysis powered by cutting-edge AI technology"
            />
            <FeatureCard 
              icon={<Terminal className="w-8 h-8 text-primary" />}
              title="Code Execution"
              description="Real-time code execution with instant feedback"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Collaboration"
              description="Seamless team collaboration with real-time updates"
            />
            <FeatureCard 
              icon={<Git className="w-8 h-8 text-primary" />}
              title="Version Control"
              description="Integrated version control with smart branching"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent"
          >
            Meet Our Team - QuadVerse
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe Section */}
      <section className="py-20 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Wireframe & Drawing Mode</h2>
                <p className="text-gray-300 mb-6">
                  Create stunning wireframes and collaborate in real-time with our advanced drawing tools.
                </p>
                <div className="flex items-center gap-4">
                  <Pencil className="w-6 h-6 text-accent" />
                  <span>Real-time collaboration</span>
                </div>
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
    />
  </div>
</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-black py-12 px-4 md:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CodeQuad</h3>
              <p className="text-gray-400">The Ultimate Dev Hub for modern development teams.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
                <li className="hover:text-primary transition-colors cursor-pointer">About</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Github className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 CodeQuad by QuadVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;