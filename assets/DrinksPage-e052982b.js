import{i as A,n as r,P as w,b as S,j as o,L as N,r as i,c as R,d as U,e as B,g as V,f as G,h as $,C as P,a as H,M as Z}from"./index-dae4b03d.js";import{S as q,s as J,a as K}from"./react-select.esm-07b64b91.js";import{E as Q}from"./ErrorPage.styled-24ebb3b3.js";import{P as X}from"./Pagination-33949043.js";import{M as Y}from"./MainPageTitle-5a1c1f37.js";import"./assertThisInitialized-ccfbe62a.js";import"./white-bg@2x-60be6de5.js";const O=async e=>{try{const{data:s}=await A.get(`/search?${e}`);return s}catch(s){return s.response.data.message}},z=r(q)`
 background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.backgroundLight:e.colors.blue};
	border-radius: 200px;
	max-width: 335px;
	max-height: 54px;

	@media screen and (min-width: 768px) {
		width: 199px;
		height: 56px;
	}

	.select__menu {
		 background-color: ${({theme:e})=>e.currentTheme==="light"?e.colors.backgroundLight:e.colors.blue};
		border-radius: 20px;
		outline: 0;
		border: 0;
		margin-top: 4px;
		z-index: 2;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 14px 15px;

		max-height: 335px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 10px;
	}

	.select__control {
		cursor: pointer;
		position: relative;
		width: 315px;
		height: 56px;
		background-color: transparent;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		border: 0;
		border-radius: 0;

		@media screen and (min-width: 768px) {
			font-size: 17px;
			width: 190px;
		}
		:hover {
			outline: 0;
			box-shadow: 0;
			outline: 0;
			box-shadow: none;
			border: 0;

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
		margin: auto;
		padding: auto;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14/14}px;
		height: 35px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__input {
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14/14}px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__placeholder {
		position: absolute;
		left: 0;
		top: 5;
		margin: auto;
		padding: auto;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14/14}px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__option {
		background-color: transparent;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 12px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
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
		svg {
			fill: rgba(243, 243, 243, 0.5);
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
		position: absolute;
		left: 24px;
		margin: auto;
		padding: auto;
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__menu-list::-webkit-scrollbar {
		width: 8px;
	}
	.select__menu-list::-webkit-scrollbar-thumb {
		background: ${e=>e.theme.colors.grey};
		border-radius: 20px;
	}

`,ee=r.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,te=r.div`
  max-width: 335px;
  max-height: 54px;
  border: 1px solid ${e=>e.theme.colors.white};
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }
`,oe=r.input`
  background-color: transparent;
  max-width: 170px;
  border: none;
  color: ${e=>e.theme.colors.white};
  margin-left: 24px;
  height: 35px;
  font-size: 17px;
  ::placeholder {
    color: ${e=>e.theme.colors.white};
    font-size: 17px;
  }
`,ne=r.button`
  background-color: transparent;
  outline: none;
  border: none;
  :hover {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
`,re=r.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    gap: 20px;
  }
`,ie=r.li`
  display: flex;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
    margin-bottom: 60px;
  }
`,se=r.img`
  margin-bottom: 14px;
  border-radius: 8px;
  transition: transform 600ms ease;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`,ae=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,le=r.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ce=r.p`
  font-size: 14px;
  color: ${({theme:e})=>e.currentTheme==="light"?e.colors.white:e.colors.lightGrey};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,he=r.p`
  text-align: center;
  font-size: 30px;
  color: ${e=>e.theme.colors.white};
`,L=({drinks:e})=>{const s=S();return o.jsx(o.Fragment,{children:e&&Array.isArray(e)&&e.length>0&&o.jsx(re,{children:e.map(({_id:p,drink:g,drinkThumb:c,instructions:h})=>o.jsx(ie,{children:o.jsxs(N,{to:`/recipe/${p}`,state:{from:s},children:[o.jsx(se,{src:c||"/public/plug-b.png",alt:h,loading:"lazy"}),o.jsxs(ae,{children:[o.jsx(le,{children:g}),o.jsx(ce,{children:"Ingredients"})]})]})},p))})})};L.propTypes={drinks:w.oneOfType([w.string,w.array])};const de=e=>i.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),pe=()=>{const{state:e}=S(),s=R(),{register:p,handleSubmit:g,control:c}=U(),[h,b]=i.useState(1),[y,E]=i.useState(1),[v,M]=i.useState([]),[j,_]=i.useState(""),[d,k]=i.useState(()=>window.innerWidth>=1440?9:10),[m,x]=B({search:"",category:e!=null&&e.category?e==null?void 0:e.category:"",ingredients:"",page:h,limit:d}),a=new URLSearchParams(m.toString());i.useEffect(()=>{s(V()),s(G()),window.scrollTo({top:0,behavior:"smooth"})},[]),i.useEffect(()=>{const t=()=>{window.innerWidth>=1440?k(9):k(10)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),i.useEffect(()=>{const t=parseInt(m.get("page"))||1;t!==h&&b(t),O(m).then(n=>{M(n),_(n),E(Math.ceil(n.totalHits/d))}).catch(n=>{_(n)})},[m]);const C=$(J),F=$(K),u=C.map(t=>({value:t,label:t}));u.unshift({value:"",label:"All categories"});const f=F.map(t=>({value:t,label:t}));f.unshift({value:"",label:"Ingredients"});const T=t=>{var n,l;x({search:(t==null?void 0:t.search)||"",category:((n=t==null?void 0:t.category)==null?void 0:n.value)||(e==null?void 0:e.category)||"",ingredients:((l=t==null?void 0:t.ingredients)==null?void 0:l.value)||"",page:"1",limit:d})},D=t=>{x(n=>({...n,category:(t==null?void 0:t.value)||"",search:"",page:"1",limit:d}))},I=t=>{x(n=>({...n,ingredients:(t==null?void 0:t.value)||"",search:"",page:"1",limit:d}))},W=(t,n)=>{a.set("page",n.toString()),x(a),b(n),window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsxs(ee,{onSubmit:g(T),children:[o.jsxs(te,{children:[o.jsx(oe,{type:"text",...p("search"),placeholder:a.get("search")===""?"Enter the text":a.get("search")}),o.jsx(ne,{type:"submit",children:o.jsx(de,{style:{width:20,height:20}})})]}),o.jsx(P,{control:c,name:"category",render:({field:{onChange:t,value:n}})=>o.jsx(z,{defaultValue:a.get("category")===""?u[0]:{value:"",label:a.get("category")},options:u,value:n,onChange:l=>{t(l),D(l)},classNamePrefix:"select"})}),o.jsx(P,{control:c,name:"ingredients",render:({field:{onChange:t,value:n}})=>o.jsx(z,{defaultValue:a.get("ingredients")===""?f[0]:{value:"",label:a.get("ingredients")},options:f,value:n,onChange:l=>{t(l),I(l)},classNamePrefix:"select"})})]}),!v.drinks&&!j&&o.jsx(H,{}),o.jsx(L,{drinks:v.drinks}),j==="drinks not found"&&o.jsxs(o.Fragment,{children:[o.jsx(Q,{}),o.jsx(he,{children:"Unfortunately, there is no such cocktails.... 😭"})]}),y>1&&o.jsx(X,{totalPages:y,page:h,changeNum:W})]})},ye=()=>o.jsx("div",{children:o.jsxs(Z,{children:[o.jsx(Y,{title:"Drinks"}),o.jsx(pe,{})]})});export{ye as default};
