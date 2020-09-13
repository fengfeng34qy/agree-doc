<template>
  <div class="zq-drop-list" @mouseover="onDplOver($event)" @mouseout="onDplOut($event)">
    <span>选中项的文本<i></i></span>
    <ul>
      <li>北京</li>
      <li>上海</li>
      <li>广州</li>
    </ul>
  </div>
</template>
<script>
// export default {
//   name: "DropDownList",
//   props:{
//     dataList:{
//       type:Array,
//       default(){
//           return [
//               {name: "选项一"},
//               {name: "选项二"}
//           ]
//       }
//     },
//     labelProperty:{
//       type:String,
//       default(){ return "name" }
//     }
//   },
//   data(){
//     return {
//       activeIndex:0
//     }
//   },
// }
</script>
<style scoped>
.zq-drop-list span {
  display: block;
  height: 30px;
  line-height: 30px;
  background: #f1f1f1;
  font-size: 14px;
  text-align: center;
  color: #333333;
  border-radius: 4px;
}
.zq-drop-list span i {
  background: url(https://www.easyicon.net/api/resizeApi.php?id=1189852&size=16) no-repeat center center;
  margin-left: 6px;
  display: inline-block;
}
.zq-drop-list ul {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: solid 1px #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
}
.zq-drop-list ul li{
  list-style: none;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: solid 1px #f1f1f1;
  background: #ffffff;
}
.zq-drop-list ul li:last-child{
  border-bottom: none;
}
.zq-drop-list ul li:hover{
  background: #f6f6f6;
}
.zq-drop-list{
  display: inline-block;
  min-width: 100px;
  position: relative;
}
</style>