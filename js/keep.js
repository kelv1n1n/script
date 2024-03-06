
const config = "/config/v3/basic";
const ad = "/op-engine-webapp/v1/ad";
const tool = "/tool/v1/jump/popup";
const search_tab = "/hotHashtag/list";
const configs = "/v1/configs"

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(config) != -1) {
  obj.data.generalConfigs['AD.link.download.source'] = "false";
  obj.data.generalConfigs['splash.ad.load.max.timeout'] = "0";
  obj.data.generalConfigs['screen.ks.ad.enabled'] = "false";
} else if (url.indexOf(ad) != -1) {
  obj.data.creative = {};
  obj.data.hasAd = 0;
} else if (url.indexOf(tool) != -1) {
  obj.data = {};
} else if (url.indexOf(search_tab) != -1) {
  //obj.data = [];
  obj.ok = false;
  obj.data[0].adResponse = {};
  obj.data[0].schema = "";
  console.log(JSON.stringify(obj.data));
} else if (url.indexOf(configs) != -1) {
  obj.data = {};
  console.log("进来");
}
//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
