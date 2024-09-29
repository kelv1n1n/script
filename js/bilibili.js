let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const index = "/feed/index?";
if (url.includes(index)) {
  // 首页推荐信息流
  console.log("信息流");
  if (obj?.data?.items?.length > 0) {
    // 白名单
    obj.data.items = obj.data.items.filter((i) => i?.card_goto === "av");
  }
  console.log(JSON.stringify(obj.data.items));
}
const index_story = "/feed/index/story";
if (url.indexOf(index_story) != -1) {
  // 竖屏模式信息流
  let newItems = [];
    for (let item of obj.data.items) {
      if (item?.hasOwnProperty("ad_info")) {
        continue;
      } else if (["vertical_ad_av", "vertical_live", "vertical_pgc", "banner"]?.includes(item?.card_goto)) {
        continue;
      } else {
        if (item?.story_cart_icon) {
          delete item.story_cart_icon;
        }
        newItems.push(item);
      }
    }
    obj.data.items = newItems;
}

  
body = JSON.stringify(obj);
$done({body});
