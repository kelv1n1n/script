//  去除顶部菜单保留热榜、赛事
const init = "/init";
//  去除专区帖子列表顶部横幅推广
const topics = "topics";
//  修改篮球nba赛事菜单文字颜色
const tab = "/basketballapi/news";
//  过滤热榜游戏帖子
const hot = "/hotRank";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(init) != -1) {
        obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || item.en === "match");
        //obj.result.clientLevelOneNavV2.forEach(card => {
              //if (card.en === "match") {
               //card.night = {};
               //card.day = {};
              //}
        //});

        //  活动菜单，奥运会什么的
        obj.result.activityNav.forEach(card => {
                card.imgHeight = "0";
                card.name = "奶思";
                card.schema = "";
        });
}

if (url.indexOf(topics) != -1) {
        obj.data.topicResources = [];
}

if (url.indexOf(tab) != -1) {
        obj.result.forEach(item => {
              item.color.day = "#000000"
        });
}

if (url.indexOf(hot) != -1) {
        let nicknamesToExclude = ["虎扑电竞资讯"];  
        let topicNamesToExclude = ["英雄联盟", "王者荣耀", "和平精英"];
        obj.result.listV2 = obj.result.listV2.filter(item => !nicknamesToExclude.includes(item.thread.nickname));
        obj.result.listV2 = obj.result.listV2.filter(item => !topicNamesToExclude.includes(item.thread.topic_name));
}

body = JSON.stringify(obj);

$done({body});
