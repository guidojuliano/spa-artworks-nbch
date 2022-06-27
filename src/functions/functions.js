import axios from "axios";

export const allArtowrks = async () => {
  const response = await axios.get("https://api.artic.edu/api/v1/artworks");
  return response.data;
};

export const getArtworkPage = async (page) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${page}`
  );
  return response.data;
};

export const getArtwork = async (id) => {
  const response = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  return response.data;
}