import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Archit Adhvaryu M.S. (Ayu.) ENT & Ophthalmology",
  description:
    "About Dr. Archit Adhvaryu Ayurvedic ENT and eye specialist in Chandkheda, Ahmedabad with 5+ years of experience treating patients with authentic Ayurveda.",
};

export default function AboutPage() {
  return (
    <>
      {/* Doctor Bio */}
      <section className="px-[6vw] py-[72px] pb-16 max-w-[1200px] mx-auto box-border grid grid-cols-[0.8fr_1.2fr] gap-[60px] items-start">
        <div
          className="rounded-t-[220px] rounded-b-[14px] p-[14px] pb-0 max-w-[360px]"
          style={{
            background: "linear-gradient(175deg, #ece2cc, #e0d2b4)",
          }}
        >
          <Image
            src="/assets/dr-archit.png"
            alt="Dr. Archit Adhvaryu"
            width={360}
            height={450}
            className="block w-full rounded-t-[206px] rounded-b-[8px] object-cover object-top"
            style={{ aspectRatio: "4/5" }}
            priority
          />
        </div>
        <div>
          <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-4">
            About the Doctor
          </div>
          <h1 className="font-heading text-[42px] leading-[1.15] m-0 mb-5 font-normal">
            Dr. Archit Adhvaryu
          </h1>
          <div className="flex gap-[10px] flex-wrap mb-[26px]">
            <span className="bg-tag-bg border border-tag-border rounded-full px-4 py-[7px] text-[13.5px] font-bold text-tag-text">
              M.S. (Ayu.) ENT
            </span>
            <span className="bg-tag-bg border border-tag-border rounded-full px-4 py-[7px] text-[13.5px] font-bold text-tag-text">
              Ophthalmology
            </span>
            <span className="bg-tag-bg border border-tag-border rounded-full px-4 py-[7px] text-[13.5px] font-bold text-tag-text">
              Expert Ayurvedic Consultant
            </span>
          </div>
          <p className="text-[17px] leading-[1.7] text-text-secondary m-0 mb-[18px]">
            Dr. Archit Adhvaryu is an Ayurvedic specialist holding an M.S.
            (Ayu.) in ENT the treatment of ear, nose and throat disorders
            and eye diseases (Ophthalmology). With more than five years of
            experience treating patients with Ayurveda, he practises at the
            centre in Chandkheda, Ahmedabad.
          </p>
          <p className="text-[17px] leading-[1.7] text-text-secondary m-0 mb-[18px]">
            His approach combines traditional Ayurvedic wisdom with modern
            facilities to treat the root cause of disease and restore the body,
            mind and spirit not merely suppress symptoms. Every patient
            receives a careful diagnosis and a personalised treatment plan,
            whether at the centre or through online consultation.
          </p>
          <p className="text-[17px] leading-[1.7] text-text-secondary m-0">
            Alongside ENT and eye care, he leads a full programme of Panchakarma
            and supportive Ayurvedic therapies, performed by trained masseurs
            under his supervision.
          </p>
        </div>
      </section>

      {/* Why Patients Choose Us */}
      <section className="bg-cream-light border-t border-b border-border px-[6vw] py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[32px] font-normal m-0 mb-8">
            Why Patients Choose Me
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {[
              {
                title: "Experienced Ayurvedic specialist",
                desc: "Postgraduate specialisation in ENT and eye diseases with 5+ years in practice.",
              },
              {
                title: "Personalised treatment plans",
                desc: "No two patients are alike diagnosis and therapy are tailored to your constitution.",
              },
              {
                title: "Advanced Ayurvedic therapies",
                desc: "Complete Panchakarma plus specialised ENT and eye procedures like Netra Tarpana.",
              },
              {
                title: "Modern facilities, hygienic environment",
                desc: "A clean, calm, nature-friendly space with patient stay facility and AYUSH mediclaim.",
              },
              {
                title: "Compassionate, patient-centered care",
                desc: "Care guided by the belief: we treat, God cures.",
              },
              {
                title: "Online consultation",
                desc: "Secure consultations from home on the same number 99049 27676.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-[14px] items-start bg-cream border border-border rounded-[10px] p-[22px]"
              >
                <div className="w-[10px] h-[10px] rounded-full bg-green mt-[6px] shrink-0" />
                <div>
                  <div className="font-bold text-[16px] text-green-dark">
                    {item.title}
                  </div>
                  <div className="text-[14.5px] text-text-secondary leading-[1.55] mt-1">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="px-[6vw] py-16 text-center">
        <h2 className="font-heading text-[30px] font-normal m-0 mb-3 max-w-[26ch] mx-auto">
          &ldquo;Let Ayurveda be your partner in healing naturally,
          holistically and permanently.&rdquo;
        </h2>
        <p className="text-text-secondary text-[16px] m-0 mb-7">
          Take the first step today towards a healthier, happier you.
        </p>
        <div className="flex gap-[14px] justify-center flex-wrap">
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20book%20an%20appointment."
            className="!bg-accent !text-white no-underline font-bold px-7 py-[14px] rounded-md text-[16px] hover:!bg-accent-dark"
          >
            WhatsApp for Appointment
          </a>
          <Link
            href="/contact"
            className="border-[1.5px] border-accent !text-accent no-underline font-bold px-7 py-[14px] rounded-md text-[16px] hover:bg-accent-light hover:!text-accent-dark"
          >
            Contact Details
          </Link>
        </div>
      </section>
    </>
  );
}
