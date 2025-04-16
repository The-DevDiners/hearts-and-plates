import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Art deco pattern background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23e2c87d' stroke-width='0.5' d='M0 0l30 30M30 0L0 30M60 0L30 30M30 30l30 30M30 60L60 30M30 60L0 30'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row">
        {/* Left Navigation */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <nav className="flex flex-col space-y-6">
            <a href="/" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">HOME</a>
            <a href="/menu" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">MENUS</a>
            <a href="/about" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">ABOUT US</a>
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">OUR CHEFS</a>
            <a href="/contact" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">CONTACT</a>
          </nav>
        </div>
        
        {/* Center Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center mt-12 md:mt-0">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-2"></div>
              <span className="text-white text-3xl font-light">H & P</span>
            </div>
            <div className="text-amber-200 text-xs tracking-wider mt-1">RESTAURANT</div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-3 text-gray-400 mb-8">
            <p>Restaurant St, Plot No.7,Buro - Osu</p>
            <p>booking@domainname.com</p>
            <p>Booking Request : +88-123-123456</p>
            <p>Open : 09:00 am - 01:00 pm</p>
          </div>
          
          {/* Decorative Divider */}
          <div className="my-8 text-amber-200 flex items-center justify-center w-full">
            <div className="flex items-center space-x-2">
              <span>●●●</span>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="w-full max-w-md">
            <h3 className="text-white text-3xl font-light mb-3">Get News & Offers</h3>
            <p className="text-gray-400 mb-6">Subscribe us & Get <span className="text-white">25% Off</span>.</p>
            
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full py-4 pl-12 bg-gray-900 border-0 focus:ring-0 text-white"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-amber-200 hover:bg-amber-300 text-black font-medium px-6 py-4 uppercase text-sm tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Right - Social Links */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-12 md:mt-0">
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">FACEBOOK</a>
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">INSTAGRAM</a>
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">TWITTER</a>
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">YOUTUBE</a>
            <a href="#" className="text-gray-400 hover:text-white tracking-widest text-sm transition-colors">GOOGLE MAP</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}