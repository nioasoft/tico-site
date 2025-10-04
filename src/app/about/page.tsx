export const metadata = {
  title: "הראש של תיקו | פילוסופיה",
  description:
    "הראש של תיקו – מעבר מראיית חשבון לחשיבה אסטרטגית, גישור ופתרון בעיות ב-Win-Win.",
};

export default function AboutPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-4xl px-2">
        <h1 className="heading-hero text-3xl sm:text-5xl mb-6 text-center">
        הראש של תיקו. עולם של בהירות. של פתרון אמיתי.
        </h1>
      </div>
      <div className="mx-auto max-w-4xl px-2">
        <p className="text-foreground/70 max-w-prose mb-6 mx-auto text-center">
        שנים פעלנו בעולם של רווח והפסד, של שורות תחתונות, של מאזן עמודות. אבל
        העולם העסקי השתנה. אנשים, שותפים ורשויות מחפשים היום לא רק ציות לכללים
        אלא פתרונות שמייצרים בהירות ומערכת יחסים חדשה. זו המהות של הראש של תיקו –
        מרחב חשיבה שמחבר בין אסטרטגיה, פיננסים ואנשים.
        </p>
        <p className="text-foreground/70 max-w-prose mb-6 mx-auto text-center">
        אנחנו מאמינים ב-Win-Win: להבין לעומק את הקונפליקט, לזהות את האינטרסים
        האמיתיים של כל הצדדים, ולהרכיב פתרון שכולם יכולים לחיות איתו – לא בכוח,
        אלא מתוך אחריות ושותפות.
        </p>
      </div>
      <div className="mx-auto max-w-4xl px-2">
        <div className="tagline-en text-xs uppercase text-foreground/60 mt-8 text-center">
        DARE TO THINK. COMMIT TO DELIVER
        </div>
      </div>
    </div>
  );
}


