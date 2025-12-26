import "./AboutMe.css"

export default function AboutMe() {
  return (
    <section id="about" className="u-section about">
      <div className="u-container">
        <header className="u-header">
          <h2>Sobre mí</h2>
        </header>

        <div className="about__grid">
          <div className="u-panel about__text">
            <p>
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

            <div className="about__cta">
              <a className="u-btn u-btn-primary u-focus" href="/Curriculum.pdf" target="_blank" rel="noreferrer">
                Descargar CV
              </a>
              <a className="u-btn u-btn-ghost u-focus" href="#contact">
                Contacto
              </a>
            </div>
          </div>

          <div className="about__cards" aria-label="Resumen de enfoque">
            <div className="u-panel-soft about__card">
              <h3>Optimización de procesos</h3>
              <p>Busco mejorar flujo y rendimiento en el desarrollo y en la solución técnica.</p>
            </div>

            <div className="u-panel-soft about__card">
              <h3>De requerimientos a despliegue</h3>
              <p>Participo en análisis, implementación, pruebas y entrega en entorno real.</p>
            </div>

            <div className="u-panel-soft about__card">
              <h3>Escalabilidad y eficiencia</h3>
              <p>Prioridad en soluciones mantenibles, claras y alineadas a necesidades del negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

