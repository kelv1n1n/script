let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const index = "/feed/index";
if (url.indexOf(index) != -1) {
  //obj.data.items = obj.data.items.filter((i) => i?.card_goto === "av");
  let newItems = [];
    for (let item of obj.data.items) {
      if (item?.hasOwnProperty("ad_info")) {
        continue;
      } else if (["vertical_ad_av", "vertical_live", "vertical_pgc"]?.includes(item?.card_goto)) {
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
