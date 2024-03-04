const path = "/mads/gma";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    obj.settings.nofill_urls = [];
    obj.ad_networks = [];
    //body = JSON.stringify(obj);
    //console.log(body)
} 

body = JSON.stringify(obj);
$done({body});
