import instance from '@utils/request'

export const getMymv = () => {
    return instance({
        method: 'GET',
        url: 'http://42.192.85.86:3001/getMymv'
    })
}