# 文档打印机（DocumentPrinter）

### 打印A4
```js
// 这里是把html转成pdf，实际打印的是pdf
let str = 'PaperNum=1;PrintType=5;Stamp=0;File[0]=c:/1.pdf;'
await StampPrinter.printAsync(str);

```