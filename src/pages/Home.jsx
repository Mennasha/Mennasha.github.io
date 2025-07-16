import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Instagram, MessageCircle, Facebook, ExternalLink, BookOpen } from 'lucide-react';
import candidateImage from '../assets/candidate_image_circular.png';
import partyLogo from '../assets/party-logo.png';
import senateLogo from '../assets/senate-logo.jpg';
import CountdownTimer from '../components/CountdownTimer';
import FloatingCTA from '../components/FloatingCTA';

const Home = () => {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  // Parallax effect for hero image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleElectionInquiry = () => {
    window.open('https://www.elections.eg/inquiry', '_blank')
  }

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent('تعرف على مرشح مجلس الشيوخ عمرو سعد الشلمة - رقم 4 - رمز الكتاب')
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Candidate Image */}
            <motion.div 
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              style={{ y: imageY, scale: imageScale }}
            >
              <div className="relative">
                <motion.img
                  src={candidateImage}
                  alt="عمرو سعد الشلمة"
                  className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-cover object-center rounded-full shadow-2xl border-4 border-white/20 animate-fade-in-scale"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Enhanced Decorative rings */}
                <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -inset-12 rounded-full border border-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-green-400/10 blur-2xl animate-pulse"></div>
              </div>
            </motion.div>

            {/* Candidate Info */}
            <motion.div 
              className="text-center lg:text-right text-white order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                عمرو سعد الشلمة
              </motion.h1>
              
              <motion.div 
                className="text-xl lg:text-2xl mb-4 text-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                مرشح مجلس الشيوخ ٢٠٢٥
              </motion.div>

              {/* Campaign Slogan */}
              <motion.div 
                className="text-lg lg:text-xl mb-8 text-yellow-300 font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                "صوتك أمانة – وخدمة بلدنا مسؤولية"
              </motion.div>

              {/* Election Details */}
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-yellow-300">٤</div>
                    <div className="text-sm text-blue-100">الرقم</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpen className="w-8 h-8 text-yellow-300 mb-1" />
                    <div className="text-sm text-blue-100">رمز الكتاب</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-lg font-semibold text-yellow-300">البحيرة</div>
                    <div className="text-sm text-blue-100">المحافظة</div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="flex justify-center lg:justify-end gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <a 
                  href="tel:+201094297555" 
                  className="social-icon bg-green-500 p-3 rounded-full text-white hover:bg-green-600"
                  aria-label="اتصال"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/amr_saadd1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600"
                  aria-label="إنستغرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <button 
                  onClick={handleWhatsAppShare}
                  className="social-icon bg-green-600 p-3 rounded-full text-white hover:bg-green-700"
                  aria-label="مشاركة واتساب"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </button>
                <button 
                  onClick={handleFacebookShare}
                  className="social-icon bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
                  aria-label="مشاركة فيسبوك"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">اعرف أكثر</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text fade-in">هنكمل المشوار</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed fade-in">
              مرشح الشباب للمستقبل، نعمل معاً من أجل تطوير محافظة البحيرة وخدمة أهلها الكرام
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="info-card p-6 rounded-2xl shadow-lg slide-in-right">
                <div className="text-4xl font-bold text-blue-900 mb-4">٢٠٢٥</div>
                <h3 className="text-xl font-semibold mb-2">انتخابات مجلس الشيوخ</h3>
                <p className="text-gray-600">مشاركة فعالة في بناء مستقبل مصر</p>
              </div>
              
              <div className="info-card p-6 rounded-2xl shadow-lg slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-green-600 mb-4">٤</div>
                <h3 className="text-xl font-semibold mb-2">الرقم الانتخابي</h3>
                <p className="text-gray-600">رمز الكتاب - محافظة البحيرة</p>
              </div>
              
              <div className="info-card p-6 rounded-2xl shadow-lg slide-in-right" style={{ animationDelay: '0.4s' }}>
                <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">حزب مستقبل وطن</h3>
                <p className="text-gray-600">العمل من أجل مستقبل أفضل</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/biography"
                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                تعرف على السيرة الذاتية
              </Link>
              <Link
                to="/program"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                البرنامج الانتخابي
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <FloatingCTA />
    </div>
  )
}

export default Home

