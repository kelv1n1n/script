let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("x/v2/splash")) {
    if (!obj.data.show) {
      console.log('数据无show字段');
    } else {
      delete obj.data.show;
    }
}

body = JSON.stringify(obj);
$done({body});
