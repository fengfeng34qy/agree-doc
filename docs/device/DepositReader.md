# 存单读取（DepositReader）

### 存单读取
```js
let parame = {
  BackImageFile: "D:\\Deposit\\BackImage.jpg", //图片存放的地址
  FrontImageFile: "D:\\Deposit\\FrontImage.jpg",
  ImageSource: 7,
  CodelineFormat: 1,
  BackImageColorFormat: 4,
  FrontImageColorFormat: 4,
  BackImageType: 4,
  FrontImageType: 4
}
await DepositReader.readImageAsync(parame);

```


*********************