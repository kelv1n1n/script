const home = "/home/info/v1";
const tab = "/sh-appapi/app3/saveAppInfo";
const my = "/sh-appapi/my/config_list";
const info = "/sh-appapi/my/info";
const list = "/home/feed/v1";

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
    obj.data.activity_dynamic_modules = [];
    obj.data.savings_card = {};
    const arrayKey = ["vipchaohong", "xiaoyuanhuodong", "wenjuandiaoyan", "qianggou", "kanjia", "invitenew", "expert_list", "part-time recruitment", "chuangzuozhezhongxin"];
    obj.data.list = obj.data.list.filter(obj => obj.key === 'wo_de_shihuo');
    obj.data.list[0].list = obj.data.list[0].list.filter(item => !arrayKey.includes(item.key));
} else if (url.indexOf(info) != -1) {
    obj.data.background = "";
    obj.data.background_imgs = "";
} else if (url.indexOf(list) != -1) {
    obj.data.lists = obj.data.lists.filter(obj => obj.item_type !== 'EXPRESS_AD');
}

//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
