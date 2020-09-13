# 凭条打印
## from打印
```js
let prtData = [
  '交易名称：' + '行内转账',
  '交易时间：' + '2020-07-17 20:00:00'
]
let result = await ReceiptPrinter.printAsync(prtData)
```
## rowData打印
```js
await ReceiptPrinter.rawDataAsync(
{
  Data: '<CTRL:CRLF>交易日期:2020-07-17 20:00:00',
  DataEncoding: "GB2312",
  InputData: 0
});
ReceiptPrinter.controlMediaAsync(1);  // 打印完退纸
```