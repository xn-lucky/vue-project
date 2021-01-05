import { getMymv } from "@api/mv";
export default {
    state: {
        mvData: {}
    },
    actions: {
        async getMvData({ commit }) {
            let mvData = await getMymv();
            commit('SETMVDATA', mvData)
        }
    },
    mutations: {
        SETMVDATA(state, mvData) {
            state.mvData = mvData
        }
    },
    getters: {
        allRank(state) {
            return state.mvData.allRank
        },
        mvBanners(state) {
            return state.mvData.mvBanners
        },
        mvType(state) {
            return state.mvData.mvType
        },
    }
}