
const path = "/chat/limitInfo";
const game = "/planet/config";
const flag = "/planet/recListV2";
const tab = "/post/recSquare";

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    //let obj = JSON.parse(body);
    console.log(obj);
    delete obj.data.subMsg;
    delete obj.data.extMsg;
    delete obj.data.abValue;
    delete obj.data.freeEquityStatus;
    delete obj.data.msg;
    delete obj.data.remainFreeCount;
    delete obj.data.type;
    obj.data.limit = false;
    //body = JSON.stringify(obj);
    console.log(body)
} else if (url.indexOf(game) != -1){
    obj.data.showRedMind=false;
    obj.data.gameInfo=false;
    obj.data.showLuckyBag=false;
    //obj.data.coreCards = obj.data.coreCards.filter(card => card.sortId === 2 || card.sortId === 3);
    obj.data.coreCards = [];
} else if (url.indexOf(flag) != -1) {
    //obj.data.topicList = [];
    obj.data.topicList = obj.data.topicList.filter(card => card.topic === "今日hot" || card.topic === "闲聊唠嗑"|| card.topic === "心动速配");
} else if (url.indexOf(tab) != -1) {
        obj.data = obj.data.filter(card => card.pageId != "PostSquare_RecommendSR");
}

body = JSON.stringify(obj);
$done({body});
