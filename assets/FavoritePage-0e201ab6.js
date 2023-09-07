import{n as o,P as s,j as e,h as x,a as I,r as a,b as P,c as T,v as F,M as S,w as u,x as z}from"./index-72785550.js";import{M as E}from"./MainPageTitle-7b2d8f4d.js";import{d as L,s as w,a as D}from"./plug-m-b8799421.js";import{S as C,D as W}from"./DeleteButton-b90ee6ea.js";import{S as y,M as _,a as O}from"./RecipesList.styled-b337aa45.js";import{P as B}from"./Pagination-4e72fc03.js";import{E as $}from"./ErrorPage.styled-56478f30.js";import"./assertThisInitialized-169559b1.js";import"./white-bg@2x-60be6de5.js";const G=o.div`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    max-width: 342px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,R=o.img`
  display: block;
  transition: transform 600ms ease, box-shadow 400ms ease;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );

  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &:hover,
  &:focus {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,H=o.div`
  /* display: flex;
  flex-direction: column;
 
  justify-content: space-between; */
  /* height: 124px; */
  gap: 18px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column;
    justify-content: space-between; */
    gap: 24px;
    /* height: 252px; */
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    /* height: 252px; */
  }
`,N=o.h3`
  /* margin-bottom: 4px; */
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: ${t=>t.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 24px;

    line-height: 32px;
  }
`,Y=o.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: ${t=>t.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`,q=o.p`
  display: inline-block;
  height: 45px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  color: ${t=>t.theme.colors.white};

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    display: inline-block;

    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`,A=o.p`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,j=({recipe:t,removeCocktail:n})=>e.jsxs(G,{children:[e.jsx(R,{src:t.drinkThumb?t.drinkThumb:L,alt:t.drink}),e.jsxs(H,{children:[e.jsx(N,{children:t.drink}),e.jsx(Y,{children:t.glass})]}),e.jsx(q,{children:t.description||"Good cocktail"}),e.jsxs(A,{children:[e.jsx(C,{id:t._id}),e.jsx(W,{id:t._id,text:"Delete",ariaLabel:"button for click",onClick:()=>n(t._id),type:"button"})]})]});j.propTypes={recipe:s.oneOfType([s.object,s.array]),removeCocktail:s.func};const b=({currentItems:t,handleDeleteFavorite:n})=>{const r=x(w);return e.jsx(y,{children:r&&e.jsx(I,{})||e.jsx(_,{children:t.map(l=>e.jsx("li",{children:e.jsx(j,{recipe:l,page:"favorite",cocktail:l,removeCocktail:n})},l._id))})})};b.propTypes={currentItems:s.oneOfType([s.object,s.array]),handleDeleteFavorite:s.func};const ne=()=>{a.useEffect(()=>{window.scrollTo(0,0)},[]),P();const t=T(),n=x(D);x(w);const[r,l]=a.useState(()=>window.innerWidth>=1440?9:8);a.useEffect(()=>{const i=()=>{window.innerWidth>=1440?l(9):l(8)};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const[c,h]=a.useState(1),m=c*r,v=m-r,f=n.slice(v,m),[p,g]=a.useState(1);a.useEffect(()=>{t(F()),g(Math.ceil(n.length/r))},[t]),a.useEffect(()=>{f.length===0&&c!==1&&h(i=>i-1)},[p,c]);const k=i=>{u.success("Deleting..."),t(z(i)).unwrap().then(d=>{g(Math.ceil(d.totalHits/r))}).then(()=>u.success("Delete success!"))},M=(i,d)=>{h(d)};return e.jsx(e.Fragment,{children:e.jsx(S,{children:e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Favorites"}),(n==null?void 0:n.length)!==0?e.jsx(b,{handleDeleteFavorite:k,currentItems:f}):e.jsxs(y,{children:[e.jsx($,{}),e.jsx(O,{children:"You havent added any favorite cocktails yet"})]}),p>1&&e.jsx(B,{totalPages:p,page:c,changeNum:M})]})})})};export{ne as default};
