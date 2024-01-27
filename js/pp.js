
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf("httpdns/resolve") != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  $done({body});
}

obj.data = obj.data.filter(item => item.position_type !== 50);
body = JSON.stringify(obj);

$done({body});
