const user = "/mtop.idle.user.page.my.adapter";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(user) != -1) {
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "6");

  obj.data.container.sections.forEach(section => {
    if (section.index === "1") {
        delete section.item.level;
    }
});

}

body = JSON.stringify(obj);
$done({body});
