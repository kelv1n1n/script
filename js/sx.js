
//const people = "/athena/v7/people/my";

let url = $request.url;

let body = $response.body;
let obj = JSON.parse(body);
obj.message = "";
obj.cypher = null

body = JSON.stringify(obj);
$done({body});
