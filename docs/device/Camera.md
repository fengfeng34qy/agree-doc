# 摄像头（Camera）

### 开始拍照
```js
let result = await FaceCamera.displayExAsync({
  Left: 650,
  Top: 320,
  Width: 480,
  Height: 320,
  FacePicturePath: 'c:\\face.jpg',  //图片保存的路径;路径仅供参考
  RayPicturePath: 'c:\\ray.jpg'
});

```

### 销毁摄像头
```js
await FaceCamera.destoryAsync()
// 返回 { "ExcuteResult": 0, "IsSuccess": true };
```

*********************