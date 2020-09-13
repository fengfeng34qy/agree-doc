# 磁条刷卡器（SPCardReader）

### 读磁条卡
```js
let result = await MagcardReader.readAsync();
```

### 取消读磁条卡
```js
MagcardReader.cancelAsync();
```