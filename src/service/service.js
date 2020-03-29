import createRequest from '../core/client/request'

const request = createRequest()


const getSearchResult = (keywords) => {
  return request.post('/service/test', { keywords })
}
export default {
  getSearchResult
}