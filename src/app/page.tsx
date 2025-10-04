export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="container pt-20 pb-16">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-3 sm:gap-4 px-2">
          <div className="relative w-56 h-12 md:w-72 md:h-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/tico_logo_800.png" alt="TICO" className="h-full w-auto mx-auto" />
          </div>
          <div className="tagline-en text-xs sm:text-sm uppercase text-foreground/70">
            DARE TO THINK. COMMIT TO DELIVER
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="container py-14 border-t border-foreground/10">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="text-2xl font-extrabold mb-4 text-center">מאיזון עמודות לאיזון בין אנשים.</h2>
          <p className="text-foreground/70 max-w-prose mx-auto text-center">
          שנים הייתי רואה חשבון. מחשב מספרים. מאזן עמודות. היום אני מאזן בין
          אנשים ובין רשויות. כי לא כל קונפליקט חייב להפוך למאבק. לפעמים הוא רק
          קריאה להבנה אחרת.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="container py-14 border-t border-foreground/10">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="text-2xl font-extrabold mb-4 text-center">זה לא מתאים לכל אחד.</h2>
          <p className="text-foreground/70 max-w-prose mx-auto text-center">
          הגישה שלנו דורשת מחויבות לתהליך אחר. לא כל אחד יכול להרשות לעצמו.
          לעצור. להקשיב. לשנות זווית. אבל מי שכן, יגלה עולם אחר. עולם של בהירות
          ושל פתרון אמיתי.
          </p>
        </div>
      </section>
    </div>
  );
}
