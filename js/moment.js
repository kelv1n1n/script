var url = 'https://ad-r.soulapp.cn/api/v2/report?body=AKeEpNGDrXBSiUbzHQqCJFfgDyLa7uxs7RzGhBLdVhwz2LLEz7p1bkwxWhsPZLYvkWi36dHeH6Ep2rn58bkNa3MZyEM2cMtmrY2QWSb7cau2ivHxUVQ9hC1y4TdiR3JW23JEybh4YNaeuXSL4yXr9LdcpLr1mqHZvfLxh2dQfDjcovwPfivNY6Xdx7rxHdWyyE3WuQ4NWNvKZDd8PLD7gC4MCbwa4FNgm5P74J52cXvGsk38poUo5BdEPpKZy7j2tpNkGG6XrAsCsF9NXRPn89cU4RGd87LDhAihnT911kNGPATaaQsbrQi2E1sDfgXQTDuNiXcGWm5wyhG89FpXvrqSihP9GKAfgK7y3vo2tBCZBBSN42Asc6Upgb4VsEQduLftsKQcPMSKda1YdSakTp2XA5w2iZ9S5TPBXvFenZB4TZVxA5YQa47iaQzseZ18XqrzDrsFom6rbatM5aWr9J2MJev1SbVfFTDRrdDxHv19jakStdsqodjvMn9NbG4i4WbkhFvBsfFm9V16kkNmpDEdruJ1M1ZNjg2soPy4mo17mAGH74XjMaFqBjrwtVo6aZdpZoUVtkp94vVc8t1DSaZSeCFc53JZYsH1328ZkU4gEWvNgaq5Xx1yrHyWoYeZhpa2WqmRwjHmCnCK2oKNSBDwLT1V27o3KXuRuXGi9koGgYSDejMXZqn2QNjsSKPyLoiqsPSaaPV9sSdhpPWJNffDqZSwK9o45TVmrV2FyrYR5AXEGMC9bjtfnJFESxwRZN4JyciNHytLsEonJLDbDdDy3Enjh58Xpzrkmd9vsyVKvWQCikKXqz3oNyign3tqVf1moRsA3EGugtXAJhhLi1a1fH7XiRCY6QoXveECCa&encrypt_v=2&iv=9ayD9HUSLMg56Eur&m_deeplink_state=__DEEPLINK_STATE__&m_down_x=__DOWN_X__&m_down_y=__DOWN_Y__&m_download_state=__DOWNLOAD_STATE__&m_gravity_x=0&m_gravity_y=0&m_gravity_z=0&m_img_urls=%5B%22https%3A%5C/%5C/soul-ad.soulapp.cn%5C/material%5C/prod%5C/image%5C/2023-10-10%5C/770d5485593948dba942a256e503df6a.png%22%2C%22https%3A%5C/%5C/soul-ad.soulapp.cn%5C/material%5C/prod%5C/image%5C/2023-10-10%5C/641b6636700c43278b1e27e5168dfd52.png%22%2C%22https%3A%5C/%5C/soul-ad.soulapp.cn%5C/material%5C/prod%5C/image%5C/2023-10-10%5C/1319f3be1aea4675bf2d6be29d7e14ec.png%22%2C%22https%3A%5C/%5C/soul-ad.soulapp.cn%5C/material%5C/prod%5C/image%5C/2023-10-10%5C/493f7fa49f524a4aa1e8dc4e5608feac.png%22%5D&m_ts=1702994979326&m_up_x=__UP_X__&m_up_y=__UP_Y__&m_video_progress=__VIDEO_STATE_PROGRESS__&m_video_state=__VIDEO_STATE__&m_video_urls=__TVIDEOS__&sign=9fb9cc033ec5aed01546ff4a802e4c55&sign_v=1'

console.log(url);

var reg = /^https:\/\/ad-r\.soulapp\.cn\/api\/v2\/report/

var res = reg.test(url);
console.log(res)

let reqUrl = $request.url;

//var updateUrl = updateUrlParameter(reqUrl, 'body', null)

var updateUrl = updateUrlParameter(reqUrl, 'm_img_urls', '')
updateUrl = updateUrlParameter(updateUrl, 'body', '')
console.log(updateUrl);

$done({updateUrl});


function updateUrlParameter(originalUrl, paramName, newValue) {
  var urlParts = originalUrl.split("?");
  if (urlParts.length >= 2) {
    var params = urlParts[1].split("&");

    for (var i = 0; i < params.length; i++) {
      var param = params[i].split("=");
      if (param[0] === paramName) {
        // Update the parameter value
        param[1] = newValue;
        params[i] = param.join("=");

        // Reconstruct the URL with the updated parameters
        return urlParts[0] + "?" + params.join("&");
      }
    }
  }

  // Parameter not found
  console.error("Parameter not found: " + paramName);
  return originalUrl;
}





