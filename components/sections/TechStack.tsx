import { skillGroups } from "@/data/skills"
import "./TechStack.css"

export default function TechStack() {
  return (
    <section id="skills" className="u-section skills">
      <div className="u-container">
        <header className="w-header">
          <h2>Tecnologías</h2>
        </header>

        <div className="skills__content">
          <img
            className="skills__image"
            src="/1_tRlkqQL5xfgwHTFODp8LHw.webp"
            alt=""
            aria-hidden="true"
          />

          <div className="u-panel skills__panel">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills__group">
                <h3 className="skills__groupTitle">{group.title}</h3>

                <div className="skills__grid">
                  {group.items.map((s) => (
                    <div key={s.name} className="skills__tile" title={s.name}>
                      <img className="skills__icon" src={s.icon} alt={s.name} />
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

