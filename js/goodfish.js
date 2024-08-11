const user = "/mtop.idle.user.page.my.adapter";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(user) != -1) {
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "6");
}

body = JSON.stringify(obj);
$done({body});
