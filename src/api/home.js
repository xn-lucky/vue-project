import instance from "@utils/request";

export const getHomeBannersData = () => {
  return instance({
    method: "GET",
    url: "/getbanners",
  });
};
export const getSelectedHotSongs = () => {
  return instance({
    method: "GET",
    url: "/getselectedHotSongs",
  });
};
export const gethotSongsList = () => {
  return instance({
    method: "GET",
    url: "/gethotSongs",
  });
};
export const djProgram = () => {
  return instance({
    method: "GET",
    url: "http://localhost:3000/dj/hot",
  });
};
export const getHotSinger = () => {
  return instance({
    method: "GET",
    url: "http://localhost:3000/top/artists?offset=0&limit=5",
  });
};
export const getCommendMv = () => {
  return instance({
    method: "GET",
    url: "http://localhost:3000/personalized/mv",
  });
};
