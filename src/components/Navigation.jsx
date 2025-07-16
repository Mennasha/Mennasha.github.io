import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, FileText, Phone, MessageSquare, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import candidateImage from '../assets/candidate_image_circular.png'
import partyLogo from '../assets/party-logo.png'
import senateLogo from '../assets/senate-logo.jpg'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position to hide logos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/biography', label: 'السيرة الذاتية', icon: User },
    { path: '/program', label: 'البرنامج الانتخابي', icon: FileText },
    { path: '/contact', label: 'تواصل معنا', icon: Phone },
    { path: '/testimonials', label: 'قالوا عنه', icon: MessageSquare },
    { path: '/inquiry', label: 'اعرف لجنتك', icon: Search }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img 
                src={candidateImage} 
                alt="د.عمرو سعد الشلمة" 
                className="w-12 h-12 object-cover rounded-full border-2 border-blue-900"
              />
              <span className="text-lg font-bold text-blue-900">عمرو سعد الشلمة</span>
            </div>
            
            <div className="flex items-center space-x-6 space-x-reverse mr-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Logos Section - Under Navigation */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            className="hidden lg:block fixed top-16 right-4 z-40"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2 mt-2">
              <motion.div 
                className="rounded-lg p-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={partyLogo} 
                  alt="حزب مستقبل وطن" 
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
              
              <motion.div 
                className="rounded-lg p-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={senateLogo} 
                  alt="مجلس الشيوخ" 
                  className="w-12 h-12 object-contain rounded-md"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="flex items-center justify-between px-4 h-16">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-blue-900">عمرو سعد الشلمة</span>
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ٤
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 z-50 w-80 bg-white shadow-xl"
            >
              <div className="p-6">
                <nav className="space-y-4">
                  {navItems.map(({ path, label, icon: Icon }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(path)
                          ? 'bg-blue-900 text-white'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  )
}

export default Navigation

