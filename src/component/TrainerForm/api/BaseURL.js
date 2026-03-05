
import axios from "axios";

export const BASE_URL = "https://atmayantra-8.onrender.com/api";

// ========================
//      4 GET APIs
// ========================

// 1) Get personal details
export const getPersonalDetails = (trainerId) =>
  axios.get(`${BASE_URL}/personal-details/${trainerId}`);

// 2) Get certification details
export const getCertificationDetails = (trainerId) =>
  axios.get(`${BASE_URL}/certification-details/${trainerId}`);

// 3) Get documentation details
export const getDocumentationDetails = (trainerId) =>
  axios.get(`${BASE_URL}/documents/${trainerId}`);

// 4) Get bank details
export const getBankDetails = (trainerId) =>
  axios.get(`${BASE_URL}/bank-details/${trainerId}`);


// ========================
//      1 POST API
// ========================

// Personal details POST
export const postPersonalDetails = (data) =>
  axios.post(`${BASE_URL}/personal-details/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });


// ========================
//      1 PUT API
// ========================

export const updatePersonalDetails = (trainerId, data) =>
  axios.put(`${BASE_URL}/personal-details/${trainerId}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });


// ========================
//      1 DELETE API
// ========================

export const deleteDocument = (docId) =>
  axios.delete(`${BASE_URL}/documents/${docId}`);
