# Website Informasi Kesehatan - KesehatanKu

KesehatanKu adalah Website yang menyediakan informasi kesehatan yang terpercaya, serta menawarkan layanan cek kesehatan dan konsultasi penyakit dengan akses secara gratis. Dengan sumber berbasis artikel dan Machine Learning, kami membantu Anda menjalani hidup yang lebih sehat melalui panduan dan layanan yang mudah diakses kapan saja.

## Latar Belakang Division

- Machine Learning: Membangun model klasifikasi gambar penyakit kulit menggunakan arsitektur MobileNetV2 dengan pendekatan transfer learning. Melatih Model untuk mengenali 15 jenis penyakit kulit dengan bantuan teknik data augmentation dan class weighting untuk mengatasi ketidakseimbangan kelas, serta fine-tuning pada 50 layer terakhir. Meningkatkan generalisasi dan menghindari overfitting dengan batch normalization dan dropout. Mendeploy model ke dalam API berbasis Flask agar dapat digunakan dalam sistem berbasis web.
- Front-End dan Back-End Developer: Membangun aplikasi web interaktif dan responsif dengan framework modern seperti React.js dan Hapi.js, serta mengintegrasikan data real-time dengan API. Disisi Frontend, juga menggunakan React Bootstrap dan Di sisi back-end, menggunakan Hapi.js untuk menangani logika server, membangun RESTful API, dan mengelola komunikasi antara aplikasi dan database.

# Dokumentasi Penggunaan

1. git clone:

````
git clone https://github.com/CapstoneProjectDBS/CapstoneProjectDBS.git
````

2. Masuk ke direktori backend
````
cd backend
````

3. Instal node module
````
npm install
````

4.Copy env
````
cp .env.example .env
````

5. Jalankan server + migrasi otomatis
````
node index.js
````

6. Masuk ke direktori frontend
````
cd frontend
````

7. Instal node module
````
npm install
````

8. Jalankan frontend
````
npm run dev
````

# Struktur Folder
```
CapstoneProjectDBS/
├── frontend/
│   ├── public/
│   │   └── image
│   ├── src/
│   │   ├── assets/            # Gambar, ikon, dan stylesheet global
│   │   ├── components/        # Komponen UI (headers, forms, cards, dll.)
│   │   ├── pages/             # Halaman utama (Home, Dashboard, Settings, etc.)
│   │   ├── model/             # Menyimpan struktur data dan logika bisnis (misalnya data user, item, dsb)
│   │   ├── Presenter/         # Menangani logika presentasi dan penghubung antara View dan Model (misalnya API calls, state management)
│   │   ├── View/              # Menyimpan komponen UI atau halaman yang akan ditampilkan kepada pengguna
│   │   ├── App.jsx            # Komponen utama aplikasi React yang memuat routing dan layout utama
│   │   ├── index.css          # File CSS global untuk styling aplikasi
│   │   ├── Main.jsx           # Wrapper utama atau layout dasar aplikasi
│   │   ├── PrivateRoute.jsx   # Komponen untuk membatasi akses berdasarkan autentikasi
│   │   ├── SetupRoleAdmin.jsx # Inisialisasi dan logika peran Admin
│   │   ├── SetupRoleUser.jsx  # Inisialisasi dan logika peran User
│   │   └── main.js            # Entry point aplikasi React
│   └── .env                   # Konfigurasi environment frontend
│
├── backend/
│   ├── config/           # Konfigurasi aplikasi (DB, auth, third-party)
│   ├── controllers/      # Handler HTTP request dan response
│   ├── middleware/       # Middleware: autentikasi (JWT), validasi, error handler
│   ├── models/           # Skema/model database
│   ├── public/           # File statis (gambar, dokumen, dsb)
│   ├── routes/           # Definisi endpoint API
│   ├── services/         # Logika bisnis, utilitas, dan layanan eksternal
│   ├── .env              # Variabel environment (PORT, DB_URI, dll)
│   ├── index.js          # Entry point backend (Express app)
│   ├── package.json      # Daftar dependensi backend
│   ├── package-lock.json # Pengunci versi dependensi backend
│   └── request.rest       # File uji endpoint API (via REST Client VSCode)
│
├── machine_learning/
│   ├── app.py               # Script untuk menjalankan model ML
│   ├── dataset.csv          # Dataset pelatihan model
│   ├── latih_dataset.ipynb  # Jupyter Notebook: pelatihan & eksplorasi data
│   ├── model.h5             # Model hasil pelatihan (.h5 format)
│   ├── model2.h5            # Alternatif model hasil pelatihan
│   ├── required.md          # Catatan dokumentasi terkait machine learning
│   ├── requirements.txt     # Daftar dependensi Python
│
├── bash.exe.stackdump       # (Opsional) File dump error Windows (bisa dihapus jika tidak diperlukan)
└── README.md                # Dokumentasi utama proyek
```
