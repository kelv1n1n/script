//  去除顶部菜单保留热榜、赛事
const init = "/init";
//  去除专区帖子列表顶部横幅推广
const topics = "topics";
//  过滤热榜游戏帖子
const hot = "/hotRank";
//  赛事直播详情页
const liveTabList = "/matchallapi/liveTabList";

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(init) != -1) {
 const tabArray = ["hotRank","match"];
 obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => tabArray.includes(item.en));
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

if (url.indexOf(liveTabList) != -1) {
 let tabList = ["live_lottery", "live_game"];
 obj.result.categoryList = obj.result.categoryList.filter(item => !tabList.includes(item.categoryId));
}




//  -------------怎么肥事-----------------
if (url.includes("/buffer/hotList")) {
    delete obj.result.topBanner;
}

if (url.includes("/mang/preview/banners")) {
    delete obj.data;
}

if (url.includes("/bbsallapi/lego/data")) {
    obj.data.cards.forEach(card => { 
        if (card.code === "multiIcon") {
            const titlesToRemove = ["个性换肤", "专家预测", "邀请好友", "版主中心", "JRs战术板", "草稿箱" , "58同城"];
            if (card.components && card.components.length > 0) {
                card.components = card.components.filter(component => {
                    return !(component.data && titlesToRemove.includes(component.data.title));
                });
            }
        }
    });
}

//   个人页我的应用菜单
if (obj.data && obj.data.cards) {
    obj.data.cards = obj.data.cards.filter(card => {
        if (card.components && card.components.length > 0) {
            return !card.components.some(component => component.data && component.data.title === "我的应用");
        }
        return true;
    });
}

if (url.includes("/bplapi/user/v1/more")) {
    if (obj.result && obj.result.vipInfo && obj.result.vipInfo.textInfo) {
        delete obj.result.vipInfo.textInfo;
    }
    if (obj.result && obj.result.vipInfo) {
        delete obj.result.vipInfo;
    }
}




body = JSON.stringify(obj);
$done({body});
