import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Medal, Scale, BookOpen } from "lucide-react";
import Balagali_image from '/lawyer.jpg'

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: GraduationCap,
      title: "LL.B, LL.M",
      desc: "National Law University",
    },
    { icon: Medal, title: "Bar Council", desc: "Member Since 2003" },
    { icon: Scale, title: "High Court", desc: "Practicing Advocate" },
    { icon: BookOpen, title: "Published", desc: "15+ Legal Articles" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-black/70 to-transparent z-10" />
              <img
                src={Balagali_image}
                alt="Advocate Kumar - Senior Legal Counsel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-[-40px] glass-panel p-6 max-w-[200px]"
            >
              <div className="font-serif text-4xl font-bold text-primary mb-1">
                3+
              </div>
              <div className="text-sm text-muted-foreground">
                Years of Legal Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Dedicated to <span className="text-primary">Your Rights</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I am Advocate Bhailappa C. Balagali, a senior practicing advocate with
                over two decades of experience in the Indian judicial system. My
                practice spans across civil, criminal, corporate, and
                constitutional matters.
              </p>
              <p>
                Having represented clients in the High Court and various
                district courts, I bring a unique blend of courtroom expertise
                and strategic legal thinking to every case. My commitment is to
                provide accessible, honest, and effective legal representation.
              </p>
              <p>
                I believe in the power of law to protect the innocent and
                deliver justice. Every client deserves a dedicated advocate who
                will fight for their rights.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
