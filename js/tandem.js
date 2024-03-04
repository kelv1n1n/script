const path = "/chat/limitInfo";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
    
    //body = JSON.stringify(obj);
    //console.log(body)
} 

body = JSON.stringify(obj);
$done({body});
