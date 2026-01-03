import { skillGroups } from "@/data/skills"

export default function TechStack() {
  return (
    <section id="skills" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Tecnologías</h2>
        </header>

        <div className="flex w-full min-w-[315px] items-center justify-between gap-[18px]">
          <img
            className="hidden lg:block w-[40%] mr-[6%] h-auto rounded-lg [mask-image:linear-gradient(black_80%,transparent)]"
            src="/1_tRlkqQL5xfgwHTFODp8LHw.webp"
            alt=""
            aria-hidden="true"
          />

          <div className="w-full rounded-xl border border-border bg-card p-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="mb-8 last:mb-0">
                <h3 className="mb-3 font-black">{group.title}</h3>

                <div className="flex flex-wrap items-center justify-center gap-5 p-2.5">
                  {group.items.map((s) => (
                    <div
                      key={s.name}
                      title={s.name}
                      className={[
                        "flex h-28 w-28 items-center justify-center",
                        "rounded-[10%] bg-[var(--input-bg)]",
                        "transition [will-change:filter] hover:[filter:drop-shadow(0_0_2em_rgba(130,128,240,0.87))]",
                      ].join(" ")}
                    >
                      <img className="h-auto w-[85px]" src={s.icon} alt={s.name} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
