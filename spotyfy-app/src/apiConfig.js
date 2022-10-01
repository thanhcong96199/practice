const { default: axios } = require('axios');

const tk = 'BQBR6q7Z7bzw-NgwpOADgQ5HeRZzVjfmcqMcpoSqg25ln196yokMFNNcYJM5Q0rGG4IeTflnSIp4p8QeIHK1HqPjpulh1RBV8ccKK-ahvjgpWia6rnLACkElg6Mk3irdvnNZ-EkqSQpz5PxchBPCA4Y4xN-LJclchvJ8BovxrsNm8o5ZB-rMyje9qdNcMBD_f8Y'
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tk}`,
  },
});

axios.interceptors.request.use(
  function (config) {
    if (tk) {
      config.headers.common.Authorization = `Bearer ${tk}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export const getApi = async (search) => {
  return await api
    .get(`search?q=${search}&type=track%2Cartist`)
    .then((res) => res.data.artists.items);
  // return res.data.artists.items;
};


export const getArtistTopTrack = async (artistsID) => {
  return await api
    .get(`artists/${artistsID}/top-tracks?market=ES`)
    .then((res) => res.data.tracks);
  // return res.data.artists.items;
};
