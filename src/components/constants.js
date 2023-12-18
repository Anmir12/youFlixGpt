export const photoURL ="https://avatars.githubusercontent.com/u/88341402?v=4";

export const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const Popular_url ='https://api.themoviedb.org/3/movie/popular?page=1';

export const trending_url ="https://api.themoviedb.org/3/movie/top_rated?page=1";

export const upcoming_url ="https://api.themoviedb.org/3/movie/upcoming?page=1";

export const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const IMAGE_URL ="https://image.tmdb.org/t/p/w500/";


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

