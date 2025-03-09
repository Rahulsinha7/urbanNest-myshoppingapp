import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    
    <div ref={ref} id="ContactSection" className="flex justify-center items-center h-screen bg-gray-800">
       <h1 className="fixed top-0 right-0 text-3xl"><span className="text-amber-50">Urban</span> Nest<span className="bg-yellow-600 text-black font-bold">(uN)</span></h1>
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
      >
       <h1 className="text-center font-bold text-4xl mx-auto p-4">Contact <span className="text-red-500">Us!</span></h1>
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Your Message</label>
            <textarea
              rows="4"
              placeholder="Type your message"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg font-bold hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
