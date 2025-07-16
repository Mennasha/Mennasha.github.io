import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageSquare,
  Users,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    volunteerType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        area: '',
        volunteerType: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "+20 10 94297555",
      link: "tel:+201094297555"
    },
    {
      icon: Instagram,
      title: "إنستغرام",
      value: "@amr_saadd1",
      link: "https://instagram.com/amr_saadd1"
    },
    {
      icon: MessageSquare,
      title: "واتساب",
      value: "تواصل عبر الواتساب",
      link: "https://wa.me/201094297555"
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "دمنهور، محافظة البحيرة",
      link: null
    }
  ]

  const volunteerTypes = [
    "التطوع في الحملة الانتخابية",
    "التوعية والدعاية",
    "تنظيم الفعاليات",
    "الدعم اللوجستي",
    "التواصل مع المواطنين",
    "الدعم التقني والإعلامي",
    "أخرى"
  ]

  const areas = [
    "دمنهور",
    "كفر الدوار",
    "رشيد",
    "إدكو",
    "أبو المطامير",
    "الدلنجات",
    "أبو حمص",
    "حوش عيسى",
    "شبراخيت",
    "كوم حمادة",
    "بدر",
    "وادي النطرون",
    "النوبارية",
    "إيتاي البارود",
    "المحمودية"
  ]

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              انضم إلى حملتنا الانتخابية وكن جزءاً من التغيير الإيجابي في محافظة البحيرة
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold text-yellow-300 flex items-center justify-center gap-3">
                <Users className="w-6 h-6" />
                "معاً نبني مستقبل أفضل لمحافظة البحيرة"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">معلومات التواصل</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-red-600" />
                انضم للحملة الانتخابية
              </h2>
              <p className="text-lg text-gray-600">
                كن جزءاً من فريق العمل وساهم في تحقيق التغيير الإيجابي
              </p>
            </div>

            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="01xxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">المنطقة *</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر منطقتك</option>
                      {areas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">نوع التطوع *</label>
                  <select
                    name="volunteerType"
                    value={formData.volunteerType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع التطوع</option>
                    {volunteerTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">رسالة إضافية</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="أخبرنا عن دوافعك للانضمام أو أي معلومات إضافية..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  <Send className="w-5 h-5" />
                  إرسال طلب الانضمام
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">تم إرسال طلبك بنجاح!</h3>
                <p className="text-green-600">
                  شكراً لك على اهتمامك بالانضمام لحملتنا. سنتواصل معك قريباً.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">تابعنا على وسائل التواصل</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              ابق على اطلاع بآخر أخبار الحملة والفعاليات من خلال متابعتنا على وسائل التواصل الاجتماعي
            </p>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/amr_saadd1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-4 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/201094297555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-4 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="w-8 h-8" />
              </a>
              <a
                href="tel:+201094297555"
                className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

