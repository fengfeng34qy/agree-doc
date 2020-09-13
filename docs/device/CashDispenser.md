# 现金发放（CashDispenser）

### 配钞
```js
let parame = {
  "Denomination": {
  "CashBox": 0,
  "Values": [0, 0, 0, 0], //Count是几，就是几个0
  "Count": 4, //取款钞箱个数
  "Amount": 100,  //配额的金额
  "CurrencyID": "CNY" //也有可能是[67, 78, 89]
  },
  "MixNumber": 1,
  "TellerID": 0
}
await CashDispenser.denominateAsync(parame)

```

### 出钞
```js
let parame = {
  "Denomination": {
  "CashBox": 0,
  "Values": [0, 0, 0, 0], //Count是几，就是几个0
  "Count": 4, //取款钞箱个数
  "Amount": 100,  //取款金额
  "CurrencyID": "CNY" //也有可能是[67, 78, 89]
  },
  "MixNumber": 1,
  "TellerID": 0
}
await CashDispenser.dispenseAsync(parame)

```


*********************