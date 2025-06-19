
import { Clock, Hospital, User, Shield, FileImage, FileVideo } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'خدمة 24 ساعة',
      description: 'متاحون في أي وقت لخدمتك',
      color: 'bg-blue-500'
    },
    {
      icon: <Hospital className="w-8 h-8" />,
      title: 'أجهزة منزلية محمولة',
      description: 'أحدث الأجهزة الطبية المحمولة',
      color: 'bg-medical-teal'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'طاقم طبي محترف',
      description: 'فريق مدرب ومؤهل للخدمة المنزلية',
      color: 'bg-medical-blue'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'سرية وخصوصية',
      description: 'حماية كاملة لخصوصيتك وبياناتك',
      color: 'bg-green-500'
    },
    {
      icon: <FileImage className="w-8 h-8" />,
      title: 'تقارير إلكترونية فورية',
      description: 'النتائج والتقارير في نفس اليوم',
      color: 'bg-purple-500'
    },
    {
      icon: <FileVideo className="w-8 h-8" />,
      title: 'طرق دفع متعددة',
      description: 'كاش، تحويل، أو فيزا',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            مميزاتنا المتقدمة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحرص على تقديم أفضل خدمة طبية منزلية بمعايير عالمية ومميزات فريدة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg card-hover group border border-gray-100"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                {feature.icon}
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

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-medical-dark mb-12">
            كيف تعمل الخدمة؟
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="font-bold text-medical-dark mb-2">اتصل بنا</h4>
              <p className="text-gray-600 text-sm">تواصل معنا واطلب الخدمة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="font-bold text-medical-dark mb-2">حدد الموعد</h4>
              <p className="text-gray-600 text-sm">اختر الوقت المناسب لك</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 className="font-bold text-medical-dark mb-2">نأتي إليك</h4>
              <p className="text-gray-600 text-sm">الفريق الطبي في منزلك</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h4 className="font-bold text-medical-dark mb-2">احصل على النتائج</h4>
              <p className="text-gray-600 text-sm">تقرير فوري ومفصل</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
