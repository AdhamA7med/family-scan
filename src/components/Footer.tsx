
const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'فيسبوك', icon: '📘', href: '#facebook' },
    { name: 'انستجرام', icon: '📷', href: '#instagram' }
  ];

  return (
    <footer className="bg-medical-dark text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Family Scan</h3>
                <p className="text-gray-300">خدمة فحوصات منزلية</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              نقدم خدمات طبية متميزة في منزلك بأحدث الأجهزة والتقنيات الطبية. 
              راحتك وصحتك أولويتنا الأولى.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-medical-teal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-medical-teal ml-3">📞</span>
                <a href="tel:01093693001" className="text-gray-300 hover:text-white transition-colors">
                  01093693001
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 ml-3">📱</span>
                <a href="https://wa.me/201155866577" className="text-gray-300 hover:text-white transition-colors">
                  01155866577
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-medical-blue ml-3">📍</span>
                <span className="text-gray-300">القاهرة - مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center space-x-6 space-x-reverse">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-medical-teal transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 mb-2">
            © 2025 Family Scan. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-400">
            تم تطوير الموقع بواسطة{' '}
            <a 
              href="https://wa.me/201153903786" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors duration-300 underline"
            >
              أدهم أحمد
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
