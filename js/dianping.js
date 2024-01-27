//const path = 'ddplus.meituan.net'
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

//if (url.indexOf(path) != -1) {
//    console.log('进来了');
//    obj = [];
//} else {

obj.body.bundles= obj.body.bundles.filter(
  card => card.bundleName != "picassovc_immersive-video_immersivefullscreen" ||
  card.bundleName != "picassovc_picasso-attractions-channel_searchlist" ||
  card.bundleName != "picassovc_pexus-search-suggest_index"
  
);
//for (var i = obj.body.bundles.length - 1; i >= 0; i--) {
//  if (obj.body.bundles[i].bundleName === "picassovc_pexus-freetry-index_index") {
//    console.log('删除了');
//    obj.body.bundles.splice(i, 1);
//  }
//}
//}

body = JSON.stringify(obj);
console.log(body);
$done({body});
