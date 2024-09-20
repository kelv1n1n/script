const url = $request.url;
if (!$response.body) $done({});

let obj = JSON.parse($response.body);

if (url.includes("/homepage/v1/core")) {
  const keepNavIds = ['dache_anycar'];
  if (obj.data && obj.data.order_cards && obj.data.order_cards.nav_list_card && obj.data.order_cards.nav_list_card.data) {
    obj.data.order_cards.nav_list_card.data = obj.data.order_cards.nav_list_card.data.filter(item => keepNavIds.includes(item.nav_id));
    //obj.data.order_cards.nav_list_card.data = [];
  }
  
  const keepBottomNavIds = ['v6x_home', 'home_page', 'user_center'];
  if (obj.data && obj.data.disorder_cards && obj.data.disorder_cards.bottom_nav_list && obj.data.disorder_cards.bottom_nav_list.data) {
    obj.data.disorder_cards.bottom_nav_list.data = obj.data.disorder_cards.bottom_nav_list.data.filter(item => keepBottomNavIds.includes(item.id));
  }
}

const user = "/mtop.idle.user.page.my.adapter";
if (url.indexOf(user) != -1) {
  //  底部社区小程序列表
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "6");
  //  个人主页横幅
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "3");
  //  个人等级
  obj.data.container.sections.forEach(section => {
    if (section.index === "1") {
        delete section.item.level;
    }
  });
  //  处理简历菜单
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "5");

}

const circle = "/mtop.taobao.idlehome.home.circle.list";
if (url.indexOf(circle) != -1) {
  // 过滤 circleList 数组，只保留 circleId 为 2 和 3 的元素
  obj.data.circleList = obj.data.circleList.filter(circle => circle.circleId === "2" || circle.circleId === "3");
  //console.log(JSON.stringify(obj.data.circleList));
}

try {
  
if (url.includes("/api/social/mall/follow/homepage")) {
  if (obj && obj.unexposed_timeline.list) {
    obj.unexposed_timeline.list = [];
  }
  delete obj.update_status_tips;

  obj.recommend_timeline.list = [];
  obj.recommend_timeline.has_more = false;
}

if (url.includes("/alexa/homepage/hub")) {
  if (obj && obj.result.bottom_tabs) {
    obj.result.bottom_tabs = obj.result.bottom_tabs.filter(tab => tab.title !== '多多视频' && tab.title !== '大促会场' && tab.title !== '搜索' && tab.title !== '直播');
  }
  delete obj.result.icon_set;
  delete obj.result.search_bar_hot_query;
  
  const idsToKeep = [0, 1543, 743, 14, 1282];
  if (obj && obj.result.all_top_opts) {
    obj.result.all_top_opts = obj.result.all_top_opts.filter(opt => idsToKeep.includes(opt.id));
  }
    
  const validTitles = ["首页", "聊天", "个人中心"];
  obj.result.buffer_bottom_tabs = obj.result.buffer_bottom_tabs.filter(item => 
    validTitles.includes(item.title)
  );

  delete obj.result.dy_module.new_user_zone_dy

}
  
} catch (error) {
}

const orderBanner = "/query_order_list_tabs_element";
if (url.indexOf(orderBanner) != -1) {
  delete obj.banner_picture;
}

$done({ body: JSON.stringify(obj) });
