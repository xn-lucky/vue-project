import instance from '@utils/request'


export const getHomeData = () => {
    return instance({
        method: 'GET',
        url: '/getbanners'
    });
};