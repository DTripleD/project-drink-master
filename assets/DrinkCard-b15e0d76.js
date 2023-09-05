import{n as t,P as r,j as i,L as s}from"./index-a20318f6.js";import{S as x,D as l}from"./DeleteButton-18779da0.js";const c=t.button`
  border-radius: 42px;
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  transition: 0.3s ease;

  background: transparent;
  border: 1px solid
    ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.2)"};
  color: ${e=>e.theme.colors.white};

  margin-top: ${e=>e.margintop?e.margintop:"0px"};
  margin-bottom: ${e=>e.marginbottom?e.marginbottom:"0px"};

  &:hover,
  :focus {
    background: ${e=>e.theme.colors.white};
    color: ${e=>e.theme.colors.black};
  }

  @media (min-width: 768px) {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }

  @media (min-width: 1440px) {
    // empty.....for now
  }
`,h=({text:e="I am a button",ariaLabel:n="button for click",marginbottom:o="0px",margintop:a="0px",onClick:d,type:p="button"})=>i.jsx(c,{type:p,"aria-label":n,marginbottom:o,margintop:a,onClick:d,children:e});h.propTypes={text:r.string.isRequired,ariaLabel:r.string.isRequired,marginbottom:r.number,onClick:r.func.isRequired,type:r.string,margintop:r.number};const m="/project-drink-master/assets/coctails-6f30eaa9.jpg",g=t.div`
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
`,f=t.div`
  border-radius: 15px;
  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
`,b=t.div`
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
`,w=t.img`
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
`,u=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${e=>e.position==="my"||e.position==="favorite"?"flex-direction: column; gap: 4px;":"flex-direction: row"}
`,y=t.p`
  color: ${e=>e.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`,j=t.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.5)"};
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,v=t.p`
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
`,k=t.div`
  display: flex;
  gap: 8px;
  position: relative;
`,$=t.div``,z=({cocktail:e,page:n})=>i.jsxs(g,{children:[i.jsx(s,{to:`/recipe/${e._id}`,children:i.jsx(f,{children:i.jsx(b,{children:i.jsx(w,{src:e.drinkThumb,alt:e.drink,onError:o=>{o.currentTarget.src=m}})})})}),i.jsx($,{children:i.jsxs(u,{position:n,children:[i.jsx(s,{to:`/recipe/${e._id}`,children:i.jsx(y,{children:e.drink})}),i.jsx(j,{children:"Ingredients"})]})}),(n==="my"||n==="favorite")&&i.jsx(v,{children:e.about}),i.jsxs(k,{children:[(n==="my"||n==="favorite")&&i.jsx(x,{id:e._id}),(n==="my"||n==="favorite")&&i.jsx(l,{id:e._id,page:n})]})]});z.propTypes={page:r.string,cocktail:r.object};export{h as A,z as D};
