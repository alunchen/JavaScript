const str = 'https://h5.qianbao.qq.com/auth/userinfo?_wv=1027&_wvx=10&_wwv=4'


function replaceURL(url) {
  // releaseUrl有时可能自行拼接了参数fail_url，fail_url中带有tfs域名，也需要改为相对域名
  const newUrl = decodeURIComponent(decodeURIComponent(url));
  const relativeUrl = newUrl.replace(/https:\/\/h5\.qianbao\.qq\.com\/auth\/userinfo/g, 'https://myun.tenpay.com/pages/verified/userinfo.html');
  return relativeUrl;
}

const relativeUrl = replaceURL(str)

console.log(relativeUrl)


