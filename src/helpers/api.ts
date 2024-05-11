import axios from "axios";

const MY_KEY = "dFdL9pPUVdD2qgPGEAqxLf6EvzS402YMrkIF6_W6xK4";

export const requesForImages = async <T>(
  query: string,
  page: number
): Promise<T> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${MY_KEY}&query=${query}&per_page=12&page=${page}`
  );
  return response.data;
};
