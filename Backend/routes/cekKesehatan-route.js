import { handleGetCategories, handleStartSession, handleSubmitAnswer, handleGetDetail, createKesehatan, predictKulit, predictKesehatan } from "../controllers/cekKesehatan-controller.js";

const routesCekKesehatan = [
    {
        method: 'POST',
        path: '/api/cek-kesehatan/{id}/start',
        handler: handleStartSession
    },

    {
        method: 'POST',
        path: '/api/cek-kesehatan/submit-answer',
        handler: handleSubmitAnswer
    },

    {
        method: 'GET',
        path: '/api/cek-kesehatan/categories',
        handler: handleGetCategories
    },
    
    {
        method: 'GET',
        path: '/api/cek-kesehatan/{id}',
        handler: handleGetDetail
    },

    {
    method: 'POST',
    path: '/kesehatan',
    handler: createKesehatan
  },

//   {
//     method: 'POST',
//     path: '/cek-kesehatan',
//     handler: handleHealthCheck
//   }

        {
            method: 'POST',
            path: '/predict-kulit',
            options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                output: 'stream',
                parse: true,
            },
            },
            handler: predictKulit,
        },
        
        {
            method: 'POST',
            path: '/predict-kesehatan',
            handler: predictKesehatan,
        },

];

export default routesCekKesehatan;
