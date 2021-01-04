import instance from '@utils/request'

export const getSinger = () => {
  return instance({
    method: "GET",
    url:'/singer/class&json=true'
  })
}

