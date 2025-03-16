import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Globe, Twitter, Linkedin, Mail } from 'lucide-react';

const TeamMember = ({
  name,
  role,
  image,
  bio,
  github,
  portfolio,
  twitter,
  linkedin,
  technologies
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="perspective-1000"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-black/50 rounded-xl border border-gray-800 overflow-hidden group"
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 transform-gpu">
          <div style={{ transform: "translateZ(50px)" }}>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-primary mb-2">{role}</p>
            <p className="text-gray-400 mb-4">{bio}</p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 rounded-md text-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-gray-400">
                <a href={github} className="hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={portfolio} className="hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href={twitter} className="hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={linkedin} className="hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;