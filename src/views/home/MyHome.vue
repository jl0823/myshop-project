<template>
    <div class="home">
        <div class="content">
            <!-- 头部部分 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>links秦皇岛</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主要导航区域 -->
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item, index) in big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(item, index) in small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="van-tabs">
                    <van-tab v-for="(item,index) in centent_nav_list" :key="index"
                    :title="item.tab">
                        <nav-list :navList="item.data"></nav-list>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'
import { reactive, toRefs,ref} from 'vue'
import NavList from './components/NavList.vue'
export default {
    name: 'MyHome',
    components: {
        MyFooter,NavList
    },
    setup() {
        let data = reactive(
            {
                big_sort: [
                    {
                        name: "美食",
                        icon: "icon-apple-and-pear",
                    },
                    {
                        name: "甜点饮品",
                        icon: "icon-drink",
                    },
                    {
                        name: "超市便利",
                        icon: "icon-bianzu",
                    },
                    {
                        name: "生鲜果蔬",
                        icon: "icon-bianzubeifen",
                    },
                    {
                        name: "买药",
                        icon: "icon-yaopin",
                    },
                ],
                small_sort: [
                    {
                        name: "午餐",
                        icon: "icon-wucan",
                    },
                    {
                        name: "买酒",
                        icon: "icon-jiushui",
                    },
                    {
                        name: "新鲜水果",
                        icon: "icon-icon-test",
                    },
                    {
                        name: "汉堡披萨",
                        icon: "icon-hanbaopisa",
                    },
                    {
                        name: "休闲饮品",
                        icon: "icon-tianpinyinpin-03",
                    },
                    {
                        name: "夜宵",
                        icon: "icon-yexiao",
                    },
                    {
                        name: "吐司",
                        icon: "icon-tusi",
                    },
                    {
                        name: "跑腿",
                        icon: "icon-paotuiAPP",
                    },
                    {
                        name: "美人佳丽",
                        icon: "icon-beautifullady4",
                    },
                    {
                        name: "全部分类",
                        icon: "icon-quanbufenlei",
                    },
                ],
                centent_nav_list: [
                    {
                        tab: "天天神券",
                        data: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "隆江猪脚饭",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                        ],
                    },
                    {
                        tab: "减配送费",
                        data: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                        ],
                    },
                    {
                        tab: "点评高分",
                        data: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                        ],
                    },
                    {
                        tab: "会员满减",
                        data: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "酸菜鱼",
                                sales: "2888",
                                price: "20",
                                label: ["门店上新", "很下饭"],
                            },
                        ],
                    },
                ],
            }
        )
        const active = ref(0)
        return { 
            ...toRefs(data),
            active
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;

    .content {
        flex: 1;
        overflow-y: auto;

        .header {
            background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;

            .text {
                font-size: 20px;
                font-weight: 600;
            }

            .location {
                font-size: 14px;

                span {
                    margin: 0 5px;
                }
            }
        }

        .main {
            margin-top: -30px;

            .main-bg {
                background-image: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0px 20px;
                border-radius: 30px 30px 0px 0px;

                .search {
                    position: relative;

                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }

                    .search-text {
                        position: absolute;
                        top: 1px;
                        right: -6px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        font-size: 14px;
                        text-align: center;
                        font-weight: 500;
                    }
                }

                .sort {
                    padding: 20px 0px;

                    .big-sort {
                        display: flex;

                        div {
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            flex-flow: column nowrap;
                            align-items: center;

                            .icon {
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }

                    .small-sort {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;

                        div {
                            display: flex;
                            justify-content: center;
                            flex-flow: column nowrap;
                            align-items: center;
                            width: 20%;
                        }

                        .icon {
                            width: 30px;
                            height: 30px;
                            margin: 10px;
                        }
                    }
                }
            }
            .van-tabs{
                padding: 0px;

            }
        }
    }
}
/deep/ .van-tabs__wrap{
    border-radius: 10px;
}
</style>