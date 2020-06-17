(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["schoolProfile"],{"0166":function(t,e,i){"use strict";var a=i("4ec2"),s=i.n(a);s.a},"0bb7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{width:"100%",height:"100%"},attrs:{id:t.id}})},s=[],l={name:"HelloWorld",props:{id:{type:String,default:function(){return"mychart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({grid:{left:"0%",right:"0%",bottom:"0%",top:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["语文","数学","外语","物理","化学","生物","地理","历史","思想政治","体育与健康","艺术","音乐","美术","信息技术","综合实践活动"],axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},axisTick:{show:!1}},yAxis:{type:"value",nameLocation:"middle",axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},splitLine:{show:!0,lineStyle:{color:"#1461B0",width:1}},axisTick:{show:!1}},series:[{name:"全部",type:"line",stack:"总量",data:[120,132,101,134,90,230,210,120,132,101,134,90,230,210,50]},{name:"高一",type:"line",stack:"总量",data:[220,182,191,234,290,330,310,220,182,191,234,290,330,310,90]},{name:"高二",type:"line",stack:"总量",data:[150,232,201,154,190,330,410,150,232,201,154,190,330,410,920]},{name:"高三",type:"line",stack:"总量",data:[320,332,301,334,390,330,320,150,232,201,154,190,330,410,500]}]})}},n=l,r=i("2877"),o=Object(r["a"])(n,a,s,!1,null,null,null);e["a"]=o.exports},"18e9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"item-box"},[i("div",{staticClass:"item item-student"},[i("PublicSubTitle",{attrs:{title:"学生考勤",suffix:!1}}),i("div",{staticClass:"context-box"},[i("div",{staticClass:"demo"},[i("demo",{attrs:{id:"schoolStudent"}})],1),i("ul",{staticClass:"content"},t._l(t.attendanceList,(function(e){return i("li",{key:e.id},[i("h3",[t._v(t._s(e.title))]),i("span",{style:{color:e.color}},[t._v(t._s(e.count))])])})),0)])],1),i("div",{staticClass:"item item-profile"},[i("PublicSubTitle",{attrs:{title:"全校概况",suffix:!1}}),i("div",{staticClass:"profile-content"},[i("div",{staticClass:"number"},t._l(t.profileList,(function(e){return i("div",{key:e.id,staticClass:"item"},[i("p",{staticClass:"item-icons"},[i("svg-icon",{staticClass:"suffix-inner",attrs:{"icon-class":e.icon}})],1),i("div",{staticClass:"item-cont"},[i("h3",[t._v(t._s(e.title)+"：")]),i("span",{style:{color:e.color}},[t._v(t._s(e.count))])])])})),0),i("div",{staticClass:"classChart"},[i("div",{staticClass:"item first-child"},[i("h3",[t._v("高一")]),i("div",{staticClass:"ProfileChart"},[i("ProfileChart",{attrs:{id:"ProfileChart1"}})],1),t._m(0),t._m(1)]),i("div",{staticClass:"item"},[i("h3",[t._v("高二")]),i("div",{staticClass:"ProfileChart"},[i("ProfileChart",{attrs:{id:"ProfileChart2"}})],1),t._m(2),t._m(3)]),i("div",{staticClass:"item last-child"},[i("h3",[t._v("高三")]),i("div",{staticClass:"ProfileChart"},[i("ProfileChart",{attrs:{id:"ProfileChart3"}})],1),t._m(4),t._m(5)])]),i("div",{staticClass:"proportion"},[i("ul",{staticClass:"clause-box"},[i("li",[i("span",[t._v("学生男女比例")]),t._v(" "),i("CustomProgress")],1),t._m(6),i("li",[t._v("各年级班级数量")])]),i("div",{staticClass:"BarProgress"},[i("BarProgress",{attrs:{id:"BarProgress"}})],1)])])],1)]),i("div",{staticClass:"item-box"},[i("div",{staticClass:"bottom-content"},[i("div",{staticClass:"flex-b"},[i("div",{staticClass:"item item-attendance"},[i("PublicSubTitle",{attrs:{title:"教师考勤",suffix:!1}}),i("div",{staticClass:"context-box"},[i("div",{staticClass:"demo"},[i("demo",{attrs:{id:"schoolTeacher"}})],1),i("ul",{staticClass:"content"},t._l(t.attendanceList,(function(e){return i("li",{key:e.id},[i("h3",[t._v(t._s(e.title))]),i("span",{style:{color:e.color}},[t._v(t._s(e.count))])])})),0)])],1),i("div",{staticClass:"item item-courseTime"},[i("PublicSubTitle",{attrs:{title:"各学科周课时执行情况"}},[i("PublicChartTitle",{attrs:{list:t.CHART_TITLE.slice(1,4)}})],1),i("div",{staticClass:"BarMutipleChart"},[i("BarMutipleChart",{attrs:{id:"demo"}})],1)],1)]),i("div",{staticClass:"flex-b"},[i("div",{staticClass:"item item-asset"},[i("PublicSubTitle",{attrs:{title:"固定资产",suffix:!1}}),i("div",{staticClass:"context-box"},[i("div",{staticClass:"demo"},[i("PieChart",{attrs:{id:"PieChart"}})],1),i("ul",{staticClass:"asset-content"},t._l(t.assetList,(function(e){return i("li",{key:e.id},[i("h3",[t._v(t._s(e.title))]),i("span",{style:{color:e.color}},[t._v(t._s(e.count))]),i("span",[t._v("万元")])])})),0)])],1),i("div",{staticClass:"item item-teacher"},[i("PublicSubTitle",{attrs:{title:"师资课时结构"}},[i("PublicChartTitle",{attrs:{list:t.CHART_TITLE}})],1),i("div",{staticClass:"LineMultipleChart"},[i("LineMultipleChart",{attrs:{id:"schoolLine"}})],1)],1)])]),i("div",{staticClass:"item item-education"},[i("PublicSubTitle",{attrs:{title:"教师学历分布"}}),i("div",{staticClass:"RadarChart"},[i("RadarChart",{attrs:{id:"RadarChart"}}),i("TeacherDesc",{attrs:{dataList:t.itemList}})],1)],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("学生数:"),i("span",[t._v("458")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("教师数："),i("span",[t._v("62")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("学生数:"),i("span",[t._v("458")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("教师数："),i("span",[t._v("62")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("学生数:"),i("span",[t._v("458")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("教师数："),i("span",[t._v("62")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[t._v("平均班额: "),i("span",{staticClass:"personal"},[t._v("45人")])])}],l=i("5530"),n=i("2f62"),r=i("8897"),o=i("ba95"),c=i("0bb7"),u=i("93f3"),d=i("60bd"),f=i("60fe"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:this.id}})},m=[],v=(i("a15b"),{name:"HelloWorld",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({title:{text:["{a|55}","{b|%}"].join(""),left:"center",top:"40%",textStyle:{rich:{a:{color:"rgba(255,255,255,1)",fontSize:30,fontWeight:700},b:{color:"rgba(255,255,255,1)",fontSize:18}}}},color:[new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#36CEFF"},{offset:.9,color:"#08EFF5"}]),"#180E58"],series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},hoverAnimation:!1,data:[{value:20,name:"男"},{value:10,name:"女"}]}]})}}),p=v,b=i("2877"),y=Object(b["a"])(p,h,m,!1,null,null,null),C=y.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},x=[],g={name:"PieChart",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({title:{text:["{a|1845.2}","\n{b|万元}"].join(""),left:"center",top:"44%",textStyle:{rich:{a:{color:"#fff",fontSize:24,fontWeight:700},b:{color:"#fff",fontSize:14}}}},graphic:{type:"text",left:"center",top:"38%",style:{text:"资产总额",textAlign:"center",fill:"rgba(2,216,255,1)",fontSize:14,fontFamily:"MicrosoftYaHei"}},series:[{name:"资产总额",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,hoverAnimation:!1,emphasis:{label:{show:!1,fontSize:"30",fontWeight:"bold"}},label:{show:!1,position:"center"},data:[{value:1200,name:"资产总额",itemStyle:{color:"#01B8FF"}},{value:180,name:"年度新增资产",itemStyle:{color:"#FF830A"}},{value:40,name:"年度报损资产",itemStyle:{color:"#8C79EF"}}]}]})}},S=g,w=Object(b["a"])(S,_,x,!1,null,null,null),L=w.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"teacher-desc"},t._l(t.dataList,(function(e){return i("li",{key:e.id},[i("h3",[i("svg-icon",{staticClass:"suffix-inner",attrs:{"icon-class":e.icon}}),t._v(t._s(e.title))],1),i("span",{style:{color:e.color}},[t._v(t._s(e.count))])])})),0)},F=[],P={name:"TeacherDesc",props:{dataList:{type:Array,default:function(){return[]}}}},B=P,T=(i("2d78"),Object(b["a"])(B,E,F,!1,null,"568f1af9",null)),A=T.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},O=[],j={name:"BarProgress",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this,e=this.$echarts.init(document.getElementById(this.id));e.setOption({grid:{left:"0%",right:"0%",bottom:"0%",top:"3%",containLabel:!0},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#02D8FF"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:["高一","高二","高三"]}],series:[{name:"金额",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:6,color:function(e){var i=[["#180E58","#049BDE"],["#180E58","#D67015"],["#180E58","#61B260"]],a=e.dataIndex;return e.dataIndex>=i.length&&(a=e.dataIndex-i.length),new t.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:i[a][0]},{offset:1,color:i[a][1]}])}}},barWidth:12,data:[41e6,22e6,1e7]},{name:"背景",type:"bar",barWidth:12,barGap:"-100%",data:[5e7,5e7,5e7],itemStyle:{normal:{color:"rgba(9,3,72,1)",barBorderRadius:6}}}]})}},k=j,I=Object(b["a"])(k,$,O,!1,null,null,null),R=I.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:this.id}})},D=[],W={name:"HellProfileChart",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this,e=this.$echarts.init(document.getElementById(this.id));e.setOption({title:{text:["{a|师生比}","\n{b|1:7}"].join(""),left:"center",top:"34%",textStyle:{rich:{a:{color:"#02D8FF",fontSize:12},b:{color:"#d09",fontSize:14}}}},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],label:{show:!1,position:"inner"},hoverAnimation:!1,itemStyle:{normal:{barBorderRadius:6,color:function(e){var i=[["#FF830A","#FFB40A"],["#180E58","#180E58"]],a=e.dataIndex;return e.dataIndex>=i.length&&(a=e.dataIndex-i.length),new t.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:i[a][0]},{offset:1,color:i[a][1]}])}}},data:[{value:335,name:"直达"},{value:679,name:"营销广告"}]},{name:"访问来源",type:"pie",radius:["80%","100%"],label:{show:!1,position:"inner"},hoverAnimation:!1,itemStyle:{normal:{barBorderRadius:6,color:function(e){var i=[["#FF830A","#FFB40A"],["#180E58","#180E58"]],a=e.dataIndex;return e.dataIndex>=i.length&&(a=e.dataIndex-i.length),new t.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:i[a][0]},{offset:1,color:i[a][1]}])}}},data:[{value:335,name:"联盟广告"},{value:310,name:"邮件营销"}]}]})}},H=W,M=Object(b["a"])(H,z,D,!1,null,null,null),q=M.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("svg-icon",{staticClass:"female-icons",attrs:{"icon-class":"男性"}}),i("p",{staticClass:"female",style:{width:t.value1}},[t._v("12")]),i("p",{staticClass:"male",style:{width:t.value2}},[t._v("23")]),i("svg-icon",{staticClass:"male-icons",attrs:{"icon-class":"女性"}})],1)},J=[],Y={name:"CustomProgress",data:function(){return{value1:"50%",value2:"50%"}},mounted:function(){var t=this;setTimeout((function(){t.value1="20%",t.value2="80%"}),100)}},K=Y,N=(i("0166"),Object(b["a"])(K,G,J,!1,null,"0179bb7b",null)),Q=N.exports,U={name:"Box.vue",data:function(){return{itemList:[],attendanceList:[],assetList:[],profileList:[]}},computed:Object(l["a"])({CHART_TITLE:function(){return f["a"]}},Object(n["c"])({getProfile:function(t){var e=t.school;return e.profile}})),components:{PublicSubTitle:r["a"],PublicChartTitle:o["a"],LineMultipleChart:c["a"],RadarChart:u["a"],BarMutipleChart:d["a"],demo:C,PieChart:L,TeacherDesc:A,BarProgress:R,ProfileChart:q,CustomProgress:Q},mounted:function(){this.itemList=[{title:"专任教师",count:"1354",color:"#6FCE64",icon:"专职教师",id:1},{title:"行政岗",count:"35",color:"#01B8FF",icon:"行政岗",id:2},{title:"其他",count:"220",color:"#FF830A",icon:"其他",id:3}],this.attendanceList=[{title:"正常人次",count:"265",color:"#6FCE64",id:1},{title:"迟到人次",count:"265",color:"#01B8FF",id:2},{title:"早退人次",count:"0",color:"#FF830A",id:3},{title:"缺勤人次",count:"12",color:"#8C79EF",id:4}],this.assetList=[{title:"资产总额",count:"1845.2",color:"#01B8FF",id:1},{title:"年度新增资产",count:"3.6",color:"#FF830A",id:2},{title:"年度报损资产",count:"0.8",color:"#8C79EF",id:3}],this.profileList=[{title:"学生总数",count:"1354",color:"#6ECE66",icon:"学生总数",id:1},{title:"教师总数",count:"179",color:"#01B8FF",icon:"school",id:2},{title:"师生总比",count:"1 : 8",color:"#FF830A",icon:"师生比",id:3}],this.getAllProfileRequest()},methods:Object(l["a"])({},Object(n["b"])(["getAllProfileRequest"])),watch:{getProfile:function(t){console.log("请求过来数据",t)}}},V=U,X=(i("b9ad"),Object(b["a"])(V,a,s,!1,null,"02a74a86",null));e["default"]=X.exports},"2d78":function(t,e,i){"use strict";var a=i("d69e"),s=i.n(a);s.a},"4ec2":function(t,e,i){},"4fc9":function(t,e,i){},"60bd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{width:"100%",height:"100%"},attrs:{id:t.id}})},s=[],l={name:"HelloWorld",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({grid:{left:"0%",right:"0%",bottom:"10%",top:"3%",containLabel:!0},xAxis:[{type:"category",data:["语文","数学","外语","物理","化学","生物","地理","历史","思想\n政治","体育与\n健康","艺术","音乐","美术","信息技术","综合实\n践活动"],axisLine:{show:!0,lineStyle:{color:"#04B7DE"}},axisTick:{show:!1}}],yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"#04B7DE"}},splitLine:{show:!0,lineStyle:{color:"#1461B0",width:1}},axisTick:{show:!1}}],series:[{name:"高一",type:"bar",stack:"course",data:[3,3,3,2,2,2,2,2,2,1,1,1,1,1,1],label:{show:!0,color:"#fff",fontSize:12,align:"center",verticalAlign:"middle"},itemStyle:{color:"#5F45FF"}},{name:"高二",type:"bar",stack:"course",data:[3,3,3,2,2,2,2,2,2,1,1,1,1,1],label:{show:!0,color:"#fff",fontSize:12,align:"center",verticalAlign:"middle"},itemStyle:{color:"#02CDFF"}},{name:"高三",type:"bar",stack:"course",data:[3,3,3,2,2,2,2,2,2,1],barWidth:16,label:{show:!0,color:"#fff",fontSize:12,align:"center",verticalAlign:"middle"},itemStyle:{color:"#0090FF"}}]})}},n=l,r=i("2877"),o=Object(r["a"])(n,a,s,!1,null,null,null);e["a"]=o.exports},"60fe":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var a=[{color:"rgba(255,186,101,1)",value:"全部",type:"circle",id:1},{color:"rgba(88,105,242,1)",value:"高一",type:"square",id:2},{color:"rgba(2,205,255,1)",value:"高二",type:"square",id:3},{color:"rgba(0,144,255,1)",value:"高三",type:"square",id:4}],s=[{color:"rgba(99,72,239,1)",value:"进校人次",type:"square",id:1},{color:"rgba(111,206,100,1)",value:"出校人次",type:"square",id:2}]},"638b":function(t,e,i){},"733b":function(t,e,i){},8897:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-title"},[i("span",[i("span",{staticClass:"icons"}),t._v(t._s(t.title))]),i("div",{staticClass:"suffix-content"},[t._t("default"),t.suffix?i("svg-icon",{staticClass:"suffix-inner",attrs:{"icon-class":"装饰"}}):t._e()],2)])},s=[],l={name:"PublicSubTitle",props:{title:{type:String,default:function(){return"title默认值"}},suffix:{type:Boolean,default:function(){return!0}}}},n=l,r=(i("d7b6"),i("2877")),o=Object(r["a"])(n,a,s,!1,null,"7de9d6ca",null);e["a"]=o.exports},"93f3":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})},s=[],l={name:"RadarChart",props:{id:{type:String,default:function(){return"myChart"}}},mounted:function(){var t=this.$echarts.init(document.getElementById(this.id));t.setOption({radar:[{indicator:[{text:"博士",max:100,axisLabel:{show:!0,textStyle:{fontSize:26,color:"#333"}}},{text:"高中",max:100,axisLabel:{show:!1}},{text:"中专",max:100,axisLabel:{show:!1}},{text:"专科",max:100,axisLabel:{show:!1}},{text:"本科",max:100,axisLabel:{show:!1}},{text:"硕士",max:100,axisLabel:{show:!1}}],axisLabel:{show:!0,showMinLabel:!1},splitLine:{lineStyle:{color:"rgba(23, 176, 209, 1)",width:1}},axisLine:{lineStyle:{color:"rgba(23, 176, 209, 1)"}},splitArea:{areaStyle:{color:["#11a7d6","#1696be","#1981b1","#1b67a0","#20478a","#20478a"]}}}],series:[{type:"radar",tooltip:{trigger:"item"},symbol:"rect",areaStyle:{},data:[{value:[60,73,85,40,50,55],name:"教职工学历占比情况"}],itemStyle:{normal:{borderColor:"#F17922",borderWidth:1,lineStyle:{color:"#F17922",width:1},areaStyle:{type:"default",color:"rgba(67, 140, 165, 0.8)"}}}}]})}},n=l,r=i("2877"),o=Object(r["a"])(n,a,s,!1,null,null,null);e["a"]=o.exports},a15b:function(t,e,i){"use strict";var a=i("23e7"),s=i("44ad"),l=i("fc6a"),n=i("a640"),r=[].join,o=s!=Object,c=n("join",",");a({target:"Array",proto:!0,forced:o||!c},{join:function(t){return r.call(l(this),void 0===t?",":t)}})},b9ad:function(t,e,i){"use strict";var a=i("733b"),s=i.n(a);s.a},ba95:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"chart-title-box"},t._l(t.list,(function(e){return i("li",{key:e.id},[i("span",{staticClass:"type-icons",class:{circle:"circle"===e.type},style:{backgroundColor:e.color}}),i("span",[t._v(t._s(e.value))])])})),0)},s=[],l={name:"PublicChartTitle",props:{list:{type:Array,default:function(){return[]}}}},n=l,r=(i("f42d"),i("2877")),o=Object(r["a"])(n,a,s,!1,null,"8fd451f4",null);e["a"]=o.exports},d69e:function(t,e,i){},d7b6:function(t,e,i){"use strict";var a=i("4fc9"),s=i.n(a);s.a},f42d:function(t,e,i){"use strict";var a=i("638b"),s=i.n(a);s.a}}]);