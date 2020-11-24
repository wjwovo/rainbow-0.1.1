<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo" mode="horizontal"
        background-color="transparent !important"
        :text-color="text"
        active-text-color="red"
        style="border-bottom: none"
        @select="handleSelect"
    >
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/teacher">筑梦师</el-menu-item>
        <el-menu-item index="/course">课程</el-menu-item>
        <el-menu-item index="/team">团队</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex: "/",
            };
        },
        props:{
            text: {
                type: String,
            },
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push(key)
            }
        }
    }
</script>

<style scoped>
    .el-menu-item {
        background-color: transparent !important;
    }
</style>