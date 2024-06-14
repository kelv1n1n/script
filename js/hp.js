const init = "/init";
const topics = "topics";
const tab = "/basketballapi/news";
const hot = "/hotRank";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(init) != -1) {
        obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || item.en === "match");
        obj.result.clientLevelOneNavV2.forEach(card => {
              if (card.en === "match") {
               card.night = {};
               card.day = {};
              }
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
        let topicNamesToExclude = ["英雄联盟"];  
        obj.result.listV2 = obj.result.listV2.filter(item => !nicknamesToExclude.includes(item.nickname) || !topicNamesToExclude.includes(item.topic_name));  
}

body = JSON.stringify(obj);

$done({body});
