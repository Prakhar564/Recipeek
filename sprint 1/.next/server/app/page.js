(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9075:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var i=s(7096),r=s(6132),a=s(7284),o=s.n(a),n=s(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7141)),"C:\\Users\\Dell\\Downloads\\startup-nextjs-main\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,5345)),"C:\\Users\\Dell\\Downloads\\startup-nextjs-main\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Dell\\Downloads\\startup-nextjs-main\\app\\page.tsx"],p="/page",x={require:s,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9705:(e,t,s)=>{Promise.resolve().then(s.bind(s,3182)),Promise.resolve().then(s.bind(s,6093)),Promise.resolve().then(s.bind(s,3636)),Promise.resolve().then(s.t.bind(s,6686,23))},3182:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ScrollUp});var i=s(9885);function ScrollUp(){return(0,i.useEffect)(()=>window.document.scrollingElement?.scrollTo(0,0),[]),null}},3636:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>components_Pricing});var i=s(784),r=s(9885);let Common_SectionTitle=({title:e,paragraph:t,width:s="570px",center:r,mb:a="100px"})=>i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:`wow fadeInUp w-full ${r?"mx-auto text-center":""}`,"data-wow-delay":".1s",style:{maxWidth:s,marginBottom:a},children:[i.jsx("h2",{className:"mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]",children:e}),i.jsx("p",{className:"text-base !leading-relaxed text-body-color md:text-lg",children:t})]})}),a=i.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",className:"fill-current",children:i.jsx("path",{d:"M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"})}),o=i.jsx("svg",{width:"7",height:"7",viewBox:"0 0 8 8",className:"fill-current",children:i.jsx("path",{d:"M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z"})}),Pricing_OfferList=({text:e,status:t})=>(0,i.jsxs)("div",{className:"mb-3 flex items-center",children:[i.jsx("span",{className:"mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary",children:"active"===t?a:o}),i.jsx("p",{className:"m-0 text-base font-medium text-body-color",children:e})]}),Pricing_PricingBox=e=>{let{price:t,duration:s,packageName:r,subtitle:a,children:o}=e;return i.jsx("div",{className:"w-full",children:(0,i.jsxs)("div",{className:"wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white px-8 py-10 hover:shadow-one","data-wow-delay":".1s",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsxs)("h3",{className:"price mb-2 text-3xl font-bold text-black dark:text-white",children:["$",i.jsx("span",{className:"amount",children:t}),(0,i.jsxs)("span",{className:"time text-body-color",children:["/",s]})]}),i.jsx("h4",{className:"mb-2 text-xl font-bold text-dark dark:text-white",children:r})]}),i.jsx("p",{className:"mb-7 text-base text-body-color",children:a}),i.jsx("div",{className:"mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10",children:i.jsx("button",{className:"flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp",children:"Start Free Trial"})}),i.jsx("div",{children:o}),i.jsx("div",{className:"absolute bottom-0 right-0 z-[-1]",children:(0,i.jsxs)("svg",{width:"179",height:"158",viewBox:"0 0 179 158",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{opacity:"0.5",d:"M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z",fill:"url(#paint0_linear_70:153)"}),i.jsx("path",{opacity:"0.3",d:"M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z",fill:"url(#paint1_linear_70:153)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_70:153",x1:"69.6694",y1:"29.9033",x2:"196.108",y2:"83.2919",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_70:153",x1:"165.348",y1:"-75.4466",x2:"-3.75136",y2:"103.645",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]})]})]})})]})})},components_Pricing=()=>{let[e,t]=(0,r.useState)(!0);return(0,i.jsxs)("section",{id:"pricing",className:"relative z-10 py-16 md:py-20 lg:py-28",children:[(0,i.jsxs)("div",{className:"container",children:[i.jsx(Common_SectionTitle,{title:"Simple and Affordable Pricing",paragraph:"We offer straightforward and budget-friendly pricing options to meet your needs. Our aim is to provide cost-effective solutions without compromising on quality or features.",center:!0,width:"665px"}),i.jsx("div",{className:"w-full",children:(0,i.jsxs)("div",{className:"wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16","data-wow-delay":".1s",children:[i.jsx("span",{onClick:()=>t(!0),className:`${e?"pointer-events-none text-primary":"text-dark dark:text-white"} mr-4 cursor-pointer text-base font-semibold`,children:"Monthly"}),i.jsx("div",{onClick:()=>t(!e),className:"flex cursor-pointer items-center",children:(0,i.jsxs)("div",{className:"relative",children:[i.jsx("div",{className:"h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"}),i.jsx("div",{className:`${e?"":"translate-x-full"} shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`,children:i.jsx("span",{className:"active h-4 w-4 rounded-full bg-white"})})]})}),i.jsx("span",{onClick:()=>t(!1),className:`${e?"text-dark dark:text-white":"pointer-events-none text-primary"} ml-4 cursor-pointer text-base font-semibold`,children:"Yearly"})]})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3",children:[(0,i.jsxs)(Pricing_PricingBox,{packageName:"Lite",price:e?"10":"100",duration:e?"mo":"yr",subtitle:"Start Cooking with Essentials",children:[i.jsx(Pricing_OfferList,{text:"Access to essential features",status:"active"}),i.jsx(Pricing_OfferList,{text:"Limited Recipes",status:"active"}),i.jsx(Pricing_OfferList,{text:"Email Support",status:"active"}),i.jsx(Pricing_OfferList,{text:"Monthly Update",status:"active"})]}),(0,i.jsxs)(Pricing_PricingBox,{packageName:"Basic",price:e?"20":"220",duration:e?"mo":"yr",subtitle:"Enhanced Cooking Experience",children:[i.jsx(Pricing_OfferList,{text:"Access to all features",status:"active"}),i.jsx(Pricing_OfferList,{text:"Unlimited Recipes",status:"active"}),i.jsx(Pricing_OfferList,{text:"Priority email support",status:"active"}),i.jsx(Pricing_OfferList,{text:"Weekly Updates",status:"active"}),i.jsx(Pricing_OfferList,{text:"Exclusive recipes and tips",status:"active"})]}),(0,i.jsxs)(Pricing_PricingBox,{packageName:"Plus",price:e?"30":"320",duration:e?"mo":"yr",subtitle:"Unlock the Ultimate Culinary Experience.",children:[i.jsx(Pricing_OfferList,{text:"Access to all features",status:"active"}),i.jsx(Pricing_OfferList,{text:"Unlimited recipes",status:"active"}),i.jsx(Pricing_OfferList,{text:"Priority email and chat support",status:"active"}),i.jsx(Pricing_OfferList,{text:"Daily Updates",status:"active"}),i.jsx(Pricing_OfferList,{text:"Exclusive recipes,tips and live classes",status:"active"})]})]})]}),i.jsx("div",{className:"absolute bottom-0 left-0 z-[-1]",children:(0,i.jsxs)("svg",{width:"239",height:"601",viewBox:"0 0 239 601",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{opacity:"0.3",x:"-184.451",y:"600.973",width:"196",height:"541.607",rx:"2",transform:"rotate(-128.7 -184.451 600.973)",fill:"url(#paint0_linear_93:235)"}),i.jsx("rect",{opacity:"0.3",x:"-188.201",y:"385.272",width:"59.7544",height:"541.607",rx:"2",transform:"rotate(-128.7 -188.201 385.272)",fill:"url(#paint1_linear_93:235)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_93:235",x1:"-90.1184",y1:"420.414",x2:"-90.1184",y2:"1131.65",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_93:235",x1:"-159.441",y1:"204.714",x2:"-159.441",y2:"915.952",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]})]})]})})]})}},7141:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home,metadata:()=>y});var i=s(4656),r=s(5153);let a=(0,r.createProxy)(String.raw`C:\Users\Dell\Downloads\startup-nextjs-main\components\Common\ScrollUp.tsx`),{__esModule:o,$$typeof:n}=a,l=a.default;var d=s(16),c=s(4884);let Features_SingleFeature=({feature:e})=>{let{icon:t,title:s,paragraph:r}=e;return i.jsx("div",{className:"w-full",children:(0,i.jsxs)("div",{className:"wow fadeInUp","data-wow-delay":".15s",children:[i.jsx("div",{className:"mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary",children:t}),i.jsx("h3",{className:"mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl",children:s}),i.jsx("p",{className:"pr-[10px] text-base font-medium leading-relaxed text-body-color",children:r})]})})},p=[{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"}),i.jsx("path",{d:"M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z"})]}),title:"Recipe Discovery",paragraph:"Explore a vast collection of recipes spanning various cuisines, dietary preferences, and meal types. Whether you're looking for breakfast ideas, quick dinners, or indulgent desserts, our platform has you covered."},{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"}),i.jsx("path",{d:"M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z"})]}),title:"Personalized Recommendations",paragraph:"Receive tailored recipe recommendations based on your culinary preferences, dietary restrictions, and favorite ingredients. Our algorithm learns from your interactions to provide suggestions that match your taste and lifestyle."},{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"}),i.jsx("path",{d:"M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z"})]}),title:"Dietary Customization",paragraph:"The dietary customization feature allows users to personalize their recipe recommendations based on their specific dietary restrictions and nutritional goals. Whether they follow a low-carb, high-protein, gluten-free, nut-free, or any other type of diet, the system will take these preferences into account when suggesting recipes."},{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"42",viewBox:"0 0 40 42",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"}),i.jsx("path",{d:"M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z"})]}),title:"Cookking Guidance",paragraph:"The cooking guidance feature enhances the user experience by providing comprehensive step-by-step instructions for each recipe. Whether users are seasoned chefs or beginners in the kitchen, they can easily follow along with clear and concise cooking directions."},{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"}),i.jsx("rect",{width:"28",height:"28",rx:"1"})]}),title:"User Profile",paragraph:"The user profiles feature enhances personalization by allowing users to create individual profiles tailored to their preferences and cooking habits. With user profiles, the system can gather insights over time, providing a more customized experience for each user."},{id:1,icon:(0,i.jsxs)("svg",{width:"40",height:"45",viewBox:"0 0 40 45",className:"fill-current",children:[i.jsx("path",{opacity:"0.5",d:"M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"}),i.jsx("path",{d:"M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z"})]}),title:"Ingrediant Recongition",paragraph:"The ingredient recognition feature utilizes advanced technologies such as computer vision and deep learning to analyze images provided by users and identify various ingredients. By leveraging image recognition capabilities, the system enhances its ability to accurately understand the ingredients available to the user, thereby improving the precision of recipe recommendations and suggestions."}],components_Features=()=>i.jsx(i.Fragment,{children:i.jsx("section",{id:"features",className:"py-16 md:py-20 lg:py-28",children:(0,i.jsxs)("div",{className:"container",children:[i.jsx(c.Z,{title:"Main Features",paragraph:"Explore diverse range of features.",center:!0}),i.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3",children:p.map(e=>i.jsx(Features_SingleFeature,{feature:e},e.id))})]})})}),components_Hero=()=>i.jsx(i.Fragment,{children:(0,i.jsxs)("section",{id:"home",className:"dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]",children:[i.jsx("div",{className:"container",children:i.jsx("div",{className:"-mx-4 flex flex-wrap",children:i.jsx("div",{className:"w-full px-4",children:(0,i.jsxs)("div",{className:"wow fadeInUp mx-auto max-w-[800px] text-center","data-wow-delay":".2s",children:[i.jsx("h1",{className:"mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight",children:"Recipeek"}),i.jsx("p",{className:"dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl",children:"Your ultimate destination for culinary inspiration and exploration! At Recipeek, we are passionate about bringing you a world of delicious possibilities right to your fingertips. Whether you're a seasoned chef or a novice in the kitchen, our platform is designed to ignite your creativity, tantalize your taste buds, and simplify your cooking journey. With a vast collection of mouthwatering recipes, personalized recommendations, and expert cooking guidance, We are here to help you discover new flavors, master culinary techniques, and create unforgettable meals that delight and inspire. Join us on this flavorful adventure and let's embark on a delicious culinary journey together!\""})]})})})}),i.jsx("div",{className:"absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100",children:(0,i.jsxs)("svg",{width:"450",height:"556",viewBox:"0 0 450 556",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("circle",{cx:"277",cy:"63",r:"225",fill:"url(#paint0_linear_25:217)"}),i.jsx("circle",{cx:"17.9997",cy:"182",r:"18",fill:"url(#paint1_radial_25:217)"}),i.jsx("circle",{cx:"76.9997",cy:"288",r:"34",fill:"url(#paint2_radial_25:217)"}),i.jsx("circle",{cx:"325.486",cy:"302.87",r:"180",transform:"rotate(-37.6852 325.486 302.87)",fill:"url(#paint3_linear_25:217)"}),i.jsx("circle",{opacity:"0.8",cx:"184.521",cy:"315.521",r:"132.862",transform:"rotate(114.874 184.521 315.521)",stroke:"url(#paint4_linear_25:217)"}),i.jsx("circle",{opacity:"0.8",cx:"356",cy:"290",r:"179.5",transform:"rotate(-30 356 290)",stroke:"url(#paint5_linear_25:217)"}),i.jsx("circle",{opacity:"0.8",cx:"191.659",cy:"302.659",r:"133.362",transform:"rotate(133.319 191.659 302.659)",fill:"url(#paint6_linear_25:217)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_25:217",x1:"-54.5003",y1:"-178",x2:"222",y2:"288",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint1_radial_25:217",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.9997 182) rotate(90) scale(18)",children:[i.jsx("stop",{offset:"0.145833",stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.08"})]}),(0,i.jsxs)("radialGradient",{id:"paint2_radial_25:217",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(76.9997 288) rotate(90) scale(34)",children:[i.jsx("stop",{offset:"0.145833",stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.08"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear_25:217",x1:"226.775",y1:"-66.1548",x2:"292.157",y2:"351.421",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint4_linear_25:217",x1:"184.521",y1:"182.159",x2:"184.521",y2:"448.882",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint5_linear_25:217",x1:"356",y1:"110",x2:"356",y2:"470",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint6_linear_25:217",x1:"118.524",y1:"29.2497",x2:"166.965",y2:"338.63",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]})]})]})}),i.jsx("div",{className:"absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100",children:(0,i.jsxs)("svg",{width:"364",height:"201",viewBox:"0 0 364 201",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24",stroke:"url(#paint0_linear_25:218)"}),i.jsx("path",{d:"M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24",stroke:"url(#paint1_linear_25:218)"}),i.jsx("path",{d:"M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24",stroke:"url(#paint2_linear_25:218)"}),i.jsx("path",{d:"M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481",stroke:"url(#paint3_linear_25:218)"}),i.jsx("circle",{opacity:"0.8",cx:"214.505",cy:"60.5054",r:"49.7205",transform:"rotate(-13.421 214.505 60.5054)",stroke:"url(#paint4_linear_25:218)"}),i.jsx("circle",{cx:"220",cy:"63",r:"43",fill:"url(#paint5_radial_25:218)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_25:218",x1:"184.389",y1:"69.2405",x2:"184.389",y2:"212.24",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_25:218",x1:"156.389",y1:"69.2405",x2:"156.389",y2:"212.24",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint2_linear_25:218",x1:"125.389",y1:"69.2405",x2:"125.389",y2:"212.24",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear_25:218",x1:"93.8507",y1:"67.2674",x2:"89.9278",y2:"210.214",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint4_linear_25:218",x1:"214.505",y1:"10.2849",x2:"212.684",y2:"99.5816",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint5_radial_25:218",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(220 63) rotate(90) scale(43)",children:[i.jsx("stop",{offset:"0.145833",stopColor:"white",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0.08"})]})]})]})})]})}),x=(0,r.createProxy)(String.raw`C:\Users\Dell\Downloads\startup-nextjs-main\components\Pricing\index.tsx`),{__esModule:h,$$typeof:m}=x,u=x.default;var C=s(8639),g=s.n(C);let f=i.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",className:"fill-current",children:i.jsx("path",{d:"M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"})}),Testimonials_SingleTestimonial=({testimonial:e})=>{let{star:t,name:s,image:r,content:a,designation:o}=e,n=[];for(let e=0;e<t;e++)n.push(i.jsx("span",{className:"text-yellow",children:f},e));return i.jsx("div",{className:"w-full",children:(0,i.jsxs)("div",{className:"wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8","data-wow-delay":".1s",children:[i.jsx("div",{className:"mb-5 flex items-center space-x-1",children:n}),(0,i.jsxs)("p",{className:"mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white",children:["“",a]}),(0,i.jsxs)("div",{className:"flex items-center",children:[i.jsx("div",{className:"relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full",children:i.jsx(g(),{src:r,alt:s,fill:!0})}),(0,i.jsxs)("div",{className:"w-full",children:[i.jsx("h3",{className:"mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg",children:s}),i.jsx("p",{className:"text-sm text-body-color",children:o})]})]})]})})},j=[{id:1,name:"John Doe",designation:"Founder @FoodFusion",content:"Our users are extremely pleased. The platform is intuitive, clean, and free from distractions. If you're looking to build a community.",image:"/images/testimonials/auth-01.png",star:5},{id:2,name:"Jane Smith",designation:"Founder @Recipe Master",content:"Our users are delighted. The platform's simplicity and ease of use stand out. It's ideal for those looking to explore the culinary world",image:"/images/testimonials/auth-02.png",star:5},{id:3,name:"Alex",designation:"Founder @Cooking Hub",content:"Our users are highly impressed. The platform offers a seamless experience, free from clutter. It's perfect for anyone passionate about cooking..",image:"/images/testimonials/auth-03.png",star:5}],components_Testimonials=()=>(0,i.jsxs)("section",{className:"dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28",children:[(0,i.jsxs)("div",{className:"container",children:[i.jsx(c.Z,{title:"What Our Users Says",paragraph:"There are various testimonials from satisfied users who have found immense value in our platform.",center:!0}),i.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3",children:j.map(e=>i.jsx(Testimonials_SingleTestimonial,{testimonial:e},e.id))})]}),i.jsx("div",{className:"absolute right-0 top-5 z-[-1]",children:(0,i.jsxs)("svg",{width:"238",height:"531",viewBox:"0 0 238 531",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{opacity:"0.3",x:"422.819",y:"-70.8145",width:"196",height:"541.607",rx:"2",transform:"rotate(51.2997 422.819 -70.8145)",fill:"url(#paint0_linear_83:2)"}),i.jsx("rect",{opacity:"0.3",x:"426.568",y:"144.886",width:"59.7544",height:"541.607",rx:"2",transform:"rotate(51.2997 426.568 144.886)",fill:"url(#paint1_linear_83:2)"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_83:2",x1:"517.152",y1:"-251.373",x2:"517.152",y2:"459.865",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_83:2",x1:"455.327",y1:"-35.673",x2:"455.327",y2:"675.565",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]})]})]})}),i.jsx("div",{className:"absolute bottom-5 left-0 z-[-1]",children:(0,i.jsxs)("svg",{width:"279",height:"106",viewBox:"0 0 279 106",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{opacity:"0.5",children:[i.jsx("path",{d:"M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373",stroke:"url(#paint0_linear_72:302)"}),i.jsx("path",{d:"M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373",stroke:"url(#paint1_linear_72:302)"}),i.jsx("path",{d:"M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373",stroke:"url(#paint2_linear_72:302)"}),i.jsx("path",{d:"M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373",stroke:"url(#paint3_linear_72:302)"})]}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"paint0_linear_72:302",x1:"256.267",y1:"53.6717",x2:"-40.8688",y2:"8.15715",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_72:302",x1:"256.267",y1:"42.6717",x2:"-40.8688",y2:"-2.84285",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint2_linear_72:302",x1:"256.267",y1:"64.6717",x2:"-40.8688",y2:"19.1572",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear_72:302",x1:"256.267",y1:"76.6717",x2:"-40.8688",y2:"31.1572",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),i.jsx("stop",{offset:"1",stopColor:"#4A6CF7"})]})]})]})})]}),y={title:"Free Next.js Template for Startup and SaaS",description:"This is Home for Startup Nextjs Template"};function Home(){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(l,{}),i.jsx(components_Hero,{}),i.jsx(components_Features,{}),i.jsx(components_Testimonials,{}),i.jsx(u,{}),i.jsx(d.Z,{})]})}},4884:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=s(4656);let __WEBPACK_DEFAULT_EXPORT__=({title:e,paragraph:t,width:s="570px",center:r,mb:a="100px"})=>i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:`wow fadeInUp w-full ${r?"mx-auto text-center":""}`,"data-wow-delay":".1s",style:{maxWidth:s,marginBottom:a},children:[i.jsx("h2",{className:"mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]",children:e}),i.jsx("p",{className:"text-base !leading-relaxed text-body-color md:text-lg",children:t})]})})}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[724,731,370,279,16],()=>__webpack_exec__(9075));module.exports=s})();