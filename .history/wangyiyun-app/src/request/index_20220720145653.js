import axios from 'axios'
let service = axios.create({
  baseURL: 'https://localhost:8000/',
  timeout: 3000,

});
export default service