(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["attendance"],{"0750":function(t,e,i){},"2f15":function(t,e,i){"use strict";var a=i("0750"),s=i.n(a);s.a},3610:function(t,e,i){"use strict";var a=i("e929"),s=i.n(a);s.a},"60fe":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var a=[{color:"rgba(255,186,101,1)",value:"全部",type:"circle",id:1},{color:"rgba(88,105,242,1)",value:"高一",type:"square",id:2},{color:"rgba(2,205,255,1)",value:"高二",type:"square",id:3},{color:"rgba(0,144,255,1)",value:"高三",type:"square",id:4}],s=[{color:"rgba(99,72,239,1)",value:"进校人次",type:"square",id:1},{color:"rgba(111,206,100,1)",value:"出校人次",type:"square",id:2}]},"638b":function(t,e,i){},"71c9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item item-student-attendance"},[i("PublicSubTitle",{attrs:{title:"学生课堂考勤统计"}}),i("div",[i("div",{staticClass:"PieSingle"},[i("PieSingle",{attrs:{id:"studentChart"}})],1),i("Items",{attrs:{dataList:t.list}})],1)],1),i("div",{staticClass:"item item-student"},[i("PublicSubTitle",{attrs:{title:"学生进出校统计"}},[i("PublicChartTitle",{attrs:{list:t.STUDENT_IN_OUT}})],1),i("div",{staticClass:"BarMultiple"},[i("BarMultiple",{attrs:{id:"BarMultiple"}})],1)],1),i("div",{staticClass:"item item-teacher"},[i("PublicSubTitle",{attrs:{title:"教师考勤总揽"}}),i("div",[i("div",{staticClass:"PieSingle"},[i("PieSingle",{attrs:{id:"teacherChart"}})],1),i("Items",{attrs:{dataList:t.list}})],1)],1)]),i("div",{staticClass:"item-box"},[i("div",{staticClass:"item item-class"},[i("PublicSubTitle",{attrs:{title:"班级考勤统计"}},[i("ul",{staticClass:"class-switch-year"},t._l(t.switchList,(function(e){return i("li",{key:e.id,on:{click:function(i){return t.handleClickSwitchYear(e.id)}}},[i("span",{class:{active:t.selected===e.id}},[t._v(t._s(e.title))])])})),0)]),i("div",{staticClass:"class-switch"},[i("div",[i("p",{staticClass:"administrative",class:{actived:t.isSwitch},on:{click:t.handleClickSwitch}},[t._v("行政班统计")]),i("p",{staticClass:"teaching",class:{actived:!t.isSwitch},on:{click:t.handleClickSwitch}},[t._v("教学班统计")])]),i("span",[t._v("单位：人次")])]),i("div",{staticClass:"BarLineMultiple"},[i("BarLineMultiple",{attrs:{id:"BarLineMultiple"}})],1)],1),i("div",{staticClass:"item item-department"},[i("PublicSubTitle",{attrs:{title:"各部门考勤统计"}}),i("div",{staticClass:"BarProgress"},[i("BarProgress",{attrs:{id:"BarProgress"}})],1)],1)])])},s=[],l=i("8897"),n=i("ba95"),r=i("60fe"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},c=[],u={name:"BarMultiple",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({grid:{left:"0%",right:"0%",bottom:"0%",top:"3%",containLabel:!0},xAxis:[{type:"category",data:["2019届","2020届","2021届"],axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},axisTick:{show:!1}}],yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},splitLine:{show:!0,lineStyle:{color:"#1461B0",width:1}},axisTick:{show:!1}}],series:[{name:"进校人次",type:"bar",data:[8,14,13],barWidth:14,itemStyle:{color:"#6348EF"}},{name:"出校人次",type:"bar",data:[7,12,15],barWidth:14,itemStyle:{color:"#6FCE64"}}]})}},d=u,h=i("2877"),p=Object(h["a"])(d,o,c,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},y=[],b=(i("a15b"),{name:"PieSingle",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({title:{text:["{a|50%}","\n{b|平均出勤率}"].join(""),left:"center",top:"38%",textStyle:{rich:{a:{color:"#fff",fontSize:24,fontWeight:700},b:{color:"#fff",fontSize:14}}}},color:[new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FC36FF"},{offset:.9,color:"#7142FA"}]),"#180E58"],series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},hoverAnimation:!1,data:[{value:20,name:"直接访问"},{value:10,name:"邮件营销"}]}]})}}),v=b,S=Object(h["a"])(v,m,y,!1,null,null,null),x=S.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},w=[],C={name:"BarLineMultiple",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({grid:{left:"0%",right:"0%",bottom:"20%",top:"3%",containLabel:!0},legend:{data:["请假人数","缺勤人数","迟到且早退人次","早退人次","迟到人次","平均温度"],bottom:0,itemWidth:10,itemHeight:10,itemGap:20,textStyle:{color:"rgba(2,216,255,1)",fontFamily:"MicrosoftYaHei"},selectedMode:!1},xAxis:[{type:"category",data:["2019届1班","2019届2班","2019届3班","2019届4班","2019届5班","2019届6班","2019届7班"],axisPointer:{type:"shadow"},axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},axisTick:{show:!1}}],yAxis:[{type:"value",min:0,max:250,interval:50,axisLabel:{formatter:"{value}"},axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},splitLine:{show:!0,lineStyle:{color:"#1461B0",width:1}},axisTick:{show:!1}},{type:"value",min:0,max:25,interval:5,axisLabel:{formatter:"{value} %"},axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},splitLine:{show:!0,lineStyle:{color:"#1461B0",width:1}},axisTick:{show:!1}}],series:[{name:"请假人数",type:"bar",data:[23.2,25.6,76.7,135.6,162.2,32.6,20],barWidth:10,itemStyle:{color:"#3570B5"}},{name:"缺勤人数",type:"bar",data:[26.4,28.7,70.7,175.6,182.2,48.7,18.8],barWidth:10,itemStyle:{color:"#37A068"}},{name:"迟到且早退人次",type:"bar",data:[25.6,76.7,135.6,162.2,32.6,20,6.4],barWidth:10,itemStyle:{color:"#5B34B4"}},{name:"早退人次",type:"bar",data:[26.4,28.7,70.7,175.6,182.2,48.7,18.8],barWidth:10,itemStyle:{color:"#D4A51F"}},{name:"迟到人次",type:"bar",data:[70.7,175.6,182.2,48.7,18.8,6,2.3],barWidth:10,itemStyle:{color:"#C75C4B"}},{name:"平均温度",type:"line",yAxisIndex:1,data:[2.2,3.3,4.5,6.3,10.2,20.3,23.4],barWidth:10,itemStyle:{color:"#02CDFF"}}]})}},_=C,B=Object(h["a"])(_,g,w,!1,null,null,null),L=B.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},T=[],k={name:"HelloWorld",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({grid:{left:"0%",right:"0%",bottom:"0%",top:"3%",containLabel:!0},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#02D8FF"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:["办公室","高中教务处","信息中心","总务处","初中教务处","初中政教处","安全中心","高一创新部","2019级创新部"]},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#02D8FF",fontSize:12},formatter:function(t){return t>=1e4?"".concat((t/1e4).toLocaleString(),"%"):t.toLocaleString()}},data:[5e7,22e6,1e7,5e6,2e6,22e6,1e7,5e6,2e6]}],series:[{name:"金额",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:6,color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0CE5F0"},{offset:1,color:"#0CE5F0"}])}},barWidth:12,data:[5e7,22e6,1e7,5e6,2e6,5e7,22e6,1e7,5e6]},{name:"背景",type:"bar",barWidth:12,barGap:"-100%",data:[5e7,5e7,5e7,5e7,5e7,5e7,5e7,5e7,5e7],itemStyle:{normal:{color:"rgba(9,3,72,1)",barBorderRadius:6}}}]})}},P=k,F=Object(h["a"])(P,E,T,!1,null,null,null),O=F.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-inner"},[i("h3",{staticClass:"title"},[t._v("总人数：190人")]),i("ul",{staticClass:"content-box"},t._l(t.dataList,(function(e){return i("li",{key:e.id},[i("span",{style:{color:e.color}},[t._v(t._s(e.count))]),i("p",[t._v(t._s(e.type))])])})),0)])},$=[],j={name:"Items",props:{dataList:{type:Array,default:function(){return[]}}}},W=j,D=(i("8023"),Object(h["a"])(W,A,$,!1,null,"3356e5ec",null)),M=D.exports,I={name:"Box.vue",computed:{STUDENT_IN_OUT:function(){return r["b"]}},data:function(){return{list:[],isSwitch:!0,selected:1,switchList:[]}},components:{PublicSubTitle:l["a"],PublicChartTitle:n["a"],BarMultiple:f,PieSingle:x,BarLineMultiple:L,BarProgress:O,Items:M},methods:{handleClickSwitch:function(){this.isSwitch=!this.isSwitch},handleClickSwitchYear:function(t){this.selected=t}},mounted:function(){this.list=[{count:16,type:"迟到人次",color:"#DEB43B"},{count:1,type:"迟到人次",color:"#E57C65"},{count:1,type:"迟到早退",color:"#987CE9"},{count:1,type:"缺席人次",color:"#6FCE64"},{count:4,type:"请假人次",color:"#03ABE7"}],this.switchList=[{title:"2019届",id:1},{title:"2018届",id:2},{title:"2017届",id:3}]},watch:{isSwitch:function(t){console.log(t)}}},q=I,z=(i("2f15"),Object(h["a"])(q,a,s,!1,null,"098dc8c8",null));e["default"]=z.exports},8023:function(t,e,i){"use strict";var a=i("98bc"),s=i.n(a);s.a},8897:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-title"},[i("span",[i("span",{staticClass:"icons"}),t._v(t._s(t.title))]),i("div",{staticClass:"suffix-content"},[t._t("default"),t.suffix?i("svg-icon",{staticClass:"suffix-inner",attrs:{"icon-class":"装饰"}}):t._e()],2)])},s=[],l={name:"PublicSubTitle",props:{title:{type:String,default:function(){return"title默认值"}},suffix:{type:Boolean,default:function(){return!0}}}},n=l,r=(i("3610"),i("2877")),o=Object(r["a"])(n,a,s,!1,null,"483e4e6a",null);e["a"]=o.exports},"98bc":function(t,e,i){},a15b:function(t,e,i){"use strict";var a=i("23e7"),s=i("44ad"),l=i("fc6a"),n=i("a640"),r=[].join,o=s!=Object,c=n("join",",");a({target:"Array",proto:!0,forced:o||!c},{join:function(t){return r.call(l(this),void 0===t?",":t)}})},ba95:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"chart-title-box"},t._l(t.list,(function(e){return i("li",{key:e.id},[i("span",{staticClass:"type-icons",class:{circle:"circle"===e.type},style:{backgroundColor:e.color}}),i("span",[t._v(t._s(e.value))])])})),0)},s=[],l={name:"PublicChartTitle",props:{list:{type:Array,default:function(){return[]}}}},n=l,r=(i("f42d"),i("2877")),o=Object(r["a"])(n,a,s,!1,null,"8fd451f4",null);e["a"]=o.exports},e929:function(t,e,i){},f42d:function(t,e,i){"use strict";var a=i("638b"),s=i.n(a);s.a}}]);