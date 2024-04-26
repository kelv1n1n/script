let body = $response.body;
let obj = JSON.parse(body);

obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item -> item.en != "recommend");

body = JSON.stringify(obj);
$done({body});
