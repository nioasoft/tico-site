export default function Home() {
  return (
    <div className="font-sans">
      {/* Intro */}
      <section className="container pb-8 pt-6 border-t border-foreground/10">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-center">בעולם שמחפש לריב, אני מציע לפתור בעיות.</h2>
          <p className="text-foreground/70 max-w-prose mx-auto text-center">
          הראש של תיקו הוא מרחב חשיבה. מקום שבו הבעיות נפתרות. לא בכוח, אלא ב- WinWin.
          </p>
        </div>
      </section>

      {/* Opening */}
      <section className="container py-8 border-t border-foreground/10">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-center">מאיזון עמודות לאיזון בין אנשים.</h2>
          <p className="text-foreground/70 max-w-prose mx-auto text-center">
          שנים הייתי רואה חשבון. מחשב מספרים. מאזן עמודות. היום אני מאזן בין
          אנשים ובין רשויות. כי לא כל קונפליקט חייב להפוך למאבק. לפעמים הוא רק
          קריאה להבנה אחרת.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="container py-8 border-t border-foreground/10">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-center">זה לא מתאים לכל אחד.</h2>
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
