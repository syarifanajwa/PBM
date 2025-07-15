import axios from 'axios';

const API = axios.create({
  baseURL: 'http://10.0.2.2:5000/api', // jika di emulator Android
  // kalau HP asli → ganti dengan IP laptop: contoh 'http://192.168.1.10:5000/api'
});

export default API;
