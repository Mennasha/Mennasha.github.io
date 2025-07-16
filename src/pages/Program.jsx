import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Heart, 
  Car, 
  Users, 
  Building, 
  Leaf, 
  Shield, 
  Zap,
  Target,
  CheckCircle
} from 'lucide-react'

const Program = () => {
  const programSections = [
    {
      title: "التعليم والتدريب",
      icon: GraduationCap,
      color: "blue",
      points: [
        "تطوير المناهج التعليمية لتواكب متطلبات سوق العمل",
        "إنشاء مراكز تدريب مهني متخصصة للشباب",
        "توفير منح دراسية للطلاب المتفوقين",
        "تحديث المدارس والجامعات بأحدث التقنيات",
        "برامج محو الأمية للكبار"
      ]
    },
    {
      title: "الصحة والرعاية الطبية",
      icon: Heart,
      color: "red",
      points: [
        "تطوير المستشفيات والمراكز الطبية",
        "توفير الأدوية والعلاج المجاني للمحتاجين",
        "برامج الكشف المبكر عن الأمراض",
        "تحسين خدمات الطوارئ والإسعاف",
        "دعم ذوي الاحتياجات الخاصة"
      ]
    },
    {
      title: "الطرق والمواصلات",
      icon: Car,
      color: "green",
      points: [
        "تطوير شبكة الطرق الداخلية والخارجية",
        "تحسين وسائل النقل العام",
        "إنشاء محطات حديثة للمواصلات",
        "صيانة دورية للطرق الموجودة",
        "تطوير إشارات المرور والأمان"
      ]
    },
    {
      title: "الشباب والرياضة",
      icon: Users,
      color: "purple",
      points: [
        "إنشاء مراكز شباب حديثة في كل منطقة",
        "دعم المواهب الرياضية والثقافية",
        "برامج تأهيل الشباب لسوق العمل",
        "مسابقات وأنشطة ترفيهية منتظمة",
        "دورات تنمية المهارات الشخصية"
      ]
    },
    {
      title: "التنمية الاقتصادية",
      icon: Building,
      color: "yellow",
      points: [
        "دعم المشاريع الصغيرة والمتوسطة",
        "جذب الاستثمارات للمحافظة",
        "تطوير المناطق الصناعية",
        "دعم الحرف التراثية والصناعات اليدوية",
        "تسهيل إجراءات تأسيس الشركات"
      ]
    },
    {
      title: "البيئة والتنمية المستدامة",
      icon: Leaf,
      color: "emerald",
      points: [
        "مشاريع تشجير وتجميل المحافظة",
        "معالجة مشاكل التلوث البيئي",
        "تطوير أنظمة إدارة النفايات",
        "استخدام الطاقة المتجددة",
        "حماية المساحات الخضراء"
      ]
    },
    {
      title: "الأمن والأمان",
      icon: Shield,
      color: "indigo",
      points: [
        "تعزيز الأمن في الشوارع والأحياء",
        "تطوير أنظمة المراقبة الأمنية",
        "برامج التوعية الأمنية للمواطنين",
        "تحسين الإضاءة في الطرق العامة",
        "التعاون مع الأجهزة الأمنية"
      ]
    },
    {
      title: "الخدمات العامة",
      icon: Zap,
      color: "orange",
      points: [
        "تحسين شبكات المياه والصرف الصحي",
        "تطوير شبكة الكهرباء والإنترنت",
        "تحديث الخدمات الحكومية الإلكترونية",
        "تطوير الأسواق والمراكز التجارية",
        "تحسين خدمات النظافة العامة"
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-200 bg-blue-50",
      red: "from-red-500 to-red-600 border-red-200 bg-red-50",
      green: "from-green-500 to-green-600 border-green-200 bg-green-50",
      purple: "from-purple-500 to-purple-600 border-purple-200 bg-purple-50",
      yellow: "from-yellow-500 to-yellow-600 border-yellow-200 bg-yellow-50",
      emerald: "from-emerald-500 to-emerald-600 border-emerald-200 bg-emerald-50",
      indigo: "from-indigo-500 to-indigo-600 border-indigo-200 bg-indigo-50",
      orange: "from-orange-500 to-orange-600 border-orange-200 bg-orange-50"
    }
    return colors[color] || colors.blue
  }

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">البرنامج الانتخابي</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              برنامج شامل للتنمية والتطوير يهدف إلى النهوض بمحافظة البحيرة 
              وتحقيق الرفاهية لجميع المواطنين
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold text-yellow-300 flex items-center justify-center gap-3">
                <Target className="w-6 h-6" />
                "معاً نبني مستقبل أفضل لمحافظة البحيرة"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">رؤية شاملة للتنمية</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              يقوم برنامجنا الانتخابي على ثمانية محاور أساسية تغطي جميع جوانب الحياة في المحافظة، 
              بهدف تحقيق التنمية المستدامة وتحسين مستوى المعيشة لجميع المواطنين.
            </p>
          </motion.div>

          {/* Program Sections */}
          <div className="space-y-12">
            {programSections.map((section, index) => {
              const Icon = section.icon
              const colorClasses = getColorClasses(section.color)
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${colorClasses.split(' ')[2]}`}>
                    {/* Section Header */}
                    <div className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white p-6`}>
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">{section.title}</h3>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className={`${colorClasses.split(' ')[3]} p-6`}>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: pointIndex * 0.1 }}
                            className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                          >
                            <CheckCircle className={`w-5 h-5 text-${section.color}-600 flex-shrink-0 mt-0.5`} />
                            <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خطة التنفيذ</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">١</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المرحلة الأولى</h3>
                <p className="text-gray-600">الأشهر الستة الأولى</p>
                <p className="text-sm text-gray-500 mt-2">وضع الأسس وبدء المشاريع العاجلة</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">٢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المرحلة الثانية</h3>
                <p className="text-gray-600">السنة الأولى والثانية</p>
                <p className="text-sm text-gray-500 mt-2">تنفيذ المشاريع الكبرى والتطوير</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">٣</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المرحلة الثالثة</h3>
                <p className="text-gray-600">السنوات المتبقية</p>
                <p className="text-sm text-gray-500 mt-2">الاستدامة والتطوير المستمر</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">معاً نحقق هذا البرنامج</h2>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              نجاح هذا البرنامج يتطلب تضافر جهود الجميع. صوتكم هو الخطوة الأولى 
              نحو تحقيق هذه الأهداف وبناء مستقبل أفضل لمحافظة البحيرة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                انضم للحملة
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                شارك البرنامج
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Program

