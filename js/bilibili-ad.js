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
} else if (url.includes("/x/resource/show/tab/v2")) {
  // 底部选项卡
  if (obj?.data?.bottom?.length > 0) {
    const sortLists = ["首页", "动态", "我的"];
    obj.data.bottom = obj.data.bottom
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }
  // 首页导航栏
  if (obj?.data?.tab?.length > 0) {
    const sortLists = ["推荐", "热门"];
    obj.data.tab = obj.data.tab
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }
  // 右上角按钮
  if (obj?.data?.top?.length > 0) {
    //obj.data.top = obj.data.top.filter((i) => i?.name === "消息");
    //if (obj?.data?.top?.[0]?.pos) {
      //obj.data.top[0].pos = 1;
    //}
    obj.data.top = [];
  }
} else if (url.includes("/x/v2/account/mine?")) {
  // 我的页面
  const del = ["rework_v1", "vip_section", "vip_section_v2"];
  for (let i of del) {
    // 不必要项目
    delete obj.data[i];
  }
  if (obj?.data?.sections_v2?.length > 0) {
    let newSects = [];
    for (let item of obj.data.sections_v2) {
      delete item.button;
      if (item?.style) {
        if (item?.style === 1 || item?.style === 2) {
          if (item?.title) {
            if (item?.title === "创作中心" || item?.title === "推荐服务") {
              // 创作中心 推荐服务
              continue;
            } else if (item?.title === "更多服务") {
              delete item.title;
              if (item?.items?.length > 0) {
                let newItems = [];
                for (let i of item.items) {
                  if (/user_center\/feedback/g.test(i?.uri)) {
                    // 联系客服
                    newItems.push(i);
                  } else if (/user_center\/setting/g.test(i?.uri)) {
                    // 设置
                    newItems.push(i);
                  } else {
                    continue;
                  }
                }
                item.items = newItems;
              }
            }
          }
        } else {
          // 其他style
          continue;
        }
      }
      newSects.push(item);
    }
    obj.data.sections_v2 = newSects;
  }
}

body = JSON.stringify(obj);
$done({body});
