let body;
let obj = JSON.parse($request.body);

//console.log(obj);
//console.log("----------");
if (obj.placementNo === "0007") {
  body =
    '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
} else if (obj.placementNo === "G0054") {
  body = '{"code":"00","materialsList":[],"advertParam":{"skipTime":1,"showSkipBtn":0}}';
} else {
  body = '{"code":"00","message":"无广告返回"}';
}
//console.log(body);
$done({ body });
