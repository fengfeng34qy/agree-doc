<template>
  <div class="sui-select">
    <input type="text" v-model="value" placeholder="--请选择--" @focus="onFocus" @blur="onBlur" readonly>
  </div>
</template>
<script>
export default {
  name: "select-ui",
  props:{
    dataList:{
      type:Array,
      default(){
        return [
          {name: "选项一"},
          {name: "选项二"}
        ]
      }
    },
    labelProperty:{
      type:String,
      default(){ return "name" }
    }
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    onFocus() {
      console.log('onFocus');
    },
    onBlur() {
      console.log('onBlur');
    }
  }
}
</script>
<style scoped>
.sui-select {
  position: relative;
}
.sui-select input {
  height: 1.6rem;
}
</style>