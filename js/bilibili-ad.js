let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("x/v2/splash")) {
    if (!obj.data.show) {
      console.log('数据无show字段');
    } else {
      delete obj.data.show;
    }
} else if (url.includes("/x/v2/search/square")) {
  if (obj?.data) {
    obj.data = { type: "history", title: "搜索历史", search_hotword_revision: 2 };
  }
} else if (url.includes("/resource/top/activity")) {
   var jsonString = '{ "code": -404, "message": "啥都木有", "ttl": 1, "data": null }';
   obj = JSON.parse(jsonString);
} else if (url.includes("/x/v2/feed/index?")) {
  // 首页推荐信息流
  if (obj?.data?.items?.length > 0) {
    // 白名单，并且过滤竖频
    obj.data.items = obj.data.items.filter((i) => i?.card_goto === "av" && i?.goto !== "vertical_av");
  }
  if (obj?.data?.config?.toast?.has_toast) {
    obj.data.config.toast.has_toast = false;
  }
}

body = JSON.stringify(obj);
$done({body});