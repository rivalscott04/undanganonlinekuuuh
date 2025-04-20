
# Digital Wedding Invitation

Aplikasi undangan pernikahan digital dengan fitur database untuk mengelola tamu dan ucapan.

## Teknologi yang Digunakan

- Vite
- React 18
- TypeScript
- TailwindCSS 3.4
- React Router Dom 6
- Framer Motion 12.7
- shadcn/ui
- MySQL/PostgreSQL (database)

## Persyaratan Sistem

- Node.js versi 18 atau lebih baru
- npm atau yarn
- MySQL/PostgreSQL

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

3. Setup Database
```sql
-- Buat database
CREATE DATABASE wedding_db;
USE wedding_db;

-- Tabel tamu undangan
CREATE TABLE guests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel ucapan dan doa
CREATE TABLE wishes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    guest_id INT,
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (guest_id) REFERENCES guests(id)
);

-- Contoh data tamu
INSERT INTO guests (name, slug) VALUES 
('Budi Santoso', 'budi-santoso'),
('Ani Wijaya', 'ani-wijaya'),
('Keluarga Darmawan', 'keluarga-darmawan');
```

4. Konfigurasi Environment
```bash
# Copy .env.example ke .env
cp .env.example .env

# Edit file .env sesuai konfigurasi database
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=wedding_db
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

## Komponen UI yang Tersedia

Menggunakan shadcn/ui dengan komponen:

- Accordion
- Alert Dialog
- Alert
- Avatar
- Badge
- Button
- Calendar
- Card
- Carousel
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip

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

## Deployment

1. Setup web server (Apache/Nginx)
2. Import struktur database
3. Konfigurasi environment variables
4. Upload build files ke server
5. Konfigurasi domain dan SSL

## API Endpoints

- `GET /api/guests/:slug` - Validasi tamu
- `GET /api/wishes` - Ambil daftar ucapan
- `POST /api/wishes` - Tambah ucapan baru

## Penggunaan

1. Admin menambahkan data tamu ke database
2. Share link undangan dengan format: `https://domain.com/undangan/{slug-tamu}`
3. Tamu membuka link dan melihat undangan
4. Tamu bisa memberikan ucapan dan doa

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

