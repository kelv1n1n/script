
let body = $response.body;
/*const body = '' +
    '{"code" : 10001,' +
    '"message" : "success",' +
    '"data" : {"subMsg" : "今天找Ta的人有点多，请明天再来",' +
        '"extMsg" : "送出5个礼物",' +
        '"abValue" : "",' +
        '"freeEquityStatus" : false,' +
        '"limit" : true,' +
        '"msg" : "Ta太受欢迎",' +
        '"remainFreeCount" : 0,' +
        '"type" : 1},' +
    '"success" : true' +
    '}';*/

let obj = JSON.parse(body);

console.log(obj);
delete obj.data.subMsg;
delete obj.data.extMsg;
delete obj.data.abValue;
delete obj.data.freeEquityStatus;
delete obj.data.msg;
delete obj.data.remainFreeCount;
delete obj.data.type;
obj.data.limit = 0;

const bodys = JSON.stringify(obj);
console.log(bodys)

/*var reg = /^https:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo/;
var str = "https://api-chat.soulapp.cn/chat/limitInfo?bi=%5B%2218c7f9754c7%22%2C%22%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%22%2C%22Apple%22%2C%22iOS%22%2C%2215.5%22%2C%2215.5%22%2C%22iPhone%2013%22%2C%223%22%2C%22390%2A844%22%2C%22AppStore%22%2C%224G%22%2C%22zh%22%5D&bik=32243&pageId=HomePage_TAMain&postId=3664648406&source=10000&targetUserIdEcpt=RUY5L3hhQ1JhWkxWVlgvZUh1NEExdz09";
var result = reg.test(str);
console.log(result);*/

$done({bodys});
