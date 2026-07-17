import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Panchakarma & Ayurvedic Therapies | Dr. Archit Adhvaryu, Ahmedabad",
  description:
    "Complete Panchakarma at Chandkheda, Ahmedabad Vamana, Virechana, Basti, Nasya, Raktamokshana, Shirodhara, Netra Tarpana and 19+ Ayurvedic therapies under Dr. Archit Adhvaryu.",
};

const fiveKarmas = [
  {
    num: "01",
    name: "Vamana Karma",
    desc: "Therapeutic emesis that clears aggravated Kapha indicated in chronic respiratory and skin conditions.",
  },
  {
    num: "02",
    name: "Virechana Karma",
    desc: "Medicated purgation that eliminates excess Pitta and cleanses the liver and digestive tract.",
  },
  {
    num: "03",
    name: "Basti Karma",
    desc: "Medicated enema therapy the principal treatment for Vata disorders, joint and neurological conditions.",
  },
  {
    num: "04",
    name: "Nasya Karma",
    desc: "Nasal administration of medicated oils especially valuable in ENT, sinus and head-region disorders.",
  },
  {
    num: "05",
    name: "Raktamokshana",
    desc: "Controlled bloodletting (including leech therapy) to purify the blood in skin and inflammatory conditions.",
  },
];

const specialisedTherapies = [
  {
    name: "Shirodhara",
    desc: "A continuous stream of warm medicated oil over the forehead deeply calming for stress, insomnia and headaches.",
  },
  {
    name: "Shirobasti",
    desc: "Retention of warm oil on the crown of the head for neurological and scalp conditions.",
  },
  {
    name: "Netra Tarpana",
    desc: "Nourishing the eyes in a reservoir of medicated ghee for dryness, strain and degenerative eye conditions.",
  },
  {
    name: "Karnapoorana",
    desc: "Filling the ears with warm medicated oil for earache, tinnitus and hearing concerns.",
  },
  {
    name: "Bidalaka",
    desc: "Application of a medicated herbal paste over the closed eyelids for inflammatory eye conditions.",
  },
  {
    name: "Karnadhoopana",
    desc: "Karnadhoopana is the therapeutic fumigation of the ear canal with medicated herbal smoke to treat ear infections, discharge, and pain.",
  },
  {
    name: "Dhoomapana",
    desc: "Dhoomapana is the inhalation of medicated herbal smoke through the mouth or nostrils to treat nasal congestion, sinusitis, and upper respiratory conditions.",
  },
  {
    name: "Kavala & Gandusha",
    desc: "Kavala & Gandusha are oral cleansing therapies involving gargling and retention of medicated oils or decoctions to treat mouth ulcers, gum disorders, and throat conditions.",
  },
];

const supportiveTherapies = [
  { name: "Abhyanga", desc: "Full-body warm oil massage" },
  { name: "Swedana", desc: "Herbal steam therapy" },
  { name: "Shiroabhyanga", desc: "Head & scalp oil massage" },
  { name: "Padabhyanga", desc: "Therapeutic foot massage" },
  { name: "Mukhalepa", desc: "Herbal face pack application" },
];

const additionalProcedures = [
  { name: "Kavala", desc: "Medicated oil gargling" },
  { name: "Gandusha", desc: "Oil retention in the mouth" },
  { name: "Upanaha (Kizhi)", desc: "Warm herbal poultice therapy" },
  { name: "Pichu", desc: "Oil-soaked cotton pad application" },
];

export default function PanchakarmaPage() {
  return (
    <>
      {/* Header */}
      <section className="px-[6vw] pt-16 pb-12 max-w-[1200px] mx-auto box-border">
        <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-4">
          Therapies at the Centre
        </div>
        <h1 className="font-heading text-[30px] md:text-[44px] leading-[1.15] m-0 mb-[18px] font-normal max-w-[22ch]">
          Panchakarma &amp; Ayurvedic Therapies
        </h1>
        <p className="text-[17px] leading-[1.7] text-text-secondary m-0 max-w-[66ch]">
          Panchakarma is Ayurveda&apos;s classical five-fold detoxification
          cleansing accumulated toxins and restoring the body&apos;s natural
          balance. At the centre, the five karmas and a full range of supportive
          therapies are performed by trained masseurs under the doctor&apos;s
          supervision, with a patient stay facility for longer courses.
        </p>
      </section>

      {/* Five Karmas */}
      <section className="bg-cream-light border-t border-border px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0 mb-2">
            The Five Karmas
          </h2>
          <p className="text-[15.5px] text-text-secondary m-0 mb-[30px]">
            The core purification procedures of Panchakarma.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {fiveKarmas.map((karma) => (
              <div
                key={karma.num}
                className="bg-cream border border-border rounded-[10px] p-[26px]"
              >
                <div className="font-heading text-[15px] text-accent mb-2">
                  {karma.num}
                </div>
                <div className="font-bold text-[17px] text-green-dark mb-[6px]">
                  {karma.name}
                </div>
                <div className="text-[14.5px] leading-[1.6] text-text-secondary">
                  {karma.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Therapies */}
      <section className="px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0 mb-2">
            Specialised Therapies
          </h2>
          <p className="text-[15.5px] text-text-secondary m-0 mb-[30px]">
            Focused procedures for the head, eyes and ears the doctor&apos;s
            areas of specialisation.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {specialisedTherapies.map((t) => (
              <div
                key={t.name}
                className="bg-cream-light border border-border rounded-[10px] p-[26px]"
              >
                <div className="font-bold text-[17px] text-green-dark mb-[6px]">
                  {t.name}
                </div>
                <div className="text-[14.5px] leading-[1.6] text-text-secondary">
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supportive Therapies */}
      <section className="bg-cream-light border-t border-border px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0 mb-2">
            Supportive Therapies
          </h2>
          <p className="text-[15.5px] text-text-secondary m-0 mb-[30px]">
            Preparatory and rejuvenating treatments we also perform.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-[14px]">
            {supportiveTherapies.map((t) => (
              <div
                key={t.name}
                className="bg-cream border border-border rounded-[10px] p-5"
              >
                <div className="font-bold text-[16px] text-green-dark mb-1">
                  {t.name}
                </div>
                <div className="text-[14px] leading-[1.55] text-text-secondary">
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Procedures */}
      {/* <section className="px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[24px] md:text-[30px] font-normal m-0 mb-2">
            Additional Ayurveda Procedures
          </h2>
          <p className="text-[15.5px] text-text-secondary m-0 mb-[30px]">
            And many more procedures are performed here ask us about your
            condition.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-[14px]">
            {additionalProcedures.map((t) => (
              <div
                key={t.name}
                className="bg-cream-light border border-border rounded-[10px] p-5"
              >
                <div className="font-bold text-[16px] text-green-dark mb-1">
                  {t.name}
                </div>
                <div className="text-[14px] leading-[1.55] text-text-secondary">
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Banner */}
      <section className="bg-green-dark px-[6vw] py-14">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-8 flex-wrap">
          <div>
            <h2 className="font-heading text-[22px] md:text-[28px] font-normal text-green-footer-heading m-0 mb-[10px]">
              Wondering which therapy is right for you?
            </h2>
            <p className="text-green-banner-text text-[16px] leading-[1.6] m-0 max-w-[60ch]">
              Therapies are always prescribed after diagnosis book a
              consultation and receive a personalised plan. Patient stay facility
              available for longer courses.
            </p>
          </div>
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20know%20more%20about%20Panchakarma."
            className="!bg-green-footer-heading !text-green-dark no-underline font-bold px-7 py-[14px] rounded-md text-[16px] whitespace-nowrap hover:!bg-white hover:!text-green-dark"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
