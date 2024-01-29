<template>
    <div class="item">
        <img :src="itemContent.pic" alt="">
        <div class="item-right">
            <div class="title">{{ itemContent.title }}</div>
            <div class="sales">{{ itemContent.sales }}</div>
            <div class="price">{{ itemContent.price }}</div>
            <div class="label">
                <div v-for="(value,index) in itemContent.label" :key="index">
                    {{ value }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavListItem",
        props: ['itemContent'],
    }
</script>

<style lang="less" scoped>
.item{
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item-right{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        .title{
            font-size: 18px;
        }
        .label{
            display: flex;
            div{
                background-color: #ffc400;
                padding: 2px 5px;
                border-radius: 5px;
            }
            div:not(:first-child){
                margin-left: 5px;
            }
        }
    }
}
.item:not(:first-child){//不是第一个的时候
    margin-top: 10px;
}
</style>