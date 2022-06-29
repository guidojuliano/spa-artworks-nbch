import axios from "axios";

const url = "https://api.artic.edu/api/v1/artworks";

export const allArtowrks = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getArtworkPage = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getArtwork = async (id) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );
  return response.data;
};
