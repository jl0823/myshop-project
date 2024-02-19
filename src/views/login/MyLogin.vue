<template>
    <div class="login">
        <Header title="登录"></Header>
        <div class="img">哈团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" autocomplete="username" />
            <van-field v-model="password" type="password" name="pass" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" autocomplete="current-password" />
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    登录
                </van-button>
                <van-button round block type="info" color="#ffc400" class="register" @click="toRegister">
                    去注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import Header from '@/components/MyHeader.vue'
import { useRouter } from 'vue-router'
import { reactive,toRefs } from 'vue';
import { Toast } from 'vant';
export default {
    name: "MyLogin",
    components: {
        Header
    },
    setup(){
        const router = useRouter();
        const data = reactive({
            username:'',
            password:'' 
        })
        const onSubmit =(value)=>{
            if(!localStorage.userInfo){
                Toast('账号未注册！');
                return;
            }else{
                let userInfo = JSON.parse(localStorage.userInfo);
                if(value.username === userInfo.username && value.password === userInfo.password){
                    Toast('登录成功！');
                    localStorage.setItem('isLogin',"login")
                    router.push('/')
                }else{
                    Toast('账号或密码错误！');
                    return;
                }
            }
        };
        const toRegister = () => {
            router.push('/register')
        };

        return{ 
            onSubmit,
            toRegister,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>