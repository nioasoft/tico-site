import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "צור קשר | TICO",
  description: "צור קשר עם TICO – בואו נחשוב יחד.",
};

export default function ContactPage() {
  return (
    <div className="container py-14">
      <h1 className="heading-hero text-3xl sm:text-5xl mb-2">בואו נחשוב יחד.</h1>
      <div className="text-white/70 mb-8">נשמח לשמוע ולהציע כיוון לפתרון.</div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <ContactForm />

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="font-semibold text-white">פרטי התקשרות</div>
            <div>שדרות רוטשילד 3, מגדל אלרוב קומה ראשונה, תל אביב</div>
            <div>טלפון: 03-5666170</div>
            <div>
              דוא&quot;ל: <a className="underline" href="mailto:tico@franco.co.il">tico@franco.co.il</a>
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
            <iframe
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Rothschild%203%20Tel%20Aviv&output=embed"
              title="מיקום המשרד"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


