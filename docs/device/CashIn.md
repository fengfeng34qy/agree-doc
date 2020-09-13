# 现金存入（CashIn）

### 开启存款
```js
let parame = {
  InputPosition: 0, //现金将被放入的位置
  OutputPosition: 0,
  UseRecycleUnits: false,
  TellerID: 0 //默认0
}
await CashIn.cashInStartAsync(parame)

```

### 设置限额
```js
let parame = {
  TotalItemsLimit: 0, //限制张数;固定传0
  AmountLimit: {
    CurrencyID: [67, 78, 89], // 此字段有可能是CNY
    Amount: '10000',  // 限制存入金额
  }     
}
await CashIn.setCashInLimitAsync(parame)
// 返回 { "ExcuteResult": 0, "IsSuccess": true };

```
### 开始存款
```js
await CashIn.cashInAsync()
// 返回↓
{
 "NoteNumber": [
  {
    "Count": 1,
    "NoteID": 6
  }
 ],
 "NumOfNoteNumbers": 1
}

```
### 结束存款
```js
await CashIn.cashInEndAsync()
```

### 清钞加钞
```js
// 清钞加钞调用的方法一样，
// 都是先调用startExchangeAsync，然后endExchangeAsync
// 不同的是endExchangeAsync的时候传的参数
```
```js
let parame = {
  CUNumList: [],
  Count: 0,
  TellerID: 0,
  ExchangeType: 1
}
await CashIn.startExchangeAsync(parame);
```

```js
//说明
//参数为CashIn.startExchangeAsync的返回值,需适当修改以确定是清钞还是加钞
//全部改为0是清钞，具体看js外设接口说明.pdf
//文档地址: http://www.sunfengfeng.com/agree
await CashIn.endExchangeAsync(参数看说明);

```


*********************