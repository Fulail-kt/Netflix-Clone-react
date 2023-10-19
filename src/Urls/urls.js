
import { API_KEY } from "../Constants/Constants"

 export const Orginals=`discover/tv?api_key=${API_KEY}&with_networks=213`
 export const Actions=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const Trending = `/trending/movie/day?api_key=${API_KEY}`;
export const search = `/search/movie?api_key=${API_KEY}&include_adult=false`;