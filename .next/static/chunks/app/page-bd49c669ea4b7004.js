(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8315:function(e,t,s){Promise.resolve().then(s.bind(s,8282))},8282:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var a=s(7437),l=s(8739),r=s(2265),i=s(6648),c=s(7138),n=e=>{let{title:t,description:s,category:r,image:n,id:o}=e;return(0,a.jsxs)("div",{className:"mx-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]",children:[(0,a.jsx)(c.default,{href:"/blogs/".concat(o),children:(0,a.jsx)(i.default,{src:n,alt:"",width:400,height:300,className:"border-b border-black h-[300px]"})}),(0,a.jsx)("p",{className:"mt-5 ml-5 px-1 inline-block bg-black text-white text-sm",children:r}),(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsx)("h5",{className:"mb-2 text-lg font-medium tracking-tight text-gray-900",children:t}),(0,a.jsx)("p",{className:"mb-3 text-sm tracking-tight text-gray-700",dangerouslySetInnerHTML:{__html:s.slice(0,120)}}),(0,a.jsxs)(c.default,{href:"/blogs/".concat(o),className:"inline-flex items-center py-2 font-semibold text-center",children:["Read more ",(0,a.jsx)(i.default,{src:l.L.arrow,alt:"",width:12,className:"ml-2"})]})]})]})},o=s(8472),d=()=>{let[e,t]=(0,r.useState)("All"),[s,l]=(0,r.useState)([]),i=async()=>{l((await o.Z.get("/api/blog")).data)};return(0,r.useEffect)(()=>{i()},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-center gap-6 my-10",children:[(0,a.jsx)("button",{onClick:()=>t("All"),className:"All"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"All"}),(0,a.jsx)("button",{onClick:()=>t("Technology"),className:"Technology"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Technology"}),(0,a.jsx)("button",{onClick:()=>t("Startup"),className:"Startup"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Startup"}),(0,a.jsx)("button",{onClick:()=>t("Lifestyle"),className:"Lifestyle"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Lifestyle"})]}),(0,a.jsx)("div",{className:"flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx24",children:s.filter(t=>"All"===e||t.category===e).map((e,t)=>(0,a.jsx)(n,{id:e._id,image:e.image,title:e.title,description:e.description,category:e.category},t))})]})},x=s(1514),m=s(3580),u=()=>{let[e,t]=(0,r.useState)(""),s=async s=>{s.preventDefault();let a=new FormData;a.append("email",e);let l=await o.Z.post("/api/email",a);l.data?(m.Am.success(l.data.msg),t("")):m.Am.error("error")};return(0,a.jsxs)("div",{className:"py-5 px-5 md:px-12 lg:px-28",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)(i.default,{src:l.L.logo,width:180,alt:"",className:"w-[130px] sm:w-auto"})," ",(0,a.jsx)(c.default,{href:"/admin/AddProduct",children:(0,a.jsxs)("button",{className:"flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]",children:[" Get Started ",(0,a.jsx)(i.default,{src:l.L.arrow,alt:""})," "]})})]}),(0,a.jsxs)("div",{className:"text-center my-8",children:[(0,a.jsx)("h1",{className:"text-3xl sm:text-5xl font-medium",children:"Latest Blogs"}),(0,a.jsx)("p",{className:"mt-10 max-w-[740px] m-auto text-xs sm:text-base",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto error et sunt magnam est molestias inventore doloremque odio illum, veritatis vel quasi in recusandae quam, aliquam dolorum. Eos, corrupti tenetur."}),(0,a.jsxs)("form",{onSubmit:s,className:"flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]",action:"",children:[(0,a.jsx)("input",{onChange:e=>t(e.target.value),value:e,type:"email",placeholder:"enter your email",className:"pl-4 outline-none"}),(0,a.jsx)("button",{type:"submit",className:"border-l border-black py-4 px-4 sm:px-8 active:bg-gray-700 active:text-white",children:"Subscribe"})]})]})]})};function p(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.ToastContainer,{theme:"dark"}),(0,a.jsx)(u,{}),(0,a.jsx)(d,{}),(0,a.jsx)(x.Z,{})]})}s(4193)},1514:function(e,t,s){"use strict";var a=s(7437),l=s(8739),r=s(6648);s(2265),t.Z=()=>(0,a.jsxs)("div",{className:"flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center",children:[(0,a.jsx)(r.default,{src:l.L.logo_light,alt:"",width:120}),(0,a.jsx)("p",{className:"text-sm text-white",children:"All right reserved. Copyright @blogger"}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(r.default,{src:l.L.facebook_icon,alt:"",width:40}),(0,a.jsx)(r.default,{src:l.L.twitter_icon,alt:"",width:40}),(0,a.jsx)(r.default,{src:l.L.googleplus_icon,alt:"",width:40})]})]})},7138:function(e,t,s){"use strict";s.d(t,{default:function(){return l.a}});var a=s(231),l=s.n(a)},4193:function(){}},function(e){e.O(0,[143,472,173,580,231,481,971,23,744],function(){return e(e.s=8315)}),_N_E=e.O()}]);