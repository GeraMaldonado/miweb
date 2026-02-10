import content from "@/data/locales/es.json"

export default function AboutMe() {
  const { title, paragraphs, cvButton, contactButton, cards } = content.about

  return (
    <section id="about" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
        </header>

        <div className="grid gap-[18px] lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              {paragraphs.map((text, idx) => (
                <p key={idx} className={idx === 0 ? "text-foreground/90" : ""}>
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground
                           hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
                href="/Curriculum.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {cvButton}
              </a>

              <a
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-bold text-foreground
                           hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
                href="#contact"
              >
                {contactButton}
              </a>
            </div>
          </div>

          <div className="grid gap-3" aria-label="Resumen de enfoque">
            {cards.map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-muted p-5">
                <h3 className="mb-1 text-base font-black">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
