import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Twitter, Linkedin } from "lucide-react";

const TeamMember = ({
  name,
  role,
  image,
  bio,
  github,
  portfolio,
  twitter,
  linkedin,
  technologies,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      className="relative group perspective-1000"
    >
      <motion.div
        className="bg-black/50 rounded-xl border border-gray-800 overflow-hidden group-hover:shadow-xl transition-shadow duration-300 transform-gpu"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Profile Image */}
        <div className="relative w-full h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:blur-sm"
          />

          {/* Bio Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-sm">{bio}</p>
          </motion.div>
        </div>

        {/* Team Member Details */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-primary mb-2">{role}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 rounded-md text-primary text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-gray-400 mt-4 justify-center">
            {github && (
              <a href={github} className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {portfolio && (
              <a href={portfolio} className="hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;
