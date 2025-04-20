
# Digital Wedding Invitation

Aplikasi undangan pernikahan digital dengan fitur untuk mengelola tamu dan ucapan.

## Teknologi yang Digunakan

- Vite
- React 18
- TypeScript
- TailwindCSS 3.4
- React Router Dom 6
- Framer Motion 12.7
- shadcn/ui

## Persyaratan Sistem

- Node.js versi 18 atau lebih baru
- npm atau yarn

## Langkah Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd digital-wedding
```

2. Install dependencies
```bash
npm install
```

## Instalasi Dependensi

### Prasyarat
- Node.js versi 18 atau lebih baru
- npm atau yarn

### Instalasi Utama
```bash
# Install dependencies utama
npm install

# Install Tailwind CSS (versi 3.4)
npm install -D tailwindcss@3.4 postcss autoprefixer

# Install shadcn/ui
npx shadcn-ui@latest init

# Install Lucide React
npm install lucide-react@0.462.0

# Install React Query
npm install @tanstack/react-query@5.56.2

# Install Form Hooks
npm install react-hook-form@7.53.0
npm install @hookform/resolvers@3.9.0

# Install Framer Motion
npm install framer-motion@12.7.3

# Install Canvas Confetti (jika diperlukan)
npm install canvas-confetti@1.9.3

# Install PapaParse untuk parsing CSV
npm install papaparse@5.5.2
```

### Konfigurasi shadcn/ui
Jalankan perintah berikut untuk menginstal komponen shadcn/ui:
```bash
# Contoh instalasi komponen
npx shadcn-ui@latest add button
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add dialog
```

## Perintah yang Tersedia

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build hasil
npm run preview

# Type check
npm run typecheck

# Lint check
npm run lint

# Format code
npm run format
```

## Struktur Folder

```
src/
  ├── components/         # Komponen React
  ├── pages/             # Halaman utama
  ├── hooks/             # Custom React hooks
  ├── api/               # API handlers
  ├── lib/               # Utilitas dan helpers
  ├── types/             # TypeScript types
  └── styles/            # CSS dan Tailwind styles
```

## Penggunaan

1. Admin menambahkan data tamu melalui interface
2. Share link undangan dengan format: `https://domain.com/undangan/{slug-tamu}`
3. Tamu membuka link dan melihat undangan
4. Tamu bisa memberikan ucapan dan doa

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

