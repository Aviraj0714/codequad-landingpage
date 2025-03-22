import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader'; // Import animated loader
import Button from './Button'; // Import animated button

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoad(false);
    }, 1000); // Initial loading delay
    return () => clearTimeout(timeout);
  }, []);

  // Handle button click to show loader before redirecting
  const handleRedirect = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = 'https://code-quad.netlify.app/';
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden pt-16 px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
                transition: {
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                },
              }}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                backgroundColor: '#6366f1',
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Screen (initial load & after button click) */}
      <AnimatePresence>
        {(initialLoad || isLoading) && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <Loader /> {/* Animated SVG Loader */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Split into Two Columns */}
      {!initialLoad && !isLoading && (
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          
          {/* Left Section - Text & Buttons */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CodeQuad
              <motion.span
                className="block text-2xl md:text-3xl mt-4 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                The Ultimate Dev Hub
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0"
            >
              Experience the future of collaborative development with AI-powered tools
              and real-time collaboration.
            </motion.p>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <div onClick={handleRedirect}>
                <Button label='Get Started' />
              </div>

              <a href="https://github.com/Aviraj0714/CodeQuad.git">
                <Button label='Learn More' />
              </a>
            </motion.div>
          </div>

          {/* Right Section - Coding Block */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative bg-black/80 border border-gray-700 rounded-lg p-6 w-full max-w-lg shadow-xl backdrop-blur-md">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-500 rounded-full blur-2xl opacity-30" />

              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                <code>
                  {`// Welcome to CodeQuad
import { AI } from '@codequad/core';

const project = AI.createProject({
  name: 'awesome-app',
  features: {
    codeGeneration: true,
    realTimeCollab: true,
    taskManagement: true,
    wireframeToCode: true
  }
});

await project.start();
console.log('🚀 Project initialized!');`}
                </code>
              </pre>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800 to-transparent rounded-lg opacity-10" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
