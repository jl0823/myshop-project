<template>
    <div class="create-order">
        <Header title="创建订单" />
        <van-contact-card type="edit" :tel="tel" :name="name" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList" :key="index">
                <van-card 
                :num="item.num" 
                :price="item.price"
                :title="item.title"
                :thumb="item.pic" />
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>{{ totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" block color="#ffc400"
            @click="handleCreateOrder">生成订单</van-button>
        </div>
    </div>
</template>

<script>
import Header from "@/components/MyHeader"
import { reactive, toRefs,onMounted } from 'vue'
import { useStore } from "vuex"
import { Dialog } from "vant"
import { useRoute,useRouter } from "vue-router"
export default {
    name: "MyCreateOrder",
    components: {
        Header
    },
    setup() {
        const data = reactive({//相当于state
            tel: '15822013160',
            name: '张三',
            totalPrice:0
        })
        const store = useStore()
        //用于计算结算后的价格
        const initPrice = ()=>{
            let price = 0
            if(store.state.orderList.length>0){
                store.state.orderList.forEach(item=>{
                    price += item.price*item.num
                })
            }
            data.totalPrice = price
        }
        //初始化用户的地址
        const initUser = ()=>{
            store.state.userAddress.forEach(item=>{
                if(item.isDefault){
                    data.name = item.name;
                    data.tel = item.tel;
                }
            })
        }
        //生成订单的方法
        const router = useRouter()
        const route = useRoute()
        const handleCreateOrder = ()=>{
            Dialog({
                title: '提示',
                message: '生成订单成功',
            }).then(() => {
                //要和购物车联系起来
                let newList = store.state.carList.filter(item=>{
                    //过滤掉已经加入订单的商品
                    return !route.query.list.includes(item.id+"");
                })
                store.commit("delete",newList);
                store.commit("orderListEd");
                router.push("/order");
            })
        }
        //Mounted钩子函数，在组件挂载后调用
        onMounted(()=>{
            initPrice();
            initUser();
        })
        const edit = () => {
            console.log('edit')
        }
        return { ...toRefs(data), edit, store,handleCreateOrder }//toRefs将响应式对象转换为普通对象
    }
}
</script>

<style lang="less" scoped>
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>