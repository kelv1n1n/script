const home = "/homepage";
let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);

if (url.indexOf(home) != -1) {
    obj.roominfo_vec
}

body = JSON.stringify(obj);
$done({body});
