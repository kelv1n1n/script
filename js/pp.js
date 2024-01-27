
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

//if (url.indexOf("httpdns/resolve") != -1) {
//  obj.data = [];
//  body = JSON.stringify(obj);
//  console.log("ip " + body.data);
//  $done({body});
//}

const typeArr = [50, 2, 90, 770];
obj.data = obj.data.filter(item => !typeArr.includes(item.position_type));


body = JSON.stringify(obj);
$done({body});
