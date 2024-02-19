<template>
    <Header></Header>
    <div>
        <van-field v-model="name" label="昵称" placeholder="请输入昵称"></van-field>
        <van-field v-model="sign" label="个性签名" placeholder="个性签名" disabled=""></van-field>
        <van-field v-model="pass" label="密码" placeholder="请输入密码" autocomplete></van-field>
    </div>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="save">保存</van-button>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="logoout">退出登录</van-button>

</template>

<script>
import Header from "@/components/MyHeader";
import { reactive, toRefs } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
    export default {
        name: "MyInfoEdit",
        components: { 
            Header 
        },
        setup() {
            const router = useRouter()
            const data = reactive({
                name: '',
                sign: '战胜自己是命运的强者',
                pass: ''
            })
            const save = () =>{
                if(data.name && data.pass){
                    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                    let newUserInfo = {
                        user: data.name || userInfo.user,
                        pass: data.pass || userInfo.pass,
                    };
                    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
                    Toast.success('修改成功！');
                    router.push('/mine');
                }else{
                    Toast.fail('请输入完整信息！');
                }
            }
            const logoout = () =>{
                localStorage.removeItem('userInfo');
                Toast.success('退出成功！');
                router.push('/login'); 
            }

            return {
                ...toRefs(data),
                save,
                logoout
            }
        }
    }
</script>

<style lang="less" scoped>
// /deep/ .van-button--danger {
//   background-color: #ffc400;
//   border-color: #ffc400;
// }
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>