let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("x/v2/splash")) {
    if (!obj.data.show) {
      console.log('数据无show字段');
    } else {
      delete obj.data.show;
    }
} else if (url.includes("/x/v2/search/square")) {
  if (obj?.data) {
    obj.data = { type: "history", title: "搜索历史", search_hotword_revision: 2 };
  }
}

body = JSON.stringify(obj);
$done({body});
