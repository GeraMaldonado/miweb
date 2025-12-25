"use client"

import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import { contactInfo, socialLinks } from "@/data/contact"
import "./Contact.css"

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

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <header className="contact__header">
          <h2 className="contact__title">Contacto</h2>
          <p className="contact__subtitle">
            Si tienes un proyecto en mente o quieres conectar, escríbeme por aquí.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__left">
            {contactInfo.email ? (
              <div className="contact__email">
                <span className="contact__muted">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="contact__emailLink">
                  {contactInfo.email}
                </a>
              </div>
            ) : null}

            <div className="contact__social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  className="contact__socialBtn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <img className="contact__socialIcon" src={s.icon} alt={s.label} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={sendEmail}>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm((p) => ({ ...p, nombre: e.target.value }))}
              placeholder="Nombre"
              required
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="Correo"
              required
            />

            <textarea
              value={form.mensaje}
              onChange={(e) => setForm((p) => ({ ...p, mensaje: e.target.value }))}
              placeholder="Mensaje"
              required
              rows={6}
            />

            <button type="submit" disabled={status.type === "sending"}>
              {status.type === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status.type !== "idle" && status.message ? (
              <p className={`contact__status is-${status.type}`}>{status.message}</p>
            ) : null}
          </form>
        </div>

        <footer className="contact__footer">
          © {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  )
}

