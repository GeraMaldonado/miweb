import content from "@/data/locales/es.json"
import { InProgressProject, InProgressStatus } from "@/data/inProgress"

function getStatusColor(status: string) {
  const map: Record<string, string> = {
    "Beta": "text-[var(--good)]",
    "En progreso": "text-[var(--good)]",
    "En desarrollo": "text-[var(--mid)]",
    "Planificación": "text-[var(--bad)]",
  }
  return map[status] || "text-muted-foreground"
}

export default function InProgressProjects() {
  const { title, progressLabel, items } = content.inProgress
  const projects = items as unknown as InProgressProject[]

  return (
    <section id="in-progress" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => {
            return (
              <article key={p.slug} className="rounded-xl border border-border bg-muted p-4">
                <div className="mb-2 flex items-start justify-between gap-2.5">
                  <h3 className="m-0 font-black leading-tight">{p.title}</h3>

                  <span
                    className={[
                      "whitespace-nowrap rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 text-[12px] font-black",
                      getStatusColor(p.status),
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
                    <span className="text-sm opacity-80">{progressLabel}</span>
                    <span className="text-sm font-black">{p.progress}%</span>
                  </div>

                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-white/10"
                    aria-label={`${progressLabel} ${p.progress}%`}
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
