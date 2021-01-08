import instance from "@utils/request";

export const getHomeBannersData = () => {
  return instance({
    method: "GET",
    url: "http://42.192.85.86:3001/getbanners",
  });
};
export const getSelectedHotSongs = () => {
  return instance({
    method: "GET",
    url: "http://42.192.85.86:3001/getselectedHotSongs",
  });
};
export const gethotSongsList = () => {
  return instance({
    method: "GET",
    url: "http://42.192.85.86:3001/gethotSongs",
  });
};
export const djProgram = () => {
  return instance({
    method: "GET",
    // url: "http://localhost:3000/dj/hot",
    url: "http://42.192.85.86:3000/dj/hot",
  });
};
export const getHotSinger = () => {
  return instance({
    method: "GET",
    // url: "http://localhost:3000/top/artists?offset=0&limit=5",
    url: "http://42.192.85.86:3000/top/artists?offset=0&limit=5",
  });
};
export const getCommendMv = () => {
  return instance({
    method: "GET",
    // url: "http://localhost:3000/personalized/mv",
    url: "http://42.192.85.86:3000/personalized/mv",
  });
};
export const getNewSong = (type = 0) => {
  return instance({
    method: "GET",
    // url: `http://localhost:3000/top/song?type=${type}`,
    url: `http://42.192.85.86:3000/top/song?type=${type}`,
  });
};
