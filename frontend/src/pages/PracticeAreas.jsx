// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   Scale,
//   Gavel,
//   Building2,
//   Users,
//   FileText,
//   Shield,
//   ArrowRight,
// } from "lucide-react";

// const practiceAreas = [
//   {
//     icon: Gavel,
//     title: "Criminal Defense",
//     description:
//       "Expert defense in criminal matters including bail, trials, and appeals. Protecting your liberty and rights.",
//   },
//   {
//     icon: Scale,
//     title: "Civil Litigation",
//     description:
//       "Comprehensive civil dispute resolution, property matters, and contract enforcement cases.",
//   },
//   {
//     icon: Building2,
//     title: "Corporate Law",
//     description:
//       "Business formation, compliance, mergers, and corporate governance advisory services.",
//   },
//   {
//     icon: Users,
//     title: "Family Law",
//     description:
//       "Divorce proceedings, child custody, maintenance, and domestic dispute resolution.",
//   },
//   {
//     icon: FileText,
//     title: "Property Disputes",
//     description:
//       "Land acquisition, title disputes, tenant rights, and real estate transaction matters.",
//   },
//   {
//     icon: Shield,
//     title: "Constitutional Law",
//     description:
//       "Fundamental rights protection, PIL, and writ petitions in High Courts.",
//   },
// ];

// const PracticeAreas = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="practice" className="section-padding relative bg-secondary/30">
//       {/* Background Accent */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />

//       <div className="container mx-auto relative">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
//             Legal Expertise
//           </span>
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Practice <span className="text-gold">Areas</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive legal services across multiple domains with a track
//             record of successful outcomes for our clients.
//           </p>
//         </motion.div>

//         {/* Practice Cards Grid */}
//         <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {practiceAreas.map((area, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative"
//             >
//               <div className="glass-panel p-8 h-full card-hover border border-transparent hover:border-gold/30 cursor-pointer">
//                 {/* Icon */}
//                 <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
//                   <area.icon className="w-7 h-7 text-gold" />
//                 </div>

//                 {/* Content */}
//                 <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
//                   {area.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                   {area.description}
//                 </p>

//                 {/* Link */}
//                 <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                   <span>Learn More</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </div>

//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PracticeAreas;

import { motion } from "framer-motion";
import {
  Scale,
  Briefcase,
  Users,
  Home,
  Landmark,
  Globe,
  Gavel,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Criminal Law Services",
    icon: <Scale size={32} />,
  },
  {
    title: "Corporate & Business Law",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Family & Matrimonial Law",
    icon: <Users size={32} />,
  },
  {
    title: "Civil & Property Law",
    icon: <Home size={32} />,
  },
  {
    title: "Banking & Financial Law",
    icon: <Landmark size={32} />,
  },
  {
    title: "NRI Legal Services",
    icon: <Globe size={32} />,
  },
  {
    title: "Arbitration & Mediation",
    icon: <Gavel size={32} />,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="section-padding  bg-[url('/hero1.png')] bg-cover relative">
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-14 relative"
      >
        <p className="text-gold uppercase tracking-widest text-sm mb-3">
          We Handle Various Legal Cases in India
        </p>

        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Comprehensive Legal Services by Experienced Legal Firm in Bengaluru
        </h2>

        <p className="text-gray-400 mt-4 text-base md:text-lg">
          We offer comprehensive legal services, including consultation,
          representation, and guidance, ensuring effective and efficient
          resolution of legal matters.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {practiceAreas.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5,}}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group border border-gold/30 bg-black hover:bg-[#2a1b0a] transition-all duration-300 rounded-xl p-8 cursor-pointer relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg border border-gold text-gold mb-6 relative z-10 group-hover:bg-gold group-hover:text-black transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-semibold relative z-10">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
