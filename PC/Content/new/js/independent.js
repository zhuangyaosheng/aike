var userAgentInfo = navigator.userAgent;
var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
for (var v = 0; v < Agents.length; v++) {
  if (userAgentInfo.indexOf(Agents[v]) > 0) {
    window.location = "http://mobile.uat.m.aiagain.com";
    break;
  };
};
//配置域名和需要显示的板块  
var config = [{
  "host":"aike.168shuadan.com",
  "turn": true,
}];

for (var i = 0; i < config.length; i++) {
  if (config[i].host == window.location.host) {
    if (config[i].turn == true) {
      window.location = window.location.protocol + '//' + window.location.host + "/Publicity/index.html";
    };
  };
};