<template>
    <div class="home">
        <Header title="订单"></Header>
        <div class="content">
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in navData" :key="index">
                    <template v-if="item === '全部' && store.state.orderListEnd.length">
                        <div v-for="(value, index) in store.state.orderListEnd" :key="index">
                            <van-card :num="value.num" :price="value.price" :title="value.title" :thumb="value.pic" />
                        </div>
                    </template>
                    <div v-else>
                        <Empty></Empty>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
import Header from '@/components/MyHeader.vue'
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Empty from '@/components/MyEmpty.vue'
export default {
    name: 'MyOrder',
    components: {
        MyFooter,
        Header,
        Empty
    },
    setup() {
        const data = reactive({
            navData: ["全部", "交易完成", "待付款", "待发货", "已收货"]
        });
        // 获取vuex中的数据
        const store = useStore();

        return {
            ...toRefs(data),
            store
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>