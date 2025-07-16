import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FloatingCTA = () => {
  const handleElectionInquiry = () => {
    window.open('https://www.elections.eg/inquiry', '_blank');
  };

  return (
    <motion.button
      onClick={handleElectionInquiry}
      className="floating-cta bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ExternalLink className="w-4 h-4" />
      اعرف لجنتك الانتخابية
    </motion.button>
  );
};

export default FloatingCTA;

