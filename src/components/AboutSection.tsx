
const AboutSection = () => {
  const features = [
    {
      icon: 'fas fa-laptop-medical',
      title: 'أجهزة حديثة',
      description: 'نستخدم أحدث الأجهزة الطبية المحمولة'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'تغطية كاملة للقاهرة',
      description: 'نصل إليك في أي مكان في القاهرة الكبرى'
    },
    {
      icon: 'fas fa-user-nurse',
      title: 'طاقم محترف',
      description: 'فريق طبي مدرب ومؤهل للخدمة المنزلية'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'سرعة الاستجابة',
      description: 'وصول سريع ونتائج فورية'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
            <i className="fas fa-info-circle text-medical-blue mr-3"></i>
            من نحن
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            نحن فريق طبي متخصص في تقديم خدمات الفحوصات الطبية المنزلية بأعلى مستوى من الجودة والدقة. 
            نسعى لتوفير الراحة والرعاية الصحية في منزلك بأحدث الأجهزة والتقنيات الطبية.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-medical-light rounded-2xl p-6 sm:p-8 text-center card-hover group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className={`${feature.icon} text-2xl text-medical-blue`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-medical-dark mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            <i className="fas fa-question-circle mr-2"></i>
            لماذا تختار Family Scan؟
          </h3>
          <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
            نحن نؤمن بأن الرعاية الصحية يجب أن تكون متاحة ومريحة للجميع. لذلك نقدم خدماتنا المتميزة 
            في منزلك بنفس جودة المستشفيات الكبرى، مع الحفاظ على خصوصيتك وراحتك.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <i className="fas fa-users mr-2"></i>
                500+
              </div>
              <div className="text-sm sm:text-lg opacity-90">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <i className="fas fa-stethoscope mr-2"></i>
                15+
              </div>
              <div className="text-sm sm:text-lg opacity-90">نوع فحص</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <i className="fas fa-clock mr-2"></i>
                24/7
              </div>
              <div className="text-sm sm:text-lg opacity-90">خدمة متواصلة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
