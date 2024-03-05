const home = "/home/info/v1";
const tab = "/sh-appapi/app3/saveAppInfo";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(home) != -1) {
    obj.data.new_activity = [];
    obj.data.search_arr = {};
    obj.data.hotspot = {};
    obj.data.activity_dynamic_modules = [];
} else if (url.indexOf(tab) != -1) {
    obj.data.tab_icon_go = obj.data.tab_icon_go.filter(item => item.key != "tab2");
    console.log(JSON.stringify(obj.data.tab_icon_go));
}
console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
