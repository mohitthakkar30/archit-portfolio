import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-[6vw] py-10 md:py-[72px] md:pb-[80px] grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-[60px] items-center max-w-[1200px] mx-auto box-border">
        <div>
          <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-[18px]">
            Ayurvedic ENT &amp; Eye Specialist · Ahmedabad
          </div>
          <h1 className="font-heading text-[32px] md:text-[52px] leading-[1.12] m-0 mb-[22px] font-normal">
            Your Health,
            <br />
            Our Responsibility.
          </h1>
          <p className="text-[17.5px] leading-[1.65] text-text-secondary m-0 mb-8 max-w-[52ch]">
            Authentic Ayurvedic care for ear, nose, throat and eye
            conditions combining traditional wisdom with modern facilities to
            treat the root cause of disease, not just its symptoms.
          </p>
          <div className="flex gap-[14px] flex-wrap mb-9">
            <a
              href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20book%20an%20appointment."
              className="!bg-accent !text-white no-underline font-bold px-7 py-[14px] rounded-md text-[16px] hover:!bg-accent-dark"
            >
              WhatsApp for Appointment
            </a>
            <a
              href="tel:+919904927676"
              className="border-[1.5px] border-accent !text-accent no-underline font-bold px-7 py-[14px] rounded-md text-[16px] hover:bg-accent-light hover:!text-accent-dark"
            >
              Call 99049 27676
            </a>
          </div>
          <div className="flex gap-7 flex-wrap border-t border-border pt-6">
            <div>
              <div className="font-heading text-[22px] text-green-dark">
                M.S. (Ayu.)
              </div>
              <div className="text-[13.5px] text-text-muted">
                ENT &amp; Ophthalmology
              </div>
            </div>
            <div>
              <div className="font-heading text-[22px] text-green-dark">
                5+ Years
              </div>
              <div className="text-[13.5px] text-text-muted">
                Ayurvedic practice
              </div>
            </div>
            <div>
              <div className="font-heading text-[22px] text-green-dark">
                Online
              </div>
              <div className="text-[13.5px] text-text-muted">
                Consultation available
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="rounded-t-[220px] rounded-b-[14px] p-[14px] pb-0 max-w-[380px] w-full"
            style={{
              background: "linear-gradient(175deg, #ece2cc, #e0d2b4)",
            }}
          >
            <Image
              src="/assets/dr-archit.png"
              alt="Dr. Archit Adhvaryu"
              width={380}
              height={475}
              className="block w-full rounded-t-[206px] rounded-b-[8px] object-cover object-top"
              style={{ aspectRatio: "4/5" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="bg-cream-light border-t border-b border-border px-[6vw] py-[68px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-3">
            Areas of Practice
          </div>
          <h2 className="font-heading text-[26px] md:text-[34px] font-normal m-0 mb-9">
            Specialised Ayurvedic Care
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {/* ENT Care */}
            <div className="bg-cream border border-border rounded-[10px] p-8 px-7 flex flex-col gap-3">
              <div className="w-11 h-11 rounded-full bg-accent" />
              <h3 className="font-heading text-[22px] font-normal mt-2 mb-0">
                ENT Care
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-text-secondary">
                Consultation and complete Ayurvedic treatment for disorders of
                the ear, nose, throat and mouth from hearing problems and
                tinnitus to sinus, tonsillitis and mouth ulcers.
              </p>
              <Link
                href="/treatments"
                className="font-bold text-[15px] no-underline mt-auto"
              >
                Conditions we treat →
              </Link>
            </div>
            {/* Eye Care */}
            <div className="bg-cream border border-border rounded-[10px] p-8 px-7 flex flex-col gap-3">
              <div className="w-11 h-11 rounded-full bg-green" />
              <h3 className="font-heading text-[22px] font-normal mt-2 mb-0">
                Eye Care
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-text-secondary">
                Ayurvedic ophthalmology for vision difficulty, dry or watering
                eyes, cataract, glaucoma, retina-related problems, and eye
                disease linked to diabetes and blood pressure.
              </p>
              <Link
                href="/treatments#eye"
                className="font-bold text-[15px] no-underline mt-auto"
              >
                Eye conditions →
              </Link>
            </div>
            {/* Panchakarma */}
            <div className="bg-cream border border-border rounded-[10px] p-8 px-7 flex flex-col gap-3">
              <div className="w-11 h-11 rounded-full bg-gold" />
              <h3 className="font-heading text-[22px] font-normal mt-2 mb-0">
                Panchakarma
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-text-secondary">
                The five classical detoxification karmas plus specialised
                therapies Shirodhara, Netra Tarpana, Karnapoorana and more —
                performed by trained hands at the centre.
              </p>
              <Link
                href="/panchakarma"
                className="font-bold text-[15px] no-underline mt-auto"
              >
                All 19 therapies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation Banner */}
      <section className="bg-green-dark px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-8 flex-wrap">
          <div>
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal text-green-footer-heading m-0 mb-[10px]">
              Consult from the comfort of your home
            </h2>
            <p className="text-green-banner-text text-[16px] leading-[1.6] m-0 max-w-[60ch]">
              Online consultations are available on the same number share your
              concern on WhatsApp and receive guidance without travelling.
            </p>
          </div>
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20an%20online%20consultation."
            className="!bg-green-footer-heading !text-green-dark no-underline font-bold px-7 py-[14px] rounded-md text-[16px] whitespace-nowrap hover:!bg-white hover:!text-green-dark"
          >
            Start Online Consultation
          </a>
        </div>
      </section>

      {/* Facilities */}
      <section className="px-[6vw] py-[68px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-3">
            At the Centre
          </div>
          <h2 className="font-heading text-[26px] md:text-[34px] font-normal m-0 mb-9">
            Facilities for Your Comfort
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[18px]">
            {[
              {
                title: "Patient Stay Facility",
                desc: "Comfortable in-centre stay for patients undergoing Panchakarma and extended treatment.",
              },
              {
                title: "Mediclaim Facility",
                desc: "AYUSH mediclaim accepted ask us about coverage for your treatment.",
              },
              {
                title: "Trained Masseurs",
                desc: "Every therapy is performed by trained hands under the doctor's supervision.",
              },
              {
                title: "Metro Station Nearby",
                desc: "Vishwakarma College Metro Station is just 500 metres from the centre.",
              },
              {
                title: "Proper Diagnosis",
                desc: "Careful examination and safe, personalised treatment plans for every patient.",
              },
              {
                title: "Nature-friendly Environment",
                desc: "An aesthetic, calm and hygienic space designed for healing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream-light border border-border rounded-[10px] p-6"
              >
                <div className="font-bold text-[16px] mb-[6px] text-green-dark">
                  {item.title}
                </div>
                <div className="text-[14.5px] leading-[1.55] text-text-secondary">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit the Centre */}
      <section className="bg-cream-light border-t border-border px-[6vw] py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 items-center">
          <div>
            <h2 className="font-heading text-[26px] md:text-[32px] font-normal m-0 mb-[14px]">
              Visit the Centre
            </h2>
            <p className="text-[16px] leading-[1.7] text-text-secondary m-0 mb-2">
              A/201-203, Gokul Pratham, Near Tapovan Circle,
              <br />
              Chandkheda, Ahmedabad, Gujarat
            </p>
            <p className="text-[16px] text-green-dark font-bold m-0 mb-6">
              Monday – Saturday · 10:00 AM – 7:00 PM
            </p>
            <Link
              href="/contact"
              className="!bg-accent !text-white no-underline font-bold px-[26px] py-[13px] rounded-md text-[15.5px] inline-block hover:!bg-accent-dark"
            >
              Directions &amp; Contact
            </Link>
          </div>
          {/* <div
            className="border border-border rounded-[10px] overflow-hidden min-h-[240px] flex items-center justify-center"
            style={{
              background:
                "repeating-linear-gradient(45deg, #f2ebdc, #f2ebdc 12px, #ece3d0 12px, #ece3d0 24px)",
            }}
          >
            <span className="font-mono text-[13px] text-text-faint bg-cream-light border border-border rounded-md px-[14px] py-2">
              map Tapovan Circle, Chandkheda
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
}
