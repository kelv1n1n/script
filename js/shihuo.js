const home = "/home/info/v1";
const config = "/getconfig/pubsetting";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(home) != -1) {
    obj.data.new_activity = [];
} else if (url.indexOf(config) != -1) {

}
console.log(JSON.stringify(obj));
body = JSON.stringify(obj);
$done({body});
