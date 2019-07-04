<template>
    <el-container>
        <el-main >
            <el-carousel height="400px" type="card">
                <el-carousel-item :key="1">
                    <img :src=hzbanner3  />
                </el-carousel-item>
                <el-carousel-item :key="2">
                    <img :src=hzbanner1  />
                </el-carousel-item>
                <el-carousel-item :key="3">
                    <img :src=hzbanner  />
                </el-carousel-item>
            </el-carousel>
            <el-row class="hz_banner_new">
                <el-col :span="6">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <span>新闻资讯</span>
                        </div>
                        <!--<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
                        <div class="block">
                            <el-image :src="hzbanner">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </div>
                        <div class="bottom clearfix" style="margin-top: 30px">
                            <time class="time">探访浙江省河长制管理信息系统 治水有了智慧“大脑”</time>
                        </div>
                        <el-button type="text" class="button">查看更多</el-button>
                    </el-card>
                </el-col>
                <el-col :span="6" :offset="3">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <span>产品方案</span>
                        </div>
                        <!--<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
                        <div class="block">
                            <el-image :src="hzbanner1">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </div>
                        <div class="bottom clearfix" style="margin-top: 30px">
                            <time class="time">江河湖泊具有重要的资源功能、生态功能和经济功能。但整体而言，我国当前水资源面临的形势仍十分严峻，水污染严重、水生态环境恶化、水资源短缺等问题比较突出，已成为制约经济社会可持续发展·····</time>
                        </div>
                        <el-button type="text" class="button">查看更多</el-button>
                    </el-card>
                </el-col>
                <el-col :span="6" :offset="3">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <span>公司介绍</span>
                        </div>
                        <!--<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
                        <div class="block">
                            <el-image  :src="hzbanner3">
                                <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </div>
                        <div class="bottom clearfix" style="margin-top: 30px">
                            <time class="time">公司是国内领先的行业信息化综合解决方案提供商，公司自主开发的智慧河长制管理信息系统，基于河长制的要求，致力于河长制建设，建立河湖网格化管理体系，融合处理、管理、监督、考核四个机制，助力“河长制”的全国实施，确保建立水环境保护长效机制。</time>
                        </div>
                        <el-button type="text" class="button">查看更多</el-button>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                hzlogo: '../../../static/img/hzlogo.jpg',
                hzbanner: '../../../static/img/hzbanner.jpg',
                hzbanner1: '../../../static/img/bannner1.png',
                hzbanner3: '../../../static/img/hzbanner3.png',
                currentDate: new Date(),
                activeIndex: '1',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        height: 200px;
        align-items: center;
        display: flex;
    }
    .el-footer{
        text-align: center;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .hz_header {
        background-color: white;
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

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .hz_banner_new{
        margin-top: 60px;
    }
    .time{
        line-height: 30px;
    }
    .hz_banner_new .bottom{
        padding-right: 30px;
        padding-left: 30px;
        text-align: left;
        text-indent:2em;
    }
    .hz_banner_new .el-image{
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
