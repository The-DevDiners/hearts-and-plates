import React from 'react';
import RestaurantNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChefHatIcon } from 'lucide-react';
import signatureImg from '../assets/images/signature.png'
import heroImg from '../assets/images/hero5.png'
import chefImg from '../assets/images/chef4.png'


const AboutUs = () => {
  return (
    <div className="bg-black text-white">
      <RestaurantNavbar />
      
      {/* Hero Section */}
      <div className="bg-[url('assets/images/hero4.png')] bg-cover bg-center h-[600px] relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* OUR STORY text */}
          <div className="mt-20">
            <h3 className="text-white text-sm md:text-base tracking-widest uppercase">
              <span className="text-amber-200 font-light">OUR</span> STORY
            </h3>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center my-4">
            <div className="w-2 h-2 rounded-full bg-amber-200"></div>
            <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 border border-amber-200 rotate-45"></div>
              <div className="absolute inset-0 border border-amber-200 -rotate-45"></div>
            </div>
            <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
            <div className="w-2 h-2 rounded-full bg-amber-200"></div>
          </div>
          
          {/* About Us heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light mt-4 tracking-wide">
            About Us
          </h1>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="mb-6">
                <h3 className="text-amber-200 text-sm tracking-widest uppercase mb-2">OUR STORY</h3>
                <h2 className="text-4xl font-light mb-6">Every Flavor Tells a Story</h2>
                <div className="w-16 h-1 bg-amber-200 mb-6"></div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Founded in 2010, Hearts & Plates Restaurant has been serving the city of Accra with authentic culinary experiences that blend traditional recipes with modern innovation. What started as a small family kitchen has now grown into one of the most respected establishments in the culinary world.
              </p>
              
              <p className="text-gray-400 mb-6">
                Our commitment to quality and authentic flavors has earned us numerous accolades and a loyal clientele who appreciate the artistry and passion that goes into every dish we serve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200/10 text-amber-200 mr-4">
                    <ChefHatIcon />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Professional Chefs</h4>
                    <p className="text-gray-400 text-sm">Our team of world-class chefs bring their expertise and passion to every dish.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200/10 text-amber-200 mr-4">
                    <ChefHatIcon />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Quality Cuisine</h4>
                    <p className="text-gray-400 text-sm">We use only the freshest ingredients to create memorable culinary experiences.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <img src= {signatureImg} alt="Signature" className="h-16" />
                <div className="ml-4">
                  <h4 className="text-white text-lg">Jonathan Smith</h4>
                  <p className="text-amber-200 text-sm">Master Chef</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Images */}
            <div className="relative">
              <div className="aspect-[3/4] relative z-10">
               
              </div>
              <div className="absolute w-2/3 aspect-square bottom-12 -left-12 z-0 border-8 border-amber-200/20">
                <img src={chefImg} alt="Chef cooking" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-200 text-black p-4 z-20">
                <div className="text-center">
                  <div className="text-4xl font-bold">15</div>
                  <div className="text-sm uppercase tracking-wider">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-black relative">
        {/* Art deco pattern background */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iI2UyYzg3ZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik0wIDBsMzAgMzBNMzAgMEwwIDMwTTYwIDBMMzAgMzBNMzAgMzBsMzAgMzBNMzAgNjBMNjAgMzBNMzAgNjBMMCAzMCIvPjwvZz48L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-amber-200 text-sm tracking-widest uppercase mb-2">WHAT WE OFFER</h3>
            <h2 className="text-4xl font-light mb-6">Our Specialties</h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center my-4">
              <div className="w-2 h-2 rounded-full bg-amber-200"></div>
              <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 border border-amber-200 rotate-45"></div>
                <div className="absolute inset-0 border border-amber-200 -rotate-45"></div>
              </div>
              <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
              <div className="w-2 h-2 rounded-full bg-amber-200"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Breakfast</h3>
              <p className="text-gray-400">Start your day with our nutritious and delicious breakfast options featuring both local favorites and international classics.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Appetizers</h3>
              <p className="text-gray-400">Explore our range of appetizers that set the perfect tone for your dining experience with flavors from around the world.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Drinks</h3>
              <p className="text-gray-400">Our handcrafted cocktails and curated wine selection perfectly complement every meal and occasion.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Main Courses</h3>
              <p className="text-gray-400">Our signature main courses feature premium ingredients and expert preparation that showcase our chef's creativity.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Desserts</h3>
              <p className="text-gray-400">Complete your dining experience with our decadent desserts that combine artistry with exceptional flavors.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="text-center p-8 border border-gray-800 hover:border-amber-200/30 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-200/10 text-amber-200 rounded-full group-hover:bg-amber-200 group-hover:text-black transition-colors">
                <ChefHatIcon />
              </div>
              <h3 className="text-xl font-light mb-4">Private Dining</h3>
              <p className="text-gray-400">Our exclusive private dining options offer personalized service for special occasions and intimate gatherings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative z-10">
                <img src="/assets/images/why-choose-us.jpg" alt="Restaurant atmosphere" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 border-8 border-amber-200/20 z-0"></div>
            </div>
            
            {/* Right Side - Text Content */}
            <div>
              <div className="mb-6">
                <h3 className="text-amber-200 text-sm tracking-widest uppercase mb-2">WHY CHOOSE US</h3>
                <h2 className="text-4xl font-light mb-6">We Create the Best Dining Experience</h2>
                <div className="w-16 h-1 bg-amber-200 mb-6"></div>
              </div>
              
              <p className="text-gray-400 mb-8">
                At Delici, we believe in providing more than just food—we create memorable experiences through exceptional service, ambient atmosphere, and of course, outstanding cuisine that delights all your senses.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200 text-black mr-4">
                    <span className="text-lg font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Hygienic Food</h4>
                    <p className="text-gray-400">Our kitchen maintains the highest standards of cleanliness and food safety.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200 text-black mr-4">
                    <span className="text-lg font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Fresh Environment</h4>
                    <p className="text-gray-400">Dine in our elegant, comfortable space designed to enhance your experience.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200 text-black mr-4">
                    <span className="text-lg font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Skilled Chefs</h4>
                    <p className="text-gray-400">Our culinary team brings decades of expertise and passion to every dish.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-200 text-black mr-4">
                    <span className="text-lg font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-2">Event & Party</h4>
                    <p className="text-gray-400">We offer custom catering and venue options for events of all sizes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Chefs Section */}
      <section className="py-20 bg-black relative">
        {/* Art deco pattern background */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iI2UyYzg3ZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik0wIDBsMzAgMzBNMzAgMEwwIDMwTTYwIDBMMzAgMzBNMzAgMzBsMzAgMzBNMzAgNjBMNjAgMzBNMzAgNjBMMCAzMCIvPjwvZz48L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-amber-200 text-sm tracking-widest uppercase mb-2">PROFESSIONAL PEOPLE</h3>
            <h2 className="text-4xl font-light mb-6">Meet Our Chefs</h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center my-4">
              <div className="w-2 h-2 rounded-full bg-amber-200"></div>
              <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 border border-amber-200 rotate-45"></div>
                <div className="absolute inset-0 border border-amber-200 -rotate-45"></div>
              </div>
              <div className="w-12 md:w-16 h-px bg-amber-200 mx-2"></div>
              <div className="w-2 h-2 rounded-full bg-amber-200"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chef 1 */}
            <div className="group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/chef-1.jpg" alt="Chef John Doe" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-1/2 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl text-white">John Doe</h3>
                    <p className="text-amber-200">Executive Chef</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chef 2 */}
            <div className="group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/chef-2.jpg" alt="Chef Jane Smith" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-1/2 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl text-white">Jane Smith</h3>
                    <p className="text-amber-200">Pastry Chef</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chef 3 */}
            <div className="group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/chef-3.jpg" alt="Chef Michael Johnson" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-1/2 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl text-white">Michael Johnson</h3>
                    <p className="text-amber-200">Sous Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;