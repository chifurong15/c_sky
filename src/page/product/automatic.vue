<template>
    <el-container style="width: 80%;margin-left: 10%">
        <el-aside width="500px">
            <el-row class="tac">
                <el-col :span="12">
                    <h5>产品方案</h5>
                    <el-menu
                            default-active="3"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <router-link to="/Product" style="display: inline-block;">
                            <el-menu-item index="2">
                                <i class="el-icon-caret-right"></i>
                                <span slot="title">河长制管理信息系统</span>
                            </el-menu-item>
                        </router-link>
                        <router-link to="/Automatic" style="display: inline-block;">
                            <el-menu-item index="3">
                                <i class="el-icon-caret-right"></i>
                                <span slot="title">自动在线监测系统</span>
                            </el-menu-item>
                        </router-link>
                        <router-link to="/River" style="display: inline-block;">
                            <el-menu-item index="4">
                                <i class="el-icon-caret-right"></i>
                                <span slot="title">河道视频监控系统</span>
                            </el-menu-item>
                        </router-link>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main>
            <h1>自动在线水质监测系统概述</h1>
            <p class="p_black">方案简介</p>
            <p style="text-align: left">
                自动在线水质监测系统由前端水质传感器、数据采集传输终端以及数据展示平台三部分组成。
            </p>
            <p class="p_content">
                1)前端各个水质参数电极传感器、分析仪等以有线方式连接到1000A+B 无线基站（数据采集传输终端），传感器数量根据所在水域监测参数数量而定，每台1000A+B 基站可支持6 路模拟量传感器以及3 台水质分析仪。
            </p>
            <p class="p_content">
                2)1000A+B 无线基站将传感器采集到的数据进行实时处理，然后通过GPRS 方式无线发送到固定的IP 网络。
            </p>
            <p class="p_content">
                3)主控室数据接收，主控室配有固定的IP 网络来接收GPRS 发送的数据，同时在高清显示器上显示所有的数据和预警信息，通过简单的软件操作可进行曲线绘制，历史数据查询，图表的显示及打印。如图所示：
            </p>
            <img :src="automatic1" alt="">
            <p class="p_black">系统特点及性能介绍</p>
            <p class="p_content">
                江河湖泊具有重要的资源功能、生态功能和经济功能。但整体而言，我国当前水资源面临的形势仍十分严峻，水污染严重、水生态环境恶化、水资源短缺等问题比较突出，已成为制约经济社会可持续发展的主要瓶颈。为促进水资源可持续利用和经济发展方式转变，推动经济社会发展与水资源水环境承载能力相协调，保障经济社会长期平稳较快发展，2016年12月，中共中央办公厅和国务院办公厅印发《关于全面推行河长制的意见》，要求到2018年年底全面建立河长制，进一步加强河湖管理保护工作。
            </p>
            <p class="p_content">
                系统稳定性是使用单位最为关心的问题，也是我们设计施工单位最为重视的项目成功的基本点。我们始终把用户的要求作为设计准则：只有稳定运行的系统，才能确保贵单位通过水质在线监测系统实现现代化、自动化监测的目的。
            </p>
            <p class="p_content">系统的技术先进性是系统高性能的保证和基础，同时可有效地减少使用人员和系统维护人员的麻烦。
                良好的可扩展性则是为了用户的发展考虑。可扩展性保证当用户有更多的要求时，引入的新设备可以顺利地与本次配备的设备共同工作，进一步扩展与提高系统的性能。
            </p>
            <p class="p_black">
                技术指标
            </p>
            <p class="p_content">1)水质在线监测系统技术指标
            </p>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="系统名称">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="技术指标">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="">
                <template slot-scope="scope">
                    <img :src="scope.row.province" alt="">
                </template>
            </el-table-column>
        </el-table>
            <p class="p_content">2)电极式传感器技术指标
            </p>
            <el-table
                    :data="tableData1"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="传感器名称">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="技术指标">
                    <template slot-scope="scope">
                        <span v-html="scope.row.name"></span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="">
                    <template slot-scope="scope">
                        <img :src="scope.row.province" alt="">
                    </template>
                </el-table-column>
            </el-table>
            <p class="p_content">3) COD 分析仪技术指标
            </p>
            <el-table
                    :data="tableData3"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="传感器名称">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="技术指标">
                    <template slot-scope="scope">
                        <span v-html="scope.row.name"></span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="">
                    <template slot-scope="scope">
                        <img :src="scope.row.province" alt="">
                    </template>
                </el-table-column>
            </el-table>
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
                automatic1: '../../../static/img/automatic.jpg',
                automatic2: '../../../static/img/automatic1.jpg',
                product3: '../../../static/img/product3.png',
                currentDate: new Date(),
                activeIndex: '1',
                tableData: [{
                    date: '1000A+B系统',
                    name: '● 尺寸：39cm(L)X31cm(W)X17cm(H)；\n' +
                    '\n' +
                    '● 可同时挂带6种传感器，4种分析仪进行实时在线监测；\n' +
                    '\n' +
                    '● 支持GPS定位（精度为10米）；\n' +
                    '\n' +
                    '● 支持多种无线通信功能：GPRS/WIFI/ZIGBEE；\n' +
                    '\n' +
                    '● 支持能量管理功能\n' +
                    '\n' +
                    '● LED显示，20cm(D)X18cm(W)\n' +
                    '\n' +
                    '● 远程控制；\n' +
                    '\n' +
                    '● 报警功能',
                    province: `../../../static/img/automatic1.jpg`
                },
                    {
                        date: '主控室服务器及软件',
                        name: '● 客户专属账号密码登陆\n' +
                        '\n' +
                        '● 支持Window，LINUX主控室服务器；\n' +
                        '\n' +
                        '● 支持浏览器数据查询，显示；\n' +
                        '\n' +
                        '● 支持数据库数据存储、历史数据调用和查询；'
                    }],
                tableData1: [{
                    date: 'PH传感器',
                    name: `● 输出: 4-20 mA<br>
● 范围: 0-14 pH<br>
● 精度: 2% 全量程<br>
● 最大压力: 40 PSI<br>
● 工作电压: 10-30 VDC<br>
● 工作电流: 5.5 mA+传感器输出<br>
● 预热时间: 3秒，最少<br>
● 工作温度: -5°-+55°C<br>
● 探头尺寸: 3.2cm 直径x 25.4cm长<br>
● 探头重量: 454g`,
                    province: `../../../static/img/automatic2.png`
                },
                    {
                        date: '浊度',
                        name: `● 种类: 硅膜片，湿/湿传感器；<br>

● 量程：0-3', 0-15', 0-30', 0-60', 0-120',0-250', 0-500'；<br>

● 线性: ±0.1% FS；<br>

● 精度：稳定在整个量程±0.1% ,35°F 到70°F (1.37° to 21.1°C) 范围内波动±0.2%；<br>

● 超过量程深度:小于满量程2倍；<br>

● 开机后初始响应时间: 3秒以内；<br>

● 工作温度：-40°到+85°C；<br>

● 重量1/2 lb (227 g)`,
                        province: `../../../static/img/automatic3.png`
                    },
                    {
                        date: '电导率传感器',
                        name: `● 范围：-500 to +500mV<br>

● 精度: 整个量程2%<br>

● 最大压力: 40 psi<br>

● 开机后初始响应时间: 3秒以内；<br>

● 工作温度：-40° to +55°C；<br>

● 尺寸：10-1/2" L x 1" Diameter (26.7 cm L x 2.5 cm Dia.)<br>

● 重量: 8 oz (227 g)`,
                        province: `../../../static/img/automatic4.png`
                    },
                    {
                        date: '溶解氧传感器',
                        name: `● 输出: 4-20 mA<br>

● 范围: 0-100%饱和, 0-8 ppm, 温度补偿到25°C<br>

● 精度: ±0.5% 全量程<br>

● 最大压力: 40 PSI<br>

● 工作电压: 10-36 VDC<br>

● 工作电流: 15.5 mA+传感器输出<br>

● 预热时间: 10 秒，最少<br>

● 工作温度: -40-+55°C<br>

● 探头尺寸: 3.2 cm 直径x 27.9 cm长<br>

● 探头重量t: 454 g.<br>

● 膜: 0.001 FEP 特氟隆(标准)<br>

● 综合误差: 2% FS`,
                        province: `../../../static/img/automatic5.png`
                    },
                    {
                        date: '温度',
                        name: `● 输出: 4-20 mA<br>

● 范围: -50℃~+50℃<br>

● 精度: ±0.1℃<br>

● 工作电压:10~36VDC<br>

● 电流强度：与传感器输出相同<br>

● 预热时间: 大于5秒钟<br>

● 工作温度: -50℃~+100℃<br>

● 探头尺寸: 直径1.9cm×长11.4cm<br>

● 重量：227g`,
                        province: `../../../static/img/automatic6.jpg`
                    }],
                tableData2: [{
                    date: '1000A+B系统',
                    name: '● 尺寸：39cm(L)X31cm(W)X17cm(H)；\n' +
                    '\n' +
                    '● 可同时挂带6种传感器，4种分析仪进行实时在线监测；\n' +
                    '\n' +
                    '● 支持GPS定位（精度为10米）；\n' +
                    '\n' +
                    '● 支持多种无线通信功能：GPRS/WIFI/ZIGBEE；\n' +
                    '\n' +
                    '● 支持能量管理功能\n' +
                    '\n' +
                    '● LED显示，20cm(D)X18cm(W)\n' +
                    '\n' +
                    '● 远程控制；\n' +
                    '\n' +
                    '● 报警功能',
                    province: `../../../static/img/automatic1.jpg`
                },
                    {
                        date: '主控室服务器及软件',
                        name: '● 客户专属账号密码登陆\n' +
                        '\n' +
                        '● 支持Window，LINUX主控室服务器；\n' +
                        '\n' +
                        '● 支持浏览器数据查询，显示；\n' +
                        '\n' +
                        '● 支持数据库数据存储、历史数据调用和查询；'
                    }],
                tableData3: [{
                    date: '1000A+B系统',
                    name: '● 尺寸：39cm(L)X31cm(W)X17cm(H)；\n' +
                    '\n' +
                    '● 可同时挂带6种传感器，4种分析仪进行实时在线监测；\n' +
                    '\n' +
                    '● 支持GPS定位（精度为10米）；\n' +
                    '\n' +
                    '● 支持多种无线通信功能：GPRS/WIFI/ZIGBEE；\n' +
                    '\n' +
                    '● 支持能量管理功能\n' +
                    '\n' +
                    '● LED显示，20cm(D)X18cm(W)\n' +
                    '\n' +
                    '● 远程控制；\n' +
                    '\n' +
                    '● 报警功能',
                    province: `../../../static/img/automatic1.jpg`
                },
                    {
                        date: '主控室服务器及软件',
                        name: '● 客户专属账号密码登陆\n' +
                        '\n' +
                        '● 支持Window，LINUX主控室服务器；\n' +
                        '\n' +
                        '● 支持浏览器数据查询，显示；\n' +
                        '\n' +
                        '● 支持数据库数据存储、历史数据调用和查询；'
                    }],
                tableData4: [{
                    date: '1000A+B系统',
                    name: '● 尺寸：39cm(L)X31cm(W)X17cm(H)；\n' +
                    '\n' +
                    '● 可同时挂带6种传感器，4种分析仪进行实时在线监测；\n' +
                    '\n' +
                    '● 支持GPS定位（精度为10米）；\n' +
                    '\n' +
                    '● 支持多种无线通信功能：GPRS/WIFI/ZIGBEE；\n' +
                    '\n' +
                    '● 支持能量管理功能\n' +
                    '\n' +
                    '● LED显示，20cm(D)X18cm(W)\n' +
                    '\n' +
                    '● 远程控制；\n' +
                    '\n' +
                    '● 报警功能',
                    province: `../../../static/img/automatic1.jpg`
                },
                    {
                        date: '主控室服务器及软件',
                        name: '● 客户专属账号密码登陆\n' +
                        '\n' +
                        '● 支持Window，LINUX主控室服务器；\n' +
                        '\n' +
                        '● 支持浏览器数据查询，显示；\n' +
                        '\n' +
                        '● 支持数据库数据存储、历史数据调用和查询；'
                    }],
                tableData5: [{
                    date: '1000A+B系统',
                    name: '● 尺寸：39cm(L)X31cm(W)X17cm(H)；\n' +
                    '\n' +
                    '● 可同时挂带6种传感器，4种分析仪进行实时在线监测；\n' +
                    '\n' +
                    '● 支持GPS定位（精度为10米）；\n' +
                    '\n' +
                    '● 支持多种无线通信功能：GPRS/WIFI/ZIGBEE；\n' +
                    '\n' +
                    '● 支持能量管理功能\n' +
                    '\n' +
                    '● LED显示，20cm(D)X18cm(W)\n' +
                    '\n' +
                    '● 远程控制；\n' +
                    '\n' +
                    '● 报警功能',
                    province: `../../../static/img/automatic1.jpg`
                },
                    {
                        date: '主控室服务器及软件',
                        name: '● 客户专属账号密码登陆\n' +
                        '\n' +
                        '● 支持Window，LINUX主控室服务器；\n' +
                        '\n' +
                        '● 支持浏览器数据查询，显示；\n' +
                        '\n' +
                        '● 支持数据库数据存储、历史数据调用和查询；'
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

    .el-footer {
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

    .hz_banner_new {
        margin-top: 60px;
    }

    .time {
        line-height: 30px;
    }

    .hz_banner_new .bottom {
        padding-right: 30px;
        padding-left: 30px;
        text-align: left;
        text-indent: 2em;
    }

    .hz_banner_new .el-image {
        padding-left: 20px;
        padding-right: 20px;
    }

    .p_content {
        text-indent: 2em;
        text-align: left;
        line-height: 30px;
    }

    .p_black {
        font-weight: bold;
        text-align: left;
    }
</style>
