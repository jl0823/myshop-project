import { ADDCART } from "./mutation-types";
export default {
    [ADDCART](state, value) {
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
}