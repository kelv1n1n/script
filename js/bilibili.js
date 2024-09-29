let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const index = "/feed/index";
if (url.indexOf(index) != -1) {
  obj.data.items = obj.data.items.filter((i) => i?.card_goto === "av");
}

  
body = JSON.stringify(obj);
$done({body});
