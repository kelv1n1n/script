const user = "/mtop.idle.user.page.my.adapter";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(user) != -1) {
  //  底部社区小程序列表
  obj.data.container.sections = obj.data.container.sections.filter(item => item.index !== "6");

  //  个人等级
  obj.data.container.sections.forEach(section => {
    if (section.index === "1") {
        delete section.item.level;
    }
  });

  //  处理简历菜单
  obj.data.container.sections.forEach(sec => {
    if (sec.index === "5") {
        let tools = sec.item.tool.exContent.tools;

        // 删除第一个数组中 toolId 为 14 的元素
        tools[0] = tools[0].filter(tool => tool.exContent.toolId !== 14);

        // 删除第二个数组中 toolId 为 2 的元素
        tools[1] = tools[1].filter(tool => tool.exContent.toolId !== 2);
        
        // 两个合并成一个显示，注意是数组包含一个数组
        sec.item.tool.exContent.tools = [tools[0].concat(tools[1])];
    }
  });

}

body = JSON.stringify(obj);
$done({body});
