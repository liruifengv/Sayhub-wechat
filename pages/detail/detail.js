// pages/wechat/wechat.js
// WxParse HtmlFormater 用来解析 content 文本为小程序视图
import WxParse from '../../lib/wxParse/wxParse';
// 把 html 转为化标准安全的格式
import HtmlFormater from '../../lib/htmlFormater';
import util from '../../utils/util';

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
        let formatData = self.formatArticleData(res.data)
        console.log(formatData)
        self.setData({ 
          article: formatData
        })
        self.configPageData()
        let htmlContent = res.data.content_render
        WxParse.wxParse('detail','html',htmlContent,self,0)
      }
    })
  },
  formatArticleData (data) {
    let formatData = undefined
    if (data) {
      formatData = data
      data.createdTime = util.formatDate(data.created)
    }
    return formatData    
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
  onShareAppMessage () {
    let title = this.data.article.title    
    return {
      title: title,
      path: `/pages/detail/detail`,
      success (res) {
        // 转发成功
      },
      fail (err) {
        // 转发失败
      }
    }
  },
  getArticles () {

  }
})