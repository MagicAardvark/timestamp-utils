"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const SECOND_IN_MILLISECONDS=1e3,MINUTE_IN_MILLISECONDS=60000,HOUR_IN_MILLISECONDS=3600000,DAY_IN_MILLISECONDS=86400000,ISO_STRING_REGEXP=/(\d{4})-([01]\d)-([0-3]\d)T([0-2]\d):([0-5]\d):([0-5]\d)\.(\d{3})+/,initArray=exports.initArray=a=>Array(a).fill(),addOneMonth=exports.addOneMonth=(a,b)=>{const c=getDay(a),d=b?-1:1,{value:e}=[28,29,30,31].reduce((b,e)=>{const f=Math.abs(parseInt(getDay(addDays(a,e*d)),10)-c);return null===b.diff||f<b.diff?{value:e,diff:f}:b},{value:null,diff:null});return addDays(a,e*d)},decompose=exports.decompose=a=>new Date(a).toISOString().match(ISO_STRING_REGEXP).slice(1),getYear=exports.getYear=a=>decompose(a)[0],getMonth=exports.getMonth=a=>decompose(a)[1],getWeekDay=exports.getWeekDay=a=>(Math.floor(a/DAY_IN_MILLISECONDS)%7+3)%7,getDay=exports.getDay=a=>decompose(a)[2],getHours=exports.getHours=a=>decompose(a)[3],getMinutes=exports.getMinutes=a=>decompose(a)[4],getSeconds=exports.getSeconds=a=>decompose(a)[5],getMilliseconds=exports.getMilliseconds=a=>decompose(a)[6],addMonths=exports.addMonths=(a,b)=>initArray(Math.abs(b)).reduce(a=>addOneMonth(a,0>b),a),addYears=exports.addYears=(a,b)=>initArray(Math.abs(b)).reduce(a=>addMonths(a,0<b?12:-12),a),addDays=exports.addDays=(a,b)=>a+DAY_IN_MILLISECONDS*b,addHours=exports.addHours=(a,b)=>a+HOUR_IN_MILLISECONDS*b,addMinutes=exports.addMinutes=(a,b)=>a+MINUTE_IN_MILLISECONDS*b,addSeconds=exports.addSeconds=(a,b)=>a+SECOND_IN_MILLISECONDS*b,addMilliseconds=exports.addMilliseconds=(a,b)=>a+b,add=exports.add=(a,{years:b=0,months:c=0,days:d=0,hours:e=0,minutes:f=0,seconds:g=0,milliseconds:h=0})=>addYears(addMonths(addDays(addHours(addMinutes(addSeconds(addMilliseconds(a,h),g),f),e),d),c),b);