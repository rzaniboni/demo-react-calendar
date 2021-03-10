(this["webpackJsonpdemo-react-calendar"]=this["webpackJsonpdemo-react-calendar"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(13),o=a.n(c),l=(a(24),a(9)),d=a.n(l),i=a(19),s=a(4),h=a.n(s),u=a(6),j=a(2),y=a.n(j),_=a(7),b=a(14),m=a.n(b),O=a(15),M=a.n(O),f=a(16),D=a.n(f),p=a(17),x=a.n(p);y.a.locale(D.a),y.a.locale(x.a),y.a.extend(m.a),y.a.extend(M.a);var C=function(e,t){var a=[],n=t?e:0,r=t;for(r||(r=e);n<r;)a.push(n),n+=1;return a},v=function(e){return y.a.locale(e),C(7).map((function(e){return y()().localeData().weekdaysShort(y()().weekday(e))}))},N=function(e){return y.a.locale(e),C(7).map((function(e){return y()().localeData().weekdays(y()().weekday(e))}))},w=function(e){return y.a.locale(e),C(0,12).map((function(e){return y()().localeData().monthsShort(y()().month(e))}))},k=function(e,t){return function(e){return y.a.locale(e),y()().localeData().months()}(t)[e]};function T(e,t){var a=y()(new Date(Date.now())).format("YYYY-MM-DD");return Object(_.a)(Array(function(e,t){return y()("".concat(e,"-").concat(t,"-01")).daysInMonth()}(e,t))).map((function(n,r){var c=y()("".concat(e,"-").concat(t,"-").concat(r+1)).format("YYYY-MM-DD");return{date:c,dayOfMonth:r+1,isCurrentMonth:!0,isToday:a===c}}))}function g(e){var t=e.getFullYear(),a=e.getMonth()+1,n=T(t,a),r=function(e,t,a){var n=Y(a),r=y()("".concat(e,"-").concat(t,"-01")).subtract(1,"month"),c=n,o=y()(a).subtract(c,"day").date();return Object(_.a)(Array(c)).map((function(e,t){return{date:y()("".concat(r.year(),"-").concat(r.month()+1,"-").concat(o+t)).format("YYYY-MM-DD"),dayOfMonth:o+t,isCurrentMonth:!1,isToday:!1}}))}(t,a,n[0].date),c=function(e,t,a){var n=Y("".concat(e,"-").concat(t,"-").concat(a))+1,r=y()("".concat(e,"-").concat(t,"-01")).add(1,"month"),c=n?7-n:n;return Object(_.a)(Array(c)).map((function(e,t){return{date:y()("".concat(r.year(),"-").concat(r.month()+1,"-").concat(t+1)).format("YYYY-MM-DD"),dayOfMonth:t+1,isCurrentMonth:!1,isToday:!1}}))}(t,a,n.length);return[].concat(Object(_.a)(r),Object(_.a)(n),Object(_.a)(c))}function Y(e){return y()(e).weekday()}function A(e,t){return{currentDay:e,day:e.toDate(),days:g(e.toDate()),currentMonthName:k(e.month(),t),currentWeekDay:N(t)[e.weekday()].toString(),currentDayOrder:e.format("D")}}function S(e,t){switch(t.type){case"CHANGE_LOCALE":return Object(u.a)(Object(u.a)({},e),{},{locale:t.payload,currentMonthName:k(e.day.getMonth(),t.payload),currentWeekDay:N(t.payload)[y()(e.day).weekday()].toString(),weekDaysShort:v(t.payload),weekDays:N(t.payload),monthNamesShort:w(t.payload)});case"CHANGE_DAY":var a=A(y()(t.payload),e.locale);return Object(u.a)(Object(u.a)({},e),a);case"PREV_MONTH":var n=A(e.currentDay.add(-1,"M"),e.locale);return Object(u.a)(Object(u.a)({},e),n);case"NEXT_MONTH":var r=A(e.currentDay.add(1,"M"),e.locale);return Object(u.a)(Object(u.a)({},e),r);case"CHANGE_MONTH":var c=A(function(e,t){var a=y()(e).month(t);return console.log(a.toDate()),a}(e.currentDay.toDate(),t.payload),e.locale);return Object(u.a)(Object(u.a)({},e),c)}}var E=a(1),H=r.a.createContext(void 0);function F(){var e=r.a.useContext(H);if(void 0===e)throw new Error("useCalendar must be used within a CalendarMonthProvider");return e}var I=function(e){var t=e.locale,a=void 0===t?"en":t,n=e.day,c=e.selectDate,o=e.children,l=function(e,t){return{locale:e,day:t,currentDay:y()(t),currentDayOrder:y()(t).format("D"),currentMonthName:k(t.getMonth(),e),currentWeekDay:N(e)[y()(t).weekday()].toString(),days:g(t),weekDays:N(e),weekDaysShort:v(e),monthNamesShort:w(e)}}(a,n||new Date(Date.now())),d=r.a.useReducer(S,l),s=Object(i.a)(d,2),u=s[0],j=s[1];return Object(E.jsx)(H.Provider,{value:{state:u,dispatch:j,selectDate:c},children:Object(E.jsx)("div",{className:h.a.calendarWrapper,children:o})})},G=function(){var e=F(),t=e.state.days,a=e.selectDate;return Object(E.jsx)("ul",{className:h.a.calendar,children:t.map((function(e){return Object(E.jsx)("li",{className:"".concat(h.a.day," ").concat(e.isCurrentMonth?h.a.currentMonthDay:null," ").concat(e.isToday?h.a.today:null),onClick:function(){return a?a(e.date):void 0},children:e.dayOfMonth},e.date)}))})},L=a(12),P=a(5),W=a.n(P),R=function(e){var t=e.children,a=F(),n=a.state,r=a.dispatch;return Object(E.jsxs)("div",{className:W.a.container,children:[Object(E.jsxs)("div",{className:W.a.leftContent,children:[t,Object(E.jsx)("button",{className:W.a.changeMonth,onClick:function(){return r({type:"PREV_MONTH"})},children:Object(E.jsx)(L.b,{})}),Object(E.jsx)("button",{className:W.a.changeMonth,onClick:function(){return r({type:"NEXT_MONTH"})},children:Object(E.jsx)(L.a,{})})]}),Object(E.jsxs)("div",{className:W.a.content,children:[Object(E.jsx)("div",{className:W.a.itemDay,children:n.currentDayOrder}),Object(E.jsxs)("div",{className:W.a.item,children:[Object(E.jsx)("div",{className:W.a.weekDay,children:n.currentWeekDay}),Object(E.jsxs)("div",{className:W.a.day,children:[n.currentMonthName," ",n.day.getFullYear()]})]})]})]})},Z=function(){var e=F().state;return Object(E.jsx)("ul",{className:h.a.calendar,children:e.weekDaysShort.map((function(e){return Object(E.jsx)("li",{className:h.a.weekDay,children:e},e.toString())}))})},B=function(){var e=F(),t=e.state,a=e.dispatch;return Object(E.jsx)("ul",{className:h.a.calendarMonths,children:t.monthNamesShort.map((function(e,t){return Object(E.jsx)("li",{role:"button",className:h.a.monthShort,onClick:function(){return a({type:"CHANGE_MONTH",payload:t})},children:e},e.toString())}))})},J=function(){var e=F().dispatch,t=new Date(Date.now());return Object(E.jsx)("button",{className:W.a.changeToday,onClick:function(){return e({type:"CHANGE_DAY",payload:t})},children:"Today"})},X=a(18);var z=function(){return new Date(Date.now()),new Date("2020-07-01"),Object(E.jsxs)("div",{className:d.a.container,children:[Object(E.jsxs)("div",{className:d.a.header,children:[Object(E.jsx)("h2",{children:"Calendar compound component"}),Object(E.jsxs)("a",{href:"https://github.com/rzaniboni/demo-react-calendar",children:[" ",Object(E.jsx)(X.a,{})]})]}),Object(E.jsxs)("div",{className:d.a.content,children:[Object(E.jsx)("h1",{children:"Calendario"}),Object(E.jsxs)(I,{locale:"it",children:[Object(E.jsx)(R,{children:Object(E.jsx)(J,{})}),Object(E.jsx)(B,{}),Object(E.jsx)(Z,{}),Object(E.jsx)(G,{})]}),Object(E.jsx)("br",{}),Object(E.jsxs)(I,{locale:"en",children:[Object(E.jsx)(R,{}),Object(E.jsx)(Z,{}),Object(E.jsx)(G,{})]})]}),Object(E.jsx)("div",{className:d.a.footer,children:Object(E.jsx)("h5",{children:"Roberto Zaniboni 2021"})})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(z,{})}),document.getElementById("root")),Q()},4:function(e,t,a){e.exports={container:"CalendarMonth_container__2bz8T",calendarWrapper:"CalendarMonth_calendarWrapper__2UEM0",header:"CalendarMonth_header__3dRb-",calendar:"CalendarMonth_calendar__3BXS-",calendarMonths:"CalendarMonth_calendarMonths__2n8yq",weekDay:"CalendarMonth_weekDay__2XApZ",monthShort:"CalendarMonth_monthShort__vK6TJ",day:"CalendarMonth_day__1M7zL",currentMonthDay:"CalendarMonth_currentMonthDay__xAw5D",today:"CalendarMonth_today__VEv_l"}},5:function(e,t,a){e.exports={container:"CalendarMonthTitle_container__2B1u2",content:"CalendarMonthTitle_content__2MqeF",leftContent:"CalendarMonthTitle_leftContent__13pP8",rightContent:"CalendarMonthTitle_rightContent__3beIp",item:"CalendarMonthTitle_item__QhIZ7",itemDay:"CalendarMonthTitle_itemDay__1EkG-",weekDay:"CalendarMonthTitle_weekDay__32IFI",day:"CalendarMonthTitle_day__2jCK9",changeMonth:"CalendarMonthTitle_changeMonth__2GodQ",changeToday:"CalendarMonthTitle_changeToday__1gcJI"}},9:function(e,t,a){e.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",nav:"App_nav__1_46_",content:"App_content__3La4L",footer:"App_footer__29Fsv",card:"App_card__3tefE"}}},[[26,1,2]]]);
//# sourceMappingURL=main.2c37c199.chunk.js.map