let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const search = "/banner/search_component_banner";
const mine = "position_types=60%2C560%2C850%2C860%2C890%2C2400";
const search_hot = "/search/hot_keywords";
const recommend = "/resource_preload/list_h5_resource";
const recommendPro = "/recommendation/interests/products";
const adv = "/advertisement/v1";

if (url.indexOf(mine) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  $done({body});
}

if (url.indexOf(search) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  $done({body});
}

if (url.indexOf(search_hot) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  $done({body});
}

if (url.indexOf(recommend) != -1) {
  obj.data = obj.data.filter(item => item.filename !== "RecommendProduct.29e31893.js");
  body = JSON.stringify(obj);
  $done({body});
}

if (url.indexOf(recommendPro) != -1) {
  //obj.data = {};
  obj.data.activities = [];
  obj.data.products = [];
  body = JSON.stringify(obj);
  $done({body});
}

if (url.indexOf(adv) != -1) {
  obj.data = obj.data.filter(item => ![30,50,90,320,100,770].includes(item.region_code)); 

  obj.data = obj.data.map(item => {  
  if (item.region_code === 2) {  
    // 过滤掉positions数组中component_code, 首页的顶部轮播图广告、主页横幅广告
    item.positions = item.positions.filter(position => ![890, 60, 2, 240, 2503].includes(position.component_code));  
  }  
    // 返回最终的元素
    return item;  
  });
  
  body = JSON.stringify(obj);
  $done({body});
}

const typeArr = [50, 2, 90, 770, 80, 320];
obj.data = obj.data.filter(item => !typeArr.includes(item.position_type));


body = JSON.stringify(obj);
$done({body});
