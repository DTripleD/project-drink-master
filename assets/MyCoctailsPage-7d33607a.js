import{i as E,r as a,c as k,h as v,e as L,A as P,B as j,j as e,a as R,M as T}from"./index-ef6a0e83.js";import{M as C}from"./MainPageTitle-c12d6c73.js";import{D as F}from"./DrinkCard-3e82c24d.js";import{S as D,M as W,a as z}from"./RecipesList.styled-06d41782.js";import{E as _}from"./ErrorPage.styled-8bffddf3.js";import{P as H}from"./Pagination-7ff498ca.js";import"./DeleteButton-cd88067b.js";import"./white-bg@2x-60be6de5.js";import"./assertThisInitialized-cbb634fe.js";const S=async c=>{try{return await E.get(`/own?${c}`)}catch(n){return n.response.data.message}},I=()=>{const[c,n]=a.useState(!0),[m,g]=a.useState([]),l=k(),p=v(t=>t.cocktails.status),[o,h]=a.useState(1),[u,f]=a.useState(1),[d,w]=a.useState(()=>window.innerWidth>=1440?9:8);a.useEffect(()=>{const t=()=>{window.innerWidth>=1440?w(9):w(8)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const[r,x]=L({page:o,limit:d}),i=new URLSearchParams(r.toString());a.useEffect(()=>{const t=parseInt(r.get("page"))||1;t!==o&&h(t),S(r).then(({data:s})=>{g(s.cocktails),n(!1),f(Math.ceil(s.totalHits/d))}).catch(s=>{console.log("error",s)})},[r]),a.useEffect(()=>{p==="idle"&&l(P()).then(j).then(()=>n(!1))},[p,l]);const M=t=>{l(P(t)).then(j).then(()=>{S(r).then(({data:s})=>{s.cocktails.length===0&&o!==1&&(i.set("page",1 .toString()),x(i),h(1)),g(s.cocktails),f(Math.ceil(s.totalHits/d))}).catch(s=>{console.log("error",s)})})},y=(t,s)=>{window.scrollTo({top:0,behavior:"smooth"}),i.set("page",s.toString()),x(i),h(s)};return e.jsx(D,{children:c&&e.jsx(R,{})||e.jsx(e.Fragment,{children:m.length>0?e.jsxs(e.Fragment,{children:[e.jsx(W,{children:m.map(t=>e.jsx(F,{page:"my",cocktail:t,removeCocktail:()=>M(t._id)},t._id))}),u>1&&e.jsx(H,{totalPages:u,page:o,changeNum:y})]}):e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(z,{children:"You haven't added any cocktail recipes yet"})]})})})},J=()=>(a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx(e.Fragment,{children:e.jsx(T,{children:e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"My recipes"}),e.jsx(I,{})]})})}));export{J as default};