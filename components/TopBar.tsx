export default function TopBar() {
  return (
    <div className="bg-green-dark text-topbar-text text-[13.5px] px-[6vw] py-[9px] flex justify-between gap-4 flex-wrap relative">
      <span>Mon – Sat &nbsp;·&nbsp; 10:00 AM – 7:00 PM &nbsp;·&nbsp;  Ahmedabad</span>
      <span className="font-bold tracking-[0.3px] absolute left-1/2 -translate-x-1/2">Jay Swaminarayan</span>
      <a
        href="tel:+919904927676"
        className="!text-topbar-text no-underline font-bold tracking-[0.3px]"
      >
        +91 99049 27676
      </a>
    </div>
  );
}
