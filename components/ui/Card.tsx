"use client"

import { useMemo, useState } from "react"
import type { Project } from "@/data/projects"
import "./Card.css"

export default function ProjectCard({ project }: { project: Project }) {
  const [bg, setBg] = useState(project.image)

  const primaryLink = useMemo(() => {
    if (!project.links?.length) return undefined
    
    return project.links.find((l) => l.label === "Código") ?? project.links[0]
  }, [project.links])

  const openLink = () => {
    if (primaryLink?.href) window.open(primaryLink.href, "_blank", "noreferrer")
  }

  return (
    <div className="pCard">
      <button
        type="button"
        className="pCard__tile"
        style={{ backgroundImage: `url(${bg})` }}
        onMouseEnter={() => project.gif && setBg(project.gif)}
        onMouseLeave={() => setBg(project.image)}
        onClick={openLink}
        aria-label={`Abrir ${project.title}`}
        disabled={!primaryLink}
      >
        <div className="pCard__title">{project.title}</div>
        <div className="pCard__tech">
          {project.technologies.map((icon) => (
            <img key={icon} src={icon} alt="" className="pCard__icon" />
          ))}
        </div>
      </button>

      <div className="pCard__details">
        <div className="pCard__detailsTitle">{project.title}</div>

        <div className="pCard__detailsTech">
          {project.technologies.map((icon) => (
            <img key={icon} src={icon} alt="" className="pCard__icon" />
          ))}
        </div>

        <div className="pCard__detailsText">
          <p className="pCard__summary">{project.summary}</p>
          {project.architecture && (
            <p className="pCard__meta">
              <strong>Arquitectura:</strong> {project.architecture}
            </p>
          )}
          {project.links?.length ? (
            <div className="pCard__links">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

