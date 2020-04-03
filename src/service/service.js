import createRequest from '../core/client/request'

const request = createRequest()


const getSearchResultDefault = (keywords, start, hit) => {
  return request.post('/service/default', { keywords, start, hit })
}
export default {
  getSearchResultDefault
}