import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>
          <span className="text-xl font-bold text-foreground tracking-tight">
            Fullhouse
          </span>
          <div className="w-16" />
        </nav>
      </header>

      {/* Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-16">
            <p className="text-xs text-accent uppercase tracking-wider mb-4">
              Rechtliches
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Datenschutz&shy;erklärung
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 DSGVO.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            
            {/* 1. Verantwortlicher */}
            <Section number="01" title="Verantwortlicher">
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="mt-4 p-6 bg-card/50 rounded-lg border border-border/30">
                <p className="text-foreground font-medium">Fullhouse UG (haftungsbeschränkt)</p>
                <p className="mt-2">Kolonnenstraße 8</p>
                <p>10827 Berlin</p>
                <p className="mt-4">
                  E-Mail:{" "}
                  <a href="mailto:sebastian@full-house.io" className="text-accent hover:underline">
                    sebastian@full-house.io
                  </a>
                </p>
                <p className="mt-2">Vertreten durch: Jaro Müller & Sebastian Hoppen</p>
              </div>
            </Section>

            {/* 2. Hosting */}
            <Section number="02" title="Hosting">
              <p>
                Diese Website wird bei <span className="text-foreground">Vercel Inc.</span> gehostet. 
                Beim Besuch unserer Website werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert, 
                die Ihr Browser automatisch übermittelt.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>IP-Adresse des anfragenden Rechners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Datum und Uhrzeit der Anfrage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Inhalt der Anforderung (konkrete Seite)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Browsertyp und Browserversion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Verwendetes Betriebssystem</span>
                </li>
              </ul>
              <p className="mt-4">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen 
                an der technisch fehlerfreien Darstellung und Optimierung unserer Website.
              </p>
            </Section>

            {/* 3. Cookies */}
            <Section number="03" title="Cookies">
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden 
                und bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern.
              </p>
              <p className="mt-4">
                Wir unterscheiden zwischen <span className="text-foreground">technisch notwendigen Cookies</span>, 
                die für die Grundfunktionen der Website erforderlich sind, und{" "}
                <span className="text-foreground">Analyse-Cookies</span>, die uns helfen, die Nutzung unserer Website zu verstehen.
              </p>
              <p className="mt-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln 
                über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen.
              </p>
            </Section>

            {/* 4. Website-Tracking */}
            <Section number="04" title="Website-Tracking & Analyse">
              <p>
                Zur Analyse des Nutzerverhaltens setzen wir Webanalyse-Dienste ein. Diese erheben Daten darüber, 
                wie Besucher unsere Website nutzen, welche Seiten aufgerufen werden und wie lange Nutzer verweilen.
              </p>
              <p className="mt-4">
                Die erhobenen Daten werden zur Verbesserung unserer Website und unseres Angebots verwendet. 
                Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className="mt-4">
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, 
                indem Sie die entsprechenden Cookies in Ihren Browsereinstellungen löschen.
              </p>
            </Section>

            {/* 5. Kontaktformular */}
            <Section number="05" title="Kontaktformular">
              <p>
                Wenn Sie uns über unser Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten 
                (z.B. Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet.
              </p>
              <p className="mt-4">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) 
                bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
              <p className="mt-4">
                Ihre Daten werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen 
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            {/* 6. Terminbuchung */}
            <Section number="06" title="Terminbuchung via Calendly">
              <p>
                Für die Terminbuchung nutzen wir den Dienst <span className="text-foreground">Calendly</span> 
                (Calendly LLC, 3423 Piedmont Rd NE, Atlanta, GA 30305, USA).
              </p>
              <p className="mt-4">
                Bei der Buchung eines Termins werden die von Ihnen eingegebenen Daten 
                (Name, E-Mail-Adresse, ggf. Telefonnummer, Terminwunsch) an Calendly übermittelt und dort verarbeitet.
              </p>
              <p className="mt-4">
                Die Datenübertragung in die USA erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission. 
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Ihre Einwilligung.
              </p>
              <p className="mt-4">
                Weitere Informationen finden Sie in der{" "}
                <a 
                  href="https://calendly.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >
                  Datenschutzerklärung von Calendly
                </a>.
              </p>
            </Section>

            {/* 7. E-Mail-Kommunikation */}
            <Section number="07" title="E-Mail-Kommunikation">
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen 
                angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mt-4">
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage 
                von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung/Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </Section>

            {/* 8. Social Recruiting */}
            <Section number="08" title="Social Recruiting & Werbeanzeigen">
              <p>
                Im Rahmen unserer Dienstleistungen schalten wir Werbeanzeigen auf sozialen Netzwerken 
                wie <span className="text-foreground">LinkedIn</span>, <span className="text-foreground">Meta (Facebook/Instagram)</span> 
                und <span className="text-foreground">TikTok</span>, um potenzielle Kandidaten für offene Stellen unserer Kunden anzusprechen.
              </p>
              <p className="mt-4">
                Hierbei können folgende Daten verarbeitet werden:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Demografische Daten (Alter, Standort, Interessen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Interaktionsdaten mit Werbeanzeigen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Berufliche Informationen (bei LinkedIn)</span>
                </li>
              </ul>
              <p className="mt-4">
                Die Verarbeitung erfolgt auf Grundlage der Datenschutzrichtlinien der jeweiligen Plattformen. 
                Wir empfehlen Ihnen, die Datenschutzbestimmungen der genutzten Netzwerke zu prüfen.
              </p>
            </Section>

            {/* 9. Bewerberdaten */}
            <Section number="09" title="Verarbeitung von Bewerberdaten">
              <p>
                Im Rahmen unserer Recruiting-Dienstleistungen verarbeiten wir personenbezogene Daten von Bewerbern, 
                die über unsere Kampagnen oder direkt über unsere Website mit uns in Kontakt treten.
              </p>
              <div className="mt-6 p-6 bg-card/50 rounded-lg border border-border/30 space-y-4">
                <div>
                  <h4 className="text-foreground font-medium mb-2">Erhobene Daten</h4>
                  <p className="text-sm">
                    Kontaktdaten, Lebenslauf, Berufserfahrung, Qualifikationen, Gehaltsvorstellungen, 
                    Verfügbarkeit und weitere bewerbungsrelevante Informationen.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Zweck der Verarbeitung</h4>
                  <p className="text-sm">
                    Prüfung der Eignung für ausgeschriebene Stellen, Kommunikation im Bewerbungsprozess, 
                    Weiterleitung an potenzielle Arbeitgeber (nur mit Ihrer Einwilligung).
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Rechtsgrundlage</h4>
                  <p className="text-sm">
                    Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung 
                    für die Weiterleitung an Dritte), § 26 BDSG.
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Speicherdauer</h4>
                  <p className="text-sm">
                    Bewerberdaten werden nach Abschluss des Bewerbungsverfahrens für maximal 6 Monate aufbewahrt, 
                    sofern keine Einwilligung zur längeren Speicherung vorliegt.
                  </p>
                </div>
              </div>
            </Section>

            {/* 10. Auftragsverarbeiter */}
            <Section number="10" title="Auftragsverarbeiter & eingesetzte Dienste">
              <p>
                Zur Bereitstellung unserer Website und Dienstleistungen setzen wir externe Dienstleister ein, 
                die personenbezogene Daten in unserem Auftrag verarbeiten (Auftragsverarbeiter gemäß Art. 28 DSGVO).
              </p>
              <p className="mt-4">
                Hierzu können insbesondere Anbieter aus folgenden Bereichen gehören:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Hosting & Infrastruktur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Terminbuchung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>CRM- und Bewerbermanagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Kommunikationsdienste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>Analyse- und Marketingtools</span>
                </li>
              </ul>
              <p className="mt-4">
                Mit sämtlichen Dienstleistern wurden — soweit gesetzlich erforderlich — entsprechende 
                Auftragsverarbeitungsverträge abgeschlossen.
              </p>
            </Section>

            {/* 11. LinkedIn */}
            <Section number="11" title="LinkedIn-Verlinkung">
              <p>
                Auf unserer Website sind Links zu unserem LinkedIn-Profil eingebunden. 
                Beim Klick auf diese Links werden Sie auf die externe LinkedIn-Plattform weitergeleitet.
              </p>
              <p className="mt-4">
                Erst durch den Klick auf den Link wird eine Verbindung zu LinkedIn hergestellt. 
                Wir haben keinen Einfluss auf die Datenverarbeitung durch LinkedIn.
              </p>
              <p className="mt-4">
                Informationen zur Datenverarbeitung durch LinkedIn finden Sie in der{" "}
                <a 
                  href="https://www.linkedin.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >
                  LinkedIn-Datenschutzrichtlinie
                </a>.
              </p>
            </Section>

            {/* 12. Rechte */}
            <Section number="12" title="Ihre Rechte">
              <p>
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <RightCard title="Auskunft" description="Art. 15 DSGVO" />
                <RightCard title="Berichtigung" description="Art. 16 DSGVO" />
                <RightCard title="Löschung" description="Art. 17 DSGVO" />
                <RightCard title="Einschränkung" description="Art. 18 DSGVO" />
                <RightCard title="Datenübertragbarkeit" description="Art. 20 DSGVO" />
                <RightCard title="Widerspruch" description="Art. 21 DSGVO" />
              </div>
              <p className="mt-6">
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
                Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
            </Section>

            {/* 13. Aktualität */}
            <Section number="13" title="Aktualität dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026.
              </p>
              <p className="mt-4">
                Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher 
                bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </Section>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Fullhouse UG. Alle Rechte vorbehalten.
          </p>
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </footer>
    </main>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-xs text-accent font-mono">{number}</span>
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed pl-0 md:pl-10">
        {children}
      </div>
    </section>
  )
}

function RightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 bg-background rounded-lg border border-border/30">
      <p className="text-foreground font-medium">{title}</p>
      <p className="text-xs text-muted-foreground/70 mt-1">{description}</p>
    </div>
  )
}
