import axios from 'axios'

let createRequest = function () {
  var baseURL = './api'
  if (this.$__dev__ !== 'dev') {
    baseURL = '127.0.0.1:3000'
  }
  const Request = axios.create({
    baseURL: baseURL
  })
  return Request
}
export default createRequest