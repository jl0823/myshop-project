<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item, index) in store.state.carList" :key="index">
                    <list-item :item="item" :handleChange="handleChange" 
                    :showCheckBox="true"></list-item>
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" 
        class="submit-all" button-color="#ffc400" v-if="store.state.isDelete">
            <van-checkbox v-model="submitChecked" checked-color="#ffc400"
            @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy" v-else>
            <div class="left">
                <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
            </div>
            <div class="delete" @click="handleDelete">
                删除
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted,computed } from 'vue';
import { useStore } from 'vuex'
import ListItem from '@/components/ListItem.vue';
import {Toast} from 'vant'
export default {
    name: "CartDetail",
    props:['changeShow'],
    components: {
        ListItem
    },
    setup(props) {
        const store = useStore();
        const data = reactive({
            checked: [],
            submitChecked: true
        });
        //定义handleAdd方法
        const handleChange = (value, detail) => {
            store.state.carList.map((item) => {
                if (item.id === detail.name) {
                    item.num = value;
                }
            });
        };

        const init = () => {
            data.checked = store.state.carList.map((item) => item.id);
        }

        onMounted(() => {
            init();
        })
        const onSubmit = () => {}
        //定义全选方法
        const choseAll = () => {
            if(data.checked.length !== store.state.carList.length){
                init()
            }else{
                data.checked = []
            }
        }
        //设置每个菜单选中状态
        const groupChange = (result)=>{
            if(result.length === store.state.carList.length){
                data.submitChecked = true
            }else{
                data.submitChecked = false
            }
            data.checked = result
        }
        //声明一个变量用来显示存储菜品的价格
        const allPrice = computed(()=>{
            let countList = updateData();
            let sum = 0;
            countList.forEach(item=>{
                sum += item.price * item.num;
            })
            return sum*100;
        })
        //删除商品
        const updateData = (type)=>{
            return store.state.carList.filter(item=>{
                return type === 'delete' ? !data.checked.includes(item.id) : data.checked.includes(item.id)
            })
        }
        const handleDelete = ()=>{
            //判断data中checked的值是否为空
            if(data.checked.length){
                store.commit('delete',updateData('delete'))
                data.checked = []
                //购物车没有数据的时候
                if(!store.state.carList.length){
                    props.changeShow();
                    store.commit('edit',"delete")
                }
            }else{
                Toast.fail('请选择要删除的商品')
            }
        }

        //将数据返回到state中使用
        return {
            ...toRefs(data),
            store,
            handleChange,
            onSubmit,
            choseAll,
            groupChange,
            allPrice,
            handleDelete
        };
    }
}
</script>

<style lang="less" scoped>
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit-all {
        position: fixed;
        bottom: 46px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>