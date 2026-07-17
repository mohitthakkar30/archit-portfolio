import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-footer text-green-footer-text pt-14 px-[6vw]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10 pb-11">
        {/* Branding */}
        <div>
          <div className="font-heading text-[22px] text-green-footer-heading">
            Dr. Archit Adhvaryu
          </div>
          <div className="text-[12px] tracking-[1.6px] uppercase text-green-footer-muted mt-[6px] mb-[14px]">
            M.S. (Ayu.) · ENT &amp; Ophthalmology
          </div>
          <p className="text-[14.5px] leading-[1.65] m-0 max-w-[38ch]">
            Expert Ayurvedic consultant treating ENT and eye conditions through
            authentic, root-cause care.
          </p>
        </div>

        {/* Visit */}
        <div>
          <div className="font-bold text-green-footer-heading mb-3 text-[15px]">
            Visit
          </div>
          <p className="text-[14.5px] leading-[1.7] m-0">
            A/201-203, Gokul Pratham,
            <br />
            Near Tapovan Circle, Chandkheda,
            <br />
            Ahmedabad, Gujarat
          </p>
          <p className="text-[14.5px] mt-[10px] mb-0 text-green-footer-muted">
            Mon – Sat · 10:00 AM – 7:00 PM
          </p>
        </div>

        {/* Contact */}
        <div>
          <div className="font-bold text-green-footer-heading mb-3 text-[15px]">
            Contact
          </div>
          <p className="text-[14.5px] leading-[1.8] m-0">
            Appointments &amp; online consultation
            <br />
            <a
              href="tel:+919904927676"
              className="!text-green-footer-heading font-bold no-underline"
            >
              +91 99049 27676
            </a>
            <br />
            <a
              href="https://wa.me/919904927676"
              className="!text-green-footer-heading no-underline"
            >
              WhatsApp us →
            </a>
          </p>
        </div>

        {/* Pages */}
        <div>
          <div className="font-bold text-green-footer-heading mb-3 text-[15px]">
            Pages
          </div>
          <div className="flex flex-col gap-2 text-[14.5px]">
            <Link
              href="/about"
              className="!text-green-footer-text no-underline hover:!text-white"
            >
              About Dr. Archit
            </Link>
            <Link
              href="/treatments"
              className="!text-green-footer-text no-underline hover:!text-white"
            >
              Conditions Treated
            </Link>
            <Link
              href="/panchakarma"
              className="!text-green-footer-text no-underline hover:!text-white"
            >
              Panchakarma Therapies
            </Link>
            <Link
              href="/contact"
              className="!text-green-footer-text no-underline hover:!text-white"
            >
              Contact &amp; FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-green-footer-border py-[18px] text-center font-heading text-[15px] tracking-[2px] text-green-footer-muted">
        YOUR HEALTH, OUR RESPONSIBILITY
      </div>
    </footer>
  );
}
