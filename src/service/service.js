import createRequest from '../core/client/request'

const request = createRequest()


const getSearchResult = (keywords) => {
  return request.get('/service/test', { keywords })
}
export default {
  getSearchResult
}