Guide penggunaan

# Project Setup Guide

## Backend Setup

1. Masuk ke direktori `backend`:
   ```bash
   cd backend-test-psi

2. Install dependencies dengan perintah:
   ```bash
   npm i

3. buat file .env dan masukkan:
   ```bash
   DATABASE_URL: //link database mysql

4. jalankan perintah:
   ```bash
   npx prisma migrate dev
   npm run seed
   
5. jalankan api nest:
   ```bash
   npm run start:dev

6. Buka URL berikut di browser untuk menguji API:
   ```arduino
   http://localhost:3000/

 API sudah dilengkapi dengan dokumentasi menggunakan Swagger, sehingga kamu bisa mengakses dokumentasi di URL yang sama.

## API Testing
Nomor 1 dapat diuji di endpoint checkout.

Nomor 2 dapat diuji di endpoint auth.

Nomor 3 dapat diuji di endpoint user-company.

Nomor 4 dapat diuji di endpoint user.


## Frontend Setup

1. Masuk ke direktori `frontend`:
   ```bash
   cd frontend-test-psi

2. Install dependencies dengan perintah:
   ```bash
   npm i
   
3. jalankan aplikasi react:
   ```bash
   npm run dev

6. Buka URL berikut di browser untuk menguji aplikasi:
   ```arduino
   http://localhost:5173/


## Fundamental Test
Test manipulasi array ada di file fundamentalTest.js yang terletak di root directory.
Kamu bisa menjalankan test tersebut dengan perintah berikut:
   ```bash
      node fundamentalTest.js

