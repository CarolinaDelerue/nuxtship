import g from"./ContentSlot.c241ffff.js";import{d as m,K as h,b as a,c as o,e as t,g as n,w as i,D as d,F as _,L as f,H as w,s as v,t as u,M as y}from"./entry.ec9617f5.js";import{u as k}from"./asyncData.3b146103.js";const C={class:"flex flex-col gap-3 mx-auto max-w-4xl mt-16"},b={class:"font-bold text-3xl text-gray-800 dark:text-gray-300"},N={class:"text-lg leading-relaxed text-gray-500 dark:text-gray-400"},A={class:"grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"},B={class:"group"},D={class:"mt-4 text-center"},T={class:"text-lg text-gray-800 dark:text-gray-300"},V={class:"text-sm text-gray-400"},j=m({__name:"About",async setup($){let e,l;const{data:p}=([e,l]=h(()=>k("about",()=>v("about").where({_partial:!0}).find())),e=await e,l(),e);return(r,q)=>{const c=g,x=y;return a(),o(_,null,[t("div",C,[t("h2",b,[n(c,{use:r.$slots.title,unwrap:"p"},{default:i(()=>[d(" Missing Title ")]),_:1},8,["use"])]),t("p",N,[n(c,{use:r.$slots.description,unwrap:"p"},{default:i(()=>[d(" Missing #description slot ")]),_:1},8,["use"])])]),t("div",A,[(a(!0),o(_,null,f(w(p),s=>(a(),o("div",{key:s.title},[t("div",B,[t("div",null,[n(x,{src:s.avatar.src,alt:s.avatar.alt,class:"aspect-square object-cover w-full rounded-md",width:"272",height:"272"},null,8,["src","alt"])]),t("div",D,[t("h2",T,u(s.name),1),t("h3",V,u(s.title),1)])])]))),128))])],64)}}});export{j as default};