(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"shadow-2 rounded-borders",staticStyle:{height:"100vh"},attrs:{view:"hHh Lpr lff",container:""}},[a("q-header",{staticClass:"bg-black",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),a("q-toolbar-title",[e._v("Movflix "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.category,expression:"category"}]},[e._v("> "+e._s(e.category)+" ")])])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",mini:e.miniState,width:300,breakpoint:500,"content-class":"bg-grey-10 text-white"},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/"},on:{click:function(t){return e.filterGenre("Action & Adventure")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[e._v("\n              Home\n            ")])],1),a("q-expansion-item",{attrs:{icon:"local_movies",label:"Genres"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Action & Adventure")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Action & Adventure")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Comedy")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Comedy")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Drama")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Drama")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Horror")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Horror")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Independent")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Independent")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Kids & Family")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Kids & Family")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Musicals")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Musicals")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Romance")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Romance")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Thriller")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Thriller")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""},on:{click:function(t){return e.filterGenre("Western")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"blur_on"}})],1),a("q-item-section",[e._v("Western")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:"",clickable:"",to:"/favorites"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"favorite"}})],1),a("q-item-section",[e._v("\n              Favorite\n            ")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],n={name:"MainLayout",data(){return{drawer:!1,miniState:!0}},methods:{filterGenre(e){this.$store.dispatch("movies/loadGenre",e),console.log("value",e)}},created(){this.$store.dispatch("movies/loadMovies"),console.log("created")},computed:{category(){return this.$store.state.movies.genre}}},o=n,c=a("2877"),s=a("4d5a"),l=a("e359"),m=a("65c6"),v=a("9c40"),p=a("6ac5"),u=a("9404"),d=a("4983"),q=a("1c1c"),b=a("66e5"),f=a("4074"),w=a("0016"),k=a("3b73"),_=a("09e3"),h=a("714f"),g=a("eebe"),G=a.n(g),y=Object(c["a"])(o,i,r,!1,null,null,null);t["default"]=y.exports;G()(y,"components",{QLayout:s["a"],QHeader:l["a"],QToolbar:m["a"],QBtn:v["a"],QToolbarTitle:p["a"],QDrawer:u["a"],QScrollArea:d["a"],QList:q["a"],QItem:b["a"],QItemSection:f["a"],QIcon:w["a"],QExpansionItem:k["a"],QPageContainer:_["a"]}),G()(y,"directives",{Ripple:h["a"]})}}]);