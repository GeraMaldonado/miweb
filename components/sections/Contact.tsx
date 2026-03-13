"use client"

import { useState } from "react"
import content from "@/data/locales/es.json"

type FormState = {
  nombre: string
  email: string
  mensaje: string
}

export default function Contact() {
  const { title, info, form: formLabels, social, footer } = content.contact

  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "success" | "error"
    message?: string
  }>({ type: "idle" })

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    const apiUrl = "http://localhost:3999/send"
    const apiKey = "super_secret_mail"

    setStatus({ type: "sending" })

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { "x-api-key": apiKey } : {}),
        },
        body: JSON.stringify({
          to: info.email,
          subject: "Mensaje de Portfolio",
          text: `
Nombre: ${form.nombre}
Email: ${form.email}

Mensaje:
${form.mensaje}
          `.trim(),
          source: "Portfolio",
        }),
      })

      if (!res.ok) {
        throw new Error(`Error ${res.status}`)
      }

      setStatus({ type: "success", message: formLabels.successMessage })
      setForm({ nombre: "", email: "", mensaje: "" })
    } catch (err) {
      console.error(err)
      setStatus({ type: "error", message: formLabels.errorMessage })
    }
  }

  const statusClass =
    status.type === "success"
      ? "text-[var(--good)]"
      : status.type === "error"
        ? "text-[var(--bad)]"
        : status.type === "sending"
          ? "text-[var(--mid)]"
          : ""

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"

  return (
    <section id="contact" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
        </header>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6">
            {info.email ? (
              <div className="mb-4 grid gap-1">
                <span className="text-sm font-semibold text-muted-foreground">Email</span>
                <a
                  href={`mailto:${info.email}`}
                  className={[
                    "w-fit text-sm font-black text-muted-foreground hover:text-primary transition-colors",
                    focusRing,
                    "rounded-md",
                  ].join(" ")}
                >
                  {info.email}
                </a>
              </div>
            ) : null}

            <div className="mt-2 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className={[
                    "grid h-[60px] w-[60px] place-items-center rounded-full bg-white",
                    focusRing,
                    "transition-transform hover:scale-[1.03]",
                  ].join(" ")}
                >
                  <svg className="h-[44px] w-[44px]">
                    <use href={`/sprites.svg#${s.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={sendEmail} className="rounded-xl border border-border bg-muted p-6">
            <div className="grid gap-2">
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => setForm((p) => ({ ...p, nombre: e.target.value }))}
                placeholder={formLabels.namePlaceholder}
                required
                className={[
                  "w-full rounded-lg bg-[var(--input-bg)] px-3 py-2 text-base text-[var(--input-fg)]",
                  "outline-none",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[2px]",
                ].join(" ")}
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder={formLabels.emailPlaceholder}
                required
                className={[
                  "w-full rounded-lg bg-[var(--input-bg)] px-3 py-2 text-base text-[var(--input-fg)]",
                  "outline-none",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[2px]",
                ].join(" ")}
              />

              <textarea
                value={form.mensaje}
                onChange={(e) => setForm((p) => ({ ...p, mensaje: e.target.value }))}
                placeholder={formLabels.messagePlaceholder}
                required
                rows={6}
                className={[
                  "w-full resize-none rounded-lg bg-[var(--input-bg)] px-3 py-2 text-base text-[var(--input-fg)]",
                  "outline-none",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[2px]",
                ].join(" ")}
              />

              <button
                type="submit"
                disabled={status.type === "sending"}
                className={[
                  "rounded-lg bg-primary px-3 py-2 font-black text-[color:var(--input-fg)]",
                  "hover:opacity-90 transition-opacity",
                  "disabled:cursor-default disabled:opacity-70",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[2px]",
                ].join(" ")}
              >
                {status.type === "sending" ? formLabels.sendingButton : formLabels.submitButton}
              </button>

              {status.type !== "idle" && status.message ? (
                <p className={["mt-1 text-sm font-extrabold", statusClass].join(" ")}>
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <footer className="mt-7 text-center text-[13px] opacity-75">
          {footer.replace("{year}", new Date().getFullYear().toString())}
        </footer>
      </div>
    </section>
  )
}
