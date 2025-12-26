import { inProgressProjects } from "@/data/inProgress"
import "./InProgressProjects.css"

function statusTone(progress: number) {
  if (progress >= 80) return "good"
  if (progress >= 50) return "mid"
  return "low"
}

export default function InProgressProjects() {
  return (
    <section id="in-progress" className="u-section inprog">
      <div className="u-container">
        <header className="u-header">
          <h2>Proyectos en desarrollo</h2>
        </header>

        <div className="u-grid u-grid-2 inprog__grid">
          {inProgressProjects.map((p) => (
            <article key={p.slug} className="inprog__card">
              <div className="inprog__top">
                <h3 className="inprog__name">{p.title}</h3>
                <span className={`inprog__status is-${statusTone(p.progress)}`}>
                  {p.status}
                </span>
              </div>

              <p className="inprog__desc">{p.description}</p>

              <div className="inprog__tags">
                {p.tags.map((t) => (
                  <span key={t} className="inprog__tag">{t}</span>
                ))}
              </div>

              <div className="inprog__progress">
                <div className="inprog__progressRow">
                  <span className="inprog__muted">Progreso</span>
                  <span className="inprog__pct">{p.progress}%</span>
                </div>

                <div className="inprog__bar" aria-label={`Progreso ${p.progress}%`}>
                  <div className="inprog__barFill" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
