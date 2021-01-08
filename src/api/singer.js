import instance from '@utils/request'

export const getzhuanji = (id) => {
  return instance({
    method: "GET",
    url: `/artist/album?id=${id}&limit=14`
  })
}
export const searchSong = (text) => {
  return instance({
    method: "GET",
    url: `/search/suggest?keywords=${text}`
  })
}
export const getSongsUrl = (id) => {
  return instance({
    method: "GET",
    url: `/song/url?id=${id}`
  })
}
export const getMvVideo = (id) => {
  return instance({
    method: "GET",
    url: `/mv/detail?mvid=${id}`
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

