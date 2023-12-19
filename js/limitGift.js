
let body = $response.body;
/*const body = '{\n' +
    '  "code" : 10001,\n' +
    '  "message" : "success",\n' +
    '  "data" : {\n' +
    '    "gifts" : [\n' +
    '      {\n' +
    '        "description" : "",\n' +
    '        "commodityName" : "小风车",\n' +
    '        "labelType" : 2,\n' +
    '        "priceType" : 1,\n' +
    '        "commodityUrl" : "https:\\/\\/img.soulapp.cn\\/interestTest\\/e91c65fa4a0143b4880e90721630789b_1590655344931.png",\n' +
    '        "giftLimit" : true,\n' +
    '        "cornerMarkUrl" : "",\n' +
    '        "price" : 6,\n' +
    '        "giftShowType" : 0,\n' +
    '        "itemIdentity" : "91041201",\n' +
    '        "extAttributes" : "{\\"descSceneIdList\\":[\\"0\\",\\"1\\",\\"2\\",\\"3\\",\\"4\\",\\"5\\",\\"6\\",\\"7\\",\\"8\\",\\"9\\",\\"10\\",\\"11\\"],\\"animation\\":\\"https:\\/\\/china-img.soulapp.cn\\/admin\\/2021-08-31\\/89d4e8f3-3ed1-4054-b607-b9aab6d23ec5.mp4\\"}",\n' +
    '        "appVersion" : "",\n' +
    '        "freeTimes" : 0\n' +
    '      },\n' +
    '      {\n' +
    '        "description" : "灵魂力+52",\n' +
    '        "commodityName" : "莓莓蛋糕",\n' +
    '        "labelType" : 2,\n' +
    '        "priceType" : 1,\n' +
    '        "commodityUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2022-05-19\\/0b3f612e-f0dd-4658-97ed-5a2d94d66a9a.png",\n' +
    '        "giftLimit" : true,\n' +
    '        "cornerMarkUrl" : "",\n' +
    '        "price" : 12,\n' +
    '        "giftShowType" : 0,\n' +
    '        "itemIdentity" : "91084801",\n' +
    '        "extAttributes" : "{\\"animation\\":\\"https:\\/\\/china-img.soulapp.cn\\/admin\\/2022-05-19\\/116211ef-948b-4fce-92b4-770e6cf5f276.mp4\\"}",\n' +
    '        "appVersion" : "",\n' +
    '        "freeTimes" : 0\n' +
    '      },\n' +
    '      {\n' +
    '        "description" : "推荐力+36",\n' +
    '        "commodityName" : "桃心可可",\n' +
    '        "labelType" : 2,\n' +
    '        "priceType" : 1,\n' +
    '        "commodityUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2021-05-07\\/03793991-f719-41b2-a89a-cce227dab28e.png",\n' +
    '        "giftLimit" : true,\n' +
    '        "cornerMarkUrl" : "",\n' +
    '        "price" : 36,\n' +
    '        "giftShowType" : 0,\n' +
    '        "itemIdentity" : "91084901",\n' +
    '        "extAttributes" : "{\\"descSceneIdList\\":[\\"0\\",\\"6\\",\\"2\\",\\"3\\",\\"8\\"],\\"animation\\":\\"https:\\/\\/china-img.soulapp.cn\\/admin\\/2021-05-07\\/b8597d0c-1aa6-49c2-a146-7d8a3ac78f05.mp4\\"}",\n' +
    '        "appVersion" : "",\n' +
    '        "freeTimes" : 0\n' +
    '      },\n' +
    '      {\n' +
    '        "description" : "灵魂力+99",\n' +
    '        "commodityName" : "心动飞行记",\n' +
    '        "labelType" : 2,\n' +
    '        "priceType" : 1,\n' +
    '        "commodityUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2021-04-22\\/b1d60606-ab99-44b8-8b45-ebba09c2b665.png",\n' +
    '        "giftLimit" : false,\n' +
    '        "cornerMarkUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2022-09-01\\/977082bc-55f6-4ad5-b82f-b575fdbb5cce.png",\n' +
    '        "price" : 99,\n' +
    '        "giftShowType" : 1,\n' +
    '        "itemIdentity" : "91085001",\n' +
    '        "extAttributes" : "{\\"descSceneIdList\\":[\\"8\\"],\\"animation\\":\\"https:\\/\\/china-img.soulapp.cn\\/admin\\/2021-04-22\\/18b612df-2dab-469f-ac53-f310dd2aa494.mp4\\"}",\n' +
    '        "appVersion" : "",\n' +
    '        "freeTimes" : 0\n' +
    '      },\n' +
    '      {\n' +
    '        "description" : "",\n' +
    '        "commodityName" : "水晶鞋",\n' +
    '        "labelType" : 2,\n' +
    '        "priceType" : 1,\n' +
    '        "commodityUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2020-12-07\\/0a7b60d7-cd51-49e5-8a9f-af070a61e7dd.png",\n' +
    '        "giftLimit" : false,\n' +
    '        "cornerMarkUrl" : "https:\\/\\/china-img.soulapp.cn\\/admin\\/2022-09-06\\/549f9a2d-4074-4ba4-a5ae-9e6c868d6f39.png",\n' +
    '        "price" : 199,\n' +
    '        "giftShowType" : 2,\n' +
    '        "itemIdentity" : "91085601",\n' +
    '        "extAttributes" : "{\\"descSceneIdList\\":[\\"8\\"],\\"animation\\":\\"https:\\/\\/china-img.soulapp.cn\\/admin\\/2020-12-14\\/d37eefa0-994b-4f3e-89ea-e69ab4ed4c69.mp4\\"}",\n' +
    '        "appVersion" : "",\n' +
    '        "freeTimes" : 0\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  "success" : true\n' +
    '}';*/

let obj = JSON.parse(body);

console.log(obj);
obj.data = {};

const bodys = JSON.stringify(obj);
console.log(bodys)

/*var reg = /^https:\/\/api-chat\.soulapp\.cn\/v2\/chat\/limit\/gift/;
var str = "https://api-chat.soulapp.cn/v2/chat/limit/gift?bi=%5B%2218c7d298770%22%2C%22%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%22%2C%22Apple%22%2C%22iOS%22%2C%2215.5%22%2C%2215.5%22%2C%22iPhone%2013%22%2C%223%22%2C%22390%2A844%22%2C%22AppStore%22%2C%22WiFi%22%2C%22zh%22%5D&bik=32243&pageId=ChatDetail_Main&targetUserIdEcpt=Y0RjR3Boa3VNMDJiM0YxdnRVc25uQT09&type=1";
var result = reg.test(str);
console.log(result);*/

$done({bodys});
