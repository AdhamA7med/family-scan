
const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'إيكو القلب',
      description: 'فحص شامل للقلب بالموجات فوق الصوتية',
      color: 'bg-red-500'
    },
    {
      icon: 'fas fa-lungs',
      title: 'دوبلر الأوعية',
      description: 'فحص الدورة الدموية والأوعية الدموية',
      color: 'bg-blue-500'
    },
    {
      icon: 'fas fa-x-ray',
      title: 'أشعة X-Ray',
      description: 'تصوير بالأشعة السينية المحمولة',
      color: 'bg-gray-600'
    },
    {
      icon: 'fas fa-baby',
      title: 'سونار',
      description: 'فحص الحمل والأعضاء الداخلية',
      color: 'bg-pink-500'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'رسم قلب',
      description: 'تخطيط كهربائية القلب ECG',
      color: 'bg-green-500'
    },
    {
      icon: 'fas fa-brain',
      title: 'رسم مخ',
      description: 'تخطيط كهربائية المخ EEG',
      color: 'bg-purple-500'
    },
    {
      icon: 'fas fa-bolt',
      title: 'رسم عصب',
      description: 'فحص الأعصاب والتوصيل العصبي',
      color: 'bg-yellow-500'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'هولتر',
      description: 'مراقبة القلب لمدة 24 ساعة',
      color: 'bg-indigo-500'
    },
    {
      icon: 'fas fa-wind',
      title: 'وظائف تنفس',
      description: 'قياس وظائف الرئتين والتنفس',
      color: 'bg-cyan-500'
    },
    {
      icon: 'fas fa-flask',
      title: 'تحاليل طبية',
      description: 'جميع أنواع التحاليل المعملية',
      color: 'bg-orange-500'
    },
    {
      icon: 'fas fa-user-nurse',
      title: 'تمريض منزلي',
      description: 'خدمات التمريض والحقن المنزلية',
      color: 'bg-teal-500'
    },
    {
      icon: 'fas fa-compress-arrows-alt',
      title: 'فاكيوم',
      description: 'علاج الجروح بتقنية الفاكيوم',
      color: 'bg-gray-500'
    },
    {
      icon: 'fas fa-walking',
      title: 'علاج طبيعي',
      description: 'جلسات العلاج الطبيعي المنزلية',
      color: 'bg-lime-500'
    },
    {
      icon: 'fas fa-user-md',
      title: 'كشف جميع التخصصات',
      description: 'استشارات طبية متخصصة في منزلك',
      color: 'bg-medical-blue'
    }
  ];

  return (
    <section id="services" className="section-padding medical-gradient">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
            <i className="fas fa-stethoscope text-medical-blue mr-3"></i>
            خدماتنا الطبية
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في منزلك بأحدث الأجهزة والتقنيات
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <i className={`${service.icon} text-lg sm:text-xl text-white`}></i>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-medical-dark mb-2 sm:mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-medical-dark mb-4 sm:mb-6">
              <i className="fas fa-question-circle text-medical-blue mr-2"></i>
              هل تحتاج لخدمة خاصة؟
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              تواصل معنا للاستفسار عن أي خدمة طبية تحتاجها
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg group"
                onClick={() => window.open('tel:01093693001')}
              >
                <i className="fas fa-phone mr-2 group-hover:animate-pulse"></i>
                01093693001
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg group"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                <i className="fab fa-whatsapp mr-2 group-hover:animate-pulse"></i>
                01155866577
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
