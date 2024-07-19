import axios from 'axios';

const API_URL = 'http://localhost:5001/api/listings';

export const getListings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createListing = async (listingData) => {
  const response = await axios.post(API_URL, listingData);
  return response.data;
};

export const updateListing = async (id, listingData) => {
  const response = await axios.put(`${API_URL}/${id}`, listingData);
  return response.data;
};

export const deleteListing = async (id) => {
  await axios.delete(`${API_URL}/${id}`); 
};
