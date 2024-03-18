
const req_headers = $request.headers;
req_headers['tk'] = 'mfXL88IxWOMedn0zsxfoUfT4evRGCQxj';
req_headers['cs'] = '0280c1854877b626ed3f07b7d4b178c407b2';
req_headers['slb'] = 'dE1vSGF4bzBvYWVyQkZZSzEvanZ0N3NoZmxPWEY4U1p0TW9IYXhvMG9hZUNPOXFJaWM2TEJRPT0=';

for (const headerField in req_headers) {
  console.log(`${headerField}: ${req_headers[headerField]}`);
}

$done({ headers : req_headers });
