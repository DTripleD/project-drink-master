import{i as u,r as s,c as f,h as x,A as l,B as d,j as e,a as g,M as j}from"./index-6e0bd04a.js";import{M as y}from"./MainPageTitle-5cda58cb.js";import"./Pagination-4bc2ba2f.js";import{D as M}from"./DrinkCard-93057dc8.js";import{S as E,M as S,a as k}from"./RecipesList.styled-081e8364.js";import{E as w}from"./ErrorPage.styled-0ad35462.js";import"./assertThisInitialized-7f66bd83.js";import"./DeleteButton-dfd67c31.js";import"./white-bg@2x-60be6de5.js";const R=async()=>{try{return await u.get("/own")}catch(a){return a.response.data.message}},C=()=>{const[a,i]=s.useState(!0),[n,o]=s.useState([]),r=f(),c=x(t=>t.cocktails.status);s.useEffect(()=>{R().then(t=>o(t.data.cocktails)).then(()=>i(!1))},[]),s.useEffect(()=>{c==="idle"&&r(l()).then(d).then(()=>i(!1))},[c,r]);const p=t=>{r(l(t)).then(d).then(()=>{o(m=>m.filter(h=>h._id!==t))})};return e.jsx(E,{children:a?e.jsx(g,{}):n.length>0?e.jsx(S,{children:n.map(t=>e.jsx(M,{page:"my",cocktail:t,removeCocktail:()=>p(t._id)},t._id))}):e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(k,{children:"You haven't added any cocktail recipes yet"})]})})},O=()=>(s.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"My recipes"}),e.jsx(C,{})]})})}));export{O as default};