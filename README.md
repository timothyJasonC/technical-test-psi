Berikut adalah kode lengkap untuk file README.md yang diminta:

markdown
Copy code
# Project Setup Guide

## Backend Setup

1. Masuk ke direktori `backend`:
   ```bash
   cd backend
Install dependencies dengan perintah:

bash
Copy code
npm i
Kembali ke direktori sebelumnya:

bash
Copy code
cd ..
Masuk ke direktori frontend dan install dependencies:

bash
Copy code
cd frontend
npm i
Buat file .env di dalam direktori backend dengan key berikut:

makefile
Copy code
DATABASE_URL=<your_mysql_database_url>
Jalankan perintah berikut untuk migrasi database:

bash
Copy code
npx prisma migrate dev
Untuk seeding data user dan company, jalankan perintah:

bash
Copy code
npm run seed
Backend Running Guide
Untuk menjalankan aplikasi NestJS, masuk ke direktori backend dan jalankan perintah berikut:

bash
Copy code
npm run start:dev
Buka URL berikut di browser untuk menguji API:

arduino
Copy code
http://localhost:3000/
API sudah dilengkapi dengan dokumentasi menggunakan Swagger, sehingga kamu bisa mengakses dokumentasi di URL yang sama.

API Testing
Nomor 1 dapat diuji di endpoint checkout.
Nomor 2 dapat diuji di endpoint auth.
Nomor 3 dapat diuji di endpoint user-company.
Nomor 4 dapat diuji di endpoint user.
Frontend Running Guide
Masuk ke direktori frontend dan jalankan aplikasi dengan perintah:
bash
Copy code
npm run dev
Fundamental Test
Test manipulasi array ada di file fundamentalTest.js yang terletak di root directory.
Kamu bisa menjalankan test tersebut dengan perintah berikut:
bash
Copy code
node fundamentalTest.js
yaml
Copy code

---

Salin kode di atas ke dalam file `README.md` di proyek GitHub Anda.
