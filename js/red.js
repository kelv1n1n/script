const all = "/all";
const vip = "/vip";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(all) != -1) {
    obj.roominfo_vec.forEach(card => {
        if (card.room_id === 0) {
            delete card.banner_data;
        }
    });
}

if (url.indexOf(vip) != -1) {
    obj.roominfo_vec.forEach(card => {
        if (card.room_id === 0) {
            delete card.banner_data;
        }
    });
}

body = JSON.stringify(obj);
$done({body});
