"use client"

import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import { contactInfo, socialLinks } from "@/data/contact"

type FormState = {
  nombre: string
  email: string
  mensaje: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "success" | "error"
    message?: string
  }>({ type: "idle" })

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) emailjs.init(publicKey)
  }, [])

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    if (!serviceId || !templateId) {
      setStatus({
        type: "error",
        message: "Faltan variables de EmailJS en .env.local (SERVICE_ID / TEMPLATE_ID).",
      })
      return
    }

    setStatus({ type: "sending" })

    const templateParams = {
      subject: "Mensaje de Portfolio",
      name: form.nombre,
      from_name: form.email,
      message: form.mensaje,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams)
      setStatus({ type: "success", message: "Mensaje enviado. Te contacto pronto." })
      setForm({ nombre: "", email: "", mensaje: "" })
    } catch (err) {
      console.error(err)
      setStatus({ type: "error", message: "Hubo un problema al enviar el mensaje." })
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
          <h2 className="text-3xl font-extrabold tracking-tight">Contacto</h2>
        </header>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6">
            {contactInfo.email ? (
              <div className="mb-4 grid gap-1">
                <span className="text-sm font-semibold text-muted-foreground">Email</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={[
                    "w-fit text-sm font-black text-muted-foreground hover:text-primary transition-colors",
                    focusRing,
                    "rounded-md",
                  ].join(" ")}
                >
                  {contactInfo.email}
                </a>
              </div>
            ) : null}

            <div className="mt-2 flex gap-3">
              {socialLinks.map((s) => (
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
                  <img className="h-[44px] w-[44px]" src={s.icon} alt={s.label} />
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
                placeholder="Nombre"
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
                placeholder="Correo"
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
                placeholder="Mensaje"
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
                {status.type === "sending" ? "Enviando..." : "Enviar"}
              </button>

              {status.type !== "idle" && status.message ? (
                <p className={["mt-1 text-sm font-extrabold", statusClass].join(" ")}>{status.message}</p>
              ) : null}
            </div>
          </form>
        </div>

        <footer className="mt-7 text-center text-[13px] opacity-75">
          GeraMaldonado© {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  )
}
