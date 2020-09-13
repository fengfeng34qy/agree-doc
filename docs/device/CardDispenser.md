# 发卡器（CardDispenser）

### 发卡
```js
let dispense = {
  Present: false, // false:卡发到卡道内; true:卡发到卡口
  Number: 1 // 卡箱号
};
await CardDispenser.dispenseCardAsync(dispense);
```

### 退卡
```js
await CardDispenser.ejectCardAsync()
```