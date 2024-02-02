<template>
    <div class="home">
        <my-header title="购物车" :edit="true"></my-header>
        <CartDetail v-if="isShow" :changeShow="changeShow"></CartDetail>
        <my-empty v-else></my-empty>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import MyHeader from '@/components/MyHeader.vue'
import CartDetail from './components/CartDetail.vue'
import { onMounted,ref } from 'vue'
import { useStore } from 'vuex'
    export default {
        name: 'MyCart',
        components:{
            MyFooter,
            MyEmpty,
            MyHeader,
            CartDetail
        },
        setup(){
            const isShow = ref(true);
            const store = useStore();

            const init = ()=>{
                if(store.state.carList.length === 0){
                    isShow.value = false;
                }
            };
            //调用changeShow方法
            const changeShow = ()=>{
                isShow.value = false;
            }
            onMounted(()=>{
                init();
            });
            return {
                isShow,
                changeShow
            };
        }
    }
</script>

<style lang="less" scoped>
.home{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex:1;
        overflow-y: auto;
    }
}
</style>