import{n as a,P as e,u as d,j as i,r as n}from"./index-94d40486.js";const p=a.button`
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background-color: transparent;
  border: 1px solid
    ${({theme:t})=>t.currentTheme==="light"?t.colors.white:"rgba(243, 243, 243, 0.2)"};
  color: ${t=>t.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 400ms ease,
    scale 400ms ease;

  &:hover,
  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
    background-color: ${t=>t.theme.colors.white};
    color: ${t=>t.theme.colors.black};
  }

  @media (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
    line-height: calc(18 / 16);
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media (min-width: 1440px) {
  }
`,h=({id:t})=>{const o=d(),r=()=>{o(`/recipe/${t}`)};return i.jsx(p,{onClick:r,children:"See recipe"})};h.propTypes={id:e.string.isRequired};const l=a.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  padding: 0px;
  /* transition: 0.3s ease; */
  transition: background-color 0.3s ease, box-shadow 400ms ease,
    scale 400ms ease;

  background-color: transparent;

  border: 1px solid
    ${({theme:t})=>t.currentTheme==="light"?t.colors.white:"rgba(243, 243, 243, 0.2)"};
  color: ${t=>t.theme.colors.white};

  margin-top: ${t=>t.margintop?t.margintop:"0px"};
  margin-bottom: ${t=>t.marginbottom?t.marginbottom:"0px"};

  &:hover,
  :focus {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
    background: ${t=>t.theme.colors.white};
    color: ${t=>t.theme.colors.black};
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    // empty.....for now
  }
`,g=t=>a(t)`
  width: 22px;
  height: 22px;
  background: transparent;
  fill: transparent;
  stroke: currentColor;
  @media screen and(min-width: 768px) {
    height: 28px;
    width: 28px;
  }
`,m=t=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{id:"trash-01"},n.createElement("path",{id:"Icon",d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),x=g(m),b=({ariaLabel:t="button for click",marginbottom:o="0px",margintop:r="0px",onClick:s,type:c="button"})=>i.jsx(l,{type:c,"aria-label":t,marginbottom:o,margintop:r,onClick:s,children:i.jsx(x,{})});b.propTypes={ariaLabel:e.string,marginbottom:e.number,onClick:e.func,type:e.string,margintop:e.number};export{b as D,h as S};
