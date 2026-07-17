export default function TopBar() {
  return (
    <div className="bg-green-dark text-topbar-text text-[13.5px] px-[6vw] py-[9px] flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
      <span className="hidden sm:inline">Mon – Sat &nbsp;·&nbsp; 10:00 AM – 7:00 PM &nbsp;·&nbsp;  Ahmedabad</span>
      <span className="sm:hidden text-center">Mon – Sat &nbsp;·&nbsp; 10 AM – 7 PM &nbsp;·&nbsp; Ahmedabad</span>
      <span className="font-bold tracking-[0.3px]">Jay Swaminarayan</span>
      <a
        href="tel:+919904927676"
        className="!text-topbar-text no-underline font-bold tracking-[0.3px] sm:ml-auto"
      >
        +91 99049 27676
      </a>
    </div>
  );
}
