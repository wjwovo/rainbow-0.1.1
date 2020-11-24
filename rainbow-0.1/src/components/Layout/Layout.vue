<template>
    <div id="layout">
        <el-header class="container-fluid">
            <div style="height: 1px"></div>
            <Affix :offset-top="0" @on-change="change" style="width: 100%">
                <div :class="{'trans-white': isScroll, 'trans-none': isScrollBack}"  >
                    <div class="container">
                        <div class="row">
                            <div class="logo col-3" style="margin-top: -34px">
                                <img alt="彩虹筑梦课堂" src="@/assets/rainbow_logo.png" width="100px">
<!--                                https://cdn.jsdelivr.net/gh/love-ziji/CDN/rainbow_logo.png-->
                            </div>
                            <div class="search-box col-3">
                                <el-input placeholder="请输入内容" v-model="search" v-show="isScroll"></el-input>
                            </div>
                            <div class="col-6">
                                <Navigation text="#000"/>
<!--                                [isScroll?'#000':'#fff']-->
                            </div>
                        </div>
                    </div>
                </div>
            </Affix>
            <BgVideo/>
        </el-header>
        <el-main>
            <div style="height: 2000px;background: #666666"></div>
            <router-view/>
        </el-main>
        <el-footer>

        </el-footer>
    </div>
</template>

<script>
    import Navigation from "./Navigation";
    import Footer from "./Footer";
    import BgVideo from "../BgVideo/BgVideo";

    export default {
        name: "Layout",
        components: {BgVideo, Footer, Navigation},
        data() {
            return {
                search: '',
                isScroll: false,
                isScrollBack: false
            }
        },
        methods: {
            change: function (isScroll) {
                this.isScroll = isScroll;
                this.isScrollBack = !isScroll && true  //使得第一次访问页面不会添加white-none类
            },
        },

    }
</script>

<style scoped>
    .el-header {
        padding: 0;
        margin-bottom: 1000px;
    }

    .el-footer{
        padding: 0;
    }
    .search-box {
        margin-top: 15px;
    }

    .trans-white {
        width: 100%;
        animation: trans-white 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    .trans-none {
        animation: trans-none 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        padding-top: -10px;
    }

    @keyframes trans-white {
        from {
            height: 80px;
        }
        to {
            background: #fff;
            height: 60px;

        }
    }
    @keyframes trans-none {
        from {
            background: #fff;
            height: 60px;
        }
        to {
            height: 80px;
        }
    }
</style>