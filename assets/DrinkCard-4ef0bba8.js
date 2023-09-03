import{e as t,P as o,j as i,L as n}from"./index-0f66abe3.js";const p="/project-drink-master/assets/coctails-6f30eaa9.jpg",a=t.div`
  width: 335px;

  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`,d=t.div`
  border-radius: 15px;
  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
`,x=t.div`
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
`,h=t.img`
  /* background-image: url("./defaultimg.jpg"); */
  border-radius: 15px;
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms ease;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`,l=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${e=>e.position==="my"||e.position==="favorite"?"flex-direction: column; gap: 4px;":"flex-direction: row"}
`,c=t.p`
  color: ${e=>e.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`,m=t.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.5)"};
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,g=t.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 335px;
  /* text-justify: distribute; */
  height: 75px;
  /* color: ${e=>e.theme.colors.white}; */
  color: ${e=>e.theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  margin-bottom: 18px;
  margin-top: 18px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: calc(22 / 16);
    margin-bottom: 24px;
    margin-top: 24px;
    height: 110px;
    -webkit-line-clamp: 5;
  }
  @media (min-width: 1440px) {
    height: 93px;
    -webkit-line-clamp: 4;
  }
`,w=t.div`
  display: flex;
  gap: 8px;
  position: relative;
`,f=t.div``,b=({cocktail:e,page:r})=>i.jsxs(a,{children:[i.jsx(n,{to:`/recipe/${e._id}`,children:i.jsx(d,{children:i.jsx(x,{children:i.jsx(h,{src:e.drinkThumb,alt:e.drink,onError:s=>{s.currentTarget.src=p}})})})}),i.jsx(f,{children:i.jsxs(l,{position:r,children:[i.jsx(n,{to:`/recipe/${e._id}`,children:i.jsx(c,{children:e.drink})}),i.jsx(m,{children:"Ingredients"})]})}),(r==="my"||r==="favorite")&&i.jsx(g,{children:e.about}),i.jsx(w,{})]});b.propTypes={page:o.string,cocktail:o.object};export{b as D};
