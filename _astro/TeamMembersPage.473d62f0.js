import{_ as I,h as m,p as $}from"./hooks.module.588e47ed.js";import{c as _,h as z,d as A,a as L,b as j}from"./http.82ebf0f1.js";import{u as F}from"./use-auth.13ac07ad.js";import{p as g}from"./page.c1a8a472.js";import{u as S}from"./use-team-id.c4977929.js";import{u as k}from"./use-outside-click.48e5e038.js";import{o as e}from"./jsxRuntime.module.c718f406.js";import{k as O}from"./preact.module.ce248672.js";import{R as D}from"./RoleDropdown.8a4f8375.js";import{g as V}from"./browser.bcc09af3.js";import{u as E}from"./index.9fd707a6.js";import{a as B}from"./team.12f2469e.js";import{u as Y}from"./use-toast.fb52de5d.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function q(s){const{onClose:t}=s,o=I(null),u=I(null),[i,p]=m(""),[c,n]=m(!1),[h,d]=m(""),{teamId:a}=S();$(()=>{d(""),p(""),u?.current?.focus()},[]);const b=async f=>{if(f.preventDefault(),n(!0),d(""),i.toUpperCase()!=="LEAVE"){d("Verification text does not match"),n(!1);return}const{response:v,error:x}=await _(`https://api.roadmap.sh/v1-leave-team/${a}`,{});if(x||!v){n(!1),d(x?.message||"Something went wrong");return}window.location.href="/account?c=tl"},y=()=>{n(!1),d(""),p(""),t()};return k(o,y),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:o,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h2",{class:"text-2xl font-semibold text-black",children:"Leave Team"}),e("p",{className:"text-gray-500",children:"You will lose access to the team, the roadmaps and progress of other team members."}),e("p",{className:"-mb-2 mt-3 text-base font-medium text-black",children:'Please type "leave" to confirm.'}),e("form",{onSubmit:b,children:[e("div",{className:"my-4",children:[e("input",{ref:u,type:"text",name:"leave-team",id:"leave-team",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "leave" to confirm',required:!0,autoFocus:!0,value:i,onInput:f=>p(f.target.value)}),h&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:h})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:c,onClick:y,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:c||i.toUpperCase()!=="LEAVE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:c?"Please wait ..":"Leave Team"})]})]})]})})})}function G(s){const[t,o]=m(!1);return e(O,{children:[t&&e(q,{onClose:()=>{o(!1)}}),e("button",{onClick:()=>{o(!0)},className:"flex h-7 min-w-[95px] items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-sm font-medium leading-none text-red-600",children:"Leave team"})]})}function H(s){const{onClose:t,onInvited:o}=s,u=I(null),i=I(null),[p,c]=m("member"),[n,h]=m(""),[d,a]=m(!1),[b,y]=m(""),{teamId:f}=S();$(()=>{i?.current?.focus()},[]);const v=async w=>{w.preventDefault(),a(!0),y("");const{response:C,error:M}=await z(`https://api.roadmap.sh/v1-invite-member/${f}`,{email:n,role:p});if(M||!C){a(!1),y(M?.message||"Something went wrong");return}a(!1),x(),o()},x=()=>{a(!1),y(""),t()};return k(u,x),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:u,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h3",{class:"mb-1.5 text-xl sm:text-2xl font-medium",children:"Invite Member"}),e("p",{className:"mb-3 text-sm leading-none text-gray-400 hidden sm:block",children:"Enter the email and role below to invite a member."}),e("form",{onSubmit:v,children:[e("div",{className:"mt-0 sm:mt-4 my-4 flex flex-col gap-2",children:[e("input",{ref:i,type:"email",name:"invite-member",id:"invite-member",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:"Enter email address",required:!0,autoFocus:!0,value:n,onInput:w=>h(w.target.value)}),e("div",{className:"flex h-[42px] w-full flex-col",children:e(D,{className:"h-full w-full",selectedRole:p,setSelectedRole:c})}),b&&e("p",{className:" rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:b})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:d,onClick:x,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:d||!n,class:"flex-grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",children:d?"Please wait ..":"Invite"})]})]})]})})})}function J(s){const{onClose:t,onUpdated:o,member:u}=s,i=I(null),[p,c]=m(u.role),[n,h]=m(!1),[d,a]=m(""),{teamId:b}=S(),y=async v=>{v.preventDefault(),h(!0),a("");const{response:x,error:w}=await A(`https://api.roadmap.sh/v1-update-member-role/${b}/${u._id}`,{role:p});if(w||!x){h(!1),a(w?.message||"Something went wrong");return}h(!1),o()},f=()=>{h(!1),a(""),t()};return k(i,f),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:i,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h3",{class:"mb-1.5 text-xl sm:text-2xl font-medium",children:"Update Role"}),e("p",{className:"mb-3 text-sm leading-none text-gray-400 hidden sm:block",children:"Select the role to update for this member"}),e("form",{onSubmit:y,children:[e("div",{className:"mt-0 sm:mt-4 my-4 flex flex-col gap-2",children:[e("span",{className:"mt-2 block w-full rounded-md bg-gray-100 p-2",children:u.invitedEmail}),e("div",{className:"flex h-[42px] w-full flex-col",children:e(D,{className:"h-full w-full",selectedRole:p,setSelectedRole:c})}),d&&e("p",{className:" rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:d})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:n,onClick:f,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{type:"submit",disabled:n||!p,class:"flex-grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",children:n?"Please wait ..":"Update Role"})]})]})]})})})}const K="/_astro/more-vertical.bfff43ef.svg";function Q({member:s,onUpdateMember:t,onDeleteMember:o,onResendInvite:u,isDisabled:i=!1,onSendProgressReminder:p,allowProgressReminder:c=!1,allowUpdateRole:n=!0}){const h=I(null),[d,a]=m(!1),[b,y]=m(!1);k(h,()=>{a(!1)});const f=[{name:"Delete",handleClick:()=>{o(),a(!1)}},...n?[{name:"Update Role",handleClick:()=>{t(),a(!1)}}]:[],...c?[{name:"Send Progress Reminder",handleClick:()=>{p(),a(!1)}}]:[],...["invited"].includes(s.status)?[{name:"Resend Invite",handleClick:()=>{u(),a(!1)}}]:[]];return e("div",{className:"relative",children:[e("button",{disabled:i,onClick:()=>a(!d),className:"ml-2 flex items-center opacity-60 transition-opacity hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30",children:e("img",{alt:"menu",src:K,className:"h-4 w-4"})}),d&&e("div",{ref:h,className:"align-right absolute right-0 top-full z-50 mt-1 w-[200px] rounded-md bg-slate-800 px-2 py-2 text-white shadow-md",children:e("ul",{children:f.map((v,x)=>e("li",{children:e("button",{onClick:v.handleClick,disabled:b,className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:v.name})},x))})})]})}function U({role:s}){return e("span",{className:`rounded-full px-2 py-0.5 text-xs sm:flex items-center capitalize ${["admin"].includes(s)?"bg-blue-100 text-blue-700 ":"bg-gray-100 text-gray-700 "} ${["manager"].includes(s)?"bg-green-100 text-green-700":""}`,children:s})}function P(s){const{member:t,index:o,onResendInvite:u,onUpdateMember:i,canManageCurrentTeam:p,userId:c,onDeleteMember:n,onSendProgressReminder:h}=s,d=E(B),a=!t.hasProgress&&t.status==="joined",b=d&&!t.hasProgress&&t.status==="joined"&&t.userId!==c;return e("div",{className:`flex items-center justify-between gap-2 p-3 ${o===0?"":"border-t"}`,children:[e("div",{className:"flex items-center gap-3",children:[e("img",{src:t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",alt:t.name||"",className:"hidden h-10 w-10 rounded-full sm:block"}),e("div",{children:[e("div",{className:"mb-1 flex items-center gap-2 sm:hidden",children:e(U,{role:t.role})}),e("div",{className:"flex items-center",children:[e("h3",{className:"inline-grid grid-cols-[auto_auto_auto] items-center font-medium",children:[e("span",{className:"truncate",children:t.name}),a&&e("span",{className:"ml-2 rounded-full bg-red-400 px-2 py-0.5 text-xs font-normal text-white",children:"No Progress"}),t.userId===c&&e("span",{className:"ml-2 hidden text-xs font-normal text-blue-500 sm:inline",children:"You"})]}),e("div",{className:"ml-2 flex items-center gap-0.5",children:[t.status==="invited"&&e("span",{className:"rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700",children:"Invited"}),t.status==="rejected"&&e("span",{className:"rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700",children:"Rejected"})]})]}),e("p",{className:"truncate text-sm text-gray-500",children:t.invitedEmail})]})]}),e("div",{className:"flex shrink-0 items-center text-sm",children:[e("span",{class:"hidden sm:block",children:e(U,{role:t.role})}),p&&e(Q,{allowUpdateRole:t.status!=="rejected",allowProgressReminder:b,onResendInvite:u,onSendProgressReminder:h,onDeleteMember:n,isDisabled:t.userId===c,onUpdateMember:i,member:t})]})]})}function pe(){const{t:s}=V(),t=Y(),o=E(B),[u,i]=m(),[p,c]=m(!1),[n,h]=m([]),[d,a]=m(),b=F();async function y(){const{response:r,error:l}=await L(`https://api.roadmap.sh/v1-get-team/${s}`);if(l||!r){t.error(l?.message||"Something went wrong");return}r&&a(r)}async function f(){const{response:r,error:l}=await L(`https://api.roadmap.sh/v1-get-team-member-list/${s}`);if(l||!r){t.error(l?.message||"Failed to load team member list");return}h(r)}$(()=>{s&&Promise.all([y(),f()]).finally(()=>{g.set("")})},[s]);async function v(r,l){g.set("Deleting member");const{response:R,error:N}=await _(`https://api.roadmap.sh/v1-delete-member/${r}/${l}`,{});if(N||!R){t.error(N?.message||"Something went wrong");return}t.success("Member has been deleted"),await f()}async function x(r,l){g.set("Resending Invite");const{response:R,error:N}=await j(`https://api.roadmap.sh/v1-resend-invite/${r}/${l}`,{});if(N||!R){t.error(N?.message||"Something went wrong");return}t.success("Invite has been sent")}async function w(r,l){g.set("Sending Reminder");const{response:R,error:N}=await j(`https://api.roadmap.sh/v1-send-progress-reminder/${r}/${l}`,{});if(N||!R){t.error(N?.message||"Something went wrong");return}t.success("Reminder has been sent")}const C=n.filter(r=>r.status==="joined"),M=n.filter(r=>r.status==="invited"),T=n.filter(r=>r.status==="rejected");return e("div",{children:[u&&e(J,{member:u,onUpdated:()=>{g.set("Refreshing members"),f().finally(()=>{g.set("")}),i(void 0),t.success("Member has been updated")},onClose:()=>{i(void 0)}}),p&&e(H,{onInvited:()=>{t.success("Invite sent"),f().then(()=>null),c(!1)},onClose:()=>{c(!1)}}),e("div",{children:[e("div",{className:"rounded-md border",children:[e("div",{className:"flex items-center justify-between gap-2 border-b p-3",children:[e("p",{className:"hidden text-sm sm:block",children:[n.length," people in the team."]}),e("p",{className:"block text-sm sm:hidden",children:[n.length," members"]}),e(G,{teamId:d?._id})]}),C.map((r,l)=>e(P,{member:r,index:l,teamId:s,userId:b?.id,onResendInvite:()=>{x(s,r._id).finally(()=>{g.set("")})},canManageCurrentTeam:o,onDeleteMember:()=>{v(s,r._id).finally(()=>{g.set("")})},onUpdateMember:()=>{i(r)},onSendProgressReminder:()=>{w(s,r._id).finally(()=>{g.set("")})}},l))]}),M.length>0&&e("div",{className:"mt-6",children:[e("h3",{className:"text-xs uppercase text-gray-400",children:"Invited Members"}),e("div",{className:"mt-2 rounded-md border",children:M.map((r,l)=>e(P,{member:r,index:l,teamId:s,userId:b?.id,onResendInvite:()=>{x(s,r._id).finally(()=>{g.set("")})},canManageCurrentTeam:o,onDeleteMember:()=>{v(s,r._id).finally(()=>{g.set("")})},onUpdateMember:()=>{i(r)},onSendProgressReminder:()=>{w(s,r._id).finally(()=>{g.set("")})}},l))})]}),T.length>0&&e("div",{className:"mt-6",children:[e("h3",{className:"text-xs uppercase text-gray-400",children:"Rejected Invites"}),e("div",{className:"mt-2 rounded-b-sm rounded-t-md border",children:T.map((r,l)=>e(P,{member:r,index:l,teamId:s,userId:b?.id,onResendInvite:()=>{x(s,r._id).finally(()=>{g.set("")})},canManageCurrentTeam:o,onDeleteMember:()=>{v(s,r._id).finally(()=>{g.set("")})},onUpdateMember:()=>{i(r)},onSendProgressReminder:()=>{w(s,r._id).finally(()=>{g.set("")})}},l))})]})]}),o&&e("div",{className:"mt-4",children:e("button",{disabled:n.length>=25,onClick:()=>c(!0),className:"block w-full rounded-md border border-dashed border-gray-300 py-2 text-sm transition-colors hover:border-gray-600 hover:bg-gray-50 focus:outline-0",children:"+ Invite Member"})}),n.length>=25&&o&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:"You have reached the maximum number of members in a team. Please reach out to us if you need more."})]})}export{pe as TeamMembersPage};
