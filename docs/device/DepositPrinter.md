# 存单打印（DepositPrinter）

### 存单打印 - 字符串方式
```js
let printData = "1|1|00000000|1|127|49|190|90|0|0|2|0|0[]" + "24|27|22|44|账号" + "100|27|22|44|张三" + "..."
let parame = {
  "Data": printData,
  "DataEncoding": "GB2312",
  "InputData": 0
}
await DepositReader.rawDataAsync(parame);

// "100|27|22|44|张三" 100为横向距离 27为纵向距离 22为字体大小 44为内容宽度
```

### 存单打印 - json方式
```js
let obj = {
  "Number": "1",
  "Type": "1",
  "Count": 1,
  "BillNo": "002575062",
  "Width": 190,
  "Height": 125,
  "Elements": [{
    "X": 100,
    "Y": 20,
    "Value": "定期"
  }, {
    "X": 34,
    "Y": 35,
    "Value": "01"
  }, {
    "X": 105,
    "Y": 35,
    "Value": "张三"
  }, {
    "X": 34,
    "Y": 43,
    "Value": "10990130009157805"
  }, {
    "X": 53,
    "Y": 50,
    "Value": "贰佰元整"
  }, {
    "X": 53,
    "Y": 59,
    "Value": "200.000000"
  }, {
    "X": 27,
    "Y": 80,
    "Value": "20200616"
  }, {
    "X": 47,
    "Y": 80,
    "Value": "000300"
  }, {
    "X": 67,
    "Y": 80,
    "Value": "1.430000"
  }, {
    "X": 83,
    "Y": 80,
    "Value": "20200616"
  }, {
    "X": 103,
    "Y": 80,
    "Value": "20200916"
  }, {
    "X": 125,
    "Y": 80,
    "Value": "0.720000"
  }, {
    "X": 147,
    "Y": 80,
    "Value": "10000000"
  }, {
    "X": 163,
    "Y": 80,
    "Value": "0"
  }, {
    "X": 154,
    "Y": 110,
    "Value": "070064"
  }]
}
let jsonText = JSON.stringify(obj);
let parame = {
  "Data": jsonText,
  "DataEncoding": "GB2312",
  "InputData": 0
}
await DepositPrinter.rawDataAsync(parame);

```

### 退出存单
```js
DepositPrinter.controlMediaAsync(1);
```


*********************