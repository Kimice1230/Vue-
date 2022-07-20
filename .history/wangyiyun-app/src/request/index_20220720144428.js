const instance = axios.create({
  baseURL: 'https://localhost:8080/',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});