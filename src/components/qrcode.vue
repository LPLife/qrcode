<template>
    <div class="hello">
        <!-- 用于输入内容的input -->
        <input v-model="message">
        <br>
        <!-- 将获取到的信息画到画布上 -->
        <canvas id="msg"></canvas>
        <div id="qrcode">

        </div>
    </div>

</template>

<script>
    // 引入qrcode
    import QRCode from 'qrcode'
    import QRcode from 'qrcodejs2'
    export default {
        data() {
            return {
                message: '',
            }
        },
        watch: {
            // 通过监听获取数据
            message(val) {
                // 打印获取到的数据
                // 获取页面的canvas
                var msg = document.getElementById('msg')
                // 将获取到的数据（val）画到msg（canvas）上
                QRCode.toCanvas(msg, val, function () {})
            },
        },
        mounted() {

            new QRcode(document.getElementById("qrcode"), {
                text: "https://cn.bing.com",
                width: 128,
                height: 128,
                colorDark: "red",
                colorLight: "#fff",
            });
        },
    }
</script>

<style>
    /* 二维码大小 */
    #msg {
        width: 200px;
        height: 200px;
    }
</style>