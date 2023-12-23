
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

for (var i = obj.body.bundles.length - 1; i >= 0; i--) {
  if (obj.body.bundles[i].bundleName === "picassovc_pexus-freetry-index_index") {
    console.log('删除了');
    obj.body.bundles.splice(i, 1);
  }
}

body = JSON.stringify(obj);
$done({body});