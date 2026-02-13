import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm font-semibold text-stone-900">
            {personalInfo.name}
          </p>

          <div className="flex gap-6">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 transition-colors duration-300 hover:text-stone-900"
            >
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-stone-500 transition-colors duration-300 hover:text-stone-900"
            >
              Email
            </a>
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 transition-colors duration-300 hover:text-stone-900"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 transition-colors duration-300 hover:text-stone-900"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
