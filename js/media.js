let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
delete obj.subTypeMap.332;
body = JSON.stringify(obj);
$done({body});