let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("/live/studio/id/v4")) {
    if (obj.dt && obj.dt.liveStudioStreamRelVoList) {
    // 访问liveStudioStreamRelVoList数组
    const streams = obj.dt.liveStudioStreamRelVoList;
    
    // 遍历数组中的每个流对象
    streams.forEach(stream => {
      // 打印流的标题
      console.log(stream.title);
    	console.log('');
    
      // 遍历该流的质量对象数组
      stream.qualitys.forEach(quality => {
        // 打印质量名称和质量URL
        console.log(`${quality.qualityName}: ${quality.qualityUrl}`);
    		console.log('');
      });
    
      // 打印一个空行以分隔不同的流（可选）
      console.log('');
    	console.log('');
    });
}

}

if (url.includes("/project/studioId")) {
    obj.dt = [];
}

if (url.includes("/project/userCenter")) {
    obj.dt = [];
}

body = JSON.stringify(obj);
$done({body});
