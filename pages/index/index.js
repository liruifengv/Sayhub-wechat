Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('首页加载成功')
    this.getArticles()
  },
  getArticles () {
    var self = this
    wx.request({
      url: 'http://www.sayhub.me/api/articles?category=wechat',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success (res) {
        // console.log(res.data)
        self.setData({ 
          articles: res.data.articles
        })
      }
    })
  },
  showDetail (e) {
    let dataset = e.currentTarget.dataset
    let item = dataset && dataset.item
    let Id = item._id
    wx.navigateTo({
      url: `../detail/detail?Id=${Id}`,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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
    
  }
})