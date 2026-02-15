import { Link } from "react-router-dom";

const posts = [
  {
    id: "cheque-bounce-case",
    title: "Cheque Bounce Case under Section 138 NI Act",
    excerpt: "Understand the complete procedure of filing a cheque bounce case...",
    category: "Criminal Law",
    readTime: "5 min read",
    date: "Feb 10, 2026"
  },
  {
    id: "bail-in-high-court",
    title: "How to Apply for Bail in High Court",
    excerpt: "Step-by-step process to apply for regular and anticipatory bail...",
    category: "Court Procedures",
    readTime: "7 min read",
    date: "Feb 8, 2026"
  },
  {
    id: "mutual-divorce-procedure",
    title: "Mutual Divorce Procedure in India",
    excerpt: "Complete guide on filing a mutual consent divorce petition, documents required, timeline, and court process...",
    category: "Family Law",
    readTime: "6 min read",
    date: "Feb 5, 2026"
  },
  {
    id: "fir-quash-under-482",
    title: "How to Quash FIR under Section 482 CrPC",
    excerpt: "Learn when and how the High Court can quash an FIR under Section 482 CrPC and the legal grounds required...",
    category: "Criminal Law",
    readTime: "8 min read",
    date: "Feb 3, 2026"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">
                  Knowledge Center
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#f5f5f5] leading-tight">
              Legal Articles & Insights
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Expert guidance and comprehensive analysis on Indian legal matters from our experienced attorneys
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <article className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden transition-all duration-500 hover:border-amber-600/50 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-1">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="p-8 space-y-6 relative">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1.5 bg-amber-600/10 text-amber-600 rounded-full border border-amber-600/20 font-medium tracking-wide">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-serif text-[#f5f5f5] leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed font-light">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-amber-600 font-medium pt-4">
                    <span className="text-sm tracking-wide">READ ARTICLE</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-16 text-center">
          <Link to="/all-blogs">
            <button className="group px-8 py-4 bg-transparent border-2 border-amber-600/30 text-amber-600 rounded-sm font-medium tracking-wide hover:bg-amber-600 hover:text-black hover:border-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20">
              <span className="flex items-center gap-3">
                VIEW ALL BLOGS
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t border-[#2a2a2a] bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-[#f5f5f5]">
              Stay Informed on Legal Matters
            </h3>
            <p className="text-gray-400 font-light">
              Subscribe to receive expert legal insights and updates directly to your inbox
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/50 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-amber-600 text-black font-medium rounded-sm hover:bg-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 tracking-wide"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}