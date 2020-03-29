import axios from 'axios'

let createRequest = function () {
  const Request = axios.create({
    baseURL: '/api'
  })
  return Request
}
export default createRequest