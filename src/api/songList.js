import request from '@utils/request'


export const getSongList = () => {
    return request({
        method: 'GET',
        url: 'http://42.192.85.86:3001/getSongList'
    });
};