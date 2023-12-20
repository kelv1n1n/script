
const path = "/chat/limitInfo";
let url = $request.url;
let body = $response.body;
if (url.indexOf(path) != -1) {
    let obj = JSON.parse(body);
    console.log(obj);
    delete obj.data.subMsg;
    delete obj.data.extMsg;
    delete obj.data.abValue;
    delete obj.data.freeEquityStatus;
    delete obj.data.msg;
    delete obj.data.remainFreeCount;
    delete obj.data.type;
    obj.data.limit = false;
    body = JSON.stringify(obj);
    console.log(body)
}
$done({body});
