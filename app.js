// app.js
const Api = require('./config/api');
App({
  onLaunch(options) {
    console.log(options);
  },
  globalData: {
    ifAuth: false
  }
})
