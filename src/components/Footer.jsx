import React from 'react';
import { motion } from 'framer-motion'; // Assuming you're using Framer Motion
import { SectionWrapper } from "../hoc";

const Footer = () => {
  const networks = [
    { id: 1, name: 'github', url: 'https://github.com/Viswaraje' },
    { id: 2, name: 'linkedin', url: 'https://www.linkedin.com/in/viswaraje/' },
    // Add more networks as needed
  ];

  const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
    return {
      initial: {
        y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <motion.footer
      className="footer bg-gray-900 text-white py-8"
      initial="initial"
      animate="animate"
      variants={fadeIn("up", "spring", 0.5, 1)}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.a
          href="#top"
          aria-label="Back To Top"
          className="back-to-top text-white hover:text-gray-300"
          initial="initial"
          animate="animate"
          variants={fadeIn("up", "spring", 0.6, 1)}
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </motion.a>
        <div className="social-links mt-4 flex items-center justify-between">
          <motion.div
            className="flex items-center text-white hover:text-gray-300"
            initial="initial"
            animate="animate"
            variants={fadeIn("up", "spring", 0.7, 1)}
          >
            <p className="mr-2">Connect with me</p>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial="initial"
            animate="animate"
            variants={fadeIn("up", "spring", 0.7, 1)}
          >
            {networks.map(network => (
              <motion.a
                key={network.id}
                href={network.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={network.name}
                className="text-white hover:text-gray-300 ml-4"
              >
                <i className={`fab fa-${network.name} fa-2x`} /> {/* Use Font Awesome classes directly */}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <hr className="my-4 border-gray-600" />
        <motion.p
          className="footer__text text-center text-sm text-gray-400"
          initial="initial"
          animate="animate"
          variants={fadeIn("up", "spring", 0.8, 1)}
        >
          {new Date().getFullYear()} © with ❤️ by{' '}
          <a href="https://www.linkedin.com/in/viswaraje/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            Viswaraje
          </a>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer
