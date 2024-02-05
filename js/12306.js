let body;
let obj = JSON.parse($request.body);

if (obj.placementNo === "0007") {
  body = '{"code":"00","message":"无广告返回"}';
} else if (obj.placementNo === "G0054") {
  body = '{"code":"00","message":"无广告返回"}';
} else {
  body = '{"code":"00","message":"无广告返回"}';
}

$done({ body });
