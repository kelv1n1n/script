const all = "/all";
const vip = "/vip";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(all) != -1) {
    delete obj.data.adlist;
    delete obj.data.banner;
}

if (url.indexOf(vip) != -1) {
    delete obj.data.adlist;
    delete obj.data.banner;

    obj.data.list.forEach(card => {
        card.limit.prerequisite = 0;
        card.limit.ptid = "0";
        card.private = 0;
        delete card.emceelevel;
        console.log("修改了);
    });
    
}

body = JSON.stringify(obj);
$done({body});
