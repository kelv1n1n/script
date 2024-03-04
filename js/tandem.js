const path = "/mads/gma";
const config = "/getconfig/pubsetting";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    obj.settings.nofill_urls = [];
    obj.ad_networks = [];
    //body = JSON.stringify(obj);
    //console.log(body)
} else if (url.indexOf(config) != -1) {
    //obj.ad_unit_settings = [];
    //obj.initializer_settings = {};
    obj.publisher_permissions[0].eoid_enabled = false;
}
console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
