<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" 
        :items="items" @click-nav="navClick">
            <template #content>
                <div v-for="(item,index) in subItem" :key="index" class="item-bg">
                    <list-item 
                    :item="item" 
                    :handleAdd="handleAdd"
                    :handleChange="handleChange"></list-item>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
// import FoodListItem from "./FoodListItem.vue";
import ListItem from "@/components/ListItem.vue";
export default {
    name: "FoodList",
    props: ["index", "foodData"],
    components: { 
        // FoodListItem,
        ListItem },
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [],
            subItem:[]
        })
        //初始化数据
        const initData = () => {
            let newArray = [];
            props.foodData?.items?.forEach((item,index) => {
                newArray.push({
                    text: item.text
                })
                //最后subItem只是最后一项,解决：对应索引进行赋值
                if(data.activeIndex === index){
                    data.subItem = item.children;
                }
                
            })
            data.items = newArray;
        }

        initData();
//点击左侧导航
        const navClick = (index) => {
            data.activeIndex = index;
            initData();
        };
        //用于单击加号时，加号隐藏，计步器显示
        const handleAdd = (id) => {
            data.subItem.forEach((item) => {
                if(item.id === id){
                    item.add=false
                    item.num++;
                }
            })
        }
        //用于实时变化data数据中num数据
        const handleChange = (value,detail) => {
            data.subItem.forEach((item) =>{
                if(item.id === detail.name){
                    item.num = value;
                }
            })
        }
        return {
             ...toRefs(data),
             navClick,
             handleAdd,
             handleChange
        }
    }
}
</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>