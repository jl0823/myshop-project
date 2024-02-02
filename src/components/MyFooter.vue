<template>
    <div class="footer">
        <div class="items">
            <router-link to="/" class="items-nav" active-class="nav-color">
                <van-icon name="wap-home-o" size="30" />
                首页
            </router-link>
        </div>
        <div class="items">
            <router-link to="/cart" class="items-nav" active-class="nav-color">
                <van-icon name="cart-o" size="30" />
                购物车
            </router-link>
        </div>
        <div class="items">
            <router-link to="/order" class="items-nav" active-class="nav-color">
                <van-icon name="coupon-o" size="30" />
                订单
            </router-link>
        </div>
        <div class="items">
            <router-link to="/mine" class="items-nav" active-class="nav-color">
                <van-icon name="manager-o" size="30" />
                我的
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style lang="less" scoped>
.footer{
    display: flex;
    background-color: #fff;
    border-top: 0.5px solid #eee;
    font-size: 12px;
    .items{
        flex:1;
        .nav-color{
            color:#1989fa;
        }
        .items-nav{
            display: flex;
            flex-flow: column;
            align-items: center;
        }
    }
}
</style>