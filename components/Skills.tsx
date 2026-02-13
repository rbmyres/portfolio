import Image from "next/image";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Skills
        </h2>

        <div className="mt-12 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 rounded-lg border border-stone-200/60 bg-white px-4 py-2.5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    {skill.iconPath ? (
                      <Image
                        src={skill.iconPath}
                        alt={`${skill.name} icon`}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    ) : (
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-stone-100 text-[11px] font-bold text-stone-400">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                    <span className="text-sm font-medium text-stone-600">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
