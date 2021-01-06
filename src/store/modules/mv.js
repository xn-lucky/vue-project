import { getMymv } from "@api/mv";
export default {
    state: {
        // mvData: {},
        allRank: [],
        mvBanners: [],
        mvType: {},//每个类别下的数据(标题及列表)
        singerListData: {}//保存当前页数据

    },
    actions: {
        async getMvData({ commit }) {
            let mvData = await getMymv();
            commit('SETMVDATA', mvData)
        }
    },
    mutations: {
        SETMVDATA(state, mvData) {
            // state.mvData = mvData
            // 设置数据的时候将列表数据也一起设置
            state.mvType = mvData.mvType
            state.allRank = mvData.allRank
            state.mvBanners = mvData.mvBanners
        },
        //获取当前类别的当前页数据(处理)
        GETCURRENTPAGEDATA(state, { currentIndex, currentPage, size }) {
            state.singerListData = {
                ...state.mvType.list[currentIndex],
                itemList: state.mvType.list[currentIndex].itemList.slice((currentPage - 1) * size, size * currentPage)
            }
        }
    },
    getters: {
        // allRank(state) {
        //     return state.mvData.allRank
        // },
        // mvBanners(state) {
        //     return state.mvData.mvBanners
        // }
        // ,
        // mvType(state) {
        //     return state.mvData.mvType
        // },
    }
}