import { motion } from 'framer-motion'
import { Quote, Star, Users, Heart, Award, MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد علي",
      title: "رجل أعمال - دمنهور",
      content: "عمرو سعد الشلمة شخص يتمتع بالنزاهة والشفافية، وله رؤية واضحة لتطوير المحافظة. أثق في قدرته على تمثيلنا بأفضل شكل في مجلس الشيوخ.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "فاطمة أحمد حسن",
      title: "مدرسة - كفر الدوار",
      content: "من خلال عمله في المجتمع، رأيت كيف يهتم بالتعليم وتطوير المدارس. هو الشخص المناسب لتحقيق نهضة تعليمية حقيقية في البحيرة.",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "محمود عبد الرحمن",
      title: "مهندس - رشيد",
      content: "شاب طموح ومتفهم لاحتياجات الشباب. برنامجه الانتخابي يركز على خلق فرص عمل حقيقية وتطوير البنية التحتية.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "نادية محمد سالم",
      title: "طبيبة - أبو المطامير",
      content: "يهتم بقضايا الصحة والرعاية الطبية، وله مساهمات فعلية في دعم المستشفيات والمراكز الطبية في المحافظة.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "خالد أحمد فتحي",
      title: "مزارع - الدلنجات",
      content: "يفهم مشاكل الفلاحين والمزارعين، وله مبادرات لدعم القطاع الزراعي وتطوير الري والبنية التحتية الزراعية.",
      rating: 5,
      image: "👨‍🌾"
    },
    {
      name: "سارة محمد عبد الله",
      title: "محامية - دمنهور",
      content: "شخص ملتزم بالقانون والعدالة، وله مواقف واضحة في الدفاع عن حقوق المواطنين. أثق في نزاهته وإخلاصه.",
      rating: 5,
      image: "👩‍💼"
    }
  ]

  const communitySupport = [
    {
      icon: Users,
      title: "دعم المجتمع المحلي",
      description: "أكثر من ٥٠٠٠ مواطن يدعمون ترشيح عمرو سعد الشلمة",
      number: "٥٠٠٠+"
    },
    {
      icon: Heart,
      title: "الأعمال الخيرية",
      description: "مساهمة في أكثر من ١٠٠ مبادرة خيرية ومجتمعية",
      number: "١٠٠+"
    },
    {
      icon: Award,
      title: "التقديرات",
      description: "حصل على ١٥ شهادة تقدير من مؤسسات مختلفة",
      number: "١٥"
    },
    {
      icon: MessageCircle,
      title: "التفاعل المجتمعي",
      description: "يشارك في أكثر من ٢٠ فعالية مجتمعية سنوياً",
      number: "٢٠+"
    }
  ]

  const videoTestimonials = [
    {
      title: "فيديو 1",
      description: "فيديو تعريفي بالمرشح",
      url: "https://www.facebook.com/profile.php?id=61578096533832&sk=videos"
    },
    {
      title: "فيديو 2",
      description: "فيديو عن البرنامج الانتخابي",
      url: "https://www.facebook.com/profile.php?id=61578096533832&sk=videos"
    },
    {
      title: "فيديو 3",
      description: "فيديو عن الأنشطة المجتمعية",
      url: "https://www.facebook.com/profile.php?id=61578096533832&sk=videos"
    }
  ]

  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : 'YOUR_APP_ID', // Replace with your Facebook App ID if you have one
        xfbml      : true,
        version    : 'v19.0'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/ar_AR/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }, [])

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">قالوا عنه</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              شهادات وآراء المواطنين والشخصيات العامة حول عمرو سعد الشلمة ومساهماته في المجتمع
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold text-yellow-300 flex items-center justify-center gap-3">
                <Quote className="w-6 h-6" />
                "الثقة تُبنى بالأعمال وليس بالأقوال"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Support Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">دعم المجتمع</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {communitySupport.map((item, index) => {
                const Icon = item.icon
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.number}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">شهادات المواطنين</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-blue-300 absolute -top-2 -right-2" />
                    <p className="text-gray-700 leading-relaxed italic pr-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">شهادات مصورة</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="fb-video" data-href={video.url} data-width="500" data-show-text="false">
                    <div className="fb-xfbml-parse-ignore">
                      <blockquote cite={video.url}>
                        <a href={video.url}>{video.title}</a>
                        <p>{video.description}</p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                المزيد من الشهادات والفيديوهات متاحة على صفحتنا الرسمية
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61578096533832"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                زيارة الصفحة الرسمية
              </a>
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
            <h2 className="text-3xl font-bold mb-6">شاركنا رأيك</h2>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              إذا كان لديك شهادة أو رأي تود مشاركته، نحن نرحب بتواصلك معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                شارك شهادتك
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                تواصل معنا
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

