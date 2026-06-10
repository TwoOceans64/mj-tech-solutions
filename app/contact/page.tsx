"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-slate-300 max-w-xl">
        Send us a message and we’ll get back to you shortly.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="mt-10 rounded border border-emerald-500 bg-emerald-500/10 p-6 text-emerald-400">
          <h2 className="text-lg font-semibold">Message Sent!</h2>
          <p className="mt-2 text-sm">
            Thank you for contacting us. We’ll respond as soon as possible.
          </p>
        </div>
      )}
    </section>
  );
}