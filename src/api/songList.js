import request from '@utils/request'


export const getSongList = () => {
    return request({
        method: 'GET',
        url: '/songList'
    });
};