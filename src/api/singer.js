import instance from '@utils/request'

export const getSinger = () => {
  return instance({
    method: "GET",
    url: 'kugou/singer/class&json=true'
  })
}
export const getSingerList = (id) => {
  return instance({
    method: "GET",
    url: `kugou/singer/list/${id}?json=true`
  })
}

