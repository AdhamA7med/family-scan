
const ContactSection = () => {
  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'اتصال مباشر',
      value: '01093693001',
      link: 'tel:01093693001',
      color: 'bg-medical-blue'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'واتساب',
      value: '01155866577',
      link: 'https://wa.me/201155866577',
      color: 'bg-green-500'
    }
  ];

  const socialLinks = [
    {
      name: 'فيسبوك',
      icon: 'fab fa-facebook-f',
      link: '#facebook',
      color: 'bg-blue-600'
    },
    {
      name: 'انستجرام',
      icon: 'fab fa-instagram',
      link: '#instagram',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
            <i className="fas fa-phone text-medical-blue mr-3"></i>
            تواصل معنا
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            نحن هنا لخدمتك في أي وقت. تواصل معنا للحصول على استشارة أو لحجز موعد
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Contact Information */}
          <div>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-teal rounded-xl flex items-center justify-center ml-4">
                  <i className="fas fa-map-marker-alt text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-medical-dark text-base sm:text-lg mb-1">الموقع</h3>
                  <p className="text-gray-600 text-sm sm:text-base">القاهرة - مصر</p>
                </div>
              </div>

              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${contact.color} rounded-xl flex items-center justify-center ml-4 text-white`}>
                    <i className={`${contact.icon} text-lg sm:text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark text-base sm:text-lg mb-1">{contact.title}</h3>
                    <a 
                      href={contact.link}
                      className="text-gray-600 hover:text-medical-blue transition-colors duration-300 text-sm sm:text-lg font-medium"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8 sm:mt-12">
              <h3 className="font-bold text-medical-dark text-lg sm:text-xl mb-4 sm:mb-6">
                <i className="fas fa-share-alt text-medical-blue mr-2"></i>
                تابعنا على
              </h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 text-white group`}
                  >
                    <i className={`${social.icon} text-lg sm:text-xl group-hover:animate-pulse`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 sm:mt-12 space-y-4">
              <button 
                className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white p-3 sm:p-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
                onClick={() => window.open('tel:01093693001')}
              >
                <i className="fas fa-phone mr-2 group-hover:animate-pulse"></i>
                اتصل الآن - 01093693001
              </button>
              
              <button 
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                <i className="fab fa-whatsapp mr-2 group-hover:animate-pulse"></i>
                واتساب - 01155866577
              </button>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="bg-medical-light rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <i className="fas fa-hospital text-3xl sm:text-4xl text-medical-blue"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-medical-dark mb-4 sm:mb-6">
                <i className="fas fa-map-marked-alt text-medical-blue mr-2"></i>
                نخدم جميع أنحاء القاهرة
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2">
                نصل إليك في أي مكان في القاهرة الكبرى بأسرع وقت ممكن. 
                فريقنا الطبي جاهز لخدمتك 24 ساعة طوال أيام الأسبوع.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-medical-blue mb-1">
                    <i className="fas fa-clock mr-1"></i>
                    30 دقيقة
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">متوسط وقت الوصول</div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-medical-teal mb-1">
                    <i className="fas fa-thumbs-up mr-1"></i>
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
