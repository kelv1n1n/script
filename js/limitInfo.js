
const path = "/chat/limitInfo";
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
} else {
    obj.data.showRedMind=false;
    obj.data.gameInfo=false;
    obj.data.showLuckyBag=false;
    obj.data.coreCards = obj.data.coreCards.filter(card => card.sortId === 2 || card.sortId === 3);

}
console.log(obj)
body = JSON.stringify(obj);
$done({body});
