import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Eye,
  Heart,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Query, Post } from "./types";
import { fetchBlog, fetchSingleBlog } from "./utils";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [post, setPost] = useState<Post | null>(null);
  const [rPosts, setrPosts] = useState<Post[] | null>(null);
  /*  const createPostQuery = (id: string | null | undefined): Query => ({
    query: `
      *[_type == "post" && _id == $id]{
        _createdAt,
        _id,
        _type,
        _updatedAt,
        categories[] -> { title },
        author->{ name },
        body,
        mainImage{ asset->{ _id, url }, alt },
        title
      }
    `,
    params: { id },
  });
  */

  const createOtherPostsQuery = (limit: number): Query => ({
    query: `
      *[_type == "post"] | order(_createdAt desc)[0..$limit-1]{
        _id,
        _createdAt,
        _updatedAt,
        title,
        categories,
        author->{name},
        body,
        mainImage{asset->{_id,url}, alt}
      }
    `,
    params: { limit },
  });

  useEffect(() => {
    async function loadPost() {
      const p = await fetchSingleBlog(id);
      const moreP = await fetchBlog(createOtherPostsQuery(3));
      setPost(p);
      setrPosts(moreP);
    }

    loadPost();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setReadingProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  if (!post) {
    return <div>Loading...</div>;
  }

  console.log(id);

  const blogPost = {
    _id: post._id,
    title: post.title,
    content: [post.body.map((item) => item.children[0].text).join(" ")],
    author: post.author.name,
    createdAt: post._createdAt,
    updatedAt: post._updatedAt,
    readTime: 8,
    views: 1247,
    image: post.mainImage.url,
    imageAlt: post.mainImage.alt,
    category: post.categories
      ? post.categories.map((c) => c.title).join(" ")
      : "Blog",
  };

  const relatedPosts = rPosts
    ? rPosts.map((p) => ({
        id: p._id,
        title: p.title,
        image: p.mainImage.url,
        date: p._createdAt,
        readTime: 5,
      }))
    : [];

  // Reading progress tracker

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: `Check out this article: ${blogPost.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Reading Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span className="font-medium">Back to Articles</span>
            </button>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
                  liked
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 scale-110"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Heart size={18} className={liked ? "fill-current" : ""} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Blog
            </span>
            <ChevronRight size={16} />
            <span className="hover:text-primary cursor-pointer transition-colors">
              {blogPost.category ? blogPost.category : "Blog"}
            </span>
            <ChevronRight size={16} />
            <span className="text-primary font-medium">Current Article</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
              <User size={18} />
              <span>{blogPost.author}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>
                {new Date(blogPost.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{blogPost.readTime} min read</span>
            </div>

            <div className="flex items-center space-x-2">
              <Eye size={18} />
              <span>{blogPost.views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12 group">
            <img
              src={blogPost.image}
              alt={blogPost.imageAlt}
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 max-w-fit">
                {blogPost.imageAlt}
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {blogPost.content.map((paragraph, index) => {
                // Check if paragraph is a heading (starts with ##)
                if (
                  paragraph.startsWith("1. **") ||
                  paragraph.startsWith("2. **") ||
                  paragraph.startsWith("3. **")
                ) {
                  return (
                    <div key={index} className="my-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph
                          .replace(/^\d+\. \*\*/, "")
                          .replace(/\*\*:/, "")}
                      </h3>
                    </div>
                  );
                }

                // Regular paragraphs
                return (
                  <p
                    key={index}
                    className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .split("<strong>")
                      .map((part, i) => {
                        if (i === 0) return part;
                        const [strong, rest] = part.split("</strong>");
                        return (
                          <span key={i}>
                            <strong className="font-bold text-gray-900 dark:text-white">
                              {strong}
                            </strong>
                            {rest}
                          </span>
                        );
                      })}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 ${
                      liked
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 shadow-lg"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Heart size={18} className={liked ? "fill-current" : ""} />
                    <span className="font-medium">
                      {liked ? "Liked" : "Like"}
                    </span>
                  </button>

                  <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105">
                    <MessageCircle size={18} />
                    <span className="font-medium">Comment</span>
                  </button>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Share2 size={18} />
                  <span className="font-medium">Share Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              More Articles You'll Love
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

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
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogPostPage;
