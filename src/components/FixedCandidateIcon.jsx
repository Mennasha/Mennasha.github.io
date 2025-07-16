import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import candidateImage from '../assets/candidate_image_circular.png';

const FixedCandidateIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show icon when user scrolls down more than 300px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <img 
                src={candidateImage} 
                alt="د.عمرو سعد الشملة" 
                className="w-20 h-20 object-cover rounded-full border-2 border-blue-900 shadow-md"
              />
              <div className="absolute -inset-1 rounded-full border border-blue-300 animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedCandidateIcon;

