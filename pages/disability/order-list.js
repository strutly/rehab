var that;
import Api from '../../config/api.js';
Page({
  data: {
    orders:[]
  },
  onLoad: function (options) {
    that = this;
    that.getList("",1);    
  },
  async getList(name,pageNo){
    let res = await Api.evaluationPageByCaregiver({
      pageNo:pageNo,
      pageSize:6,
      name:name
    });
    let orders = that.data.orders||[];    
    that.assemble(orders.concat(res.data.content));   
    that.setData({
      pageNo:pageNo,
      name:name,
      endline: res.data.last      
    });
  },
  assemble(data){
    data.forEach(item=>{
      let content = JSON.parse(item.content);
      let result = content.result;
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
    var reg = /[^\u4e00-\u9fa5]/;
    if (reg.test(val)){
      return;
    }
    that.setData({
      orders:[],
      name:val
    });
    that.getList(val,1)
  },
  onReachBottom(){
    let endline = that.data.endline;
    if(!endline){
      let pageNo = that.data.pageNo + 1;
      let name = that.data.name;
      that.getList(name,pageNo);
    }    
  },
})