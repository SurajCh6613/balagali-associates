import { useEffect, useState } from "react";

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (!accepted) setShow(true);
  }, []);

  const closeModal = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="relative w-full max-w-3xl overflow-y-auto max-h-[90vh] rounded-2xl border border-white/10 bg-[#1a120c]/80 backdrop-blur-xl shadow-2xl">
        {/* top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#c4a45c] to-transparent opacity-80" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a45c]"
          aria-label="Close disclaimer"
          type="button"
        >
          ✕
        </button>

        <div className="p-6 md:p-8">
        

          <h2
            id="disclaimer-title"
            className="text-center text-2xl md:text-3xl font-semibold text-white"
          >
            Disclaimer
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
            <p>
              The content of this website is for informational purposes only and
              does not constitute legal advice. Bailappa & Associates makes no
              representations or warranties, express or implied, regarding the
              accuracy, completeness, or reliability of the information
              contained herein.
            </p>

            <p>
              Accessing or using this website, or communicating through it, does
              not create an attorney–client relationship between the user and
              Bailappa & Associates. Users are advised to seek independent
              professional legal advice before making any legal decisions or
              acting upon any information provided on this website.
            </p>

            <p>
              Bailappa & Associates disclaims all liability for any actions
              taken or not taken based on the content of this website.
              Transmission of information through the internet is not entirely
              secure, and while reasonable measures are taken, the firm does not
              guarantee the security or confidentiality of any communication
              sent through this website.
            </p>

            <p>
              This website is not intended for solicitation or advertisement of
              legal services and is provided solely for informational purposes,
              in accordance with the rules of the Bar Council of India. For
              specific legal queries or advice, please contact our office
              directly.
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={closeModal}
              className="rounded-md bg-[#c4a45c] px-8 py-2.5 text-sm font-semibold text-[#1a120c] shadow-lg shadow-black/30 hover:bg-[#d2b469] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a120c]"
              type="button"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
