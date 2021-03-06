import {Commit} from 'vuex'
import { getComsIndex } from "@/commonApi/common";
const state: any={
    formList: {children:[],options:{size:'mini'}},
    comInformation:{}
}

const mutations: any= {
    setOptions(states: any,comId: string){
        states.comInformation=getComsIndex(states.formList.children,comId);
    }
}
const actions: any = {
    loginAction(context: { commit: Commit }, params: object) {
        context.commit('LOGIN_SET', params)
    }
}
// const comsOption = {
//     /**
//      * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
//      */
//     namespaced: true,
//     state: {
//         // token:''
//     },
//     getters: {
//         // 单个参数
//     },
//     mutations: {
//         updateOpiton(state: any,comId: string){
//             console.log()
//         }
//     },
//     actions: {}
// }

//导出
export default {
    namespaced: true, // 必须要开放
    state,
    mutations,
    // actions
}