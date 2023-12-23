




for (var i = body.bund.length - 1; i >= 0; i--) {
  if (body.bund[i].bundleName === "1") {
    body.bund.splice(i, 1);
  }
}