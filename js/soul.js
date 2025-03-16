const path = "/chat/limitInfo";
const game = "/planet/config";
const flag = "/planet/recListV2";
const tab = "/post/recSquare";
const cacl = "/calculateSoulList";
const chatRoomTab = "/getRoomTagInfo";
const roomAd = "/chatroom/chatClassifyRoomList";
const infos = "/user/ext/info";
const bubble = "/bubbling/queryMyBubbling";
const match = "/user/isMatch";
const header = "/square/header/tabs";
const user = "/chat/user/info";
const homePage = "/homepage/metrics";
const guideUserList = "relation/guideUserList";

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    delete obj.data.subMsg;
    delete obj.data.extMsg;
    delete obj.data.abValue;
    delete obj.data.freeEquityStatus;
    delete obj.data.msg;
    delete obj.data.remainFreeCount;
    delete obj.data.type;
    obj.data.limit = false;
} else if (url.indexOf(infos) !== -1) {
    obj.data.displayOldAvatar = true;
    obj.data.userAvatarStatus = 0;
} else if (url.indexOf(game) != -1){
    obj.data.showRedMind = false;
    obj.data.chatRoomInfo.showChatRoom = false;
    obj.data.gameInfo.showGameCard = false;
    obj.data.coreCards = obj.data.coreCards.filter(
        card => card.sortId === 3 || card.sortId === 1
            //card.sortId === 2 || 
            //card.sortId === 3 ||
            //card.sortId === 1 ||
            //card.sortId === 9
        );
    obj.data.gameInfo.gameCards = [];
    obj.data.coreCards.forEach(card => {
        if (card.hasOwnProperty('showLuckyBag') && card.showLuckyBag === true) {
          card.showLuckyBag = false;
        }
        card.showLuckyBag = false;
        card.showRedMind = false;
        card.style = 1;
        delete card.bgImg;
        delete card.iconUrl;
    });

    // 隐藏星球按钮
    //obj.data.coreCards = [];
    obj.data.showLuckyBag = false;

} else if (url.indexOf(flag) != -1) {
    obj.data.topicList = [];
    //obj.data.topicList = obj.data.topicList.filter(card => card.topic === "今日hot" || card.topic === "闲聊唠嗑"|| card.topic === "心动速配");
} else if (url.indexOf(tab) != -1) {
    obj.data = obj.data.filter(card => card.pageId === "PostSquare_Recommend");
} else if (url.indexOf(cacl) != -1) {
    obj.data.model.show = false;
} else if (url.indexOf(chatRoomTab) != -1) {
    //obj.data.res = obj.data.res.filter(item => item.id === 0 || item.id === 2 || item.id === 4 || item.id === 5);
    const tabArr = [4,5];
    obj.data.res = obj.data.res.filter(item => tabArr.includes(item.id));
} else if (url.indexOf(roomAd) != -1) {
    // 派对中间广告横幅
    obj.data.positionContentRespList = [];
    //console.log(JSON.stringify(obj.data.positionContentRespList));
} else if (url.indexOf(bubble) != -1) {
    obj['data'] = {
        "mood": "https://china-img.soulapp.cn/admin/2023-02-20/b57cb774-3ef7-4743-be43-9723e4508c38.png",
        "unreadQuantity": 0
    };
} else if (url.indexOf(match) != -1) {
    obj.data.isMatch = 1;
} else if (url.indexOf(header) != -1) {
    obj.data.forEach(card => {
        card.unreadFlag = 0;
    });
    // 只保留同城tab
    //obj.data = obj.data.filter(item => item.pageId === "PostSquare_City");
} else if (url.indexOf(user) != -1) {
    obj.data.followed = true;
    obj.data.follow = true;
} else if (url.indexOf(homePage) != -1) {
    obj.data.recentViewNum = 0;
    obj.data.showTipsCard = false;
    obj.data.showMetric = false;
    obj.data.hasHomePageLiked = false;
    if (obj && obj.data && obj.data.homePageLikedMetric){
      obj.data.homePageLikedMetric.addNum = 0;
      obj.data.homePageLikedMetric.likedTotalNum = 0;
      obj.data.homePageLikedMetric.hasShowHistoryDynamic = false;
    }
    //obj.data.homePageLikedMetric.likedTotalNum = 0;
    //obj.data.homePageLikedMetric.hasShowHistoryDynamic = false;
} else if (url.indexOf(guideUserList) != -1) {
    obj.data.userDTOList = [];
}

body = JSON.stringify(obj);
$done({body});
