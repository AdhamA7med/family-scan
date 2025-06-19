
import { Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={() => window.open('https://wa.me/201155866577', '_blank')}
        className="floating-btn bg-green-500 hover:bg-green-600 animate-float shadow-2xl group"
        style={{ animationDelay: '0s' }}
        title="واتساب - 01155866577"
      >
        <i className="fab fa-whatsapp text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
      </button>

      {/* Phone Button */}
      <button
        onClick={() => window.open('tel:01093693001')}
        className="floating-btn bg-medical-blue hover:bg-medical-blue/90 animate-float shadow-2xl group"
        style={{ animationDelay: '1s' }}
        title="اتصال مباشر - 01093693001"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default FloatingButtons;
