// 加密
// const buf = Buffer.from(JSON.stringify({
//     usernname: 'yao',
//     password: 123456789,
//     descrption: `这是一个测试的令牌`,
//     skill: ['ps', 'js', 'css'],
// }), 'utf8');
// console.log(buf.toString('base64'));

// 解密
// https

const buf = Buffer.from('eyJ1c2Vybm5hbWUiOiJ5YW8iLCJwYXNzd29yZCI6MTIzNDU2Nzg5LCJkZXNjcnB0aW9uIjoi6L+Z5piv5LiA5Liq5rWL6K+V55qE5Luk54mMIiwic2tpbGwiOlsicHMiLCJqcyIsImNzcyJdfQ==', 'base64');
console.log(buf.toString('utf8'));