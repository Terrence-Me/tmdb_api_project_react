import axios from 'axios';

const KEY = '6e33035fa0621772e26e7510c45c539e';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    language: 'en-US',
    page: 1,
  },
});
