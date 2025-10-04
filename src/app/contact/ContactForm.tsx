"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(formData.entries()) as Record<string, string>
        ),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm text-white/80">שם</span>
          <input name="name" required className="bg-white/5 border border-white/10 rounded px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-white/80">חברה</span>
          <input name="company" className="bg-white/5 border border-white/10 rounded px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm text-white/80">טלפון</span>
          <input name="phone" className="bg-white/5 border border-white/10 rounded px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-white/80">אימייל</span>
          <input type="email" name="email" required className="bg-white/5 border border-white/10 rounded px-3 py-2" />
        </label>
      </div>
      <label className="grid gap-1">
        <span className="text-sm text-white/80">נושא</span>
        <input name="subject" className="bg-white/5 border border-white/10 rounded px-3 py-2" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-white/80">הודעה</span>
        <textarea name="message" rows={5} className="bg-white/5 border border-white/10 rounded px-3 py-2" />
      </label>
      <button
        disabled={status === "loading"}
        className="inline-flex items-center justify-center h-11 px-6 rounded bg-accent text-white disabled:opacity-60"
      >
        {status === "loading" ? "שולח…" : "שליחה"}
      </button>
      {status === "success" && (
        <div className="text-green-400 text-sm">ההודעה נשלחה, נחזור אליך.</div>
      )}
      {status === "error" && (
        <div className="text-red-400 text-sm">שגיאה בשליחה, נסה שוב.</div>
      )}
    </form>
  );
}


