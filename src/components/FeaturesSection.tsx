
const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-clock',
      title: 'خدمة 24 ساعة',
      description: 'متاحون في أي وقت لخدمتك',
      color: 'bg-blue-500'
    },
    {
      icon: 'fas fa-laptop-medical',
      title: 'أجهزة منزلية محمولة',
      description: 'أحدث الأجهزة الطبية المحمولة',
      color: 'bg-medical-teal'
    },
    {
      icon: 'fas fa-user-md',
      title: 'طاقم طبي محترف',
      description: 'فريق مدرب ومؤهل للخدمة المنزلية',
      color: 'bg-medical-blue'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'سرية وخصوصية',
      description: 'حماية كاملة لخصوصيتك وبياناتك',
      color: 'bg-green-500'
    },
    {
      icon: 'fas fa-file-medical-alt',
      title: 'تقارير إلكترونية فورية',
      description: 'النتائج والتقارير في نفس اليوم',
      color: 'bg-purple-500'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'طرق دفع متعددة',
      description: 'كاش، تحويل، أو فيزا',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
            <i className="fas fa-star text-medical-blue mr-3"></i>
            مميزاتنا المتقدمة
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            نحرص على تقديم أفضل خدمة طبية منزلية بمعايير عالمية ومميزات فريدة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover group border border-gray-100"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                <i className={`${feature.icon} text-xl sm:text-2xl`}></i>
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

        {/* Process Steps */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-medical-dark mb-8 sm:mb-12">
            <i className="fas fa-route text-medical-blue mr-2"></i>
            كيف تعمل الخدمة؟
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white text-lg sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone"></i>
              </div>
              <h4 className="font-bold text-medical-dark mb-2 text-sm sm:text-base">اتصل بنا</h4>
              <p className="text-gray-600 text-xs sm:text-sm">تواصل معنا واطلب الخدمة</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white text-lg sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h4 className="font-bold text-medical-dark mb-2 text-sm sm:text-base">حدد الموعد</h4>
              <p className="text-gray-600 text-xs sm:text-sm">اختر الوقت المناسب لك</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white text-lg sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-home"></i>
              </div>
              <h4 className="font-bold text-medical-dark mb-2 text-sm sm:text-base">نأتي إليك</h4>
              <p className="text-gray-600 text-xs sm:text-sm">الفريق الطبي في منزلك</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white text-lg sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-file-medical"></i>
              </div>
              <h4 className="font-bold text-medical-dark mb-2 text-sm sm:text-base">احصل على النتائج</h4>
              <p className="text-gray-600 text-xs sm:text-sm">تقرير فوري ومفصل</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
