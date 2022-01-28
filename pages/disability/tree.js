var that;
import WxValidate from '../../utils/WxValidate';
import Api from '../../config/api.js';
Page({
  data: {    
    genderArray:['请选择性别','男','女'],
    formData:{gender:0},
    chainData: {
      title: "居家照护方案",
      children: [{
        title: "运动功能障碍",
        children: [{
          type: 1,
          checked: false,
          title: "肢体瘫痪",
          videos: [{
            title: "良好肢位的摆放",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/84eff072387702294109278701/OuosutNWAGEA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/01.png"
          }, {
            title: "翻身动作",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/84effa1e387702294109278992/Y4MttoZ8Kl0A.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/02.png"
          }, {
            title: "坐起训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/82856a73387702294109162890/4tGZctUoShkA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/03.png"
          }, {
            title: "感觉刺激方法",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/84fd90eb387702294109280224/1u4tDhzZSdMA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/05.png"
          }, {
            title: "针对患侧上肢的作业训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/84fd8954387702294109280098/9Q0jSGkJC0YA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/04.png"
          }]
        }, {
          type: 2,
          checked: false,
          title: "肢体痉挛",
          videos: [{
            title: "抑制痉挛训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/86c44594387702294109304983/6k5JC2bl3PgA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/06.png"
          }, {
            title: "被动活动",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/829812af387702294109173920/YXAuGFRcapsA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/07.png"
          }]
        }, {
          type: 3,
          checked: false,
          title: "运动迟缓",
          videos: [{
            title: "移乘训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/86c440b0387702294109304835/ia4DRaRx3DQA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/08.png"
          }]
        }, {
          type: 4,
          checked: false,
          title: "平衡障碍",
          videos: [{
            title: "站起站立训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/8285dcd0387702294109163256/A6BNhyKHp9IA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/09.png"
          }, {
            title: "坐位训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/8285d406387702294109163030/HkaxWelRroQA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/10.png"
          }, {
            title: "爬位跪位爬行跪行训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/8500d6ef387702294109286123/cdUsTLubNcYA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/11.png"
          }]
        }, {
          type: 5,
          checked: false,
          title: "步行障碍",
          videos: [{
            title: "步行训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/8285e4ab387702294109163404/IPLZlb9dUMsA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/12.png"
          }, {
            title: "偏瘫步态训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/be81b80e387702294110343487/yso1ta6llC0A.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/13.png"
          }]
        }, {
          type: 6,
          checked: false,
          title: "肌肉衰减",
          videos: [{
            title: "肌肉衰减的抗阻力训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/be81410f387702294110342993/dSeCd5aNEtgA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/14.png"
          }]
        }, {
          type: 7,
          checked: false,
          title: "关节活动受限",
          videos: [{
            title: "肩关节活动度训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c2e43bed387702294110504667/W4OoSgKooAUA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/15.png"
          }, {
            title: "偏瘫下肢活动度训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/bea66be8387702294110364208/8ia0iVSnP14A.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/16.png"
          }, {
            title: "膝关节活动度训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c122a19a387702294110489938/1zVbLK0AdjoA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/17.png"
          }, {
            title: "偏瘫后腕关节训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c1220037387702294110488459/UiMDnpTY5NsA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/18.png"
          }]
        }]
      }, {
        title: "非运动功能障碍",
        children: [{
          type: 8,
          checked: false,
          title: "吞咽功能障碍",
          videos: [{
            title: "口唇肌肉训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c2e43fc4387702294110504730/9p4qujTJsoQA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/19.png"
          }, {
            title: "吞咽障碍口腔训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c0e8e781387702294110453031/7A4fvoK2m9AA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/20.png"
          }]
        }, {
          type: 9,
          checked: false,
          title: "言语功能障碍",
          videos: [{
            title: "言语功能训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c363736d387702294110575632/WEU98zd4A1YA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/21.png"
          }]
        }, {
          type: 10,
          checked: false,
          title: "尿便失禁",
          videos: [{
            title: "盆底功能训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/5e8180d0387702293493231525/xamrlkBGU5EA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/22.png"
          }]
        }, {
          type: 11,
          checked: false,
          title: "血栓栓塞风险",
          videos: [{
            title: "预防下肢深静脉血栓操",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c0e909ca387702294110453850/MXlBBeFOL38A.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/23.png"
          }]
        }]
      }, {

        title: "情绪认知障碍",
        children: [{
          type: 12,
          checked: false,
          title: "抑郁情绪",
          videos: [{
            title: "情绪康复",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/be823787387702294110344173/Ok0LueyLPVsA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/24.png"
          }]
        }, {
          type: 13,
          checked: false,
          title: "认知障碍",
          videos: [{
            title: "认知训练",
            url: "https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c2e4c808387702294110505643/eUhRjV7GQAUA.mp4",
            cover: "https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/25.png"
          }]
        }, {
          type: 14,
          checked: false,
          title: "疼痛",
          videos: []
        }]
      }, {
        title: "日常生活能力",
        type:15,
        videos: [{
          title:"日常生活动作训练",
          url:"https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/86c4bba6387702294109305401/Xd09K12wmVgA.mp4",
          cover:"https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/26.png"
        },{
          title:"日常生活活动能力训练",
          url:"https://1308944528.vod2.myqcloud.com/00b98b8evodcq1308944528/c1228433387702294110489265/UHHHxJ5rVjAA.mp4",
          cover:"https://7265-rehab-2gahhvf3d6f7740e-1309153121.tcb.qcloud.la/27.png"
        }],
        children: [{
          checked: false,
          title: "进食障碍"
        }, {
          checked: false,
          title: "穿衣障碍"
        }, {
          checked: false,
          title: "卫生清洁障碍"
        }]
      }]
    },
    modal:false
  },
  onLoad(options) {
    that = this;    
    let index = options.index || 1;
    let results = wx.getStorageSync('fromData');
    let result = results[index].result;
    let scores = Object.assign(result[0],result[1],result[2],result[3]);
    let videoResult = results[index].videoResult;
    let chainData = that.data.chainData;
    let chooseVideo = {};
    chainData.children.forEach(child => {      
      child.score = scores[child.title];
      if (videoResult.findIndex(val => child.type == val) > -1) {
        child.checked = true;
        chooseVideo[child.type] = child.videos;
      };
      child.children.forEach(item => {
        item.score = scores[item.title];
        if (videoResult.findIndex(val => item.type == val) > -1) {
          item.checked = true;
          chooseVideo[item.type] = item.videos;
        }
      });
    })
    that.setData({
      chainData: chainData,
      chooseVideo:chooseVideo,
      setVideos:chooseVideo,
      index:index
    });
    that.initValidate();
  },
  initValidate() {
    const rules = {
      name: {
        required: true,
        minlength:2
      },
      phone:{
        required:true,
        tel:true
      },
      gender:{
        min:1
      },
      age:{
        required: true,
        min:16
      }
    }
    const messages = {
      name: {
        required: '请填写姓名',
        minlength:'请输入正确的姓名'
      },
      phone:{
        required:'请填写手机号',
        tel:'请填写正确的手机号'
      },
      gender:{
        min:"请选择性别"
      },
      age:{
        required: '请输入年龄',
        min:"年龄不能小于16岁"
      }
    }
    that.WxValidate = new WxValidate(rules, messages);
  },
  shrink(e) {
    let open = that.data.open||{};
    open[e.currentTarget.dataset.index] = open[e.currentTarget.dataset.index]?false:true;
    that.setData({
      open:open
    })
  },
  checkboxChange(e){
    console.log(e);
    let chooseVideo = that.data.chooseVideo;
    let setVideos = that.data.setVideos||{};
    let type = e.currentTarget.dataset.type;
    let chooses = e.detail.value;
    if(chooses.length==0){
      delete chooseVideo[type];
    }else{
      let videos = [];
      chooseVideo[type].forEach((video,i)=>{
        if(chooses.findIndex(val => i == val) > -1){
          videos.push(video)
        }
      })
      setVideos[type] = videos;
    }    
    that.setData({      
      setVideos:setVideos
    })
  },
  pickerChange(e){    
    that.setData({
      ['formData.gender']:e.detail.value
    })
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
  formModal(){
    that.setData({
      modal:!that.data.modal
    })
  },
  async submit(e){    
    let params = e.detail.value;  
    if (!that.WxValidate.checkForm(params)) {
      let error = this.WxValidate.errorList[0]
      that.prompt(error.msg)
      return false
    } 
    let fromData = wx.getStorageSync('fromData');
    console.log(fromData);
    let index = that.data.index;
    let data = {
      info:params,
      type:0,
      content:{
        result:fromData[index].result,
        
        videos:that.data.setVideos
      }
    }

    let res = await Api.evaluationAdd(data);

    console.log(res);
    if(res.code==0){
      wx.reLaunch({
        url: '/pages/disability/order-list',
      })
    }else{
      that.prompt(res.msg)
    }
    
  }
})