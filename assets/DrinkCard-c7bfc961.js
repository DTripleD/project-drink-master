import{n as t,P as o,j as e,L as n}from"./index-cc31af0b.js";import{S as d,D as p}from"./DeleteButton-d7ce98ab.js";const a="/project-drink-master/assets/coctails-6f30eaa9.jpg",x=t.div`
  width: 335px;

  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`,h=t.div`
  border-radius: 15px;
  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
`,l=t.div`
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
`,c=t.img`
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
`,m=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${i=>i.position==="my"||i.position==="favorite"?"flex-direction: column; gap: 4px;":"flex-direction: row"}
`,f=t.p`
  color: ${i=>i.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`,w=t.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:i})=>i.currentTheme==="light"?i.colors.white:"rgba(243, 243, 243, 0.5)"};
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
  /* color: ${i=>i.theme.colors.white}; */
  color: ${i=>i.theme.colors.white};
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
`,b=t.div`
  display: flex;
  gap: 8px;
  position: relative;
`,j=t.div``,u=({cocktail:i,page:r})=>e.jsxs(x,{children:[e.jsx(n,{to:`/recipe/${i._id}`,children:e.jsx(h,{children:e.jsx(l,{children:e.jsx(c,{src:i.drinkThumb,alt:i.drink,onError:s=>{s.currentTarget.src=a}})})})}),e.jsx(j,{children:e.jsxs(m,{position:r,children:[e.jsx(n,{to:`/recipe/${i._id}`,children:e.jsx(f,{children:i.drink})}),e.jsx(w,{children:"Ingredients"})]})}),(r==="my"||r==="favorite")&&e.jsx(g,{children:i.about}),e.jsxs(b,{children:[(r==="my"||r==="favorite")&&e.jsx(d,{id:i._id}),(r==="my"||r==="favorite")&&e.jsx(p,{id:i._id,page:r})]})]});u.propTypes={page:o.string,cocktail:o.object};export{u as D};
