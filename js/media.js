let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if ('subTypeMap' in obj) {  
  for (let key in obj.subTypeMap) {  
    if (key === '332') {  
      delete obj.subTypeMap[key];  
      break; // 如果只需要删除一个，可以使用 break 退出循环  
    }  
  }  
}

body = JSON.stringify(obj);
$done({body});
