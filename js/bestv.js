let data = JSON.parse($response.body);
if (data.dt && data.dt.liveStudioStreamRelVoList) {
    // 访问liveStudioStreamRelVoList数组
    const streams = data.dt.liveStudioStreamRelVoList;
    
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
$done({});
