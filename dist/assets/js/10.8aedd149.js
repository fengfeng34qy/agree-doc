(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(e,t,a){},319:function(e,t,a){"use strict";var i=a(198);a.n(i).a},327:function(e,t,a){"use strict";a.r(t);a(182);var i=a(300),n=a.n(i),s=a(317),l=a.n(s),r={leading:!0,trailing:!1},o={data:function(){return{cuid:"",spd:5,vol:5,per:"0",onlineLink:"",onlinePlayLink:"",text:""}},computed:{isDisabled:function(){return!this.text.trim()}},mounted:function(){this.cuid=String((new Date).getTime())},methods:{onlinePlay:l.a.debounce((function(){var e=this,t=this.parameGenerate();n.a.post("http://www.sunfengfeng.com/speech",t).then((function(t){"000000"===t.data.ReturnCode?(e.onlinePlayLink=t.data.onlineLink,audio.onload=function(){audio.play()}):alert("播放失败，请重试！"+t.data.body.err_detail)}))}),3e3,r),startMake:l.a.debounce((function(){var e=this,t=this.parameGenerate();n.a.post("http://www.sunfengfeng.com/speech",t).then((function(t){"000000"===t.data.ReturnCode?e.onlineLink=t.data.onlineLink:alert("合成失败，请重试！"+t.data.body.err_detail)}))}),3e3,r),parameGenerate:function(){return{text:this.text,parame:{cuid:this.cuid,spd:String(this.spd),pit:"5",vol:String(this.vol),per:this.per}}}}},d=(a(319),a(16)),c=Object(d.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"per-box"},[a("el-radio",{staticClass:"per-item",attrs:{label:"0",border:""},model:{value:e.per,callback:function(t){e.per=t},expression:"per"}},[e._v("女生")]),e._v(" "),a("el-radio",{staticClass:"per-item",attrs:{label:"1",border:""},model:{value:e.per,callback:function(t){e.per=t},expression:"per"}},[e._v("男生")]),e._v(" "),a("el-radio",{staticClass:"per-item",attrs:{label:"3",border:""},model:{value:e.per,callback:function(t){e.per=t},expression:"per"}},[e._v("度逍遥")]),e._v(" "),a("el-radio",{staticClass:"per-item",attrs:{label:"4",border:""},model:{value:e.per,callback:function(t){e.per=t},expression:"per"}},[e._v("度丫丫")])],1),e._v(" "),a("div",{staticClass:"slider-box"},[a("div",{staticClass:"slider-item"},[a("span",[e._v("速度（默认: 5）")]),e._v(" "),a("el-slider",{attrs:{max:10,step:1},model:{value:e.spd,callback:function(t){e.spd=t},expression:"spd"}})],1),e._v(" "),a("div",{staticClass:"slider-item"},[a("span",[e._v("音量（默认: 5）")]),e._v(" "),a("el-slider",{attrs:{max:15,step:1},model:{value:e.vol,callback:function(t){e.vol=t},expression:"vol"}})],1)]),e._v(" "),a("div",{staticStyle:{color:"red","font-size":"24px"}},[e._v("请在下面输入要合成的语音文字")]),e._v(" "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"speech-txt",attrs:{name:"",id:"",cols:"50",rows:"5",placeholder:"请输入要合成的语音文字"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"speech-btn"},[a("el-button",{attrs:{disabled:e.isDisabled,type:"primary"},on:{click:e.onlinePlay}},[e._v("在线播放")]),e._v(" "),a("el-button",{attrs:{disabled:e.isDisabled,type:"success"},on:{click:e.startMake}},[e._v("我要合成")])],1),e._v(" "),a("div",{staticStyle:{"font-size":"24px"}},[e._v("语音合成地址："),a("a",{staticClass:"speech-a",attrs:{href:e.onlineLink,target:"_blank"}},[e._v(e._s(e.onlineLink))])]),e._v(" "),a("div",{staticStyle:{color:"red","font-size":"24px","margin-top":"20px"}},[e._v("提示：合成的语音有效期最多保存一个星期，请及时使用。")]),e._v(" "),a("audio",{attrs:{id:"audio",autoplay:"",src:e.onlinePlayLink}})])}),[],!1,null,"05d86df8",null);t.default=c.exports}}]);