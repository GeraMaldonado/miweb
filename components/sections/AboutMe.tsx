export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Sobre mí</h2>
        </header>

        <div className="grid gap-[18px] lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              <p className="text-foreground/90">
                Estudiante de Ingeniería en Software con especialización en desarrollo web. Experiencia en TypeScript,
                Node.js y SQL en backend, con conocimientos en Vue.js.
              </p>
              <p>
                Enfoque en optimización de procesos, aprendizaje continuo y resolución de problemas. Habilidad para
                trabajar en equipo y participar en proyectos desde la toma de requerimientos hasta el despliegue.
              </p>
              <p>
                Compromiso con la entrega de soluciones escalables y eficientes, alineadas con las necesidades del negocio.
                Buscando una oportunidad para aplicar conocimientos en desarrollo backend y frontend, contribuyendo con
                innovación y crecimiento en entornos dinámicos.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground
                           hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
                href="/Curriculum.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
              </a>

              <a
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-bold text-foreground
                           hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
                href="#contact"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="grid gap-3" aria-label="Resumen de enfoque">
            <div className="rounded-xl border border-border bg-muted p-5">
              <h3 className="mb-1 text-base font-black">Optimización de procesos</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Busco mejorar flujo y rendimiento en el desarrollo y en la solución técnica.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted p-5">
              <h3 className="mb-1 text-base font-black">De requerimientos a despliegue</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Participo en análisis, implementación, pruebas y entrega en entorno real.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted p-5">
              <h3 className="mb-1 text-base font-black">Escalabilidad y eficiencia</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prioridad en soluciones mantenibles, claras y alineadas a necesidades del negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
