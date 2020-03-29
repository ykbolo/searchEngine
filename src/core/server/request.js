const axios = require('axios')

let createRequest = function () {
  const Request = axios.create({
    baseURL: 'http://localhost:8080/'
  })
  return Request
}
export default createRequest