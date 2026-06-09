"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Check } from "lucide-react"

const roleOptions = ["Servicetechniker", "Polier", "Bauleiter"]

type FormState = {
  vorname: string
  nachname: string
  email: string
  telefon: string
  company: string
  roles: string[]
  mitarbeiter: string
}

const initialState: FormState = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  company: "",
  roles: [],
  mitarbeiter: "",
}

export function ContactForm({ canOpen = true }: { canOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Close the form again when no problem is selected anymore
  useEffect(() => {
    if (!canOpen) {
      setIsOpen(false)
    }
  }, [canOpen])

  const updateField = (field: keyof FormState, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const toggleRole = (role: string) => {
    setForm((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.vorname.trim()) newErrors.vorname = "Bitte geben Sie Ihren Vornamen an."
    if (!form.nachname.trim()) newErrors.nachname = "Bitte geben Sie Ihren Nachnamen an."
    if (!form.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse an."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an."
    }
    if (!form.telefon.trim()) newErrors.telefon = "Bitte geben Sie Ihre Telefonnummer an."
    if (!form.company.trim()) newErrors.company = "Bitte geben Sie Ihren Firmennamen an."
    if (!form.mitarbeiter.trim()) {
      newErrors.mitarbeiter = "Bitte geben Sie die Anzahl der Mitarbeiter an."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.vorname,
          lastName: form.nachname,
          email: form.email,
          phone: form.telefon,
          company: form.company,
          roles: form.roles,
          headcount: form.mitarbeiter,
        }),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setIsSuccess(true)
      setForm(initialState)
    } catch {
      setSubmitError(
        "Beim Senden ist leider ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
      errors[field] ? "border-destructive" : "border-border focus:border-accent"
    }`

  return (
    <div className="mt-12 flex flex-col items-center">
      {/* Primary CTA button */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => canOpen && setIsOpen(true)}
            disabled={!canOpen}
            className="px-8 py-4 bg-foreground text-background rounded-full font-medium transition-colors shadow-lg shadow-foreground/10 enabled:hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Jetzt unverbindlich anfragen
          </button>
        </motion.div>
      )}

      {/* Inline form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl overflow-hidden"
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Vielen Dank!
                  </p>
                  <p className="text-muted-foreground">
                    Wir melden uns in Kürze bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-2xl font-semibold text-foreground mb-8">
                    Kontaktanfrage
                  </h3>

                  {/* Name fields */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="vorname" className="block text-sm font-medium text-foreground mb-2">
                        Vorname
                      </label>
                      <input
                        id="vorname"
                        name="firstName"
                        type="text"
                        value={form.vorname}
                        onChange={(e) => updateField("vorname", e.target.value)}
                        className={inputClasses("vorname")}
                        placeholder="Max"
                      />
                      {errors.vorname && (
                        <p className="text-sm text-destructive mt-1.5">{errors.vorname}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="nachname" className="block text-sm font-medium text-foreground mb-2">
                        Nachname
                      </label>
                      <input
                        id="nachname"
                        name="lastName"
                        type="text"
                        value={form.nachname}
                        onChange={(e) => updateField("nachname", e.target.value)}
                        className={inputClasses("nachname")}
                        placeholder="Mustermann"
                      />
                      {errors.nachname && (
                        <p className="text-sm text-destructive mt-1.5">{errors.nachname}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & phone */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail-Adresse
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={inputClasses("email")}
                        placeholder="max@firma.de"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1.5">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-foreground mb-2">
                        Telefonnummer
                      </label>
                      <input
                        id="telefon"
                        name="phone"
                        type="tel"
                        value={form.telefon}
                        onChange={(e) => updateField("telefon", e.target.value)}
                        className={inputClasses("telefon")}
                        placeholder="+49 123 456789"
                      />
                      {errors.telefon && (
                        <p className="text-sm text-destructive mt-1.5">{errors.telefon}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Firmenname
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className={inputClasses("company")}
                      placeholder="Musterfirma GmbH"
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive mt-1.5">{errors.company}</p>
                    )}
                  </div>

                  {/* Roles checkbox group */}
                  <div className="mb-6">
                    <span className="block text-sm font-medium text-foreground mb-3">
                      Welche Rollen möchten Sie besetzen?
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {roleOptions.map((role) => {
                        const selected = form.roles.includes(role)
                        return (
                          <button
                            key={role}
                            type="button"
                            onClick={() => toggleRole(role)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                              selected
                                ? "bg-accent/5 border-accent text-foreground"
                                : "bg-background border-border text-muted-foreground hover:border-accent/50"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                                selected ? "bg-accent" : "border-2 border-muted-foreground/30"
                              }`}
                            >
                              {selected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                            </span>
                            {role}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Number of employees */}
                  <div className="mb-8">
                    <label htmlFor="mitarbeiter" className="block text-sm font-medium text-foreground mb-2">
                      Wie viele Mitarbeiter suchen Sie?
                    </label>
                    <input
                      id="mitarbeiter"
                      name="headcount"
                      type="number"
                      min={1}
                      value={form.mitarbeiter}
                      onChange={(e) => updateField("mitarbeiter", e.target.value)}
                      className={inputClasses("mitarbeiter")}
                      placeholder="Anzahl der Mitarbeiter"
                    />
                    {errors.mitarbeiter && (
                      <p className="text-sm text-destructive mt-1.5">{errors.mitarbeiter}</p>
                    )}
                  </div>

                  {/* Submit */}
                  {submitError && (
                    <p className="text-sm text-destructive mb-4 text-center">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Wird gesendet …" : "Gespräch anfragen"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
