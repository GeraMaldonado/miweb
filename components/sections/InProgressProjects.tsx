import { inProgressProjects } from "@/data/inProgress"

function statusTone(progress: number) {
  if (progress >= 80) return "good"
  if (progress >= 50) return "mid"
  return "low"
}

function statusClass(tone: "good" | "mid" | "low") {
  if (tone === "good") return "text-[var(--good)]"
  if (tone === "mid") return "text-[var(--mid)]"
  return "text-[var(--bad)]"
}

export default function InProgressProjects() {
  return (
    <section id="in-progress" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Proyectos en desarrollo</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {inProgressProjects.map((p) => {
            const tone = statusTone(p.progress)
            return (
              <article key={p.slug} className="rounded-xl border border-border bg-muted p-4">
                <div className="mb-2 flex items-start justify-between gap-2.5">
                  <h3 className="m-0 font-black leading-tight">{p.title}</h3>

                  <span
                    className={[
                      "whitespace-nowrap rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 text-[12px] font-black",
                      statusClass(tone),
                    ].join(" ")}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="mb-3 leading-relaxed text-foreground/90">{p.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1.5 text-[12px] font-black text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm opacity-80">Progreso</span>
                    <span className="text-sm font-black">{p.progress}%</span>
                  </div>

                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-white/10"
                    aria-label={`Progreso ${p.progress}%`}
                  >
                    <div className="h-full rounded-full bg-primary" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
