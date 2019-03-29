const https = require('https');
const querystring = require('querystring');

const options = {
  hostname: 'wx2.qq.com',
  port: 443,
  path: '/cgi-bin/mmwebwx-bin/webwxsendmsg',
  method: 'POST',
  headers: {
    'Cookie': 'pgv_pvi=3144568832; pgv_pvid=8063561875; RK=yJR8PnIMeh; ptcz=f79dec973412c3e65023489a20d86f57c14d2a5eb6e83e3af67c621c37a4caf5; webwxuvid=d54a81c7bdb48fadc1d21a4c1c35817d4ea25beff75c197c2605af5a9d912221949dd7f2a64144e874aa96c455376ac4; o_cookie=729299641; pac_uid=1_729299641; tvfe_boss_uuid=58fa589d05d3bfc6; eas_sid=W1L5Z5s0M4E6b1o1f1F436o2l8; wxuin=810111960; pgv_info=ssid=s4226102222; pgv_si=s363606016; mm_lang=zh_CN; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND_STATE=1; wxsid=pFNB+HO69kGuT6Mc; webwx_data_ticket=gSemkZlS2ND1PbsKbveSEcNW; webwx_auth_ticket=CIsBENSS9vkNGoABEZBNgI2kBVMCsSOA8e76sxYqF490YjkKTBYXOpbCMAukChMWE/k1k1W/gE3aZFl1NXe8FyQDhRpCgpCvZzl0vxd1dClbSmiqqFB2S0Mt5A0zUj9VJ90S5xQ0UdhpcvwlkLQ2OW1H49eVcB3N4mNIp/BD73m3ZbUa7j2F1m0gDkM=; wxloadtime=1553765335_expired; wxpluginkey=1553761682',
  }
};
// req请求头和请求体
// res响应头和响应体
const req = https.request(options, (res) => {
  console.log('状态码:', res.statusCode);
  console.log('请求头:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.write(querystring.stringify({"BaseRequest":{"Uin":810111960,"Sid":"pFNB+HO69kGuT6Mc","Skey":"@crypt_d6b25e9_db230fa7e16a870c79c76b6be2359e0c","DeviceID":"e359846443211339"},"Msg":{"Type":1,"Content":"再测试","FromUserName":"@f503014aa600fb8dea4cea4b51b55f39","ToUserName":"@@204e20bab20a6e2f17c74a0bf362fcda003a04370de8e99baca377a1cb640d56","LocalID":"15537650360835617","ClientMsgId":"15537650360835617"},"Scene":0}))
req.end();