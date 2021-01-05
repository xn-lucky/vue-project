import instance from '@utils/request'

export const getMymv = () => {
    return instance({
        method: 'GET',
        url: '/getMymv'
    })
}