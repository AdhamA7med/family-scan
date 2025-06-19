
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center medical-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-medical-blue rounded-full animate-float"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 bg-medical-teal rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-medical-blue rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container-max pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-center lg:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-4 sm:mb-6 leading-tight">
              خدمتك لحد عندك...
              <span className="block text-medical-blue mt-2">
                <i className="fas fa-stethoscope mr-2"></i>
                مع أحدث الأجهزة وأدق الفحوصات
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              <i className="fas fa-heart text-red-500 mr-2"></i>
              فحوصات دقيقة، راحة تامة، ونتائج مضمونة بدون مشاوير
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open('tel:01093693001')}
              >
                <i className="fas fa-phone mr-2 group-hover:animate-pulse"></i>
                اتصل الآن
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/201155866577')}
              >
                <i className="fab fa-whatsapp mr-2 group-hover:animate-pulse"></i>
                واتساب
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-medical-blue mb-1">
                  <i className="fas fa-clock mr-1"></i>
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-600">خدمة متواصلة</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-medical-teal mb-1">
                  <i className="fas fa-check-circle mr-1"></i>
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">دقة النتائج</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-medical-blue mb-1">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  Cairo
                </div>
                <div className="text-xs sm:text-sm text-gray-600">تغطية شاملة</div>
              </div>
            </div>
          </div>

          {/* Medical Illustration */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-72 sm:h-96 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 medical-gradient border border-medical-light">
                <div className="h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 bg-medical-blue rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto animate-pulse-slow">
                      <i className="fas fa-user-md text-white text-2xl sm:text-4xl"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-medical-dark mb-3 sm:mb-4">خدمة طبية منزلية</h3>
                    <p className="text-sm sm:text-base text-gray-600">أحدث الأجهزة الطبية في منزلك</p>
                  </div>
                  
                  {/* Floating medical icons */}
                  <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-medical-teal rounded-full flex items-center justify-center animate-float">
                    <i className="fas fa-microscope text-white text-xs sm:text-sm"></i>
                  </div>
                  <div className="absolute bottom-4 left-4 w-6 sm:w-8 h-6 sm:h-8 bg-medical-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <i className="fas fa-syringe text-white text-xs sm:text-sm"></i>
                  </div>
                  <div className="absolute top-1/2 left-4 w-5 sm:w-6 h-5 sm:h-6 bg-medical-teal rounded-full flex items-center justify-center animate-pulse-slow">
                    <i className="fas fa-heartbeat text-white text-xs"></i>
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
