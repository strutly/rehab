var that;
Page({

  data: {
    orders:[]
  },
  onLoad: function (options) {
    that = this;
    let results = wx.getStorageSync('orders')||[];    
    that.assemble(results);    
  },
  assemble(data){
    data.reverse().forEach(item=>{
      let result = item.result;
      let scores = Object.assign(result[0],result[1],result[2],result[3]);
      let abnormal = Object.values(scores).filter(score=>{
        return score==1;
      });
      let normal = Object.values(scores).filter(score=>{
        return score==0;
      })
      item.abnormal = abnormal.length;
      item.normal = normal.length;
    });
    that.setData({
      orders:data
    })
  },
  search(e){
    console.log(e);
    let val = e.detail.value;
    let results = wx.getStorageSync('orders')||[];
    results = results.filter(item=>{
      return item.name.includes(val);
    })
    that.assemble(results);
  }
})