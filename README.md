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
│   │   ├── View/              # Menyimpan komponen UI atau halaman yang akan ditampilkan kepada pengguna (Home, Dashboard, dll)
│   │   ├── App.jsx            # Komponen utama aplikasi React yang memuat routing dan layout utama
│   │   ├── index.css          # File CSS global untuk styling aplikasi
│   │   ├── Main.jsx           # Wrapper utama atau layout dasar aplikasi
│   │   ├── PrivateRoute.jsx   # Komponen untuk membatasi akses ke halaman tertentu berdasarkan autentikasi
│   │   ├── SetupRoleAdmin.jsx # Komponen/logic untuk inisialisasi role Admin
│   │   ├── SetupRoleUser.jsx  # Komponen/logic untuk inisialisasi role User
│   │   └── main.js            # Entry point aplikasi React, merender `App` ke DOM
│   └── .env                   # Konfigurasi env
|
├── backend/
│   ├── config/           # Konfigurasi aplikasi seperti koneksi database, variabel env, dll
│   ├── controllers/      # Logika untuk menangani request dan response (misalnya userController.js)
│   ├── middleware/       # Middleware seperti autentikasi (JWT), validasi, error handling, dll
│   ├── models/           # Skema atau model database (misalnya dengan Mongoose atau ORM lain)
│   ├── public/           # File publik seperti gambar, dokumen, atau file statis lainnya
│   ├── routes/           # Definisi endpoint API dan pemetaan ke controller (misalnya userRoutes.js)
│   ├── services/         # Logika bisnis, layanan eksternal, atau utilitas pendukung controller
│   ├── .env              # File environment untuk menyimpan variabel sensitif (PORT, DB_URI, dll)
│   ├── index.js          # Entry point utama untuk menjalankan server Express
│   ├── package.json      # Daftar dependensi dan script npm
│   ├── package-lock.json # File pengunci versi dependensi
│   └── request.rest       # File untuk menguji endpoint API (digunakan dengan ekstensi REST Client di VSCode)
|
├── machine_learning/
│   ├── app.py               # Script utama untuk menjalankan model ML (misalnya prediksi via API/CLI)
│   ├── dataset.csv          # Dataset yang digunakan untuk pelatihan model
│   ├── latih_dataset.ipynb  # Notebook Jupyter untuk eksplorasi data dan pelatihan model
│   ├── model.h5             # Model hasil training pertama dalam format HDF5
│   ├── model2.h5            # Model hasil training alternatif atau versi lainnya
│   ├── required.md          # Dokumentasi tambahan atau catatan teknis terkait ML
│   ├── requirements.txt     # Daftar dependensi Python yang diperlukan (pandas, keras, sklearn, dll)
├── bash.exe.stackdump
└── README.md             # (ini file README utama)
