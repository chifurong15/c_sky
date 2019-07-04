<template>
    <el-header :height="90" class="hz_header" :span="24">
        <el-col class="hz_header_logo" :span="4">
            <img :src=hzlogo />
        </el-col>
        <el-col :span="20" class="hz_header_Navigation">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">产品方案</template>
                    <el-menu-item index="2-1"><router-link to="/Product">河长制管理信息系统</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="/Automatic">自动在线监测系统</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link to="/River">河道视频监控系统</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">新闻资讯</template>
                    <el-menu-item index="3-1"><router-link to="/New">行业新闻</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link to="/New">公司动态</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">合作案例</template>
                    <el-menu-item index="4-1"><router-link to="/Cooperation">典型案例</router-link></el-menu-item>
                    <el-menu-item index="4-2"><router-link to="/Cooperation">合作伙伴</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">关于公司</template>
                    <el-menu-item index="5-1"><router-link to="/Company">公司介绍</router-link></el-menu-item>
                    <el-menu-item index="5-2"><router-link to="/Company">商务合作</router-link></el-menu-item>
                    <el-menu-item index="5-3"><router-link to="/Company">招贤纳士</router-link></el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-header>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: ['activeIndex'],
        data() {
            return {
                hzlogo: '../../../static/img/hzlogo.jpg'
            }
        },
        mounted() {
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped>
    .hz_header {
        height: 90px;
        align-items: center;
        display: flex;
    }
    .hz_header .hz_header_logo {
        /*padding-top: 22.5px;*/
    }

    .hz_header .hz_header_Navigation {
        text-align: left;
    }
    a{
        display: inline-block;
    }
</style>
