let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if ('subTypeMap' in obj) {  
  for (let key in obj.subTypeMap) {
    if (key === '332' || key === '198') {
      delete obj.subTypeMap[key];  
      //break; // 如果只需要删除一个，可以使用 break 退出循环  
    }  
  }  
}
if ('subTypeMap' in obj) {  
  for (let key in obj.subTypeMap) {  
    if (key === '332') {  
      console.log(obj.subTypeMap[key]); // 输出键为 '332' 的 JSON 对象  
      break; // 如果只需要获取一个，可以使用 break 退出循环  
    }
  }
}
body = JSON.stringify(obj);
$done({body});
