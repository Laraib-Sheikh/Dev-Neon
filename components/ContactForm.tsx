"use client";

import { useState } from "react";

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $30,000", "$30,000+"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, Resend, an API route, etc.)
    // See README.md for setup notes.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border hairline rounded-lg p-8 bg-green-soft">
        <p className="font-display text-lg font-semibold mb-2">Message received.</p>
        <p className="text-sm text-soft">
          We reply to every project inquiry within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium block mb-1.5">Name</label>
          <input
            id="name"
            name="name"
            required
            className="w-full border hairline rounded-md px-3.5 py-2.5 text-sm bg-white focus:border-green outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border hairline rounded-md px-3.5 py-2.5 text-sm bg-white focus:border-green outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium block mb-1.5">Company (optional)</label>
        <input
          id="company"
          name="company"
          className="w-full border hairline rounded-md px-3.5 py-2.5 text-sm bg-white focus:border-green outline-none"
        />
      </div>

      <div>
        <label htmlFor="budget" className="text-sm font-medium block mb-1.5">Estimated budget</label>
        <select
          id="budget"
          name="budget"
          className="w-full border hairline rounded-md px-3.5 py-2.5 text-sm bg-white focus:border-green outline-none"
        >
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium block mb-1.5">
          What are you trying to build?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border hairline rounded-md px-3.5 py-2.5 text-sm bg-white focus:border-green outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-green text-paper px-6 py-3 rounded-md text-sm font-medium hover:bg-green-deep transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
