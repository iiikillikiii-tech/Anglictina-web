import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { RevealSection } from "../components/RevealSection";
import { contactInfo, rules } from "../data";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Kontakt</p>
          <h1>Domluvte si kurz nebo zkušební lekci.</h1>
          <p>
            Napište nebo zavolejte. Společně vyberete vhodné tempo, úroveň a typ
            materiálů podle toho, co v angličtině potřebujete zlepšit.
          </p>
        </div>
        <div className="hero-note accent-coral">
          <span>První krok</span>
          <strong>krátká domluva cíle</strong>
        </div>
      </section>

      <RevealSection className="section contact-grid">
        <div className="contact-card">
          <p className="eyebrow">Ozvěte se</p>
          <h2>{contactInfo.name}</h2>
          <div className="contact-actions">
            <a className="button button-primary" href={contactInfo.phoneHref}>
              <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
              {contactInfo.phone}
            </a>
            <a className="button button-secondary" href={contactInfo.emailHref}>
              <Mail aria-hidden="true" size={18} strokeWidth={2.4} />
              {contactInfo.email}
            </a>
            <a className="button button-secondary" href={contactInfo.instagramHref}>
              <Camera aria-hidden="true" size={18} strokeWidth={2.4} />
              {contactInfo.instagram}
            </a>
          </div>
          <address>
            <MapPin aria-hidden="true" size={18} strokeWidth={2.4} />
            {contactInfo.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span>IČO: {contactInfo.ico}</span>
          </address>
        </div>

        <div className="contact-card contact-card-muted">
          <p className="eyebrow">Před domluvou</p>
          <h2>Hodí se vědět, jak často chcete studovat.</h2>
          <p>
            Pokud si nejste jistí, začněte kratším balíčkem. Po prvních lekcích se dá
            tempo upravit podle času, cíle a aktuální úrovně.
          </p>
          <Link className="button button-secondary" href="/kurzy">
            Porovnat kurzy
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="section contact-form-section">
        <div className="section-heading">
          <p className="eyebrow">Rychlá poptávka</p>
          <h2>Vyberte službu a pošlete zprávu rovnou e-mailem.</h2>
        </div>
        <ContactForm />
      </RevealSection>

      <RevealSection className="section rules-preview">
        <div className="section-heading">
          <p className="eyebrow">Pravidla spolupráce</p>
          <h2>Stručně před první lekcí.</h2>
        </div>
        <div className="rule-grid">
          {rules.map((rule, index) => (
            <article key={rule.title}>
              <span>{index + 1}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </RevealSection>
    </>
  );
}
