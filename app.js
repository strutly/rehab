// app.js
App({
  onLaunch() {

    let first = wx.getStorageSync('ifFirst')||first;
    if(!first){
      wx.removeStorageSync('orders');
      wx.removeStorageSync('ifAuth');
      wx.removeStorageSync('logs');
      wx.setStorageSync('ifFirst', true);
    }
  },
  globalData: {
    userInfo: null
  }
})
