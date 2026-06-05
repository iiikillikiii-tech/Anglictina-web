"use client";

import { Mail, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { contactInfo } from "../data";
import { useCart } from "./SiteChrome";

const serviceOptions = [
  "Online kurz 3x týdně",
  "Online kurz 2x týdně",
  "Letní intenzivní kurz",
  "Malý / střední / velký balíček",
  "Maturita nebo Cambridge",
  "PDF materiály z e-shopu",
  "Nejsem si jistý/á",
];

const studentOptions = ["pro mě", "pro dítě", "pro studenta", "pro někoho jiného"];

const levelOptions = [
  "úplný začátečník",
  "začátečník",
  "mírně pokročilý",
  "pokročilejší",
  "nevím",
];

const helpOptions = ["gramatika", "mluvení", "test", "maturita", "cestování", "jiné"];

export function ContactForm() {
  const { items } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState(studentOptions[0]);
  const [level, setLevel] = useState(levelOptions[0]);
  const [help, setHelp] = useState(helpOptions[0]);
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");

  const cartSummary = useMemo(() => {
    if (!items.length) {
      return "Košík je prázdný.";
    }

    return items
      .map((item) => `${item.quantity}x ${item.title}${item.price ? ` (${item.price})` : ""}`)
      .join("\n");
  }, [items]);

  const submitForm = () => {
    const subject = encodeURIComponent(`Poptávka: ${service}`);
    const body = encodeURIComponent(
      [
        `Jméno: ${name || "-"}`,
        `E-mail: ${email || "-"}`,
        `Telefon: ${phone || "-"}`,
        `Pro koho je výuka: ${student}`,
        `Přibližná úroveň: ${level}`,
        `S čím potřebuji pomoct: ${help}`,
        `Služba: ${service}`,
        "",
        "Košík:",
        cartSummary,
        "",
        "Zpráva:",
        message || "-",
      ].join("\n"),
    );

    window.location.href = `${contactInfo.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        submitForm();
      }}
    >
      <div className="form-row">
        <label>
          <span>Jméno</span>
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Telefon</span>
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label>
          <span>Pro koho je výuka?</span>
          <select value={student} onChange={(event) => setStudent(event.target.value)}>
            {studentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Přibližná úroveň</span>
          <select value={level} onChange={(event) => setLevel(event.target.value)}>
            {levelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>S čím potřebujete pomoct?</span>
          <select value={help} onChange={(event) => setHelp(event.target.value)}>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Co potřebujete?</span>
        <select value={service} onChange={(event) => setService(event.target.value)}>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Zpráva</span>
        <textarea
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Napište úroveň, cíl, časové možnosti nebo dotaz k materiálům."
        />
      </label>
      <div className="form-cart-summary">
        <Mail aria-hidden="true" size={17} strokeWidth={2.4} />
        <pre>{cartSummary}</pre>
      </div>
      <button className="button button-primary" type="submit">
        <Send aria-hidden="true" size={18} strokeWidth={2.4} />
        Odeslat e-mailem
      </button>
    </form>
  );
}
