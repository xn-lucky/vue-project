import instance from '@utils/request'

export const gitverification = (phone) => {
  return instance({
    method: 'GET',
    url: `/captcha/sent?phone=${phone}`
  })
}
export const gitverify = (phone,pass) => {
  return instance({
    method: 'GET',
    url: `/captcha/verify?phone=${phone}&captcha=${pass}`
  })
}