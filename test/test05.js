const str = 'releaseUrl=https://tfs.tenpay.com/wxFkControlH5/face-ver?hash_id=66_1708401267%26business_type=66%26fail_url=https%253A%252F%252Ftfs.tenpay.com%252Ftouch%252Fscene_wss.html%253Fscene_id%253DKF50020099'


function replaceURL(url) {
  // releaseUrl有时可能自行拼接了参数fail_url，fail_url中带有tfs域名，也需要改为相对域名
  const newUrl = decodeURIComponent(decodeURIComponent(url));
  const relativeUrl = newUrl.replace(/https:\/\/tfs\.tenpay\.com/g, '');
  return relativeUrl;
}

const relativeUrl = replaceURL(str)

console.log(relativeUrl)

