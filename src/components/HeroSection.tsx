
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center medical-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-medical-blue rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-medical-teal rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-medical-blue rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container-max pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
              خدمتك لحد عندك...
              <span className="block text-medical-blue mt-2">
                مع أحدث الأجهزة وأدق الفحوصات
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              فحوصات دقيقة، راحة تامة، ونتائج مضمونة بدون مشاوير
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('tel:01093693001')}
              >
                📞 اتصل الآن
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                📱 واتساب
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-medical-blue mb-1">24/7</div>
                <div className="text-sm text-gray-600">خدمة متواصلة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-medical-teal mb-1">100%</div>
                <div className="text-sm text-gray-600">دقة النتائج</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-medical-blue mb-1">Cairo</div>
                <div className="text-sm text-gray-600">تغطية شاملة</div>
              </div>
            </div>
          </div>

          {/* Medical Illustration */}
          <div className="animate-slide-in-right hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-white rounded-3xl shadow-2xl p-8 medical-gradient border border-medical-light">
                <div className="h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-medical-blue rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
                      <span className="text-white text-4xl">🏥</span>
                    </div>
                    <h3 className="text-2xl font-bold text-medical-dark mb-4">خدمة طبية منزلية</h3>
                    <p className="text-gray-600">أحدث الأجهزة الطبية في منزلك</p>
                  </div>
                  
                  {/* Floating medical icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-medical-teal rounded-full flex items-center justify-center animate-float">
                    <span className="text-white text-sm">🔬</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <span className="text-white text-sm">💉</span>
                  </div>
                  <div className="absolute top-1/2 left-4 w-6 h-6 bg-medical-teal rounded-full flex items-center justify-center animate-pulse-slow">
                    <span className="text-white text-xs">❤️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
