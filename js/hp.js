//  去除顶部菜单保留热榜、赛事
const init = "/init";
//  去除专区帖子列表顶部横幅推广
const topics = "topics";
//  过滤热榜游戏帖子
const hot = "/hotRank";

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(init) != -1) {
 obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || item.en === "match");
 //  活动栏
 delete obj.result.activityNav;
}

if (url.indexOf(topics) != -1) {
 obj.data.topicResources = [];
}

if (url.indexOf(hot) != -1) {
 let nicknamesToExclude = ["虎扑电竞资讯"];  
 let topicNamesToExclude = ["英雄联盟", "王者荣耀", "和平精英"];
 obj.result.listV2 = obj.result.listV2.filter(item => !nicknamesToExclude.includes(item.thread.nickname));
 obj.result.listV2 = obj.result.listV2.filter(item => !topicNamesToExclude.includes(item.thread.topic_name));
}

body = JSON.stringify(obj);
$done({body});
