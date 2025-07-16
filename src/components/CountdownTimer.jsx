import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Election date: August 4, 2025 (first day of voting)
    const electionDate = new Date('2025-08-04T00:00:00+02:00'); // Egypt timezone

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = electionDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'يوم', labelPlural: 'أيام' },
    { value: timeLeft.hours, label: 'ساعة', labelPlural: 'ساعات' },
    { value: timeLeft.minutes, label: 'دقيقة', labelPlural: 'دقائق' },
    { value: timeLeft.seconds, label: 'ثانية', labelPlural: 'ثواني' }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">العد التنازلي للانتخابات</h3>
        <p className="text-white/80 text-lg">انتخابات مجلس الشيوخ ٢٠٢٥</p>
        <p className="text-amber-300 font-semibold">٤-٥ أغسطس ٢٠٢٥</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-3xl font-bold text-amber-300 mb-1">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {unit.value === 1 ? unit.label : unit.labelPlural}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <p className="text-white/70 text-sm">
          كل صوت يهم • شاركوا في بناء مستقبل مصر
        </p>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;

