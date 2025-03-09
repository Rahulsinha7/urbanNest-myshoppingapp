
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Login() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} id="LoginSection" className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-500">
       <h1 className="fixed top-0 right-0 text-3xl"><span className="text-amber-50">Urban</span> Nest<span className="bg-yellow-600 text-black font-bold">(uN)</span></h1>
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-center font-bold text-4xl mb-6">Login to <span className="text-teal-500">Your Account</span></h1>
        
        <div className="flex justify-center gap-4 mb-4">
  <button className="cursor-pointer bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 flex items-center justify-center w-12 h-12">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="Facebook" className="w-6 h-6 object-contain"/>
  </button>
  <button className="bg-gray-100 cursor-pointer p-3 rounded-full shadow-md hover:bg-gray-200 flex items-center justify-center w-12 h-12">
    <img src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj" alt="Google" className="w-6 h-6 object-contain"/>
  </button>
  <button className="bg-gray-100 cursor-pointer p-3 rounded-full shadow-md hover:bg-gray-200 flex items-center justify-center w-12 h-12">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" className="w-6 h-6 object-contain"/>
  </button>
</div>

        <p className="text-center text-gray-500 mb-4">OR</p>

        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-teal-500 text-white p-3 rounded-lg font-bold hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
