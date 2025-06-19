
import { Phone, User } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'اتصال مباشر',
      value: '01093693001',
      link: 'tel:01093693001',
      color: 'bg-medical-blue'
    },
    {
      icon: <span className="text-lg">📱</span>,
      title: 'واتساب',
      value: '01155866577',
      link: 'https://wa.me/201155866577',
      color: 'bg-green-500'
    }
  ];

  const socialLinks = [
    {
      name: 'فيسبوك',
      icon: '📘',
      link: '#facebook'
    },
    {
      name: 'انستجرام',
      icon: '📷',
      link: '#instagram'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتك في أي وقت. تواصل معنا للحصول على استشارة أو لحجز موعد
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-teal rounded-xl flex items-center justify-center ml-4">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-medical-dark text-lg mb-1">الموقع</h3>
                  <p className="text-gray-600">القاهرة - مصر</p>
                </div>
              </div>

              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center ml-4 text-white`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark text-lg mb-1">{contact.title}</h3>
                    <a 
                      href={contact.link}
                      className="text-gray-600 hover:text-medical-blue transition-colors duration-300 text-lg"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="font-bold text-medical-dark text-xl mb-6">تابعنا على</h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 space-y-4">
              <button 
                className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white p-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                onClick={() => window.open('tel:01093693001')}
              >
                <Phone className="w-6 h-6 ml-2" />
                اتصل الآن - 01093693001
              </button>
              
              <button 
                className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                <span className="text-xl ml-2">📱</span>
                واتساب - 01155866577
              </button>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="bg-medical-light rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-6">
                نخدم جميع أنحاء القاهرة
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                نصل إليك في أي مكان في القاهرة الكبرى بأسرع وقت ممكن. 
                فريقنا الطبي جاهز لخدمتك 24 ساعة طوال أيام الأسبوع.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-medical-blue mb-1">30 دقيقة</div>
                  <div className="text-sm text-gray-600">متوسط وقت الوصول</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-medical-teal mb-1">100%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
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
