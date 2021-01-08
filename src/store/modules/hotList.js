import { getSongsUrl } from '@api/singer'

export default {
  state: {
    checkedSongs1: []
  },
  actions: {
    async getSong ({ commit }, id) {
      debugger
      let Url = await getSongsUrl(id)
      commit('GETSONGS', Url)
    }
  },
  mutations: {
    checkedSongs1 (state, checkedSongs1) {
      state.checkedSongs1 = checkedSongs1;
    },
    GETSONGS (state, Url) {
     const img = localStorage.getItem('image')
      let data = {
        songsName: Url.br,
        songurl: Url.url,
        songimg: img,
        id: Url.id
      }
      state.checkedSongs1 = data
    }
  },
  getters: {

  }
}