// let url = 'https://ad-r.soulapp.cn/api/v2/report?body=44WWH6y7fsxtMhgq8bNn4fSvMWSfo1Av3tFr8a3igT4VHXXZJdCsWK1RfmRds51Kj3XYaycMqr9UVyenN9MuG7FUb9a2UqFLhmXYSXDRhwtnD6yjUUCxM5vCREy1XKRU9D1W5iH1rPbsoJoue9h1WWkimy4g43Rf6BRMPpFot9ESjQjSscMZXGLMaG2mBKvPDxXV4Tz9jWEpw9gk81rV7qbtFoeqWsez5bwSsrFcxF5oeXhhP&iv=qlu1jOU08RQjvqFW&sign=9880aad6b75861b0ea98f4fdf46b736b&encrypt_v=2&m_ad_third_slot_id=1658948691&m_channel_id=27&m_charge_type=1&m_pid=0_1385000000_27000000_11000000&m_price=137&m_ts=1702968249563&m_img_urls=%5B%22https%3A%5C/%5C/img1.360buyimg.com%5C/pop%5C/jfs%5C/t1%5C/181898%5C/2%5C/41116%5C/101091%5C/655c7a4dF85fb3dc1%5C/cadd467b1b07369e.jpg%22%5D&m_video_urls=__TVIDEOS__&m_type=0&sign_v=1';
//
// var reg = /^https:\/\/ad-r\.soulapp\.cn\/api\/v2\/report/;
//
// var result = reg.test(url);
// console.log(result);


// let ad = 'https://ad-audit-provider.soulapp.cn/api/audit?bi=%5B%2218c80d146e0%22%2C%22%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%22%2C%22Apple%22%2C%22iOS%22%2C%2215.5%22%2C%2215.5%22%2C%22iPhone%2013%22%2C%223%22%2C%22390%2A844%22%2C%22AppStore%22%2C%224G%22%2C%22zh%22%5D&bik=32243&pageId=PostSquare_Recommend';
//
// var regAd = /^https:\/\/ad-audit-provider\.soulapp\.cn\/api\/audit/;
// var result = regAd.test(ad);
// console.log(result);

let body = $response.body;
let obj = JSON.parse(body);
console.log(obj);
obj.data.putStatus = false;
body = JSON.stringify(obj);
console.log(body)
$done({body});
