import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">اعرف لجنتك الانتخابية</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              استخدم الأداة الرسمية من الهيئة الوطنية للانتخابات للاستعلام عن لجنتك
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold text-yellow-300 flex items-center justify-center gap-3">
                <Search className="w-6 h-6" />
                "صوتك أمانة - تأكد من مكان لجنتك"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Inquiry Tool */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.elections.eg/inquiry"
                title="استعلام اللجنة الانتخابية"
                className="w-full h-[600px] border-0"
              ></iframe>
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://www.elections.eg/inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                إذا لم تظهر الأداة، يمكنك زيارة الموقع الرسمي مباشرة
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Inquiry

