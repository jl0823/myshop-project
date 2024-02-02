<template>
    <div class="content-item">
        <div class="left">
            <van-checkbox :name="item.id" v-if="showCheckBox" checked-color="#ffc400" />
            <img :src="item.pic" alt="" srcset="">
            <div class="text">
                <div class="title">{{ item.title }}</div>
                <van-icon name="add-o" v-if="item.add" 
                @click="handleAdd(item.id)" class="van-icon" />
                <van-stepper v-else 
                    v-model="item.num"
                    @change="handleChange" 
                    :name="item.id" />
            </div>
        </div>
        <div class="price">
            ￥{{ item.price }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ListItem",
    data(){
        return {
            localItem: { ...this.item } // 创建一个本地副本用于后续修改
        }
    },
    props: ['item','handleAdd','handleChange','showCheckBox'],
}
</script>

<style lang="less" scoped>
.content-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .price {
        font-size: 16px;
        font-weight: 600;
    }

    .left {
        display: flex;
        align-items: center;
        flex: 1;
        img {
            margin-left: 10px;
            width: 60px;
            height: 60px;
            margin-right: 10px;
            border-radius: 10px;
        }
        .text {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            height: 100%;
            position: relative;
            flex: 1;
            .title {
                font-size: 16px;
            }
            .van-icon {
                color: red;
                font-size: 20px;
                position: absolute;
                right: 4px;
                bottom: 4px;
            }
        }
    }
}</style>