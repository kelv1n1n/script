
const url = $request.url;
//if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("functionId=deliverLayer") || url.includes("functionId=orderTrackBusiness")) {
  
} else if (url.includes("functionId=getTabHomeInfo")) {
  
} else if (url.includes("functionId=myOrderInfo")) {   

} else if (url.includes("functionId=personinfoBusiness")) {

} else if (url.includes("functionId=start")) {
  // 开屏广告
  if (obj?.images?.length > 0) {
    obj.images = [];
  }
  if (obj?.showTimesDaily) {
    obj.showTimesDaily = 0;
  }
} else if (url.includes("functionId=welcomeHome")) {
  // 首页配置
  
  // 首页 下拉二楼
  if (obj?.webViewFloorList?.length > 0) {
    obj.webViewFloorList = [];
  }
} else if (url.includes("functionId=readCustomSurfaceList")) {
  //底部菜单
  obj.result.fromLocalCache = "0";
  obj.result.navigationOrder = "index,cart,home";
  obj.result.modeMap.normal.navigationAll = obj.result.modeMap.normal.navigationAll.filter(item => item.functionId === "index");
  obj.result.paramValues = "Index_Cart_Home"
  //obj.result.modeMap.normal.navigationAll.forEach((item, index) => {
  //});
  console.log(JSON.stringify(obj.result));
}

$done({ body: JSON.stringify(obj) });
