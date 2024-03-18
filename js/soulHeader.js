
const req_headers = $request.headers;
req_headers['tk'] = 'mfXL88IxWOMedn0zsxfoUfT4evRGCQxj';
console.log("遍历头部对象并打印每个字段和值开始❇️");
for (const headerField in req_headers) {
  console.log(`${headerField}: ${req_headers[headerField]}`);
}
console.log("遍历头部对象并打印每个字段和值结束🍓");

const tk = req_headers['tk'];
console.log(tk);

$done({ headers : req_headers });
