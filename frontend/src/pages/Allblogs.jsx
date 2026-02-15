import { Link } from "react-router-dom";

// Complete list of all blog posts
const allPosts = [
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
  },
  {
    id: "property-partition-suit",
    title: "Property Partition Suit in India",
    excerpt: "Complete process of filing a partition suit, rights of co-owners, and division of ancestral property...",
    category: "Property Law",
    readTime: "9 min read",
    date: "Feb 1, 2026"
  },
  {
    id: "consumer-complaint-procedure",
    title: "How to File a Consumer Complaint",
    excerpt: "Step-by-step guide to filing consumer complaints, jurisdiction, and remedies available under Consumer Protection Act...",
    category: "Consumer Law",
    readTime: "6 min read",
    date: "Jan 28, 2026"
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration Process in India",
    excerpt: "Comprehensive guide on trademark application, examination, objections, and registration process...",
    category: "Intellectual Property",
    readTime: "10 min read",
    date: "Jan 25, 2026"
  },
  {
    id: "will-probate-process",
    title: "Probate of Will: Complete Procedure",
    excerpt: "Understanding when probate is required, court procedures, and timeline for obtaining probate in India...",
    category: "Estate Planning",
    readTime: "7 min read",
    date: "Jan 22, 2026"
  },
  {
    id: "defamation-suit-india",
    title: "Filing a Defamation Suit in India",
    excerpt: "Learn about civil and criminal defamation, elements of defamation, defenses, and remedies available...",
    category: "Civil Law",
    readTime: "8 min read",
    date: "Jan 20, 2026"
  },
  {
    id: "arbitration-process",
    title: "Arbitration under Arbitration and Conciliation Act",
    excerpt: "Understanding arbitration proceedings, appointment of arbitrator, awards, and enforcement...",
    category: "Alternative Dispute Resolution",
    readTime: "11 min read",
    date: "Jan 18, 2026"
  },
  {
    id: "gst-appeal-procedure",
    title: "GST Appeal Process and Procedures",
    excerpt: "Complete guide on filing appeals before GST Appellate Authority and Tribunal with timelines and documentation...",
    category: "Tax Law",
    readTime: "9 min read",
    date: "Jan 15, 2026"
  },
  {
    id: "employment-termination-rights",
    title: "Employment Termination and Employee Rights",
    excerpt: "Understanding wrongful termination, notice period, severance pay, and legal remedies for employees...",
    category: "Labour Law",
    readTime: "7 min read",
    date: "Jan 12, 2026"
  }
];

export default function AllBlogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      {/* Back to Blog Link - Top Left */}
      <div className="border-b border-[#2a2a2a]/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm tracking-wide">BACK TO BLOG</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">
                  Complete Collection
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#f5f5f5] leading-tight">
              All Blog Articles
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Browse our complete library of {allPosts.length} legal articles covering various practice areas
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="flex items-center gap-2 text-gray-500">
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-serif text-[#f5f5f5] leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed font-light text-sm">
                    {post.excerpt}
                  </p>

                  {/* Date & Read More */}
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <div className="flex items-center gap-2 text-amber-600 font-medium">
                      <span className="text-sm tracking-wide">READ</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            </Link>
          ))}
        </div>

        {/* Articles Count */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Showing all {allPosts.length} articles
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-[#2a2a2a] bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
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
      </div>
    </div>
  );
}