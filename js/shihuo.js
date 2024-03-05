const home = "/home/info/v1";
const tab = "/sh-appapi/app3/saveAppInfo";
const my = "/sh-appapi/my/config_list";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(home) != -1) {
    obj.data.new_activity = [];
    obj.data.search_arr = {};
    obj.data.hotspot = {};
    obj.data.activity_dynamic_modules = [];
} else if (url.indexOf(tab) != -1) {
    obj.data.tab_icon_go = obj.data.tab_icon_go.filter(item => item.key !== "tab2");
    //console.log(JSON.stringify(obj.data.tab_icon_go));
} else if (url.indexOf(my) != -1) {
    const arrayKey = ["xiaoyuanhuodong", "wenjuandiaoyan", "qianggou", "kanjia"];
    obj.data.list.forEach(obj => {  
      if (obj.key === "wo_de_shihuo") {  
        obj.list = obj.list.filter(item => !arrayKey.includes(item.key));  
      }  
    });  
}
//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
