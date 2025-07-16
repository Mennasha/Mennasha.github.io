import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Heart, Award, Users, Target } from 'lucide-react'
import candidateImage from '../assets/candidate_image.png'

const Biography = () => {
  const education = [
    {
      degree: "بكالوريوس إدارة الأعمال",
      institution: "جامعة الإسكندرية",
      year: "٢٠٠٥",
      description: "تخصص في إدارة الأعمال والتسويق"
    },
    {
      degree: "ماجستير في الإدارة العامة",
      institution: "أكاديمية السادات للعلوم الإدارية",
      year: "٢٠١٠",
      description: "تخصص في السياسات العامة والتنمية المحلية"
    }
  ]

  const experience = [
    {
      position: "مدير عام التطوير",
      company: "شركة البحيرة للاستثمار والتنمية",
      period: "٢٠١٥ - حتى الآن",
      description: "إدارة مشاريع التنمية المحلية وتطوير البنية التحتية"
    },
    {
      position: "مدير المشاريع",
      company: "مؤسسة التنمية المجتمعية",
      period: "٢٠١٠ - ٢٠١٥",
      description: "تنفيذ برامج التنمية الاجتماعية والاقتصادية"
    },
    {
      position: "محلل أعمال",
      company: "بنك الإسكندرية",
      period: "٢٠٠٥ - ٢٠١٠",
      description: "تحليل الاستثمارات وتقييم المشاريع"
    }
  ]

  const activities = [
    {
      title: "مؤسسة أطفال البحيرة",
      role: "عضو مجلس إدارة",
      description: "رعاية الأطفال الأيتام وتوفير التعليم والرعاية الصحية"
    },
    {
      title: "جمعية تنمية المجتمع المحلي",
      role: "رئيس مجلس الإدارة",
      description: "تنفيذ مشاريع تنموية لخدمة أهالي المحافظة"
    },
    {
      title: "نادي رجال الأعمال الشباب",
      role: "عضو مؤسس",
      description: "دعم المشاريع الصغيرة والمتوسطة للشباب"
    }
  ]

  const achievements = [
    "جائزة أفضل مدير تنفيذي للعام ٢٠٢٠",
    "شهادة تقدير من محافظ البحيرة للأعمال التطوعية",
    "جائزة التميز في خدمة المجتمع ٢٠١٩",
    "شهادة تقدير من وزارة التضامن الاجتماعي"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">السيرة الذاتية</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                تعرف على مسيرة عمرو سعد الشلمة التعليمية والمهنية والمجتمعية، 
                وخبراته في خدمة المجتمع وتطوير محافظة البحيرة
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={candidateImage}
                alt="عمرو سعد الشلمة"
                className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                نبذة شخصية
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">المعلومات الأساسية</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>الاسم:</strong> عمرو سعد الشلمة</li>
                    <li><strong>تاريخ الميلاد:</strong> ١٥ مارس ١٩٨٢</li>
                    <li><strong>محل الإقامة:</strong> دمنهور، البحيرة</li>
                    <li><strong>الحالة الاجتماعية:</strong> متزوج وله طفلان</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">الرؤية الشخصية</h3>
                  <p className="text-gray-600 leading-relaxed">
                    أؤمن بأن التنمية الحقيقية تبدأ من الاستثمار في الإنسان، 
                    وأن خدمة المجتمع مسؤولية وطنية يجب أن نتحملها جميعاً لبناء مستقبل أفضل لأجيالنا القادمة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              المؤهلات العلمية
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 border-r-4 border-blue-600"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <span className="text-blue-600 font-medium">{edu.year}</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-gray-500">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-green-600" />
              الخبرات المهنية
            </h2>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border-r-4 border-green-600"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                    <span className="text-green-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-gray-500">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-600" />
              الأنشطة المجتمعية
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-red-600 font-medium mb-3">{activity.role}</p>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-600" />
              الجوائز والتكريمات
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border-t-4 border-yellow-600 flex items-center gap-4"
                >
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <Target className="w-8 h-8" />
              رؤيتي للمستقبل
            </h2>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              أسعى لأن أكون صوت محافظة البحيرة في مجلس الشيوخ، وأن أعمل على تحقيق التنمية الشاملة 
              التي تشمل التعليم والصحة والبنية التحتية، مع التركيز على تمكين الشباب وخلق فرص عمل جديدة 
              تساهم في بناء مستقبل مشرق لأبناء المحافظة.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold text-yellow-300">
                "العمل الجاد والإخلاص في الخدمة هما طريقنا لتحقيق الأحلام وبناء المستقبل"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Biography

