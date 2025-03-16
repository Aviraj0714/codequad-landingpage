import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Get in Touch
          </motion.h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>
            </div>
            
            <motion.div whileFocus="focus" variants={inputVariants}>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Your message here..."
                whileFocus={{ scale: 1.02 }}
                required
              />
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Sent Successfully!
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;