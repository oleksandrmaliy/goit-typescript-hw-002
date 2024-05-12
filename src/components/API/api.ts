import axios from 'axios';

const ACCESSCODE = 'dFdL9pPUVdD2qgPGEAqxLf6EvzS402YMrkIF6_W6xK4';

export const requesForImages = async <T>(query: string, page: number): Promise<T> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESSCODE}&query=${query}&per_page=12&page=${page}`
  );
  return response.data;
};
