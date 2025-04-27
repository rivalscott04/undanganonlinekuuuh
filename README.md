
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
- React Query

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

3. Jalankan aplikasi dalam mode development
```bash
npm run dev
```

## Fitur Admin Panel

Admin panel dapat diakses melalui `/admin` dan menyediakan fitur-fitur berikut:

1. **Dashboard** - Ringkasan informasi tentang tamu undangan dan fitur lainnya
2. **Manajemen Tamu** - Mengelola daftar tamu undangan dengan fitur:
   - Tambah tamu baru
   - Import tamu dari file CSV
   - Edit dan hapus tamu
   - Salin link undangan
   - Bagikan undangan via WhatsApp
   - Melihat status konfirmasi kehadiran tamu
   - Mengelola status aktif/nonaktif berdasarkan konfirmasi kehadiran
3. **Pengaturan Acara** - Mengatur detail acara pernikahan:
   - Informasi pengantin (nama pengantin pria dan wanita)
   - Waktu acara (tanggal pernikahan, waktu akad, waktu resepsi)
   - Lokasi acara (nama tempat, alamat, link Google Maps)
4. **Pengaturan Aplikasi** - Mengkonfigurasi fitur-fitur undangan:
   - Tema tampilan (terang, gelap, otomatis)
   - Musik latar
   - Galeri foto
   - Hitung mundur
   - Ucapan dan doa
   - Konfirmasi kehadiran (RSVP)

## Struktur Database

Aplikasi ini menggunakan penyimpanan lokal (localStorage) untuk menyimpan data tamu. Untuk implementasi produksi, disarankan untuk menggunakan database MySQL dengan struktur sebagai berikut:

```sql
CREATE TABLE guests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    status ENUM('active', 'inactive') DEFAULT 'active',
    attended BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

Lihat file `database/schema.sql` untuk skema database lengkap.

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
  ├── api/               # API services
  ├── components/        # Komponen React
  ├── data/              # Data lokal dan mock data
  ├── hooks/             # Custom React hooks
  ├── lib/               # Utilitas dan helpers
  ├── pages/             # Halaman utama
  ├── types/             # TypeScript types
  └── styles/            # CSS dan Tailwind styles
```

## Penggunaan

1. Admin menambahkan data tamu melalui interface di `/admin/guests`
2. Share link undangan dengan format: `https://domain.com/undangan?to={nama-tamu}`
   - Nama tamu digunakan apa adanya tanpa perubahan (tidak diubah menjadi slug)
   - Contoh: `https://domain.com/undangan?to=Keluarga%20Bapak%20Ahmad`
3. Tamu membuka link dan melihat undangan
4. Tamu dapat mengkonfirmasi kehadiran dengan mengklik tombol "InsyaAllah, Saya akan Hadir" atau "Mohon maaf, belum bisa hadir"
5. Status konfirmasi kehadiran tamu akan otomatis diperbarui di admin panel
6. Status aktif/nonaktif tamu akan otomatis diperbarui berdasarkan konfirmasi kehadiran:
   - Jika tamu mengkonfirmasi kehadiran, status akan menjadi "Aktif"
   - Jika tamu mengkonfirmasi ketidakhadiran, status akan menjadi "Nonaktif"
7. Tamu bisa memberikan ucapan dan doa

## Konfigurasi MySQL (Opsional)

Untuk menggunakan MySQL sebagai database:

1. Install MySQL client untuk Node.js:
```bash
npm install mysql2
```

2. Buat file `.env` dengan konfigurasi database:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=wedding_invitation
DB_PORT=3306
```

3. Aktifkan kode di `src/lib/db.ts` untuk menggunakan koneksi MySQL
4. Update service di `src/api/localGuestService.ts` untuk menggunakan MySQL

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

