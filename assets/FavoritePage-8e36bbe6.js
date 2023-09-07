import{n as s,P as p,j as e,h as x,a as M,r as a,b as k,c as P,v as I,M as F,w,x as S}from"./index-11619686.js";import{M as T}from"./MainPageTitle-c344abcc.js";import{d as z,s as u,a as E}from"./plug-m-b8799421.js";import{S as L,D}from"./DeleteButton-11dacaa0.js";import{S as C,M as W,a as _}from"./RecipesList.styled-feced682.js";import{P as B}from"./Pagination-bf0b59b6.js";import{E as O}from"./ErrorPage.styled-a2d7aa6d.js";import"./assertThisInitialized-0da60a41.js";import"./white-bg@2x-60be6de5.js";const $=s.div`
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
`,G=s.img`
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
`,R=s.div`
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
`,H=s.h3`
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
`,N=s.h3`
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
`,Y=s.p`
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
`,q=s.p`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,j=({recipe:t,removeCocktail:i})=>e.jsxs($,{children:[e.jsx(G,{src:t.drinkThumb?t.drinkThumb:z,alt:t.drink}),e.jsxs(R,{children:[e.jsx(H,{children:t.drink}),e.jsx(N,{children:t.glass})]}),e.jsx(Y,{children:t.description||"Good cocktail"}),e.jsxs(q,{children:[e.jsx(L,{id:t._id}),e.jsx(D,{id:t._id,text:"Delete",ariaLabel:"button for click",onClick:()=>i(t._id),type:"button"})]})]});j.propTypes={recipe:p.oneOfType([p.object,p.array])};const A=({currentItems:t,handleDeleteFavorite:i})=>{const o=x(u);return e.jsx(C,{children:o&&e.jsx(M,{})||e.jsx(W,{children:t.map(r=>e.jsx("li",{children:e.jsx(j,{recipe:r,page:"favorite",cocktail:r,removeCocktail:i})},r._id))})})};s.section`
  padding-top: 80px;
  /* padding-bottom: 80px; */
  @media (min-width: 768px) {
    padding-top: 140px;
    /* padding-bottom: 136px; */
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
    padding-top: 160px;
    /* padding-bottom: 140px; */
  }
`;const ie=()=>{a.useEffect(()=>{window.scrollTo(0,0)},[]),k();const t=P(),i=x(E);x(u);const[o,r]=a.useState(()=>window.innerWidth>=1440?9:8);a.useEffect(()=>{const n=()=>{window.innerWidth>=1440?r(9):r(8)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const[d,m]=a.useState(1),h=d*o,y=h-o,f=i.slice(y,h),[c,g]=a.useState(1);a.useEffect(()=>{t(I()),g(Math.ceil(i.length/o))},[t]),a.useEffect(()=>{f.length===0&&d!==1&&m(n=>n-1)},[c,d]);const b=n=>{w.success("Deleting..."),t(S(n)).unwrap().then(l=>{g(Math.ceil(l.totalHits/o))}).then(()=>w.success("Delete success!"))},v=(n,l)=>{m(l)};return e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Favorites"}),(i==null?void 0:i.length)!==0?e.jsx(A,{handleDeleteFavorite:b,currentItems:f}):e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(_,{children:"You havent added any favorite cocktails yet"})]}),c>1&&e.jsx(B,{totalPages:c,page:d,changeNum:v})]})})})};export{ie as default};
