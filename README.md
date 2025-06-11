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
