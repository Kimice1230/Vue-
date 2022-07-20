import axios from 'axios'
let service = axios.create({
  baseURL: 'https://localhost:8080',
  timeout: 3000,

});
export default service