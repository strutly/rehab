const Api = require('../../config/api');
const app = getApp();
var that;
Page({
  data: {
    ifAuth:false
  },
  async onLoad(options) {
    that = this;
    if(!app.globalData.ifAuth){      
      let res = await Api.login();
      console.log(res);
      if(res.code==0){
        wx.setStorageSync('token', res.data);
        that.setData({
          ifAuth:true
        })
        app.globalData.ifAuth = true;
      }; 
    }else{
      that.setData({
        ifAuth:true
      })
    }    
  },
  async getPhoneNumber(e){
    console.log(e);
    if(e.detail.errMsg==="getPhoneNumber:ok"){
      let code = await Api.getCode();      
      let res = await Api.phone({
        encryptedData:e.detail.encryptedData,
        code:code,
        iv:e.detail.iv
      })
      console.log(res);
      if(res.code==0){
        wx.setStorageSync('token', res.data);
        app.globalData.ifAuth = true;
        that.setData({
          ifAuth:true
        });
      }else{
        that.prompt(res.msg);
      }
    }else{
      that.prompt("您已拒绝授权获取手机号~");
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
    let ifAuth = that.data.ifAuth;
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