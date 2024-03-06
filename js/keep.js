
const config = "/config/v3/basic";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(config) != -1) {
  obj.data.generalConfigs['AD.link.download.source'] = "false";
  obj.data.generalConfigs['splash.ad.load.max.timeout'] = "0";
  obj.data.generalConfigs['screen.ks.ad.enabled'] = "false";
} else if (url.indexOf(tab) != -1) {

} else if (url.indexOf(my) != -1) {

} else if (url.indexOf(info) != -1) {

}
//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
