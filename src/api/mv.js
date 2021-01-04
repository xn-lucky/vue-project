import instance from '@utils/request'

export const getMvBanners = () => {
    return instance({
        method: 'GET',
        url: '/getbanners'
    })
}