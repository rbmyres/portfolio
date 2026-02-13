import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-16 md:py-32">
      <div className="relative h-44 w-44 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-stone-200 md:h-56 md:w-56">
        <Image
          src={personalInfo.profileImagePath}
          alt={`Photo of ${personalInfo.name}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
          {personalInfo.name}
        </h1>
        <p className="mt-3 text-lg text-stone-500 md:text-xl">
          {personalInfo.title}
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-stone-700"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
