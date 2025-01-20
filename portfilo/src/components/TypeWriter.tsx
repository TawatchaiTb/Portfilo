import { motion } from "framer-motion";
import React from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, className }) => {
  const words = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: word === " " ? "0.4em" : "0" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypeWriter;
