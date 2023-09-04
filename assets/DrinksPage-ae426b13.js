import{r,n as i,P as f,b as $,j as n,L as A,i as N,c as R,d as U,e as B,g as V,f as H,h as P,C as z,a as Z,M as q}from"./index-158b7cdd.js";import{S as G,s as J,a as K}from"./react-select.esm-107f6780.js";import{P as Q}from"./Pagination-b72fe618.js";import{E as X}from"./ErrorPage.styled-68af039d.js";import{M as Y}from"./MainPageTitle-45c8b0b3.js";import"./assertThisInitialized-9aac20e6.js";const O=e=>r.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),ee=i.ul`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 40px;

	@media screen and (min-width: 768px) {
		margin-bottom: 80px;
		gap: 20px;
	}
`,te=i.li`
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
`,ne=i.img`
	margin-bottom: 14px;
	border-radius: 8px;
	transition: transform 600ms ease;
	&:hover,
	&:focus {
		transform: scale(1.03);
	}
`,oe=i.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`,ie=i.p`
	font-size: 16px;
	color: ${e=>e.theme.colors.white};

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`,re=i.p`
	font-size: 14px;
	color: rgba(243, 243, 243, 0.5);

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`,se=i.p`
	text-align: center;
	font-size: 30px;
	color: ${e=>e.theme.colors.white};
`,L=({drinks:e})=>{const s=$();return n.jsx(n.Fragment,{children:e&&Array.isArray(e)&&e.length>0&&n.jsx(ee,{children:e.map(({_id:d,drink:x,drinkThumb:c,instructions:l})=>n.jsx(te,{children:n.jsxs(A,{to:`/recipe/${d}`,state:{from:s},children:[n.jsx(ne,{src:c||"/public/plug-b.png",alt:l,loading:"lazy"}),n.jsxs(oe,{children:[n.jsx(ie,{children:x}),n.jsx(re,{children:"Ingredients"})]})]})},d))})})};L.propTypes={drinks:f.oneOfType([f.string,f.array])};const S=i(G)`
	background-color: ${e=>e.theme.colors.blue};
	border-radius: 200px;
	max-width: 335px;
	max-height: 54px;

	@media screen and (min-width: 768px) {
		width: 199px;
		height: 56px;
	}

	.select__menu {
		background-color: ${e=>e.theme.colors.blue};
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
`,ae=i.form`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-bottom: 40px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`,ce=i.div`
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
`,le=i.input`
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
`,pe=i.button`
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
`,de=async e=>{try{const{data:s}=await N.get(`/search?${e}`);return s}catch(s){return s.response.data.message}},he=()=>{const{state:e}=$(),s=R(),{register:d,handleSubmit:x,control:c}=U(),[l,w]=r.useState(1),[b,E]=r.useState(1),[y,M]=r.useState([]),[j,_]=r.useState(""),[p,k]=r.useState(()=>window.innerWidth>=1440?9:10),[h,m]=B({search:"",category:e!=null&&e.category?e==null?void 0:e.category:"",ingredients:"",page:l,limit:p}),v=new URLSearchParams(h.toString());r.useEffect(()=>{s(V()),s(H())},[]),r.useEffect(()=>{const t=()=>{window.innerWidth>=1440?k(9):k(10)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const C=P(J),F=P(K);r.useEffect(()=>{const t=parseInt(h.get("page"))||1;t!==l&&w(t),de(h).then(o=>{M(o),_(o),E(Math.ceil(o.totalHits/p))}).catch(o=>{_(o)})},[h]);const g=C.map(t=>({value:t,label:t}));g.unshift({value:"",label:"All categories"});const u=F.map(t=>({value:t,label:t}));u.unshift({value:"",label:"Ingredients"});const D=t=>{var o,a;m({search:(t==null?void 0:t.search)||"",category:((o=t==null?void 0:t.category)==null?void 0:o.label)||(e==null?void 0:e.category)||"",ingredients:((a=t==null?void 0:t.ingredients)==null?void 0:a.label)||"",page:"1",limit:p})},I=t=>{m(o=>({...o,category:(t==null?void 0:t.label)||"",page:"1",limit:p}))},W=t=>{m(o=>({...o,ingredients:(t==null?void 0:t.label)||"",page:"1",limit:p}))},T=(t,o)=>{v.set("page",o.toString()),m(v),w(o)};return n.jsxs(n.Fragment,{children:[n.jsxs(ae,{onSubmit:x(D),children:[n.jsxs(ce,{children:[n.jsx(le,{type:"text",...d("search"),placeholder:"Enter the text"}),n.jsx(pe,{type:"submit",children:n.jsx(O,{style:{width:20,height:20}})})]}),n.jsx(z,{control:c,name:"category",render:({field:{onChange:t,value:o}})=>n.jsx(S,{defaultValue:g[0],options:g,value:o,onChange:a=>{t(a),I(a)},classNamePrefix:"select"})}),n.jsx(z,{control:c,name:"ingredients",render:({field:{onChange:t,value:o}})=>n.jsx(S,{defaultValue:u[0],options:u,value:o,onChange:a=>{t(a),W(a)},classNamePrefix:"select"})})]}),!y.drinks&&!j&&n.jsx(Z,{}),n.jsx(L,{drinks:y.drinks}),j==="drinks not found"&&n.jsxs(n.Fragment,{children:[n.jsx(X,{}),n.jsx(se,{children:"Unfortunately, there is no such cocktails.... 😭"})]}),b>1&&n.jsx(Q,{totalPages:b,page:l,changeNum:T})]})},be=()=>n.jsx("div",{children:n.jsxs(q,{children:[n.jsx(Y,{title:"Drinks"}),n.jsx(he,{})]})});export{be as default};
