(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(30),n(139)),c=n(134),l={components:{PageSectionTitle:n(48).default,BasicPageLayout:c.default,Card:o.default},data:function(){return{fromLambda:{},user:"themathmagician"}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/profile");case 2:n=t.sent,e.fromLambda=n;case 4:case"end":return t.stop()}}),t)})))()}},f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("basic-page-layout",[n("page-section-title",[e._v("Profile")]),e._v(" "),n("card",[e._v("\n    User: "+e._s(e.user)+"\n  ")]),e._v(" "),n("card",[n("run")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Run:n(138).default})}}]);