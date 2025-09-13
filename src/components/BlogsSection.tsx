import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

const BlogsSection: React.FC = () => {
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
    "Maintenance"
  ];

  const [filter, setFilter] = useState("All Posts");

  const filteredBlogs = blogPosts.filter(
    (blog) => filter === "All Posts" || blog.category === filter
  );

  return (
    <section data-theme="light" id="blogs" className="py-40 bg-white dark:bg-gray-900 transition-colors  duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Latest <span className="text-primary">Articles</span>
        </h2>
      </div>

          <div className="bg-white border m-10 mb-10 mt-10 md:mr-32 md:ml-32 dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
      {/* Left Content */}
      <div className="flex-1">
        {/* Date */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <Clock size={16} className="mr-2" />
          <span>12 Jun, 2022</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Tips and DIY Inspiration for Creative Minds
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Discover a universe of boundless imagination in the World of Creative
          Art, where canvases weave stories, sculptures breathe life, and digital
          realms redefine artistic expression. Unleash your inner artist with
          tips and inspiration for a journey into the kaleidoscope of creativity.
        </p>

        {/* Button */}
        <button className="px-5 py-2 border border-gray-400 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Read More
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img
          src="https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
          alt="Creative Art"
          className="w-full md:w-80 h-full object-cover rounded-lg"
        />
      </div>
    </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map((post, index) => (
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
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
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
      </div>
    </section>
  );
};

export default BlogsSection;
