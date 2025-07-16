import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>صنع بكل</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>بواسطة محمود شبانه</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-white/70">
              © 2025 عمرو سعد الشلمة - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

