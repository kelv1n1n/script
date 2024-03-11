const path = "/chat/limitInfo";
const game = "/planet/config";
const flag = "/planet/recListV2";
const tab = "/post/recSquare";
const cacl = "/calculateSoulList";
const chatRoomTab = "/getRoomTagInfo";
const roomAd = "/chatroom/chatClassifyRoomList";
const infos = "/user/ext/info";
const bubble = "/bubbling/queryMyBubbling";

let url = $request.url;
//console.log("url: " + url);
//let req = JSON.parse($request.body);
let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    //let obj = JSON.parse(body);
    //console.log(obj);
    delete obj.data.subMsg;
    delete obj.data.extMsg;
    delete obj.data.abValue;
    delete obj.data.freeEquityStatus;
    delete obj.data.msg;
    delete obj.data.remainFreeCount;
    delete obj.data.type;
    obj.data.limit = false;
    //body = JSON.stringify(obj);
    //console.log(body)
} else if (url.indexOf(infos) !== -1) {
    //console.log("进来了");
    obj.data.displayOldAvatar = true;
    obj.data.userAvatarStatus = 0;
    //console.log(JSON.stringify(obj.data.displayOldAvatar));
} else if (url.indexOf(game) != -1){
    obj.data.showRedMind = false;
    //obj.data.gameInfo = false;
    //obj.data.showLuckyBag = false;
    obj.data.chatRoomInfo.showChatRoom = false;
    obj.data.gameInfo.showGameCard = false;
    obj.data.coreCards = obj.data.coreCards.filter(card => card.sortId === 1 || card.sortId === 3);
    //obj.data.coreCards = [];
    //obj.data.luckyBagEntranceImg = "";
    //console.log(JSON.stringify(obj));

    obj.data.coreCards.forEach(card => {
        //if (card.hasOwnProperty('showLuckyBag') && card.showLuckyBag === true) {
          //card.showLuckyBag = false;
        //}
        card.showLuckyBag = false;
        card.showRedMind = false;
        card.style = 1;
    });



} else if (url.indexOf(flag) != -1) {
    obj.data.topicList = [];
    //obj.data.topicList = obj.data.topicList.filter(card => card.topic === "今日hot" || card.topic === "闲聊唠嗑"|| card.topic === "心动速配");
} else if (url.indexOf(tab) != -1) {
    obj.data = obj.data.filter(card => card.pageId === "PostSquare_Recommend");
} else if (url.indexOf(cacl) != -1) {
    obj.data.model.show = false;
} else if (url.indexOf(chatRoomTab) != -1) {
    obj.data.res = obj.data.res.filter(item => item.id === 0 || item.id === 2 || item.id === 4 || item.id === 5);
} else if (url.indexOf(roomAd) != -1) {
    //console.log("命中了" + url);
    obj.data.positionContentRespList = [];
    //console.log(JSON.stringify(obj.data.positionContentRespList));
} else if (url.indexOf(bubble) != -1) {
    console.log("进来了");
    let resp = "";
    resp = '{"code":10001,"message":"success","data":{"mood":"https://china-img.soulapp.cn/admin/2023-02-20/b57cb774-3ef7-4743-be43-9723e4508c38.png","unreadQuantity":0},"success":true}';
    
    $done({resp});
}

console.log("进来了..");
body = JSON.stringify(obj);
$done({body});
