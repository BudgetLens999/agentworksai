"use client";

import { useState, FormEvent } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="lead-form" role="status">
        <h3 style={{ marginTop: 0 }}>Got it.</h3>
        <p style={{ color: "var(--ink-soft)", margin: 0 }}>
          We&apos;ll reply within one business day to book your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {/* honeypot field — hidden from real users, catches basic bots */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="business">Business name</label>
      <input type="text" id="business" name="business" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="focus">Biggest time-sink right now</label>
      <select id="focus" name="focus" required defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        <option>Marketing &amp; content</option>
        <option>Customer service / inbox</option>
        <option>Sales &amp; lead follow-up</option>
        <option>Scheduling &amp; admin</option>
        <option>Invoicing &amp; finance</option>
        <option>Something else</option>
      </select>

      <label htmlFor="message">Anything else we should know?</label>
      <textarea id="message" name="message" rows={4} />

      <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request a build call"}
      </button>

      {status === "error" && (
        <p className="form-note" style={{ color: "var(--stamp-red)" }}>
          Something went wrong — email us directly instead.
        </p>
      )}
      <p className="form-note">No spam. Your info goes straight to a human inbox, not a database.</p>
    </form>
  );
}
