import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-dark/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div 
          className="mb-4 transform-gpu"
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FeatureCard;