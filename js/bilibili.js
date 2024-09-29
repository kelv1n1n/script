let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const index = "/feed/index";
if (url.indexOf(index) != -1) {
  obj.data.items.forEach(index => {
    if (index.ad_info) {
        delete index;
    }
  });
}

  
body = JSON.stringify(obj);
$done({body});
