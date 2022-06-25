import axios from "axios";

const allArtowrks = async (state) => {
  const response = await axios.get("https://api.artic.edu/api/v1/artworks");
  console.log(response.data);
  state(response.data.results);
};

export { allArtowrks };
