import instance from '@utils/request'

export const getSinger = () => {
  return instance({
    method: "GET",
    url: 'artist/list/?limit=100'
  })
}
export const SingerDescription = () => {
  return instance({
    method: "GET",
    url: '/artist/desc?id=6452'
  })
}
export const getSingerList = (id, allId,num) => {
  return instance({
    method: "GET",
    url: `/artist/list?limit=100&type=${id}&area=${allId}&initial=${num}`
  })
}
/*  */

