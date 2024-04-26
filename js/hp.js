let body = $response.body;
let obj = JSON.parse(body);

obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || itme.en === "match");

body = JSON.stringify(obj);
console.log(body.result.clientLevelOneNavV2);
$done({body});
