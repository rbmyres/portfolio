import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/40 bg-white/80 backdrop-blur-xl">
      <nav className="relative mx-auto max-w-5xl px-6">
        <input
          type="checkbox"
          id="nav-toggle"
          className="peer hidden"
          aria-hidden="true"
        />

        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-[15px] font-semibold tracking-tight text-stone-900"
          >
            {personalInfo.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-stone-500 transition-colors duration-300 hover:text-stone-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <label
            htmlFor="nav-toggle"
            className="relative z-10 cursor-pointer p-1 md:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              className="hamburger-icon h-6 w-6 text-stone-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className="close-icon hidden h-6 w-6 text-stone-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>

        {/* Mobile dropdown menu */}
        <div className="absolute left-0 right-0 top-full z-50 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out peer-checked:grid-rows-[1fr] md:hidden">
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 border-t border-stone-200/40 bg-white px-6 pb-4 shadow-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-stone-500 transition-colors duration-200 hover:bg-stone-50 hover:text-stone-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
