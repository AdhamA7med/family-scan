
const ServicesSection = () => {
  const services = [
    {
      icon: '🫀',
      title: 'إيكو القلب',
      description: 'فحص شامل للقلب بالموجات فوق الصوتية'
    },
    {
      icon: '🩺',
      title: 'دوبلر الأوعية',
      description: 'فحص الدورة الدموية والأوعية الدموية'
    },
    {
      icon: '🦴',
      title: 'أشعة X-Ray',
      description: 'تصوير بالأشعة السينية المحمولة'
    },
    {
      icon: '👶',
      title: 'سونار',
      description: 'فحص الحمل والأعضاء الداخلية'
    },
    {
      icon: '📈',
      title: 'رسم قلب',
      description: 'تخطيط كهربائية القلب ECG'
    },
    {
      icon: '🧠',
      title: 'رسم مخ',
      description: 'تخطيط كهربائية المخ EEG'
    },
    {
      icon: '⚡',
      title: 'رسم عصب',
      description: 'فحص الأعصاب والتوصيل العصبي'
    },
    {
      icon: '📱',
      title: 'هولتر',
      description: 'مراقبة القلب لمدة 24 ساعة'
    },
    {
      icon: '🫁',
      title: 'وظائف تنفس',
      description: 'قياس وظائف الرئتين والتنفس'
    },
    {
      icon: '🔬',
      title: 'تحاليل طبية',
      description: 'جميع أنواع التحاليل المعملية'
    },
    {
      icon: '💉',
      title: 'تمريض منزلي',
      description: 'خدمات التمريض والحقن المنزلية'
    },
    {
      icon: '🩹',
      title: 'فاكيوم',
      description: 'علاج الجروح بتقنية الفاكيوم'
    },
    {
      icon: '🏃‍♂️',
      title: 'علاج طبيعي',
      description: 'جلسات العلاج الطبيعي المنزلية'
    },
    {
      icon: '👨‍⚕️',
      title: 'كشف جميع التخصصات',
      description: 'استشارات طبية متخصصة في منزلك'
    }
  ];

  return (
    <section id="services" className="section-padding medical-gradient">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            خدماتنا الطبية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في منزلك بأحدث الأجهزة والتقنيات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-medical-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-medical-dark mb-6">
              هل تحتاج لخدمة خاصة؟
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              تواصل معنا للاستفسار عن أي خدمة طبية تحتاجها
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open('tel:01093693001')}
              >
                📞 01093693001
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                📱 01155866577
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
