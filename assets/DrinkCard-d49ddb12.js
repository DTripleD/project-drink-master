import{n,P as r,j as i,L as s}from"./index-0ed355f5.js";import{S as a,D as p}from"./DeleteButton-b7ccea24.js";const x="/project-drink-master/assets/coctails-6f30eaa9.jpg",l=n.div`
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
`,h=n.div`
  border-radius: 15px;
  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
`,c=n.div`
  width: 335px;
  height: 360px;
  border-radius: 15px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,m=n.img`
  width: 100%;
  height: 100%;
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
`,f=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${e=>e.position==="my"||e.position==="favorite"?"flex-direction: column; gap: 4px;":"flex-direction: row"}
`,g=n.p`
  color: ${e=>e.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`,w=n.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.5)"};
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,b=n.p`
  display: inline-block;
  height: 45px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  color: ${e=>e.theme.colors.white};

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
`,y=n.div`
  display: flex;
  gap: 8px;
  position: relative;
`,j=n.div``,u=({cocktail:e,page:t,removeCocktail:o})=>i.jsxs(l,{children:[i.jsx(s,{to:`/recipe/${e._id}`,children:i.jsx(h,{children:i.jsx(c,{children:i.jsx(m,{src:e.drinkThumb,alt:e.drink,onError:d=>{d.currentTarget.src=x}})})})}),i.jsx(j,{children:i.jsxs(f,{position:t,children:[i.jsx(s,{to:`/recipe/${e._id}`,children:i.jsx(g,{children:e.drink})}),i.jsx(w,{children:"Ingredients"})]})}),(t==="my"||t==="favorite")&&i.jsx(b,{children:e.description}),i.jsxs(y,{children:[(t==="my"||t==="favorite")&&i.jsx(a,{id:e._id}),(t==="my"||t==="favorite")&&i.jsx(p,{id:e._id,page:t,onClick:()=>o(e._id)})]})]});u.propTypes={page:r.string,removeCocktail:r.func,cocktail:r.object};export{u as D};
