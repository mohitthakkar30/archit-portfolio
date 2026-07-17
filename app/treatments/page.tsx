import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Conditions Treated Ayurvedic ENT & Eye Care | Dr. Archit Adhvaryu",
  description:
    "Ayurvedic treatment for ear, nose, throat, mouth and eye conditions hearing problems, tinnitus, sinus, tonsillitis, dry eyes, glaucoma and more. Dr. Archit Adhvaryu, Ahmedabad.",
};

const earConditions = [
  "Hearing problems",
  "Ringing or whistling sound from the ear (tinnitus)",
  "Pain in the ear",
  "Vertigo or dizziness",
  "Pus or watery ear discharge",
  "Ear perforation",
  "Ear wax",
  "Itching in the ear",
  "Bleeding from the ear",
  "Fullness of the ears",
  "Heaviness of the ears",
  "Other ear diseases",
];

const noseConditions = [
  "Chronic coughing",
  "Nasal blockage",
  "Runny nose",
  "Any allergy-related nasal problem",
  "Nasal polyp",
  "Difficulty in breathing through the nose",
  "Nasal congestion",
  "Chronic nasal bleeding",
  "Absence of smell",
  "Any sinus-related problem",
  "Deviation of nasal septum",
  "Other nasal diseases",
];

const throatConditions = [
  "Pain in the throat",
  "Tonsillitis",
  "Recurrent throat infection",
  "Dry coughing (more at bedtime)",
];

const mouthConditions = [
  "Difficulty in chewing",
  "Difficulty in opening the mouth",
  "Clicking sound while opening the mouth",
  "Recurrent mouth ulcers",
  "Bad smell from the mouth",
  "Dryness of the mouth",
  "Bleeding gums",
  "Whitish patch in the wall of the mouth",
];

const eyeConditions = [
  "Pain in the eye",
  "Difficulty in vision",
  "Watering from the eye",
  "Cataract",
  "Redness of the eye",
  "Glaucoma",
  "Retina-related problems",
  "Blackish discolouration around the eyes",
  "Blackish spot in front of the eye",
  "Eye diseases related to diabetes & hypertension",
  "Dryness of the eyes",
  "Eye straining",
];

export default function TreatmentsPage() {
  return (
    <>
      {/* Header */}
      <section className="px-[6vw] pt-16 pb-12 max-w-[1200px] mx-auto box-border">
        <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-4">
          Conditions We Treat
        </div>
        <h1 className="font-heading text-[30px] md:text-[44px] leading-[1.15] m-0 mb-[18px] font-normal max-w-[24ch]">
          Ayurvedic Treatment for ENT &amp; Eye Conditions
        </h1>
        <p className="text-[17px] leading-[1.7] text-text-secondary m-0 max-w-[66ch]">
          Consultation and complete Ayurvedic treatment for disorders of the
          ear, nose, throat, mouth and eyes. If your condition is not listed
          here, contact us these are the most common concerns we see, not the
          full extent of care.
        </p>
        <div className="flex gap-3 flex-wrap mt-[26px]">
          {["ear", "nose", "throat", "mouth", "eye"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="bg-tag-bg border border-tag-border rounded-full px-[18px] py-2 text-[14px] font-bold !text-tag-text no-underline hover:bg-[#e2d5b6] hover:!text-[#3a3524]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </section>

      {/* Ear */}
      <section
        id="ear"
        className="bg-cream-light border-t border-border px-[6vw] py-14"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[14px] mb-[26px]">
            <div className="w-[14px] h-[14px] rounded-full bg-accent" />
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0">
              Conditions Related to Ear
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {earConditions.map((c) => (
              <div
                key={c}
                className="bg-cream border border-border rounded-lg px-[18px] py-4 text-[15.5px] font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nose */}
      <section
        id="nose"
        className="px-[6vw] py-14"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[14px] mb-[26px]">
            <div className="w-[14px] h-[14px] rounded-full bg-green" />
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0">
              Conditions Related to Nose
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {noseConditions.map((c) => (
              <div
                key={c}
                className="bg-cream-light border border-border rounded-lg px-[18px] py-4 text-[15.5px] font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Throat */}
      <section
        id="throat"
        className="bg-cream-light border-t border-border px-[6vw] py-14"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[14px] mb-[26px]">
            <div className="w-[14px] h-[14px] rounded-full bg-gold" />
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0">
              Conditions Related to Throat
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {throatConditions.map((c) => (
              <div
                key={c}
                className="bg-cream border border-border rounded-lg px-[18px] py-4 text-[15.5px] font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mouth */}
      <section
        id="mouth"
        className="px-[6vw] py-14"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[14px] mb-[26px]">
            <div className="w-[14px] h-[14px] rounded-full bg-brown" />
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0">
              Conditions Related to Mouth
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {mouthConditions.map((c) => (
              <div
                key={c}
                className="bg-cream-light border border-border rounded-lg px-[18px] py-4 text-[15.5px] font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eye */}
      <section
        id="eye"
        className="bg-cream-light border-t border-border px-[6vw] py-14"
        style={{ scrollMarginTop: "110px" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[14px] mb-[26px]">
            <div className="w-[14px] h-[14px] rounded-full bg-teal" />
            <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0">
              Conditions Related to Eye
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {eyeConditions.map((c) => (
              <div
                key={c}
                className="bg-cream border border-border rounded-lg px-[18px] py-4 text-[15.5px] font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[6vw] py-16 text-center border-t border-border">
        <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0 mb-3">
          Facing one of these conditions?
        </h2>
        <p className="text-text-secondary text-[16px] m-0 mb-7 max-w-[56ch] mx-auto">
          Book a consultation at the centre or online. Early Ayurvedic care
          addresses the root cause before conditions become chronic.
        </p>
        <div className="flex gap-[14px] justify-center flex-wrap">
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
      </section>
    </>
  );
}
