(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"49ad":function(t,e,a){"use strict";var n=a("785b"),i=a.n(n);i.a},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",{staticClass:"text-center text-bold"},[t._v("\n        "+t._s(t.$route.name)+"\n      ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"replay","aria-label":"replay"},on:{click:function(e){return t.refresh()}}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[a("div",{staticClass:"menu-img"}),a("div",{staticClass:"text-bold text-center text-black q-mt-md"},[t._v("Cororna Risk Calculator")])]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("transition",{attrs:{name:"transitions","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutRight",mode:"out-in"}},[a("router-view")],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"q-my-md",attrs:{clickable:"",tag:"a",to:t.link,exact:"","active-class":"highlight"}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{style:{color:t.color},attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},color:{type:String,default:"#000000"}}},c=l,s=(a("8db4"),a("2877")),u=a("eebe"),d=a.n(u),b=a("66e5"),f=a("4074"),p=a("0016"),m=a("0170"),k=Object(s["a"])(c,o,r,!1,null,"17244874",null),v=k.exports;d()(k,"components",{QItem:b["a"],QItemSection:f["a"],QIcon:p["a"],QItemLabel:m["a"]});var h={name:"MainLayout",components:{EssentialLink:v},data:function(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Dashboard",caption:"Application Dashboard",icon:"dashboard",link:"/",color:"#0b9299"},{title:"Quick Checkup",caption:"Quickly check your symptoms",icon:"gamepad",link:"/checkup",color:"#30b258"},{title:"Quick Reference",caption:"A collection of do's dont's myths and facts",icon:"rss_feed",link:"/reference",color:"#ffb05d"},{title:"About",caption:"About us information",icon:"info",link:"/about",color:"#d42b73"}]}},methods:{refresh:function(){window.location.reload()}}},q=h,w=(a("49ad"),a("4d5a")),y=a("e359"),g=a("65c6"),Q=a("9c40"),_=a("6ac5"),L=a("9404"),x=a("1c1c"),C=a("09e3"),D=Object(s["a"])(q,n,i,!1,null,"e4a14ace",null);e["default"]=D.exports;d()(D,"components",{QLayout:w["a"],QHeader:y["a"],QToolbar:g["a"],QBtn:Q["a"],QToolbarTitle:_["a"],QDrawer:L["a"],QList:x["a"],QItemLabel:m["a"],QPageContainer:C["a"]})},"785b":function(t,e,a){},"8db4":function(t,e,a){"use strict";var n=a("c892"),i=a.n(n);i.a},c892:function(t,e,a){}}]);