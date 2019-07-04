<template>
    <el-container style="width: 80%;margin-left: 10%">
        <el-aside width="500px">
            <el-row class="tac">
                <el-col :span="12">
                    <h5>产品方案</h5>
                    <el-menu
                            default-active="4"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <router-link to="/Product" style="display: inline-block;"><el-menu-item index="2">
                            <i class="el-icon-caret-right"></i>
                            <span slot="title">河长制管理信息系统</span>
                        </el-menu-item></router-link>
                        <router-link to="/Automatic" style="display: inline-block;"><el-menu-item index="3">
                            <i class="el-icon-caret-right"></i>
                            <span slot="title">自动在线监测系统</span>
                        </el-menu-item></router-link>
                        <router-link to="/River" style="display: inline-block;"><el-menu-item index="4">
                            <i class="el-icon-caret-right"></i>
                            <span slot="title">河道视频监控系统</span>
                        </el-menu-item></router-link>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main>
            <h1>河长制管理信息系统</h1>
            <p class="p_black">方案简介</p>
            <p class="p_content">
                根据河道网格化管理思想，依托GIS地理信息、GPS、基站定位、云计算、物联网、大数据、移动通信网等技术，实现河道管理信息静态展现、动态管理、常态跟踪，为全市落实河长工作的目标管理、任务督办、绩效考核提供抓手，为加强河长制相关责任机制、工作机制的有效落实提供有效支撑。
            </p>
            <img :src="product1" alt="">
            <p class="p_black">行业背景</p>
            <p class="p_content">
                江河湖泊具有重要的资源功能、生态功能和经济功能。但整体而言，我国当前水资源面临的形势仍十分严峻，水污染严重、水生态环境恶化、水资源短缺等问题比较突出，已成为制约经济社会可持续发展的主要瓶颈。为促进水资源可持续利用和经济发展方式转变，推动经济社会发展与水资源水环境承载能力相协调，保障经济社会长期平稳较快发展，2016年12月，中共中央办公厅和国务院办公厅印发《关于全面推行河长制的意见》，要求到2018年年底全面建立河长制，进一步加强河湖管理保护工作。
            </p>
            <p class="p_content">
                河湖管理保护是一项复杂的系统工程，涉及上下游、左右岸、不同行政区域和行业。在“河长制”管理中，如何集中掌握河湖所有数据、如何完善河长巡查制度、如何及时发现问题/解决问题等，都是新形势下的新问题新挑战。
            </p>
            <p class="p_black">
                解决方案
            </p>
            <p class="p_content">
                “河长制”管理信息系统，，通过河道网格化管理思想，对省、市、县（市、区）分级管理，整合现有各种基础数据、监测数据和监控视频，利用省、市、县三级传输网络快速收敛至管理信息系统，面向各级领导、工作人员、社会公众提供不同层次、不同纬度、不同载体的查询、上报和管理功能。
            </p>
            <img :src="product2" alt="">
            <p class="p_content">
                “河长制”管理信息系统包括统一的数据中心，消除信息孤岛，确保业务流程统一和数据完整。支持省、市、县三级管理。系统主要包括综合展现、巡查管理、问题处置、作战指挥、重点项目管理、报表查询、考核评价、综合办公、基础数据管理、统计分析、系统管理等功能，面向领导、工作人员、公众等三类用户分别提供电脑、PAD、手机等三种终端访问。
                <br>□  领导版
                <br>领导版支持PAD、电脑、大屏等方式访问，多纬度展现省、市、县（市、区）、镇（街道）四级专题分析图表，包括建设项目责任分解表、治水作战图、远景规划图、建设项目图、各种分布图、各种治理图、各种明细表等。
                <br>□  工作人员版:
                <br>工作人员版软件分为手机版和电脑版，主要提供日常巡查管理、日常工作管理、基础数据管理、事件上报核实、任务处理等功能。
                <br>□  公众版:
                <br>公众版手机应用软件提供事件上报、信息获取、互动参与、公众监督等功能。社会公众也可通过微信、电话、短信、网站等其它方式参与“五水共治”。
            </p>
            <p class="p_black">功能说明</p>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="序号">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="功能名称">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="功能描述">
                </el-table-column>
            </el-table>
            <p class="p_black">方案优势</p>
            <img :src="product3" alt="">
            <p class="p_black">管理创新</p>
            <p style="text-align: left">
                1) 河长金字塔设置、河道网格化管理
            </p>
            <p class="p_content">根据河道级别，系统支持市级、县（市、区）级、镇（街道）级、村（社区）级四级河长机制，每条河道实现四级河长金字塔式覆盖。每级河道划分起讫点、管理覆盖区域，调查和登记每块区域的河长制管理基础信息，实现河道的网格化管理。</p>
            <p style="text-align: left">
                2) 常态化巡查、集中受理、闭环处理
            </p>
            <p class="p_content"> 基层河长、巡查人员对所辖河道进行常态化巡查，发现问题后通过文字、照片、视频、语音等方式反馈，同时负责公众举报问题和职能部门处置结果的核实，同样通过文字、照片、视频等方式反馈核实结果。</p>
            <p class="p_content"> 面向公众开放有关河道环境问题的投诉举报通道，包括网站、公众版手机应用软件、语音、短信、微信等。举报内容包括举报留言、照片（视频）、位置信息、举报人信息、时间等，应尽量规范、完整，以确保内容的有效性。</p>
            <p class="p_content">按照所属地管理原则，以县为单位，进行集中受理、闭环处置。</p>
            <p style="text-align: left">
                3) 统一平台、分级管理
            </p>
            <p class="p_content">建设统一的河长制管理信息系统平台，消除信息孤岛，确保业务流程统一、数据完整。支持省、市、县三级管理。建立“河长制”管理监督规范，上一级定期检查下一级工作情况，并对检查中发现的问题提出整改要求。面向政府、职能部门和公众开放基于“河长制”管理工作的监督信息平台，公布河长信息、整治目标、举报处理情况、整改情况、考核情况等。</p>
            <p class="p_black">
                技术创新
            </p>
            <p style="text-align: left">
                1) 开放式平台、积木式组合
            </p>
            <p class="p_content">
                “河长制”管理信息系统可接入如水利、环保、城管、工商等共享数据，并进行数据资源的统一整合，是全容纳、分布式、开放式、灵活性的平台。
            </p>
            <p class="p_content">
                系统采用面向服务的体系结构，蚕蛹组件模型，将系统中每个功能细化成一个个不同的组件，通过接口和协议如搭积木般搭建模型来满足各级河长的实际工作需求。该方式具有服务利用率高、开发快、组合容易等优点。
            </p>
            <p style="text-align: left">
                2) 制式标准统一、通信平台融合
            </p>
            <p class="p_content">
                “河长制”管理信息系统采用融合通讯方式实现视频、语音的数据信息交互，对应急事件进行远程指挥调度：基于IP承载、SIP等标准协议的软交换架构，采用G.711、G.723、G.729等标准的语音编码格式，满足支持标准SIP协议和标准语音编码格式的音频终端接入；配备接入网关，实现非IP语音终端的语音信号转换；系统同时支持数字与模拟信号的接入，在融合平台中可实现数字中继、模拟语音和IP语音的格式转换。
            </p>
            <p class="p_content">
                系统通过视频接入网关以对接的方式把视频监控系统接入到视频融合平台上，也可直接接入各种视频编码器和数字摄像机，实现监控系统的统一的管理和调度。
            </p>
            <p style="text-align: left">
                3) 共享数据整合、辅助决策分析
            </p>
            <p class="p_content">
                现实中，政府许多部门部署了信息融合平台，由于采用的架构、协议、标准各不相同，使得数据共享困难。
            </p>
            <p class="p_content">
                为使“河长制”管理信息系统能更好地与其他应用系统对接，获取共享数据，依据面向服务的思想，采用WebService接口方式向应用系统提供服务接口，应用系统通过调用服务接口提供数据，系统获得数据后，可分析历史数据与事件的对应关系，结合现有水质水位数据，预判未来可能会发生的事件，为河长制管理提供辅助决策。
            </p>
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
                product1: '../../../static/img/product1.png',
                product2: '../../../static/img/product2.png',
                product3: '../../../static/img/product3.png',
                currentDate: new Date(),
                activeIndex: '1',
                tableData: [{
                    date: '1',
                    name: '综合展现',
                    province: '将建设项目数据、污染源数据、监测数据、监控视频等基础数据，各种专题数据，按照河道、河长、网格、行政区域、业务等各种纬度在GIS地图上进行生动展现'
                }, {
                    date: '2',
                    name: '巡查管理',
                    province: '管理河长的日常巡河工作，以及巡查统计。'
                }, {
                    date: '3',
                    name: '问题处置',
                    province: '上报、受理、处置、反馈的业务闭环受理系统'
                }, {
                    date: '4',
                    name: '作战指挥',
                    province: '根据区域或河道在地图上查询基础数据、河长信息、河长履职情况、水质情况等信息；并在地图上根据状态显示不同类型的重点项目，同时提供列表和地图分布展示'
                }, {
                    date: '5',
                    name: '重点项目管理',
                    province: '重点项目的项目信息管理、巡查计划、项目巡查、督办整改、整改反馈、综合查询等'
                }, {
                    date: '6',
                    name: '报表查询',
                    province: '综合查询主要为用户针对不同分类数据提供灵活的查询功能，查询结果以页面表格方式呈现。依据业务数据相关性提供事件查询、部件查询、河道/河流查询、网格查询、行政区域查询等功能'
                }, {
                    date: '7',
                    name: '考核评价',
                    province: '考核管理主要是目标责任人进行考核管理，以促进项目进度有效执行，实现责任到人的管理方式'
                }, {
                    date: '8',
                    name: '综合办公',
                    province: '文档管理、通信助理、信息发布、曝光台等功能'
                }, {
                    date: '9',
                    name: '基础数据管理',
                    province: '组织机构管理、行政区域管理、地图底图、河流管理、河道网格管理、部件管理、劣V类水体管理、摄像头信息维护等，并提供这些基础数据的统一采集、整合和管理'
                }, {
                    date: '10',
                    name: '统计分析',
                    province: '统计分析主要是针对不同类型事件生成相关统计报表，可直观展现事件结果。统计分析报表类型有表格、柱状图、饼状图等。统计分析结果可作为领导检查、作战分析、政府报告的数据来源。统计分析内容包括水质分析、部件统计、事件统计、任务统计、专项整治报表、水文简报等'
                }, {
                    date: '11',
                    name: '系统管理',
                    province: '包括用户管理、角色管理、权限管理、功能模块管理、系统配置、组织机构管理、部门管理、职员管理、日志管理、统一认证、统一登录等功能'
                }]
            }
        },
        mounted() {

        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClick(row) {
                console.log(row);
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
    .p_content{
        text-indent: 2em;
        text-align: left;
        line-height: 30px;
    }
    .p_black{
        font-weight:bold;
        text-align: left;
    }
</style>
