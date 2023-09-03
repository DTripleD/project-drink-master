import{o as r,r as s,j as t,e as n,M as o}from"./index-0f66abe3.js";import{M as d}from"./MainPageTitle-d3b291b9.js";import{D as p}from"./DrinkCard-4ef0bba8.js";import{S as c,a as x,M as m}from"./RecipesList.styled-5f54c388.js";import{E as l}from"./ErrorPage.styled-c4793abd.js";const g=async()=>{try{return await r.get("/own")}catch(e){return e.response.data.message}},h=()=>{const[e,i]=s.useState([]);return s.useEffect(()=>{g().then(a=>i(a.data.cocktails))},[]),t.jsx(c,{children:e.length>0?t.jsx(x,{children:e.map(a=>t.jsx(p,{page:"my",cocktail:a},a._id))}):t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(m,{children:"You haven't added any cocktail recipes yet"})]})})};n.section`
  padding-top: 80px;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 136px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
    padding-top: 160px;
    padding-bottom: 140px;
  }
`;const w=()=>(s.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsx(t.Fragment,{children:t.jsx(o,{children:t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"My recipes"}),t.jsx(h,{})]})})}));export{w as default};
