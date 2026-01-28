import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you provide free initial legal consultation?",
    answer:
      "Yes, Balagali Associates offers a free initial consultation of up to 30 minutes to understand your legal issue and guide you with the best possible legal solution.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle civil litigation, criminal cases, property disputes, family matters, cheque bounce cases, writ petitions, constitutional matters, and High Court appeals.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by filling out the contact form on our website, calling us directly at +91 63630 16716, or sending a WhatsApp message.",
  },
  {
    question: "Do you handle High Court and Trial Court cases?",
    answer:
      "Yes, we regularly handle matters before Trial Courts and the High Court of Karnataka, including appeals, bail matters, and writ petitions.",
  },
  {
    question: "Is client information kept confidential?",
    answer:
      "Absolutely. All client communications and case details are kept strictly confidential in accordance with professional legal ethics and client-attorney privilege.",
  },
  {
    question: "Do you provide online consultation services?",
    answer:
      "Yes, we offer online consultations via phone or video call for clients who are unable to visit our office in person.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#e3e1cd] text-primary section-padding">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <p className=" uppercase tracking-widest text-sm mb-3">
          Frequently Asked Questions
        </p>

        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold">
          Legal Queries Answered
        </h2>

        <p className=" mt-4">
          Find answers to common legal questions. If you need personalized
          assistance, feel free to contact us.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto space-y-4">

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="border border-gold rounded-xl overflow-hidden"
          >

            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left bg-secondary transition cursor-pointer"
            >
              <span className="text-xs md:text-lg font-medium">
                {faq.question}
              </span>

              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gold" />
              </motion.span>
            </button>

            {/* Answer */}
            <motion.div
              initial={false}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#111]"
            >
              <div className="p-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
