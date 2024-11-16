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
    const arrayKey = ["tab1","tab4","tab5"];
    obj.data.tab_icon_go = obj.data.tab_icon_go.filter(item => arrayKey.includes(item.key));
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
} else if (url.indexOf("/center/config") != -1) {
    const arrayKey = [2,3,1,8];
    obj.data.tool_list = obj.data.tool_list.filter(item => arrayKey.includes(item.id));
    obj.data.navigation_list = [];
} else if (url.indexOf("/app3/tab_info") != -1) {
    const arrayKey = ["tab1","tab4","tab5"];
    obj.data.tab_icon_go = obj.data.tab_icon_go.filter(item => arrayKey.includes(item.key));
} else if (url.indexOf("/center/info") != -1) {
    obj.data.background = {};
    const prop = "tab_extends";
    obj.data.tabs.forEach(card => {
        if (prop in card) {
            delete card.tab_extends;
        }
    });
}


//console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
