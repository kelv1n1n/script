let body = $response.body;
let obj = JSON.parse(body);

obj.result.clientLevelOneNavV2 = obj.result.clientLevelOneNavV2.filter(item => item.en === "hotRank" || itme.en === "match");

obj.result.clientLevelOneNavV2.forEach(card => {
        if (card.en === "match") {
          card.night = {};
          card.day = {};
        }
    });

body = JSON.stringify(obj);

$done({body});
