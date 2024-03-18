
const req_headers = $request.headers;
req_headers['tk'] = '';

for (const headerField in req_headers) {
  console.log(`${headerField}: ${req_headers[headerField]}`);
}

const tk = req_headers['tk'];
console.log(tk);

$done({ headers : req_headers });
