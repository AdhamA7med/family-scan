
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'أ. محمد أحمد',
      location: 'مدينة نصر',
      text: 'خدمة ممتازة ودقيقة، الفريق محترف جداً والأجهزة حديثة. وفروا عليا وقت ومجهود كبير.',
      rating: 5,
      icon: 'fas fa-user-tie'
    },
    {
      name: 'د. فاطمة علي',
      location: 'المعادي',
      text: 'أفضل خدمة طبية منزلية جربتها، النتائج دقيقة والتعامل راقي جداً. أنصح بها بقوة.',
      rating: 5,
      icon: 'fas fa-user-graduate'
    },
    {
      name: 'أ. أحمد محمود',
      location: 'هليوبوليس',
      text: 'سرعة في الاستجابة ودقة في النتائج. الفريق الطبي ملتزم بالمواعيد ومحترف في التعامل.',
      rating: 5,
      icon: 'fas fa-user'
    },
    {
      name: 'دكتورة سارة',
      location: 'الزمالك',
      text: 'خدمة رائعة، خاصة للمرضى كبار السن. راحة تامة في المنزل مع نفس جودة المستشفى.',
      rating: 5,
      icon: 'fas fa-female'
    },
    {
      name: 'أ. خالد حسن',
      location: 'التجمع الخامس',
      text: 'أسعار مناسبة وجودة عالية. التقارير واضحة ومفصلة، والطاقم يشرح كل شيء بوضوح.',
      rating: 5,
      icon: 'fas fa-male'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding medical-gradient">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-medical-dark mb-4 sm:mb-6">
            <i className="fas fa-comments text-medical-blue mr-3"></i>
            آراء عملائنا
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            ما يقوله عملاؤنا عن خدماتنا المتميزة
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-lg sm:text-2xl mx-1"></i>
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-6 sm:mb-8 leading-relaxed italic">
                <i className="fas fa-quote-right text-medical-blue mr-2"></i>
                {testimonials[currentTestimonial].text}
                <i className="fas fa-quote-left text-medical-blue ml-2"></i>
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-medical-blue rounded-full flex items-center justify-center text-white text-lg sm:text-xl mr-4">
                  <i className={testimonials[currentTestimonial].icon}></i>
                </div>
                <div className="text-right">
                  <div className="font-bold text-medical-dark text-lg sm:text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 space-x-reverse mb-8 sm:mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-medical-blue w-8' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* Quick Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg card-hover"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm sm:text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                <i className="fas fa-quote-right text-medical-blue mr-1"></i>
                {testimonial.text.substring(0, 100)}...
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-medical-teal rounded-full flex items-center justify-center text-white mr-3">
                  <i className={`${testimonial.icon} text-xs sm:text-sm`}></i>
                </div>
                <div className="text-right">
                  <div className="font-medium text-medical-dark text-xs sm:text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
