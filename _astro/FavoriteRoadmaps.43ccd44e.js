import{h as c,p as m}from"./hooks.module.588e47ed.js";import{C as p}from"./CheckIcon.38817745.js";import{o as t}from"./jsxRuntime.module.c718f406.js";import{a as v}from"./http.82ebf0f1.js";import{MarkFavorite as x}from"./MarkFavorite.7c261716.js";import{S as y}from"./Spinner.5c883e87.js";import"./preact.module.ce248672.js";import"./jwt.f0e0aa9c.js";import"./popup.a359f713.js";import"./use-toast.fb52de5d.js";import"./toast.1fe7142d.js";import"./index.a98c85f5.js";function b(a){const{title:r="Start learning ..",message:s="Your progress and favorite roadmaps will show up here."}=a;return t("div",{className:"relative flex min-h-full flex-col items-start sm:items-center justify-center py-6",children:[t("h2",{className:"mb-1 flex items-center text-lg sm:text-2xl text-gray-200",children:[t(p,{additionalClasses:"mr-2 top-[0.5px] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"}),"Start learning .."]}),t("p",{className:"text-gray-400 text-sm sm:text-base",children:s})]})}function w(a){const{progress:r,isLoading:s=!1}=a;return t("div",{className:"relative pb-12 pt-4 sm:pt-7",children:[t("p",{className:"mb-4 flex items-center text-sm text-gray-400",children:[!s&&t(p,{additionalClasses:"mr-1.5 w-[14px] h-[14px]"}),s&&t("span",{className:"mr-1.5",children:t(y,{})}),"Your progress and favorite roadmaps."]}),t("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3",children:r.map(e=>{const i=e.resourceType==="roadmap"?`/${e.resourceId}`:`/best-practices/${e.resourceId}`,n=(e.skipped+e.done)/e.total*100;return t("a",{href:i,className:"relative flex flex-col overflow-hidden rounded-md border border-slate-800 bg-slate-900 p-3 text-sm text-slate-400 hover:border-slate-600 hover:text-slate-300",children:[t("span",{className:"relative z-20",children:e.resourceTitle}),t("span",{class:"absolute bottom-0 left-0 top-0 z-10 bg-[#172a3a]",style:{width:`${n}%`}}),t(x,{resourceId:e.resourceId,resourceType:e.resourceType,favorite:e.isFavorite})]},e.resourceId)})})]})}function I(a){a.forEach(r=>{const s=r.resourceType==="best-practice"?`/best-practices/${r.resourceId}`:`/${r.resourceId}`,e=document.querySelector(`a[href="${s}"]`);if(!e)return;window.dispatchEvent(new CustomEvent("mark-favorite",{detail:{resourceId:r.resourceId,resourceType:r.resourceType,isFavorite:r.isFavorite}}));const n=(r.done+r.skipped)/r.total*100,l=e.querySelector("[data-progress]");l&&(l.style.width=`${n}%`)})}function z(){const[a,r]=c(!0),[s,e]=c(!0),[i,n]=c([]),[l,f]=c(0);function h(){const o=document.getElementById("hero-text");o&&(o.classList.add("opacity-0"),setTimeout(()=>{o.parentElement?.removeChild(o),r(!1),setTimeout(()=>{f(100)},50)},0))}async function d(){e(!0);const{response:o,error:g}=await v("https://api.roadmap.sh/v1-get-user-all-progress");g||!o||(n(o),e(!1),h(),I(o))}if(m(()=>{d().finally(()=>{e(!1)})},[]),m(()=>(window.addEventListener("refresh-favorites",d),()=>window.removeEventListener("refresh-favorites",d)),[]),a)return null;const u=i.length>0;return t("div",{class:`flex min-h-[192px] bg-gradient-to-b transition-opacity duration-500 sm:min-h-[280px] opacity-${l} ${u&&"border-t border-t-[#1e293c]"}`,children:t("div",{className:"container min-h-full",children:[!s&&i.length==0&&t(b,{}),i.length>0&&t(w,{progress:i,isLoading:s})]})})}export{z as FavoriteRoadmaps};
