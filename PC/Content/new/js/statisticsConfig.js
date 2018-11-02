var config=[
  {
    "host":"www.wechatone.com",//线上微管家
    "src":"https://hm.baidu.com/hm.js?56bb93a9e7c95eae7a134b21db98e9bc"
  },
  {
    "host":"retail.wechatone.com",//线下微管家
    "src":"https://hm.baidu.com/hm.js?a5013ffeab56cd0734fea1814ec8142b"
  },
  {
    "host":"www.weitiaozhuan.com",//微跳转
    "src":"https://hm.baidu.com/hm.js?c22bb903f060c2793f815736df5a11b1"
  },
  {
    "host":"www.gzszsdzkj.com",//飞淘微跳转
    "src":"https://hm.baidu.com/hm.js?541db6bc8a509dfeed3c07226a676f29"
  },
  {
    "host":"www.oxygenking.com",//极速微跳转
    "src":"https://hm.baidu.com/hm.js?0583628c383dad4f990569bbd469b8e0"
  },
  {
    "host":"www.ailixincrm.com",//艾立信
    "src":"https://hm.baidu.com/hm.js?7d8edfc1d57673f4e1f233cd641e35ab"
  },
  {
    "host":"www.taokoul.com",//淘卡屏
    "src":"https://hm.baidu.com/hm.js?ca2c5903192fcc58eebddb375202e794"
  }
];
var _hmt = _hmt || [];
(function(config) {
  var _host = window.location.host;
  for(var i = 0 ; i < config.length ; i++){
    if(config[i]["host"]==_host){
      var _scr = config[i]['src'];
      var _script = document.createElement("script");
      var _scriptParent = document.getElementsByTagName("script")[0]; 
      _script.setAttribute("src",_scr);
      _scriptParent.parentNode.insertBefore(_script,_scriptParent);
      return false;
    }
  }
})(config)
