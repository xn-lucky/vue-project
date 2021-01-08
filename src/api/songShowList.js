import request from '@utils/request'


export const getSongShowList = (id) => {
    return request({
        method: 'GET',
        url: 'http://42.192.85.86:3001/getSongShowList?id=' + id,
    });
};