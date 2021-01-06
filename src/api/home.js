import instance from '@utils/request'


export const getHomeBannersData = () => {
    return instance({
        method: 'GET',
        url: '/getbanners'
    });
};

