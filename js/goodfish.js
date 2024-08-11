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

  obj.data.container.sections.forEach(sec => {
    if (sec.index === "5") {
        let tools = sec.item.tool.exContent.tools;

        // 删除第一个数组中 toolId 为 14 的元素
        tools[0] = tools[0].filter(tool => tool.exContent.toolId !== 14);

        // 删除第二个数组中 toolId 为 2 的元素
        tools[1] = tools[1].filter(tool => tool.exContent.toolId !== 2);
    }
  });

}

body = JSON.stringify(obj);
$done({body});
