"use client";

import { useState } from "react";

const faqData = [
  {
    q: "Do you offer online consultations?",
    a: "Yes. Online consultations are available on the same number 99049 27676. Message us on WhatsApp with your concern and we will arrange a convenient time.",
  },
  {
    q: "Is mediclaim accepted?",
    a: "Yes, AYUSH mediclaim facility is available at the centre. Bring your policy details on your first visit and we will guide you through the process.",
  },
  {
    q: "What are the consultation timings?",
    a: "The centre is open Monday to Saturday, 10:00 AM to 8:00 PM. It is best to call or WhatsApp before visiting so we can schedule your consultation.",
  },
  {
    q: "Do you treat both ENT and eye conditions?",
    a: "Yes. Dr. Archit holds an M.S. (Ayu.) in ENT ear, nose and throat disorders and eye diseases (Ophthalmology), and treats conditions across both specialities.",
  },
  {
    q: "How long does a Panchakarma course take?",
    a: "It varies with the condition and the therapy prescribed from single sessions to courses over several days. A personalised plan is made after diagnosis, and a patient stay facility is available for longer courses.",
  },
  {
    q: "Is there parking or public transport nearby?",
    a: "Vishwakarma College Metro Station is 500 metres from the centre, which is located at Gokul Pratham, near Tapovan Circle, Chandkheda.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("Ear condition");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const submitForm = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number.");
      return;
    }
    const text = `Hello Dr. Archit,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AConcern: ${encodeURIComponent(concern)}%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919904927676?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Header */}
      <section className="px-[6vw] pt-16 pb-10 max-w-[1200px] mx-auto box-border">
        <div className="text-[13px] tracking-[2.5px] uppercase text-green font-bold mb-4">
          Contact
        </div>
        <h1 className="font-heading text-[30px] md:text-[44px] leading-[1.15] m-0 mb-[18px] font-normal">
          Book an Appointment
        </h1>
        <p className="text-[17px] leading-[1.7] text-text-secondary m-0 max-w-[64ch]">
          For appointments and online consultation, call or WhatsApp or send
          your details with the form below and we will get back to you.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-[6vw] pb-6 max-w-[1200px] mx-auto box-border">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          <a
            href="tel:+919904927676"
            className="bg-cream-light border border-border rounded-[10px] p-6 no-underline block hover:bg-[#f6efdf]"
          >
            <div className="text-[12px] tracking-[1.8px] uppercase text-green font-bold mb-2">
              Call
            </div>
            <div className="font-heading text-[22px] !text-text-primary">
              +91 99049 27676
            </div>
            <div className="text-[14px] text-text-secondary mt-[6px]">
              Appointments &amp; enquiries
            </div>
          </a>
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20book%20an%20appointment."
            className="bg-cream-light border border-border rounded-[10px] p-6 no-underline block hover:bg-[#f6efdf]"
          >
            <div className="text-[12px] tracking-[1.8px] uppercase text-green font-bold mb-2">
              WhatsApp
            </div>
            <div className="font-heading text-[22px] !text-text-primary">
              Message us →
            </div>
            <div className="text-[14px] text-text-secondary mt-[6px]">
              Online consultation available
            </div>
          </a>
          <div className="bg-cream-light border border-border rounded-[10px] p-6">
            <div className="text-[12px] tracking-[1.8px] uppercase text-green font-bold mb-2">
              Visit
            </div>
            <div className="text-[15px] leading-[1.6] text-text-primary">
              A/201-203, Gokul Pratham,
              <br />
              Near Tapovan Circle, Chandkheda,
              <br />
              Ahmedabad, Gujarat
            </div>
          </div>
          <div className="bg-cream-light border border-border rounded-[10px] p-6">
            <div className="text-[12px] tracking-[1.8px] uppercase text-green font-bold mb-2">
              Timings
            </div>
            <div className="font-heading text-[22px] text-text-primary">
              Mon – Sat
            </div>
            <div className="text-[14px] text-text-secondary mt-[6px]">
              10:00 AM – 7:00 PM
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="px-[6vw] pt-12 pb-16 max-w-[1200px] mx-auto box-border grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
        {/* Form */}
        <div className="bg-cream-light border border-border rounded-xl p-9">
          <h2 className="font-heading text-[26px] font-normal m-0 mb-2">
            Send Your Details
          </h2>
          <p className="text-[14.5px] text-text-secondary m-0 mb-[26px]">
            Submitting opens WhatsApp with your message ready to send.
          </p>
          <div className="flex flex-col gap-[18px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <label className="flex flex-col gap-[6px] text-[14px] font-bold text-green-dark">
                Full name
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  placeholder="Your name"
                  className="border border-tag-border rounded-md px-[14px] py-3 text-[15px] bg-white text-text-primary outline-accent font-body"
                />
              </label>
              <label className="flex flex-col gap-[6px] text-[14px] font-bold text-green-dark">
                Phone number
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setError("");
                  }}
                  placeholder="Your mobile number"
                  className="border border-tag-border rounded-md px-[14px] py-3 text-[15px] bg-white text-text-primary outline-accent font-body"
                />
              </label>
            </div>
            <label className="flex flex-col gap-[6px] text-[14px] font-bold text-green-dark">
              Concern
              <select
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="border border-tag-border rounded-md px-[14px] py-3 text-[15px] bg-white text-text-primary outline-accent font-body"
              >
                <option>Ear condition</option>
                <option>Nose condition</option>
                <option>Throat / mouth condition</option>
                <option>Eye condition</option>
                <option>Panchakarma therapy</option>
                <option>Online consultation</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex flex-col gap-[6px] text-[14px] font-bold text-green-dark">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your concern…"
                rows={4}
                className="border border-tag-border rounded-md px-[14px] py-3 text-[15px] bg-white text-text-primary outline-accent resize-y font-body"
              />
            </label>
            <button
              onClick={submitForm}
              className="bg-accent text-white border-none font-bold px-7 py-[14px] rounded-md text-[16px] cursor-pointer font-body hover:bg-accent-dark"
            >
              Send via WhatsApp
            </button>
            {error && (
              <div className="text-accent-dark text-[14px] font-bold">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-[18px]">
          {/* <div
            className="border border-border rounded-xl overflow-hidden min-h-[220px] flex items-center justify-center"
            style={{
              background:
                "repeating-linear-gradient(45deg, #f2ebdc, #f2ebdc 12px, #ece3d0 12px, #ece3d0 24px)",
            }}
          >
            <span className="font-mono text-[13px] text-text-faint bg-cream-light border border-border rounded-md px-[14px] py-2">
              map Tapovan Circle, Chandkheda
            </span>
          </div> */}
          <div className="bg-green-dark rounded-xl p-[26px]">
            <div className="font-bold text-green-footer-heading text-[16px] mb-2">
              Reaching by metro?
            </div>
            <p className="text-green-banner-text text-[14.5px] leading-[1.65] m-0">
              Vishwakarma College Metro Station is just 500 metres from the
              centre a short walk to Gokul Pratham, near Tapovan Circle.
            </p>
          </div>
          <div className="bg-cream-light border border-border rounded-xl p-[26px]">
            <div className="font-bold text-green-dark text-[16px] mb-2">
              Mediclaim
            </div>
            <p className="text-text-secondary text-[14.5px] leading-[1.65] m-0">
              AYUSH mediclaim facility is available carry your policy details
              on your first visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-light border-t border-border px-[6vw] py-16">
        <div className="max-w-[860px] mx-auto">
          <h2 className="font-heading text-[26px] md:text-[32px] font-normal m-0 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-cream border border-border rounded-[10px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full text-left bg-transparent border-none px-[22px] py-[18px] text-[16.5px] font-bold text-text-primary cursor-pointer font-body flex justify-between gap-4 items-center"
                >
                  <span>{faq.q}</span>
                  <span className="text-accent text-[20px] shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-[22px] pb-5 text-[15.5px] leading-[1.65] text-text-secondary">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
