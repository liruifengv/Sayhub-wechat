// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // console.log('文章页详情页加载成功')
    // console.log(option.Id)
    this.getDetail(option.Id)
  },
  getDetail (Id) {
    var self = this
    wx.request({
      url: `http://www.sayhub.me/api/article/${Id}`,
      header: {
          'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        self.setData({ 
          article: res.data
        })
        console.log(self.data.article)
        self.configPageData()
      }
    })
  },
  configPageData () {
      let title = this.data.article.title
      wx.setNavigationBarTitle({
        title: title
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getArticles () {

  }
})