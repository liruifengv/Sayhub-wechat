// pages/about/about.js
Page({
    data: {
        members: [
            {
                name: 'liruifengv',
                icon: '/images/members/liruifengv.jpg',
                desc: '来生再修好皮囊'
            }
        ]
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        console.log('关于页加载成功')
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    onShareAppMessage () {
        return {
            title: 'Sayhub 在这里畅所欲言',
            path: '/pages/about/about',
            success: function (res) {
                // 分享成功
            },
            fail: function (res) {
                // 分享失败
            }
        }
    }
})