import{u as g,r as _,o as r,c as a,a as o,w as v,b as c,t as h,d as p,F as b,e as y,n as w,f as d,g as x,H as k}from"./app.bc09b4ba.js";const $={class:"h-48"},C=["onSubmit"],S=o("button",{class:"px-4 py-2 bg-slate-900 text-white rounded-md font-semibold shadow"}," Process ",-1),D={key:0,class:"text-red-300"},B={key:0,class:"h-24 w-24"},F=["src"],L={__name:"ColorDetector",emits:["detected"],setup(l,{emit:t}){const e=g({image:null}),s=_([]),n=_("");function i(){n.value=URL.createObjectURL(e.image),e.post("/process",{onSuccess:u=>{console.log("data",u),e.errors.image="",s.value=u.props.colors,t("detected",s.value)}})}return(u,m)=>(r(),a("div",$,[o("div",null,[o("form",{onSubmit:v(i,["prevent"])},[o("input",{type:"file",onChange:m[0]||(m[0]=f=>c(e).image=f.target.files[0])},null,32),S,c(e).errors.image?(r(),a("span",D,h(c(e).errors.image),1)):p("",!0)],40,C)]),s.value.length>0?(r(),a("div",B,[o("img",{src:n.value,class:"h-full w-full"},null,8,F)])):p("",!0)]))}},N={key:0,class:"flex space-x-1 h-32"},V={class:"absolute -bottom-9 font-bold opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200"},j={__name:"ColorPalette",props:{colors:Object},setup(l){const t=l;return(e,s)=>t.colors?(r(),a("div",N,[(r(!0),a(b,null,y(t.colors,(n,i)=>(r(),a("div",{class:"h-32 w-32 shadow relative group",key:i,style:w(`background: #${n}`)},[o("span",V,"#"+h(n),1)],4))),128))])):p("",!0)}},H={class:"grid h-96 place-items-center grid-row-2 mt-9"},M=o("title",null,"Make your pallete",-1),P={__name:"App",setup(l){const t=_([]);function e(s){t.value=s}return(s,n)=>(r(),a("div",H,[d(c(k),null,{default:x(()=>[M]),_:1}),d(L,{onDetected:e}),d(j,{colors:t.value},null,8,["colors"])]))}};export{P as default};