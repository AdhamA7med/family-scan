
const AboutSection = () => {
  const features = [
    {
      icon: '🏥',
      title: 'أجهزة حديثة',
      description: 'نستخدم أحدث الأجهزة الطبية المحمولة'
    },
    {
      icon: '📍',
      title: 'تغطية كاملة للقاهرة',
      description: 'نصل إليك في أي مكان في القاهرة الكبرى'
    },
    {
      icon: '👨‍⚕️',
      title: 'طاقم محترف',
      description: 'فريق طبي مدرب ومؤهل للخدمة المنزلية'
    },
    {
      icon: '⚡',
      title: 'سرعة الاستجابة',
      description: 'وصول سريع ونتائج فورية'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فريق طبي متخصص في تقديم خدمات الفحوصات الطبية المنزلية بأعلى مستوى من الجودة والدقة. 
            نسعى لتوفير الراحة والرعاية الصحية في منزلك بأحدث الأجهزة والتقنيات الطبية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-medical-light rounded-2xl p-8 text-center card-hover group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">لماذا تختار Family Scan؟</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            نحن نؤمن بأن الرعاية الصحية يجب أن تكون متاحة ومريحة للجميع. لذلك نقدم خدماتنا المتميزة 
            في منزلك بنفس جودة المستشفيات الكبرى، مع الحفاظ على خصوصيتك وراحتك.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">عميل راضي</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">نوع فحص</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">خدمة متواصلة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
