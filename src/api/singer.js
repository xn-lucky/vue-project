import instance from '@utils/request'

export const getzhuanji = (id) => {
  return instance({
    method: "GET",
    url: `/artist/album?id=${id}&limit=14`
  })
}
export const getMvs = (id) => {
  return instance({
    method: "GET",
    url: `/artist/mv?id=${id}`
  })
}
export const getSong = (id) => {
  return instance({
    method: "GET",
    url: `/artist/top/song?id=${id}`
  })
}
export const getSinger = () => {
  return instance({
    method: "GET",
    url: '/artist/list/?limit=100'
  })
}
export const SingerDescription = (id) => {
  return instance({
    method: "GET",
    url: `/artist/desc?id=${id}`
  })
}
export const getSingerList = (id, allId, num) => {
  return instance({
    method: "GET",
    url: `/artist/list?limit=100&type=${id}&area=${allId}&initial=${num}`
  })
}
/*  */

