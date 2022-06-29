import axios from "axios";


export const allArtowrks = async (url) => {
  const response = await axios.get(url);
  return response.data;
};


export const getArtwork = async (id) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );
  return response.data;
};
