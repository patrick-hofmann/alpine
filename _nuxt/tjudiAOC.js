import w from"./CmsGDWwS.js";import k from"./BslxPx5Z.js";import v from"./CcjregW0.js";import{u as I}from"./CJn5rKvE.js";import{d as g,Y as A,I as S,M as c,b as a,c as r,e as o,g as i,F as C,Z as B,j as e,w as u,p as L,i as z,s as N,$ as V,X as b,l as F}from"./BY93IQHE.js";import"./BcWussCh.js";const P=t=>(L("data-v-a1a90752"),t=t(),z(),t),T={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>I(_.path,async()=>await N(V(_.path)).sort({date:-1}).find(),"$6zpz7z1oJ4")),s=await s,l(),s),n=S(()=>m.value||[]);return(E,J)=>{var d;const p=w,h=k,f=v;return(d=c(n))!=null&&d.length?(a(),r("div",T,[o("div",Y,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(C,null,B(c(n).slice(1),(y,x)=>(a(),b(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=F(D,[["__scopeId","data-v-a1a90752"]]);export{O as default};
