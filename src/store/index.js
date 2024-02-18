import { createStore } from 'vuex'

export default createStore({
    state: {
        carList: [],//购物车的数据
        isDelete: true, //确定购物车底部是否展示
        edit: true, //编辑状态
        orderList: [], //订单列表
        userAddress: [ //用户地址
            {
                id: 1001,
                name: 'jason',
                tel: '15874858888',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
            },
            {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
            },
        ],
        orderListEnd: [], //订单列表结束
    },
    mutations: {
        addcart(state, value) {
            state.carList = value
            console.log(state.carList)
        },
        changeDelete(state) {
            state.isDelete = !state.isDelete
        },
        delete(state, value) {
            state.carList = value
        },
        edit(state, value) {
            if (value) {
                state.edit = true
            } else {
                state.edit = !state.edit
            }

        },
        pay(state, value) {
            state.orderList = value
        },
        orderListEd(state) {
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        },
        addaddress(state, value) {
            state.userAddress.map((item) => {
                if (value.isDefault) {
                    item.isDefault = false
                }
            })
            // console.log(value)
            value.id = state.userAddress.length + 1
            state.userAddress.push(value)
            // console.log(state.userAddress)
        },
        editaddress(state, value) {
            state.userAddress = state.userAddress.map((item) => {
                if (value.isDefault) {
                    item.isDefault = false
                }
                // if (item.id == value.id) {
                //     return value;
                // } else {
                //     return item;
                // }
                return item.id == value.id ? value : item   
            })
        },
        deleteaddress(state, value) {
            state.userAddress = state.userAddress.filter((item) => {
                return !(item.id == value.id)
            })
            if (value.isDefault) {
                state.userAddress[0].isDefault = true
            }
        }
    },
    actions: {

    }
})