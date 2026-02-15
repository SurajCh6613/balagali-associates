// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";

// export default function BlogDetails() {
//   const { id } = useParams();

//   const blogData = {
//     "cheque-bounce-case": {
//       title: "Cheque Bounce Case under Section 138 NI Act",
//       content: "Full detailed blog content here...",
//     },
//   };

//   const post = blogData[id];

//   if (!post) return <div>Post not found</div>;

//   return (
//     <>
//       <Helmet>
//         <title>{post.title} | Bhailappa Associates</title>
//         <meta name="description" content="Legal guidance by Bhailappa Associates in Bengaluru." />
//       </Helmet>

//       <section className="py-20 max-w-4xl mx-auto px-6">
//         <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
//         <p>{post.content}</p>
//       </section>
//     </>
//   );
// }
