import request from '@utils/request'


export const getSongShowList = (id) => {
    return request({
        method: 'GET',
        url: '/getSongShowList?id=' + id,
    });
};