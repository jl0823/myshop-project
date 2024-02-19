<template>
    <div class="register">
        <Header title="注册" />
        <div class="img">买团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" autocomplete="username" />
            <van-field v-model="password" type="password" name="pass" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" autocomplete="current-password" />
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    注册
                </van-button>
                <van-button round block type="info" color="#ffc400" class="register" @click="toLogin">
                    去登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import Header from '@/components/MyHeader.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue';
import { Toast } from "vant";
export default {
    name: "MyRegister",
    components: {
        Header,
    },
    setup() {
        const router = useRouter();
        const data = reactive({
            username: '',
            password: ''
        })
        const register = (value) => {
            localStorage.setItem('userInfo', JSON.stringify(value));
            Toast("注册成功!");
            router.push('/login');
        }
        const onSubmit = (value) => {
            if(localStorage.userInfo){//判断用户名是否已经存在
                let userInfo = JSON.parse(localStorage.userInfo);
                if(userInfo.username === value.username){
                    Toast("用户名已存在!");
                    return;
                }
            }else{
                register(value)
            }
        };
        const toLogin = () => {
            router.push('/register')
        };

        return {
            onSubmit,
            toLogin,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="less" scoped>
.register {
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