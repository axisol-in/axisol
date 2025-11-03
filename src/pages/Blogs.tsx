import React, { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Title from "../components/ui/Title";
import { fetchBlog, createPostsQuery } from "./utils";
import { Post } from "./types";
import { Link } from "react-router-dom";

const BlogsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [filter, setFilter] = useState("All Posts");

  const blogsSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Axisol Solar Energy Blog",
    "description": "Latest insights, tips, and news about solar energy, renewable energy, and green technology in India",
  };

  useEffect(() => {
    async function loadPosts() {
      const bPosts = await fetchBlog(createPostsQuery());
      setPosts(bPosts);
    }
    loadPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  const blogPosts = posts.map((p) => ({
    id: p._id,
    title: p.title,
    excerpt: p.body
      ? p.body
          .map((block) => block.children.map((child) => child.text).join(" "))
          .join(" ")
          .slice(0, 150) + "..."
      : "",
    image: p.mainImage.url,
    date: p._createdAt,
    readTime: "5 min read",
    category: p.categories
      ? p.categories.map((c) => c.title).join(", ")
      : "Solar Energy",
  }));
  const categories = [
    "All Posts",
    "Government Schemes",
    "Home Solar",
    "Maintenance",
  ];

  const filteredBlogs = blogPosts.filter(
    (blog) => filter === "All Posts" || blog.category.includes(filter),
  );

  return (
    <>
      <SEO
        title="Solar Energy Blog - Latest News, Tips & Insights | Axisol India"
        description="Read Axisol's expert articles on solar energy, renewable power, government schemes, installation tips, and green technology trends in India. Stay updated with the latest in sustainable energy."
        keywords="solar energy blog, renewable energy news, solar tips India, solar panel guide, green energy articles, solar installation tips, solar government schemes, clean energy blog"
        canonical="https://www.axisol.in/blogs"
        ogUrl="https://www.axisol.in/blogs"
        schema={blogsSchema}
      />
      <section
        id="blogs"
        className="bg-[#fcfbf8] dark:bg-secondary transition-colors duration-300"
      >
      <Title content="Latest Articles" />

      {/* Featured Blog Card */}
      <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 m-10 md:mx-32 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
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
            Discover a universe of boundless imagination in the World of
            Creative Art, where canvases weave stories, sculptures breathe life,
            and digital realms redefine artistic expression. Unleash your inner
            artist with tips and inspiration for a journey into the kaleidoscope
            of creativity.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <article className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
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
                    <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogsPage;
