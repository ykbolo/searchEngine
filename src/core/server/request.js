const axios = require('axios')

let createRequest = function () {
  const Request = axios.create({
    baseURL: 'http://localhost:3000/'
  })
  return Request
}
export default createRequest