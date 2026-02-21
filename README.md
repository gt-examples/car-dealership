# Car Dealership

A multilingual car dealership inventory demonstrating locale-aware formatting for prices, mileage, and dates.

**[Live Demo](https://car-dealership.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a car dealership inventory page with vehicle listings, detail pages, filtering, and sorting. All prices, numbers, and dates are automatically formatted for the user's locale using gt-next's formatting components, and all UI text is fully internationalized.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Branch>` — Conditional rendering for vehicle status badges
- `<Var>` — Dynamic values within translated content
- `<LocaleSelector>` — Language picker
- `useGT` — String translations for labels and filters
- `getGT` — Server-side string translations for metadata
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/car-dealership.git
cd car-dealership
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
