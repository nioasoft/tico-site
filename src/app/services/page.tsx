export const metadata = {
  title: "הכלים שלנו | שירותים מבוססי ערך",
  description:
    "גישור עסקי, ייעוץ אסטרטגי-פיננסי, ליווי בצמתים קריטיים וחשיבה מחדש על מבנים.",
};

const services = [
  {
    title: "גישור ופתרון סכסוכים עסקיים",
    desc: "איזון בין שותפים, לקוחות, ספקים ורשויות. פתרונות שמקדמים יחסים וניהול סיכונים חכם.",
  },
  {
    title: "ייעוץ אסטרטגי-פיננסי",
    desc: "בניית מודלים עסקיים מבוססי Win-Win, עם מיקוד בערך וביציבות ארוכת טווח.",
  },
  {
    title: "ליווי בצמתים קריטיים",
    desc: "גיוסי הון, מיזוגים, רכישות וניהול משברים – קבלת החלטות בתנאי אי-ודאות.",
  },
  {
    title: "חשיבה מחדש על מבנים ארגוניים ופיננסיים",
    desc: "ארכיטקטורות עסקיות ופיננסיות שמקדמות פשטות, שקיפות ונכונות לפעולה.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-4xl px-2">
        <h1 className="heading-hero text-3xl sm:text-5xl mb-8 text-center">הכלים שלנו</h1>
      </div>
      <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2 px-2">
        {services.map((s) => (
          <div key={s.title} className="border border-foreground/10 rounded-xl p-6 bg-white">
            <h2 className="text-xl font-extrabold mb-2">{s.title}</h2>
            <p className="text-foreground/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


