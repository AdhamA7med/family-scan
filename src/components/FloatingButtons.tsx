
import { Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <button
        onClick={() => window.open('https://wa.me/201155866577', '_blank')}
        className="floating-btn bg-green-500 hover:bg-green-600 animate-float shadow-2xl"
        style={{ animationDelay: '0s' }}
        title="واتساب - 01155866577"
      >
        <span className="text-2xl">📱</span>
      </button>

      {/* Phone Button */}
      <button
        onClick={() => window.open('tel:01093693001')}
        className="floating-btn bg-medical-blue hover:bg-medical-blue/90 animate-float shadow-2xl"
        style={{ animationDelay: '1s' }}
        title="اتصال مباشر - 01093693001"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;
