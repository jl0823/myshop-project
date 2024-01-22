<template>
    <div class="home">
        <div class="content"></div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
    export default {
        name: 'MyHome',
        components:{
            MyFooter
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