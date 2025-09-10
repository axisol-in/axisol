import React from 'react';
import { MapPin, Building } from 'lucide-react';

const ServiceLocationsSection: React.FC = () => {
  const serviceStates = [
    {
      name: "Maharashtra",
      image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Sangli"]
    },
    {
      name: "Karnataka",
      image: "https://images.pexels.com/photos/9875394/pexels-photo-9875394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davangere", "Shimoga"]
    },
    {
      name: "Tamil Nadu",
      image: "https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli", "Erode", "Vellore"]
    },
    {
      name: "Gujarat",
      image: "https://images.pexels.com/photos/9875392/pexels-photo-9875392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Anand"]
    },
    {
      name: "Rajasthan",
      image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Udaipur", "Ajmer", "Bharatpur", "Alwar"]
    },
    {
      name: "Delhi NCR",
      image: "https://images.pexels.com/photos/9875410/pexels-photo-9875410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Greater Noida", "Meerut", "Sonipat"]
    },
    {
      name: "Uttar Pradesh",
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Bareilly", "Aligarh", "Moradabad"]
    },
    {
      name: "Haryana",
      image: "https://images.pexels.com/photos/9875393/pexels-photo-9875393.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal"]
    },
    {
      name: "Punjab",
      image: "https://images.pexels.com/photos/9875411/pexels-photo-9875411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot"]
    },
    {
      name: "Telangana",
      image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahbubnagar", "Nalgonda"]
    },
    {
      name: "Andhra Pradesh",
      image: "https://images.pexels.com/photos/9875394/pexels-photo-9875394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada"]
    },
    {
      name: "Kerala",
      image: "https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur"]
    }
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Service Locations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're proud to serve customers across India with our zero-investment solar solutions. 
            Find your location and join thousands of satisfied customers.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-2xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <MapPin size={64} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pan India Coverage
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We serve customers across 12 states with 100+ cities and towns covered
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div>
                <span className="block font-bold text-2xl text-blue-600 dark:text-blue-400">12</span>
                <span>States</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-green-600 dark:text-green-400">100+</span>
                <span>Cities</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-purple-600 dark:text-purple-400">500+</span>
                <span>Towns</span>
              </div>
            </div>
          </div>
        </div>

        {/* State Service Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceStates.map((state, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* State Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={state.image}
                  alt={`Solar installations in ${state.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* State Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{state.name}</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <Building size={14} className="mr-1" />
                    <span>{state.cities.length} cities covered</span>
                  </div>
                </div>
              </div>

              {/* Cities List */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Cities:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {state.cities.slice(0, 6).map((city, cityIndex) => (
                    <div
                      key={cityIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2 flex-shrink-0" />
                      <span className="truncate">{city}</span>
                    </div>
                  ))}
                </div>
                
                {state.cities.length > 6 && (
                  <div className="mt-3 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    +{state.cities.length - 6} more cities
                  </div>
                )}

                {/* Contact CTA */}
                <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 text-sm">
                  Get Quote for {state.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white shadow-xl">
            <div>
              <span className="block text-2xl font-bold">12 States</span>
              <span className="text-sm opacity-90">Pan India Presence</span>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div>
              <span className="block text-2xl font-bold">100+ Cities</span>
              <span className="text-sm opacity-90">Urban Coverage</span>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div>
              <span className="block text-2xl font-bold">500+ Towns</span>
              <span className="text-sm opacity-90">Rural Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLocationsSection;