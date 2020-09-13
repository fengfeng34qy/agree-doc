---
title: 加解密
---

## 加密解密(AES版)
```js
var CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');
var pwd = '123456'  // 需要加密的文本
// 加密
var encrypted = CryptoJS.AES.encrypt(pwd, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
console.log(encrypted.toString())

// 解密
var decrypted = CryptoJS.AES.decrypt(encrypted, key,{
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
console.log(decrypted.toString(CryptoJS.enc.Utf8))  // 123456
```

## 加密解密(DES版)
```js
var CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
var pwd = '123456'  // 需要加密的文本

var keyHex = CryptoJS.enc.Utf8.parse(key);
var encrypted = CryptoJS.DES.encrypt(pwd, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
encrypted = encrypted.ciphertext.toString().toUpperCase()

// 解密
var keyHex = CryptoJS.enc.Utf8.parse(key);
var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(encrypted)
}, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
console.log(decrypted.toString(CryptoJS.enc.Utf8))  // 123456
```
