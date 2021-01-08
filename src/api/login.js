import instance from '@utils/request'

export const gitverification = (phone) => {
  return instance({
    method: 'GET',
    url: `http://42.192.85.86:3000/captcha/sent?phone=${phone}`
  })
}
export const gitverify = (phone,pass) => {
  return instance({
    method: 'GET',
    url: `http://42.192.85.86:3000/captcha/verify?phone=${phone}&captcha=${pass}`
  })
}