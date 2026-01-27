import { motion } from "framer-motion";
import { ChevronDown, Award, Users, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[url('/hero1.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-10 pt-15 md:px-20">
        <div className="max-w-2xl text-white space-y-6">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-primary/20 text-primary text-xs md:text-sm font-medium">
              <Award className="w-4 h-4" />
              Senior Advocate | High Court Practitioner
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight"
          >
            Balagali Associates
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gold-gradient-text text-lg md:text-2xl font-semibold"
          >
            Advocates & Legal Consultants in Bengaluru
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-200 leading-relaxed"
          >
            With over 3+ years of experience in criminal, civil, and corporate
            law, I provide strategic legal counsel that protects your rights and
            achieves results.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="btn-gold text-black px-8 py-3 rounded-md font-semibold  transition cursor-pointer"
          >
            BOOK APPOINTMENT
          </motion.button>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-2 md:gap-8 w-full mx-auto"
          >
            {[
              { icon: Briefcase, value: "50+", label: "Cases Won" },
              { icon: Users, value: "100+", label: "Happy Clients" },
              { icon: Award, value: "20+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="glass-panel p-2 md:p-4 text-center">
                <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                <div className="font-serif text-sm md:text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
