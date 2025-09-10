import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const BlogsSection: React.FC = () => {
  const featuredPost = {
    title: "PM Surya Ghar Yojana: Complete Guide to ₹90 Lakh Subsidy",
    excerpt: "Everything you need to know about the government's flagship solar scheme, eligibility criteria, application process, and how to maximize your benefits.",
    image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Government Schemes",
    featured: true
  };

  const blogPosts = [
    {
      title: "5 Signs Your Home is Perfect for Solar Installation",
      excerpt: "Discover if your property meets the ideal conditions for maximum solar energy generation and savings.",
      image: "https://images.pexels.com/photos/9875394/pexels-photo-9875394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-12",
      readTime: "5 min read",
      category: "Home Solar"
    },
    {
      title: "Solar Panel Maintenance: Tips for Optimal Performance",
      excerpt: "Simple maintenance practices to ensure your solar panels deliver maximum efficiency year-round.",
      image: "https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Maintenance"
    },
    {
      title: "Understanding Solar Net Metering in India",
      excerpt: "Learn how net metering works and how you can sell excess power back to the grid for additional savings.",
      image: "https://images.pexels.com/photos/9875392/pexels-photo-9875392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Technical"
    },
    {
      title: "Environmental Impact of Solar Energy: Facts & Figures",
      excerpt: "Discover how switching to solar power contributes to environmental conservation and carbon footprint reduction.",
      image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Environment"
    },
    {
      title: "Case Study: 50% Electricity Bill Reduction in Mumbai",
      excerpt: "Real-world example of how a Mumbai family achieved massive savings with our zero-investment solar solution.",
      image: "https://images.pexels.com/photos/9875410/pexels-photo-9875410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Case Studies"
    },
    {
      title: "Solar Technology Trends 2024: What's New?",
      excerpt: "Latest innovations in solar panel technology, efficiency improvements, and what they mean for homeowners.",
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "Technology"
    }
  ];

  const categories = [
    "All Posts",
    "Government Schemes",
    "Home Solar",
    "Maintenance",
    "Technical",
    "Environment",
    "Case Studies",
    "Technology"
  ];

  return (
    <section id="blogs" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Solar <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Insights & Updates</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest solar energy news, government policies, maintenance tips, 
            and success stories from the renewable energy world.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-green-600 p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-semibold">
                      Featured Article
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="relative h-96 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Solar Insights
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Get the latest solar news, government policy updates, and exclusive savings tips delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Join 25,000+ subscribers • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;