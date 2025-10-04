# TICO – אתר תדמית

אתר Next.js (App Router) עבור משרד הייעוץ האסטרטגי TICO.

## טכנולוגיות
- Next.js 15 (App Router)
- TypeScript
- Tailwind (PostCSS עם @tailwindcss/postcss)
- next/font להטמעת Assistant + Montserrat

## פיתוח מקומי
```bash
npm install
npm run dev
# גלישה לכתובת: http://localhost:3000
```

## מבנה עמודים
- `/` – עמוד בית: Hero + פתיחה + ייחודיות
- `/about` – "הראש של תיקו" (אודות/פילוסופיה)
- `/services` – "הכלים שלנו"
- `/contact` – צור קשר: טופס + מפה

## RTL, פונטים ותמה
- RTL מוגדר ב-`src/app/layout.tsx` וב-`globals.css`
- פונטים: Assistant (עברית), Montserrat (אנגלית/tagline)
- פלטת צבעים מונוכרומטית עם אקסנט כחול עמוק (`--accent`)

## טופס צור קשר
- API Route: `src/app/api/contact/route.ts`
- שליחה ב-POST ל-`/api/contact` (JSON)
- נדרש: `name`, `email`

## פריסה ל-Vercel
1. דחיפה ל-GitHub
2. חיבור הרפו ל-Vercel (Import Project)
3. Framework Preset: Next.js
4. הגדרות ברירת מחדל מספיקות

לאחר הפריסה, ה-Preview/Production URLs יינתנו אוטומטית.

## רישוי
© TICO. כל הזכויות שמורות.
