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
  // 过滤 circleList 数组，只保留 circleId 为 1 和 2 的元素
  obj.data.circleList = obj.data.circleList.filter(circle => circle.circleId === "2" || circle.circleId === "3");
}

$done({ body: JSON.stringify(obj) });
