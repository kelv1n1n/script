
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const mine = "position_types=60%2C560%2C850%2C860%2C890%2C2400";
if (url.indexOf(mine) != -1) {
  obj.data = [];
  body = JSON.stringify(obj);
  console.log("清除啦");
  $done({body});
}

const typeArr = [50, 2, 90, 770, 80];
obj.data = obj.data.filter(item => !typeArr.includes(item.position_type));


body = JSON.stringify(obj);
$done({body});
