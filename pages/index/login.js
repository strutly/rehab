var that;
Page({
  data: {
    ifAuth:wx.getStorageSync('ifAuth')||false
  },
  onLoad(options) {
    that = this;
  },
  getPhoneNumber(e){
    console.log(e);
    if(e.detail.errMsg==="getPhoneNumber:ok"){
      wx.setStorageSync('ifAuth', true);
      that.setData({
        ifAuth:true
      })
    }
  },
  prompt(msg) {
    that.setData({
      prompt: true,
      promptMsg: msg
    });
    setTimeout(function () {
      that.setData({
        prompt: false,
        promptMsg: ''
      })
    }, 1500);
  },
  order(){
    let ifAuth = wx.getStorageSync('ifAuth') || false;
    if(!ifAuth){
      return that.prompt("您未认证,请先进行授权验证~");
    }
    wx.navigateTo({
      url: '/pages/disability/order-list',
    })
  },
  onShareAppMessage(e){
    return {
      title: "清云康护到家",      
      path: '/pages/index/login'
    }
  }
})