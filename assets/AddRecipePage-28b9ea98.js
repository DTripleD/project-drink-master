import{n as i,r as l,P as h,h as M,j as t,C as k,c as O,g as X,k as Y,f as K,d as Q,l as Z,u as ee,_ as $,L as te,b as ie,M as oe,F as ne}from"./index-6ce510d3.js";import{M as re}from"./MainPageTitle-e858c969.js";import{S as P,s as se,b as le,c as ae}from"./react-select.esm-5d3d3664.js";import{a as ce,b as de}from"./addRecipePageQuery-61343f5f.js";import"./assertThisInitialized-33f14364.js";const pe=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 34px;
  }
`,he=i.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`,xe=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,ge=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
  border-radius: 8px;
  background: ${({theme:e})=>e.currentTheme==="light"?e.colors.backgroundLight:"rgba(22, 31, 55, 0.5)"};
  width: 335px;
  height: 320px;
  @media (min-width: 768px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    width: 440px;
    height: 440px;
  }
`,me=i.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: ${({theme:e})=>e.currentTheme==="light"?e.colors.black:e.colors.white};
  cursor: pointer;
  &:hover {
    transform: 1.2;
  }
`,ue=i.p`
  color: ${e=>e.theme.colors.white};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: ${20/16}px;
`,fe=i.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  @media (min-width: 768px) {
    gap: 40px;
  }
`,_=i.input`
  width: 100%;
  padding: 0;
  padding-bottom: 14px;
  background-color: transparent;
  min-height: 23px;
  border: 0;
  border-bottom: 1px
    ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey}
    solid;
  color: ${e=>e.theme.colors.white};
  font-family: Manrope;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  :focus-visible {
    outline: 0;
    box-shadow: 0;
  }
  ::placeholder {
    color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
    font-family: Manrope;
    font-size: 14px;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
    padding-bottom: 18px;
  }
  @media (min-width: 1440px) {
  }
`,F=i.div`
  position: relative;
`;i.p`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%);
`;const z=i.p`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: -18px;
  left: 0;
`,L=i.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
`,A=i(P)`
  .select__menu {
    position: absolute;
    right: -5px;
    top: 35px;
    width: 170px;
    background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.backgroundLight:e.colors.blue};
    border-radius: 12px;
    outline: 0;
    border: 0;
    margin-top: -10px;
  }

  .select__menu:hover {
    outline: 0;
  }

  .select__menu-list {
    padding: 10px 0;
    max-height: 185px;
    scrollbar-width: 4px;
    overflow-x: hidden;
    height: 118px;
  }

  .select__value-container {
    padding: 0;
  }

  .select__control {
    cursor: pointer;
    position: relative;
    width: 190px;
    height: 34px;
    background-color: transparent;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px
      ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey}
      solid;
    :hover {
      outline: 0;
      box-shadow: 0;
      outline: 0;
      box-shadow: none;
      border: 0;
      border-bottom: 1px
        ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey}
        solid;
    }
  }

  .select-container {
    outline: 0;
  }

  .select__control--is-focused {
    outline: 0;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__input-container {
    margin: 0;
    padding: 0;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${14/14};
  }

  .select__input {
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${14/14}px;
  }

  .select__placeholder {
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${14/14};
    text-align: right;
    padding-bottom: 9px;
    @media (min-width: 768px) {
      padding-bottom: 18px;
    }
  }

  .select__option {
    background-color: transparent;
    color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.4)"};
    font-family: Manrope;
    font-size: 12px;
    line-height: ${16/12}px;
    :hover {
      color: ${e=>e.theme.colors.white};
    }
    :focus {
      color: ${e=>e.theme.colors.white};
    }
  }

  .select__control--is-focused {
    outline: 0;
  }

  .select__indicator {
    padding: 0;
    padding-bottom: 10px;
    @media (min-width: 768px) {
      padding-bottom: 15px;
    }
    svg {
      fill: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
      transition: transform 300ms ease;
      :hover {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
      :focus {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
      :active {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
    }
  }

  .select__indicators {
  }

  .select__value-container {
    position: relative;
  }

  .select__single-value {
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    text-align: right;
    padding-bottom: 8px;
    @media (min-width: 768px) {
      padding-bottom: 17px;
    }
  }
`,we=e=>l.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M14.5 5.83334V22.1667",stroke:"#161F37",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M6.33203 14H22.6654",stroke:"#161F37",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),V=({getFile:e,register:d,control:f,errors:r})=>{const[x,w]=l.useState(null),g=M(se),m=M(le),u=g.map(s=>({value:s.toLowerCase(),label:s})),b=m.map(s=>({value:s.toLowerCase(),label:s})),j=s=>{const p=s.target.files[0],o=new FileReader;p&&(o.readAsDataURL(p),o.onloadend=()=>{w(o.result),e(p)})},a=(s,p)=>{s&&p.find(o=>o.value===s)};return t.jsxs(pe,{children:[t.jsxs(ge,{children:[x&&t.jsx(xe,{src:x,alt:"photo"}),t.jsx("input",{id:"drinkThumb",type:"file",placeholder:"Add image",onChange:j,hidden:!0}),t.jsxs(he,{children:[t.jsx(me,{htmlFor:"drinkThumb",children:t.jsx(we,{style:{width:28,height:28}})}),t.jsx(ue,{children:"Add image"})]})]}),t.jsxs(fe,{children:[t.jsxs(F,{children:[t.jsx(_,{...d("drink",{required:{value:!0,message:"Please fill the title field"}}),type:"text",placeholder:"Enter item title",autoComplete:"off"}),r.drink&&t.jsx(z,{children:r.drink.message})]}),t.jsxs(F,{children:[t.jsx(_,{...d("description",{required:{value:!0,message:"Please fill the description field"}}),type:"text",placeholder:"Enter about recipe",autoComplete:"off"}),r.description&&t.jsx(z,{children:r.description.message})]}),t.jsxs(L,{children:[t.jsx(_,{disabled:!0,type:"text",placeholder:"Category"}),t.jsx(k,{control:f,name:"category",rules:{required:"Please choose a category"},render:({field:{onChange:s,value:p}})=>t.jsx(A,{defaultValue:u[1],options:u,value:a(p,u),onChange:o=>s(o.label),classNamePrefix:"select"})}),r.category&&t.jsx(z,{children:r.category.message})]}),t.jsxs(L,{children:[t.jsx(_,{disabled:!0,type:"text",placeholder:"Glass"}),t.jsx(k,{control:f,name:"glass",rules:{required:"Please choose a glass"},render:({field:{onChange:s,value:p}})=>t.jsx(A,{defaultValue:b[0],options:b,value:a(p,b),onChange:o=>s(o.label),classNamePrefix:"select"})}),r.glass&&t.jsx(z,{children:r.glass.message})]})]})]})};V.propTypes={register:h.func.isRequired,getFile:h.func.isRequired,control:h.shape({}).isRequired,errors:h.shape({}).isRequired};const be=i.h2`
  display: block;
  color: ${e=>e.theme.colors.white};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: ${32/28};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: ${44/40};
  }
`,I=({title:e})=>t.jsx(be,{children:e});I.propTypes={title:h.string.isRequired};const ye=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  @media (min-width: 768px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    max-width: 540px;
  }
`,ve=i.div`
  min-width: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 200px;
  border: 1px solid
    ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
  padding: 9px 16px;
  @media (min-width: 768px) {
    min-width: 114px;
    height: 44px;
  }
`,B=i.button`
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
    :hover {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
    :focus {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
    :active {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
  }
`,$e=i.p`
  display: inline-block;
  color: ${e=>e.theme.colors.white};
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  line-height: ${18/14};
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
  }
`,je=i.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  @media (min-width: 768px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    max-width: 540px;
  }
`,_e=i.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`,ze=i.input`
  width: 100%;
  min-width: 20px;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: ${e=>e.theme.colors.white};
  :focus-visible {
    outline: 0;
    box-shadow: 0;
  }
  ::placeholder {
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
  }
`,ke=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`,Te=i.div`
  position: relative;
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 200px;
  border: 1px solid
    ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
  width: 101px;
  height: 50px;
  @media (min-width: 768px) {
    width: 150px;
    height: 56px;
    padding: 14px 24px;
  }
`,Ce=i.div`
	position: relative;
`,N=i.p`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: -17px;
  left: 16px;
`,Se=i(P)`
	.select__menu {
		background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.lightBlue:e.colors.blue};
		border-radius: 20px;
		outline: 0;
		border: 0;
		margin-top: -5px;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 18px;
		max-height: 185px;
		scrollbar-width: 4px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 0;
		text-align: left;
	}

	.select__control {
		cursor: pointer;
		padding: 16px 18px;
		border-radius: 200px;
		border: 1px solid
			${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
		opacity: 0.8;
		position: relative;
		width: 200px;
		height: 50px;
		background-color: transparent;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			padding: 14px 24px;
			width: 332px;
			height: 56px;
			font-size: 17px;
			line-height: 156%;
		}
		:hover {
			html,
			body {
				overflow: hidden;
			}
		}
		:focus {
			html,
			body {
				overflow: hidden;
			}
		}
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: 0;
		padding: 0;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${18/14}px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__input {
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14/14}px;
	}

	.select__placeholder {
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14/14}px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__option {
		background-color: transparent;
		color: rgba(243, 243, 243, 0.4);
		font-family: Manrope;
		font-size: 12px;
		line-height: ${16/10}px;
		:hover {
			color: ${e=>e.theme.colors.white};
		}
		:focus {
			color: ${e=>e.theme.colors.white};
		}
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__indicator {
		padding: 0;
		svg {
			fill: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
			transition: transform 300ms ease;
			:hover {
				fill: ${e=>e.theme.colors.white};
				transform: rotate(180deg);
			}
			:focus {
				fill: ${e=>e.theme.colors.white};
				transform: rotate(180deg);
			}
			:active {
				fill: ${e=>e.theme.colors.white};
				transform: rotate(180deg);
			}
		}
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		display: block;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}
`,Me=i(P)`
  .select__menu {
    background-color: ${e=>e.theme.colors.blue};
    border-radius: 12px;
    outline: 0;
    border: 0;
    margin-top: -5px;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }

  .select__menu:hover {
    outline: 0;
  }

  .select__menu-list {
    padding: 0;
    max-height: 185px;
    scrollbar-width: 4px;
    overflow-x: hidden;
  }

  .select__value-container {
    padding: 0;
  }

  .select__control {
    cursor: pointer;
    border: 0;
    width: 48px;
    position: relative;
    background-color: transparent;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    @media (min-width: 768px) {
      width: 70px;
    }
  }

  .select__indicator-separator {
    display: none;
  }

  .select__input-container {
    margin: 0;
    padding: 0;
    width: 30px;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${18/14}px;
  }

  .select__input {
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${14/14}px;
  }

  .select__placeholder {
    position: absolute;
    right: 0;
    top: 3;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${14/14}px;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }

  .select__option {
    background-color: transparent;
    color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:"rgba(243, 243, 243, 0.4)"};
    font-family: Manrope;
    font-size: 12px;
    line-height: ${16/10}px;
    :hover {
      color: ${e=>e.theme.colors.white};
    }
    :focus {
      color: ${e=>e.theme.colors.white};
    }
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }

  .select__control--is-focused {
    outline: 0;
  }

  .select__indicator {
    padding: 0;
    svg {
      fill: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
      transition: transform 300ms ease;
      :hover {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
      :focus {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
      :active {
        fill: ${e=>e.theme.colors.white};
        transform: rotate(180deg);
      }
    }
  }

  .select__value-container {
    position: relative;
  }

  .select__single-value {
    display: block;
    color: ${e=>e.theme.colors.white};
    font-family: Manrope;
    font-size: 14px;
    color: ${e=>e.theme.colors.white};
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }
`,Pe=i.button`
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  svg {
    fill: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
    :hover {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
    :focus {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
    :active {
      fill: ${e=>e.theme.colors.white};
      transform: rotate(180deg);
    }
  }
`,Ie=e=>l.createElement("svg",{id:"icon-minus",viewBox:"0 0 32 32",...e},l.createElement("path",{d:"M27 17.6h-22c-0.8 0-1.4-0.8-1.4-1.6s0.6-1.6 1.6-1.6h22c0.8 0 1.6 0.6 1.6 1.6s-1 1.6-1.8 1.6z"})),Re=e=>l.createElement("svg",{id:"icon-plus",viewBox:"0 0 32 32",...e},l.createElement("path",{d:"M16 28.4c-0.8 0-1.6-0.6-1.6-1.6v-9.2h-9.4c-0.8 0-1.4-0.8-1.4-1.6s0.6-1.6 1.6-1.6h9.6v-9.4c0-0.8 0.6-1.6 1.6-1.6s1.6 0.6 1.6 1.6v9.6h9.6c0.8 0 1.6 0.6 1.6 1.6s-0.6 1.6-1.6 1.6h-10v9.6c0 0.4-0.8 1-1.6 1z"})),Ee=e=>l.createElement("svg",{id:"icon-x",viewBox:"0 0 32 32",...e},l.createElement("path",{d:"M25.067 26.311c-0.356 0-0.711-0.178-0.889-0.356l-8.178-8-8 8c-0.533 0.533-1.422 0.533-1.956 0s-0.533-1.422 0-1.956l8-8-8-8c-0.533-0.533-0.533-1.422 0-1.956s1.422-0.533 1.956 0l8 8 8-8c0.533-0.533 1.422-0.533 1.956 0s0.533 1.422 0 1.956l-8 8 8 8c0.533 0.533 0.533 1.422 0 1.956-0.356 0.178-0.533 0.356-0.889 0.356z"})),D=({errors:e,control:d,register:f,fields:r,append:x,remove:w})=>{const m=["ml","l","oz","cup","qt","tsp","tbsp"].map(c=>({value:c,label:c})),[u,b]=l.useState(0),a=M(ae).map(c=>({value:c,label:c.title})),s=c=>{w(c),b(u-1)},p=()=>{x({ingredient:"",amount:"",unit:"ml"}),b(u+1)},o=(c,n)=>{c&&n.find(y=>y.value===c)};return t.jsxs("div",{children:[t.jsxs(ye,{children:[t.jsx(I,{title:"Ingredients"}),t.jsxs(ve,{children:[t.jsx(B,{type:"button",onClick:s,children:t.jsx(Ie,{style:{width:16,height:16}})}),t.jsx($e,{children:u}),t.jsx(B,{type:"button",onClick:p,children:t.jsx(Re,{style:{width:16,height:16}})})]})]}),t.jsx(je,{children:r.map((c,n)=>{var y,v,R,E,G,q;return t.jsxs(_e,{children:[t.jsxs(ke,{children:[t.jsxs(Ce,{children:[t.jsx(k,{control:d,name:`ingredients.${n}.ingredient`,rules:{required:"Please choose an ingredient"},render:({field:{onChange:T,value:C}})=>t.jsx(Se,{options:a,onChange:S=>T(S.value),classNamePrefix:"select",isSearchable:!0,value:o(C,a),placeholder:"Choose an ingredient"})}),t.jsx(N,{children:(R=(v=(y=e==null?void 0:e.ingredients)==null?void 0:y[n])==null?void 0:v.ingredient)==null?void 0:R.message})]}),t.jsxs(Te,{children:[t.jsx(ze,{type:"text",...f(`ingredients.${n}.amount`,{required:{value:!0,message:"Please add amount"}}),autoComplete:"off"}),t.jsx(N,{children:(q=(G=(E=e==null?void 0:e.ingredients)==null?void 0:E[n])==null?void 0:G.amount)==null?void 0:q.message}),t.jsx(k,{control:d,name:`ingredients.${n}.unit`,rules:{required:"Please choose a unit"},render:({field:{onChange:T,value:C}})=>t.jsx(Me,{options:m,onChange:S=>T(S.label),classNamePrefix:"select",isSearchable:!0,defaultValue:m[0],value:o(C,m)})})]})]}),t.jsx(Pe,{type:"button",onClick:s,children:t.jsx(Ee,{style:{width:18,height:18}})})]},c.id)})})]})};D.propTypes={register:h.func.isRequired,control:h.shape({}).isRequired,errors:h.shape({}).isRequired,fields:h.array.isRequired,append:h.func.isRequired,remove:h.func.isRequired};const Ge=i.div`
  margin-top: 80px;
  position: relative;
`,qe=i.textarea`
  resize: none;
  padding: 16px 18px;
  width: 335px;
  height: 184px;
  border-radius: 14px;
  border: 1px solid
    ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
  background-color: transparent;
  margin-top: 40px;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.white};
  font-family: Manrope;
  font-size: 14px;
  line-height: ${18/14};
  ::placeholder {
    color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
    font-family: Manrope;
    font-size: 14px;
    line-height: ${18/14};
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 156%;
    }
  }
  @media (min-width: 768px) {
    width: 480px;
    font-size: 17px;
    line-height: 156%;
  }
`,Fe=i.p`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: 40px;
  left: 18px;
`,W=({register:e,errors:d})=>t.jsxs(Ge,{children:[t.jsx(I,{title:"Recipe Preparation"}),t.jsx(qe,{...e("instructions",{required:{value:!0,message:"Please add instructions"}}),placeholder:"Enter the recipe"}),d.instructions&&t.jsx(Fe,{children:d.instructions.message})]});W.propTypes={register:h.func.isRequired,errors:h.shape({}).isRequired};const Le=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.black:e.colors.white};
  color: ${e=>e.theme.colors.blue};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: ${({theme:e})=>e.currentTheme==="light"?"1px solid black":"0"};
  transition: background-color 250ms ease, color 250ms ease;
  :hover {
    background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.green:e.colors.blue};
    color: ${e=>e.theme.colors.white};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }
`,H=()=>{const e=O();l.useEffect(()=>{e(X()),e(Y()),e(K())},[e]);const[d,f]=l.useState(null),r=o=>{f(o)},{register:x,handleSubmit:w,control:g,formState:{errors:m}}=Q({defaultValues:{ingredients:[]}}),{fields:u,append:b,remove:j}=Z({control:g,name:"ingredients"}),a=new FormData,s=ee(),p=o=>{if(d===null){$.error("Please add an image");return}if(o.ingredients.length===0){$.error("Please add at least 2 ingredient");return}const c=o.ingredients.map(n=>({...n.ingredient,measure:n.amount.concat(` ${n.unit}`)}));a.append("drink",o.drink),a.append("description",o.description),a.append("category",o.category),a.append("glass",o.glass),a.append("instructions",o.instructions),a.append("ingredients",JSON.stringify(c)),a.append("drinkThumb",d),ce(a).then(n=>{var y,v;if(((y=n.response)==null?void 0:y.status)===400)throw $.error(n.response.data.message),new Error(n.response.data.message);if(((v=n.response)==null?void 0:v.status)===500)throw $.error(n.response.data.message),new Error(n.response.data.message);s("/my",{replace:!0}),$.success("You have successfully added a new recipe!")}).catch(n=>{console.log(n)})};return t.jsxs("form",{onSubmit:w(p),children:[t.jsx(V,{getFile:r,register:x,control:g,errors:m}),t.jsx(D,{register:x,errors:m,control:g,fields:u,append:b,remove:j}),t.jsx(W,{register:x,errors:m,control:g}),t.jsx(Le,{type:"submit",children:"Add"})]})};H.propTypes={};const Ae=i.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 25px;
  }
`,Be=i.li`
  @media (min-width: 768px) {
    max-width: 336px;
  }
`,Ne=i(te)`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
`,Ue=i.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`,Ve=i.h4`
  color: ${e=>e.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: ${22/16};
  margin-bottom: 8px;
`,De=i.p`
  overflow: hidden;
  color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: ${18/14};
  margin-bottom: 3px;
  height: 57px;
`,J=()=>{const[e,d]=l.useState([]),f=ie();return l.useEffect(()=>{de().then(r=>{d(r)}).catch(r=>console.log(r))},[]),t.jsx(Ae,{children:e.length>0&&e.map(({_id:r,drink:x,drinkThumb:w,instructions:g})=>t.jsx(Be,{children:t.jsxs(Ne,{to:`/recipe/${r}`,state:{from:f},children:[t.jsx(Ue,{src:w||"/public/plug-b.png",alt:x,loading:"lazy"}),t.jsxs("div",{children:[t.jsx(Ve,{children:x}),t.jsx(De,{children:g})]})]})},r))})};J.propTypes={};const We=i.div`
	@media (min-width: 1440px) {
		display: flex;
		align-items: flex-start;
		gap: 94px;
		margin-bottom: 140px;
	}
`,He=i.div`
	@media (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
`,Je=i.div`
	margin-top: 80px;
	display: flex;
	aling-items: left;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media (min-width: 768px) {
		gap: 24px;
	}
	@media (min-width: 1440px) {
		margin-top: 0;
	}
`,Oe=i.div`
	margin-top: 40px;
	display: flex;
	aling-items: left;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	margin-bottom: 80px;
	@media (min-width: 768px) {
		gap: 40px;
		margin-bottom: 140px;
	}
	@media (min-width: 1440px) {
		margin-top: 0;
		margin-bottom: 0px;
	}
`,U=i.h3`
	color: ${e=>e.theme.colors.white};
	font-family: Manrope;
	font-size: 18px;
	font-weight: 500;
	line-height: ${24/18};
	@media (min-width: 768px) {
		font-size: 24px;
		line-height: ${32/24};
	}
`,et=()=>t.jsxs(oe,{children:[t.jsx(re,{title:"Add recipe"}),t.jsxs(We,{children:[t.jsx(H,{}),t.jsxs(He,{children:[t.jsxs(Je,{children:[t.jsx(U,{children:"Follow Us"}),t.jsx(ne,{})]}),t.jsxs(Oe,{children:[t.jsx(U,{children:"Popular recipe"}),t.jsx(J,{})]})]})]})]});export{et as default};
