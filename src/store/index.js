import {createStore} from 'vuex'

export default createStore({
    state: {
        carList:[],//购物车的数据
        isDelete:true, //确定购物车底部是否展示
        edit:true, //编辑状态
    },
    mutations: {
        addcart(state,value){
            state.carList=value
            console.log(state.carList)
        },
        changeDelete(state){
            state.isDelete=!state.isDelete
        },
        delete(state,value){
            state.carList=value
        },
        edit(state,value){
            if(value){
                state.edit=true
            }else{
                 state.edit=!state.edit
            }
           
        }
    },
    actions: {

    }
})