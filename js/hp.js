const init = "/init";
const topics = "topics";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(init) != -1 {
        
        obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || item.en === "match");
        obj.result.clientLevelOneNavV2.forEach(card => {
              if (card.en === "match") {
               card.night = {};
               card.day = {};
              }
        });
}

if (url.indexOf(topics) != -1 {
        obj.data.topicResources = [];
}
body = JSON.stringify(obj);

$done({body});
