# 存折打印（PassbookPrinter）

### 存折读取
```js
await PassbookPrinter.readTracksAsync();
```

### 存折打印
```js
let printData = [
  "",
  "",
  "",
  "",
  "",
  "209|20180619|转开|3月|180619|180919|人民币"
];
await PassbookPrinter.printContentWithEmptyLinesByFormAsync({
"Content": printData,
"FormName": "PassbookForm",
"MediaName": "PassbookMedia"
});

```


*********************