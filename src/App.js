import React from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import Particles from 'react-tsparticles';

const links = [
  { title: 'Twitter', url: 'https://x.com/verrucosity', icon: <FaTwitter /> },
  { title: 'Instagram', url: 'https://www.instagram.com/stevan.jpg/', icon: <FaInstagram /> },
  { title: 'Twitch', url: 'https://www.twitch.tv/verrucosity', icon: <FaTwitch /> },
  { title: 'Threads', url: 'https://www.threads.net/@stevan.jpg', icon: null },
];

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-panning">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#00416A",
            },
          },
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
            },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
            },
            color: {
              value: "#ffffff",
            },
          },
        }}
      />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center relative z-10"
      >
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          My Link Hub
        </h1>
      </motion.header>
      <motion.div
        className="w-full max-w-md space-y-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="block w-full py-3 px-6 text-lg text-center text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2 glass-effect"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon && <span>{link.icon}</span>}
            <span>{link.title}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
