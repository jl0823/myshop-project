<template>
    <div v-for="(item,index) in navList" :key="index">
        <nav-list-item :itemContent="item"></nav-list-item>
    </div>
</template>

<script>
import NavListItem from "./NavListItem";
    export default {
        name: "NavList",
        props: ['navList'],
        components:{
            NavListItem
        }
    }
</script>

<style lang="scss" scoped>

</style>