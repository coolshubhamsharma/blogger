(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{9119:function(e,s,t){Promise.resolve().then(t.bind(t,4208))},4208:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var a=t(7437),l=t(2265),r=e=>{let{email:s,mongoId:t,date:l,deleteEmail:r}=e,c=Date.parse(l),i=c?new Date(c).toISOString().split("T")[0]:"Invalid Date";return(0,a.jsxs)("tr",{className:"bg-white border-b text-left ",children:[(0,a.jsx)("th",{scope:"row",className:"px-4 py-4 font-medium text-gray-900 whitespace-nowrap",children:s||"No Email"}),(0,a.jsx)("td",{className:"px-6 py-4 hidden sm:block",children:i}),(0,a.jsx)("td",{className:"px-6 py-4 cursor-pointer",onClick:()=>r(t),children:"x"})]})},c=t(8472),i=t(3580),n=()=>{let[e,s]=(0,l.useState)([]),t=async()=>{s((await c.Z.get("/api/email")).data.emails)},n=async e=>{let s=await c.Z.delete("/api/email",{params:{id:e}});s.data.success?(i.Am.success(s.data.msg),t()):i.Am.error("error")};return(0,l.useEffect)(()=>{t()},[]),(0,a.jsxs)("div",{className:"flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ",children:[(0,a.jsx)("h1",{children:"All Subscriptions"}),(0,a.jsx)("div",{className:"relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide",children:(0,a.jsxs)("table",{className:"w-full text-sm text-gray-500 ",children:[(0,a.jsx)("thead",{className:"text-xs text-left text-grat-700 uppercase bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Email Subscription"}),(0,a.jsx)("th",{scope:"col",className:" sm:block px-6 py-3",children:"Date"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),(0,a.jsx)("tbody",{children:e.map((e,s)=>(0,a.jsx)(r,{mongoId:e._id,email:e.email,date:e.date,deleteEmail:n},s))})]})})]})}}},function(e){e.O(0,[472,580,971,23,744],function(){return e(e.s=9119)}),_N_E=e.O()}]);