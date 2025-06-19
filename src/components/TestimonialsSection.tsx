
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'أ. محمد أحمد',
      location: 'مدينة نصر',
      text: 'خدمة ممتازة ودقيقة، الفريق محترف جداً والأجهزة حديثة. وفروا عليا وقت ومجهود كبير.',
      rating: 5
    },
    {
      name: 'د. فاطمة علي',
      location: 'المعادي',
      text: 'أفضل خدمة طبية منزلية جربتها، النتائج دقيقة والتعامل راقي جداً. أنصح بها بقوة.',
      rating: 5
    },
    {
      name: 'أ. أحمد محمود',
      location: 'هليوبوليس',
      text: 'سرعة في الاستجابة ودقة في النتائج. الفريق الطبي ملتزم بالمواعيد ومحترف في التعامل.',
      rating: 5
    },
    {
      name: 'دكتورة سارة',
      location: 'الزمالك',
      text: 'خدمة رائعة، خاصة للمرضى كبار السن. راحة تامة في المنزل مع نفس جودة المستشفى.',
      rating: 5
    },
    {
      name: 'أ. خالد حسن',
      location: 'التجمع الخامس',
      text: 'أسعار مناسبة وجودة عالية. التقارير واضحة ومفصلة، والطاقم يشرح كل شيء بوضوح.',
      rating: 5
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ما يقوله عملاؤنا عن خدماتنا المتميزة
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-right">
                  <div className="font-bold text-medical-dark text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 space-x-reverse mb-12">
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
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-right">
                  <div className="font-medium text-medical-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
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
