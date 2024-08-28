// API URL's
export const moviePoster = "https://image.tmdb.org/t/p/w500";
export const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
export const API = `https://api.themoviedb.org/3`;
export const movieAPI = `${API}/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
export const searchAPI = `${API}/search/movie?language=en-US&api_key=${apiKey}&query=`;

const APP_FOLDER_NAME = "35mm-app";
const OTHER_GLOBAL = "other-global";
export { APP_FOLDER_NAME, OTHER_GLOBAL };
