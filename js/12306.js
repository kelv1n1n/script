let body;
let obj = JSON.parse($request.body);


if (obj.placementNo === "0007") {
  body =
    '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
} else if (obj.placementNo === "G0054") {
  body = '{"code":"00","materialsList":[],"advertParam" : {
    "fixedscreen" : 3,
    "displayNumDi" : 1,
    "isDefault" : 0,
    "skipTime" : 1,
    "chacheTime" : 0,
    "showSkipBtn" : 0,
    "skipTimeAgain" : 0,
    "index" : 3
  }}';
} else {
  body = '{"code":"00","message":"无广告返回"}';
}

$done({ body });
