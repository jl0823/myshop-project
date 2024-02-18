<template>
    <Header :title="address"></Header>
    <van-address-edit 
        :area-list="areaList" 
        show-postal show-delete 
        show-set-default show-search-result
        :address-info="addressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']" 
        @save="onSave" 
        @delete="onDelete" 
    />
</template>

<script>
import Header from "@/components/MyHeader.vue"
import { reactive, toRefs,onMounted,computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from "vant"

export default {
    name: "MyAddressEdit",
    components: {
        Header
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const data = reactive({
            areaList: {
                province_list: {
                    110000: "广东省",
                    120000: "浙江省",
                },
                city_list: {
                    110100: "广州市",
                    110200: "深圳市",
                    120100: "杭州市",
                    120200: "宁波市",
                },
                county_list: {
                    110101: "天河区",
                    110102: "海珠区",
                    120102: "上城区",
                    130102: "下城区",
                }
            },
            addressInfo:{},
        })

        const onSave = (content) => {
            //新增和编辑
            if(route.query.type === 'add'){
                store.commit('addaddress',content)
            }else{
                store.commit('editaddress',content)
            }
            Toast('保存成功！');
            setTimeout(() => {
                router.back()
            },1000)
        }
        const onDelete = (content) => {
            store.commit('deleteaddress',content)
            Toast('删除成功！');
            setTimeout(() => {
                router.back()
            },1000)
        }
        const init = () => {
            store.state.userAddress.forEach(item => {
                if(item.id === Number(route.query.id)){
                    data.addressInfo = item;
                }
            })
        }
        const address = computed(()=>{
            return route.query.type === 'add' ? '新增地址' : '编辑地址';
        })
        onMounted(() => {
            init()
        })

        return {
            ...toRefs(data),
            onSave,
            onDelete,
            address
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-switch--on {
    background-color: #ffc400;
}
</style>