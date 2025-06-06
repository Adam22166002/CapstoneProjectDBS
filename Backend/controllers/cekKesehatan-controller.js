import { startSession, submitAnswer, getAllCategories, getCekKesehatanDetail } from "../services/cekKesehatan-service.js";
import Kesehatan from "../models/kesehatan-model.js";
import axios from 'axios';
import FormData from 'form-data';

export const handleStartSession = async (request, h) => {
    try {
        const { id } = request.params;
        const result = await startSession(id);

        if (!result) return h.response({ error: 'Cek kesehatan tidak ditemukan' }).code(404);

        const { session, firstQuestion, totalQuestions } = result;

        return h.response({
            session_id: session.id,
            question: firstQuestion,
            progress: {
                current: 1,
                total: totalQuestions
            }
        }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal server error' }).code(500);
    }
};

export const handleSubmitAnswer = async (request, h) => {
    try {
        const result = await submitAnswer(request.payload);
        if (!result) return h.response({ error: 'Session tidak ditemukan' }).code(404);

        return h.response(result).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal server error' }).code(500);
    }
};

export const handleGetCategories = async (request, h) => {
    try {
        const categories = await getAllCategories();
        return h.response(categories).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal server error' }).code(500);
    }
};

export const handleGetDetail = async (request, h) => {
    try {
        const { id } = request.params;
        const data = await getCekKesehatanDetail(id);

        if (!data) return h.response({ error: 'Cek kesehatan tidak ditemukan' }).code(404);
        return h.response(data).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal server error' }).code(500);
    }
};



export const createKesehatan = async (request, h) => {
  try {
    const { id_kategori, title, deskripsi, saran } = request.payload;

    if (!id_kategori || !title || !saran) {
      return h.response({ message: 'id_kategori, title, dan saran wajib diisi' }).code(400);
    }

    const newKesehatan = await Kesehatan.create({
      id_kategori,
      title,
      deskripsi,
      saran,
    });

    return h.response({
      message: 'Data kesehatan berhasil dibuat',
      data: newKesehatan,
    }).code(201);

  } catch (error) {
    console.error(error);
    return h.response({
      message: 'Terjadi kesalahan saat menyimpan data kesehatan',
      error: error.message,
    }).code(500);
  }
};



// export const handleHealthCheck = async (request, h) => {
//   const { symptoms } = request.payload;

//   try {
//     const response = await axios.post(' http://127.0.0.1:3000/predict', {
//       symptoms
//     });

//     return h.response(response.data).code(200);
//   } catch (error) {
//     console.error('Error forwarding to ML model:', error.message);
//     return h.response({
//       error: 'Gagal menghubungi server machine learning',
//       detail: error.message
//     }).code(500);
//   }
// };

/////////////////////////////////////// CONTROLLER MACHINE LERNING ///////////////////////////////////////////



export const predictKulit = async (request, h) => {
  const { file } = request.payload;

  if (!file || !file.hapi || !file._data) {
    return h.response({ error: 'No file uploaded' }).code(400);
  }

  try {
    const formData = new FormData();
    formData.append('file', file._data, {
      filename: file.hapi.filename,
      contentType: file.hapi.headers['content-type'],
    });

    const response = await axios.post('http://127.0.0.1:3000/predict-kulit', formData, {
      headers: formData.getHeaders(),
    });

    const kelas = response.data.class;
    const akurasi = response.data.confidence;

    return h.response({
      deskripsi:`Ciri-ciri yang ditemukan mengarah pada kemungkinan Anda mengidap penyakit ${kelas}`,
      saran:`Diperlukan pemeriksaan lebih lanjut untuk memastikan diagnosis penyakit ${kelas}, Pergi ke rumah sakit atau puskesmas terdekat untuk di tindak lanjuti`
    }).code(200);
  } catch (error) {
    console.error('Error forwarding to ML model:', error.message);
    return h.response({
      error: 'Gagal menghubungi server machine learning',
      detail: error.message,
    }).code(500);
  }
};

export const predictKesehatan = async (request, h) => {
  const { symptoms } = request.payload;

  if (!symptoms) {
    return h.response({ error: 'Symptoms data required' }).code(400);
  }

  try {
    const response = await axios.post('http://127.0.0.1:3000/predict-kesehatan', { symptoms });

    const prediksi = response.data.predicted;

    return h.response({
      deskripsi:`Anda terdeteksi mengalami gejala dan resiko yang mengarah pada penyakit ${prediksi}.`,
      saran:`Sebaiknya segera lakukan pemeriksaan medis di fasilitas kesehatan terdekat untuk mendapatkan diagnosis yang tepat mengenai penyakit ${prediksi}.`
    }).code(200);
  } catch (error) {
    console.error('Error forwarding to ML model:', error.message);
    return h.response({
      error: 'Gagal menghubungi server machine learning',
      detail: error.message,
    }).code(500);
  }
};
