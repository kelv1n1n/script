const all = "/all";
const vip = "/vip";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(all) != -1) {
    delete obj.data.adlist;
    delete obj.data.banner;
}

if (url.indexOf(vip) != -1) {
    delete obj.data.adlist;
    delete obj.data.banner;
}

body = JSON.stringify(obj);
$done({body});
