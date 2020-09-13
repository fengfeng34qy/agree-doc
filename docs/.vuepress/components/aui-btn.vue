<template>
  <div>
    <button class="aui-button" :disabled="disabled" :fill="fill" @click="handleClick" :class="[types,sizes,cornerTypes,classBtn,auiIconName]">
      <div v-if="size==='bottom'" class="aui-button-icon">
        <i :class="[auiIconNames]"></i>
      </div>
      <span v-if="$slots.default"> 
        <slot></slot>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: "aui-btn",
  props: {
    disabled: Boolean,
    fill: Boolean,
    type: {
      type: String,
      default: "default"
    },
    size: String,
    cornerType: {
      type: String,
      default: "default-corner"
    },
    auiIconName: ''
  },
  methods: {
    handleClick: function handleClick(evt) {
      if (!this.disabled) {
        this.$emit("click", evt);
      }
    }
  },
  computed: {
    types: function types() {
      if (this.type) {
        return "aui-button--" + this.type;
      }
    },
    sizes: function sizes() {
      if (this.size) {
        return "aui-button--" + this.size;
      }
    },
    auiIconNames: function auiIconNames() {
      if (this.auiIconName) {
        return "aui-icon-" + this.auiIconName;
      }
    },
    cornerTypes: function cornerTypes() {
      if (this.cornerType) {
        return "aui-button--" + this.cornerType;
      }
    },
    classBtn: function classBtn() {
      var classBtn = {};
      var fillBtn = "aui-button--is-fill";
      var disabledBtn = "aui-button--is-disabled";
      classBtn[fillBtn] = this.fill;
      classBtn[disabledBtn] = this.disabled;
      return classBtn;
    }
  },
}
</script>
<style scoped>

</style>