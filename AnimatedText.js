import { motion } from "framer-motion";

const AnimatedText = () => { 
  return (
    <div id="HomeSection" className="h-screen flex items-center justify-between px-[10%] mt-[-80px]">
      {/* Left Side - Animated Text */}
      <div className="w-1/2 flex flex-col justify-center">
        <motion.h1
          className="text-white font-extrabold text-6xl"
          initial={{ y: 200, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          NEW FURNITURE
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-4"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
        >
          Aside from keeping people on the loop, informed, beautifully designed ideas can also be brought.
        </motion.p>
      </div>

      {/* Right Side - Images with Overlapping Effect */}
      <div className="w-1/2 flex justify-end relative">
        {/* Main Image */}
        <motion.img
          src="https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg"
          alt="Furniture"
          className="w-[600px] h-auto object-cover rounded-xl shadow-lg"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        />

        {/* Overlapping Second Image */}
        <motion.img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-578798-1350789.jpg&fm=jpg"
          alt="Decor"
          className="w-[340px] h-auto object-cover border-6 border-yellow-600 rounded-xl absolute bottom-[-60px] left-[-80px] shadow-lg"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.2 }}
        />
      </div>
    </div>
  );
};

export default AnimatedText;
