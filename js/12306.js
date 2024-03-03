let body = "";
let obj = JSON.parse($request.body);
const isQuanX = typeof $task !== "undefined";
//console.log(isQuanX);
console.log(JSON.stringify(obj.placementNo));

if (obj.placementNo === "0007") {
  //body =
  //  '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":5000,"showSkip":0}}';
  body = '{"code":"00","materialsList":[]}';
} else if (obj.placementNo === "G0054") {
  body = '{"code":"00","materialsList":[]}';
} else {
  body = '{"code":"00","message":"无广告返回"}';
}
//body = '{"code":"00","message":"无广告返回"}';

console.log(JSON.stringify(body));
if (isQuanX) {
  $done({ body });
} else {
  $done({ response: { body } });
}
