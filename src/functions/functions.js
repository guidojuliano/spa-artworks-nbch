import axios from "axios";


export const getArtworks = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getArtwork = async (id) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );
  return response.data;
};

export const prepareUrlSearch = (query) => {  
  return `https://api.artic.edu/api/v1/artworks/search?q=${query}` 
}