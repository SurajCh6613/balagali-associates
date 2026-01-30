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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Briefcase,
  Users,
  Home,
  Landmark,
  Globe,
  Gavel,
  X,
  CheckCircle,
} from "lucide-react";

const practiceAreasData = [
  {
    title: "Criminal Law Services",
    icon: <Scale size={32} />,
    description: "Expert representation in criminal matters at all levels of judiciary",
    details: [
      "Trial and appellate matters",
      "Bail and anticipatory bail applications",
      "Cheque bounce cases (NI Act – Section 138)",
      "FIR quashing and criminal petitions",
      "Criminal appeals to High Court",
      "Defense in white-collar crimes",
      "Criminal revision petitions",
    ],
    overview: "Our criminal law practice encompasses comprehensive legal representation in all criminal matters. We handle cases from initial investigation stage through trial and appeals, ensuring robust defense of our clients' rights and interests."
  },
  {
    title: "Corporate & Business Law",
    icon: <Briefcase size={32} />,
    description: "Comprehensive corporate and commercial legal solutions",
    details: [
      "Company formation and incorporation",
      "Corporate governance and compliance",
      "Mergers and acquisitions",
      "Joint ventures and partnerships",
      "Contract drafting and negotiation",
      "Intellectual property matters",
      "Employment and labor law",
    ],
    overview: "We provide end-to-end legal solutions for businesses, from startups to established corporations. Our practice covers all aspects of corporate law, ensuring legal compliance and strategic business growth."
  },
  {
    title: "Family & Matrimonial Law",
    icon: <Users size={32} />,
    description: "Compassionate legal support in family and matrimonial matters",
    details: [
      "Divorce and restitution of conjugal rights",
      "Maintenance and alimony proceedings",
      "Child custody and guardianship",
      "Domestic Violence Act cases",
      "Mutual consent divorce",
      "Matrimonial property disputes",
      "Adoption and surrogacy matters",
    ],
    overview: "Our family law practice handles sensitive matrimonial and family disputes with empathy and professionalism. We strive to achieve amicable resolutions while protecting our clients' legal rights and interests."
  },
  {
    title: "Civil & Property Law",
    icon: <Home size={32} />,
    description: "Expert handling of civil litigation and property disputes",
    details: [
      "Property disputes and title matters",
      "Injunctions and declarations",
      "Recovery suits and money claims",
      "Partition suits and family settlements",
      "Specific performance of contracts",
      "Builder-buyer disputes",
      "All trial court and High Court matters",
    ],
    overview: "We handle all aspects of civil litigation with particular expertise in property-related disputes. Our practice extends to all civil courts and High Courts, ensuring comprehensive legal representation."
  },
  {
    title: "Banking & Financial Law",
    icon: <Landmark size={32} />,
    description: "Specialized legal services in banking and financial matters",
    details: [
      "SARFAESI Act proceedings",
      "Loan recovery and restructuring",
      "Debt recovery tribunal matters",
      "Banking fraud cases",
      "Financial regulatory compliance",
      "Insolvency and bankruptcy proceedings",
      "Securities and investment disputes",
    ],
    overview: "Our banking and finance practice provides expert legal assistance in complex financial matters, helping both financial institutions and borrowers navigate the intricate legal landscape."
  },
  {
    title: "NRI Legal Services",
    icon: <Globe size={32} />,
    description: "Dedicated legal support for Non-Resident Indians",
    details: [
      "Property matters in India",
      "NRI matrimonial disputes",
      "Investment and business setup",
      "Inheritance and succession",
      "Power of attorney documentation",
      "Repatriation of funds",
      "Remote case management and updates",
    ],
    overview: "We understand the unique challenges faced by NRIs in managing legal matters in India. Our dedicated NRI legal services provide seamless coordination and effective resolution of all legal issues."
  },
  {
    title: "Arbitration & Mediation",
    icon: <Gavel size={32} />,
    description: "Alternative dispute resolution for efficient conflict resolution",
    details: [
      "Domestic and international arbitration",
      "Mediation and conciliation services",
      "Arbitration agreement drafting",
      "Appointment of arbitrators",
      "Challenge to arbitral awards",
      "Enforcement of arbitral awards",
      "Expert determination proceedings",
    ],
    overview: "Our ADR practice offers efficient, cost-effective alternatives to traditional litigation. We represent clients in arbitration and mediation proceedings, ensuring swift and fair resolution of disputes."
  },
];

export default function PracticeAreas() {
  const [selectedPractice, setSelectedPractice] = useState(null);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
        {practiceAreasData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedPractice(item)}
            className="group border border-gold/30 bg-black hover:bg-[#2a1b0a] transition-all duration-300 rounded-xl p-8 cursor-pointer relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg border border-gold text-gold mb-6 relative z-10 group-hover:bg-gold group-hover:text-black transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-semibold relative z-10 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm relative z-10">
              {item.description}
            </p>

            {/* Click to learn more indicator */}
            <p className="text-gold text-xs mt-4 relative z-10 opacity-0 group-hover:opacity-100 transition">
              Click to learn more →
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPractice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPractice(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-gold/40 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPractice(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gold transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
              >
                <X size={24} />
              </button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-gold/20 to-transparent p-8 pb-6 border-b border-gold/30">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl border-2 border-gold text-gold bg-gold/10 flex-shrink-0">
                    {selectedPractice.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-white text-3xl font-bold mb-2">
                      {selectedPractice.title}
                    </h2>
                    <p className="text-gray-300 text-base">
                      {selectedPractice.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-gold text-lg font-semibold mb-3 uppercase tracking-wide">
                    Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedPractice.overview}
                  </p>
                </div>

                {/* Services List */}
                <div>
                  <h3 className="text-gold text-lg font-semibold mb-4 uppercase tracking-wide">
                    Our Services Include
                  </h3>
                  <div className="grid gap-3">
                    {selectedPractice.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-gold/20"
                      >
                        <CheckCircle
                          size={20}
                          className="text-gold flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-200">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 rounded-xl p-6 mt-8">
                  <p className="text-white text-lg mb-3">
                    Need legal assistance in {selectedPractice.title.toLowerCase()}?
                  </p>
                  <p className="text-gray-300 mb-4">
                    Our experienced legal team is ready to help you navigate your legal matters with expertise and dedication.
                  </p>
                 <a 
                    href="tel:+916363016716"
                    className="inline-block bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                  >
                    Contact Us for Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
