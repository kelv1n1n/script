
const config = "/config/v3/basic";
const ad = "/op-engine-webapp/v1/ad";
const search_tab = "/hotHashtag/list";
const people = "/athena/v7/people/my";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(config) != -1) {
  obj.data.generalConfigs['AD.link.download.source'] = "false";
  obj.data.generalConfigs['splash.ad.load.max.timeout'] = "0";
  obj.data.generalConfigs['screen.ks.ad.enabled'] = "false";
} else if (url.indexOf(ad) != -1) {
  //console.log(JSON.stringify(obj.data));
  //obj.data.creative = {};
  //obj.data.hasAd = 0;
  //console.log(JSON.stringify(obj.data));
  //console.log(JSON.stringify(obj.data.hasAd));
} else if (url.indexOf(search_tab) != -1) {
  //obj.data = [];
  obj.ok = false;
  obj.data[0].adResponse = {};
  obj.data[0].schema = "";
  console.log(JSON.stringify(obj.data));
} else if (url.indexOf(people) != -1) {
  obj.data.floatingInfo = {};
  console.log("进来");
}
//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
