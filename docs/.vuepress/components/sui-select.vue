<template>
  <div>
    <select-ui :dataList="dplist" labelProperty="name" @change="onDpChange($event)"/>
  </div>
</template>
<script>
import selectUi from './select-ui';

export default {
  name: 'button-demos',
  data() {
    return {
      dplist: [
        {name: "选项一"},
        {name: "选项二"}
      ]
    }
  },
  components: { selectUi },
  mounted() {},
  methods: {
    onDpChange() {
      console.log('aaa');
    }
  }
}
</script>