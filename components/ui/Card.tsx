"use client"

import { useMemo, useState } from "react"
import type { Project } from "@/data/projects"

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
    <div className="relative group">
      <button
        type="button"
        disabled={!primaryLink}
        onClick={openLink}
        onMouseEnter={() => project.gif && setBg(project.gif)}
        onMouseLeave={() => setBg(project.image)}
        aria-label={`Abrir ${project.title}`}
        style={{ backgroundImage: `url(${bg})` }}
        className={[
          "h-[220px] w-full overflow-hidden rounded-[18px] border-0 p-0",
          "flex flex-col gap-[14px] bg-[color:var(--input-bg)] bg-cover bg-center",
          primaryLink ? "cursor-pointer" : "cursor-default opacity-95",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]",
        ].join(" ")}
      >
        <div className="w-full bg-black/55 px-3 py-2 text-center font-black text-[color:var(--muted)]">
          {project.title}
        </div>

        <div className="mt-auto flex w-full flex-wrap justify-center gap-2.5 bg-black/55 px-3 py-2">
          {project.technologies.map((icon) => (
            <img
              key={icon}
              src={icon}
              alt=""
              className="h-[34px] w-[34px] rounded-[10px] bg-[color:var(--input-bg)] p-[6px]"
            />
          ))}
        </div>
      </button>

      <div
        className={[
          "pointer-events-none fixed z-20 hidden w-[260px] max-h-[360px] overflow-hidden rounded-2xl",
          "border border-white/10 bg-black/85 p-[14px]",
          "lg:group-hover:block",
          "lg:top-[90px] lg:left-6",
        ].join(" ")}
      >
        <div className="mb-2 font-black text-[color:var(--muted)]">{project.title}</div>

        <div className="mb-2.5 flex flex-wrap gap-2">
          {project.technologies.map((icon) => (
            <img
              key={icon}
              src={icon}
              alt=""
              className="h-[34px] w-[34px] rounded-[10px] bg-[color:var(--input-bg)] p-[6px]"
            />
          ))}
        </div>

        <div className="rounded-xl bg-white/10 p-2.5 text-[color:var(--muted)]">
          <p className="mb-2 leading-relaxed">{project.summary}</p>

          {project.architecture ? (
            <p className="mb-2 opacity-95">
              <strong>Arquitectura:</strong> {project.architecture}
            </p>
          ) : null}

          {project.links?.length ? (
            <div className="flex flex-wrap gap-2.5">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-primary no-underline hover:underline"
                >
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
