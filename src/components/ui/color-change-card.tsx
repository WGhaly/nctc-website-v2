import React from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// --- Card Component ---
interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
  icon?: React.ReactNode;
}

const ColorChangeCard = ({ heading, description, imgSrc, icon }: CardProps) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-80 w-full cursor-pointer overflow-hidden bg-slate-300 rounded-2xl"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-600/40 transition-opacity duration-500 group-hover:opacity-80" />
      
      <div className="relative z-20 flex h-full flex-col justify-between p-6 text-slate-200 transition-colors duration-500 group-hover:text-white">
        <div className="flex items-start justify-between">
          {/* Icon */}
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg text-white transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
              {icon}
            </div>
          )}
          <FiArrowRight className="text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        </div>
        
        <div>
          <h4 className="mb-2 break-words">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-sm leading-relaxed text-slate-200 group-hover:text-white transition-colors duration-500 break-words">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  // Render spaces with proper width to prevent word breaks
  if (letter === " ") {
    return <span className="inline-block" style={{ width: "0.4em" }}>&nbsp;</span>;
  }
  
  return (
    <div className="inline-block h-[36px] overflow-hidden font-semibold text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCard;
