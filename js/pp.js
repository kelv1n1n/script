
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

//obj.body.bundles = obj.body.bundles.filter(
  //card => card.bundleName !== "picassovc_pexus-search-suggest_index"
//);
obj.data = obj.data.filter(item => item.position_type !== 50);
body = JSON.stringify(obj);

$done({body});
