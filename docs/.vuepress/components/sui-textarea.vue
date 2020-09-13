<template>
  <div class="main">
    <div class="per-box">
      <el-radio v-model="per" class="per-item" label="0" border>女生</el-radio>
      <el-radio v-model="per" class="per-item" label="1" border>男生</el-radio>
      <el-radio v-model="per" class="per-item" label="3" border>度逍遥</el-radio>
      <el-radio v-model="per" class="per-item" label="4" border>度丫丫</el-radio>
    </div>
    <div class="slider-box">
      <div class="slider-item">
        <span>速度（默认: 5）</span>
        <el-slider
          v-model="spd"
          :max="10"
          :step="1">
        </el-slider>
      </div>
      <div class="slider-item">
        <span>音量（默认: 5）</span>
        <el-slider
          v-model="vol"
          :max="15"
          :step="1">
        </el-slider>
      </div>
    </div>
    
    <div style="color:red;font-size:24px;">请在下面输入要合成的语音文字</div>
    <div>
      <textarea class="speech-txt" name="" id="" cols="50" rows="5" v-model="text" placeholder="请输入要合成的语音文字"></textarea>
    </div>
    <div class="speech-btn">
      <el-button @click="onlinePlay" :disabled="isDisabled" type="primary">在线播放</el-button>
      <el-button @click="startMake" :disabled="isDisabled" type="success">我要合成</el-button>
    </div>
    <div style="font-size:24px;">语音合成地址：<a class="speech-a" :href="onlineLink" target="_blank">{{ onlineLink }}</a></div>
    <div style="color:red;font-size:24px;margin-top:20px;">提示：合成的语音有效期最多保存一个星期，请及时使用。</div>
    <audio id="audio" autoplay :src="onlinePlayLink"></audio>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';

let True = { leading: true,trailing: false };
let False = { leading: false,trailing: true };

export default {
  data() {
    return {
      cuid: '',
      spd: 5,
      vol: 5,
      per: '0',
      onlineLink: '',
      onlinePlayLink: '',
      text: ''
    }
  },
  computed: {
    isDisabled() {
      return !(this.text.trim());
    }
  },
  mounted() {
    this.cuid = String(new Date().getTime());
  },
  methods: {
    /* 在线播放 */
    onlinePlay: _.debounce(
      function() {
        let request = this.parameGenerate();
        axios.post('http://www.sunfengfeng.com/speech', request).then(result => {
          if (result.data.ReturnCode === '000000') {
            this.onlinePlayLink = result.data.onlineLink;
            audio.onload = function() {
              audio.play();
            };
          } else {
            alert('播放失败，请重试！' + result.data.body.err_detail);
          }
        })
      },
      3000,
      True
    ),
    /* 我要合成 */
    startMake: _.debounce(
      function() {
        let request = this.parameGenerate();
        axios.post('http://www.sunfengfeng.com/speech', request).then(result => {
          if (result.data.ReturnCode === '000000') {
            this.onlineLink = result.data.onlineLink;
          } else {
            alert('合成失败，请重试！' + result.data.body.err_detail);
          }
        })
      },
      3000,
      True
    ),
    /* 生成参数 */
    parameGenerate() {
      let text = this.text;
      let parame = {
        cuid: this.cuid,
        spd: String(this.spd),
        pit: '5',
        vol: String(this.vol),
        per: this.per,
      }
      return  { text, parame };
    }
  }
}
</script>
<style scoped>
.speech-txt {
  vertical-align: bottom;
  font-size: 24px;
  resize:none;
}
.speech-btn {
  margin: 16px 0;
}
.speech-a {
  font-size: 20px;
}
.slider-box {
  display: flex;
}
.slider-item {
  flex: 1;
  padding-right: 20px;
}
.per-box {
  margin: 20px 0;
}
.per-item {
  width: 100px;
}
</style>