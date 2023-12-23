
let url = $request.url;
let body = $request.body;

console.log('原始请求：' + body);
body = bodyupdateUrlParameter(body);
console.log('更换后请求：' + body);

$done({body});


function updateUrlParameter(body) {
    var jsonArray = JSON.parse(body);
    for (var i = jsonArray.length-1; i >= 0 ; i--) {
      if (jsonArray[i].category === "data_sdk_ad") {
         jsonArray.splice(i, 1);
      }
    }
  return JSON.stringify(jsonArray);
}