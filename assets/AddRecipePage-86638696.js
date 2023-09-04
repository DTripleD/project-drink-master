import{n as i,r as p,P as h,h as $,j as t,C,c as A,g as B,k as U,f as G,d as N,u as D,_ as v,L as V,b as O,M as W,F as H}from"./index-158b7cdd.js";import{M as J}from"./MainPageTitle-45c8b0b3.js";import{S as z,s as X,b as Y,c as K}from"./react-select.esm-107f6780.js";import{a as Q,b as Z}from"./addRecipePageQuery-1bc1a2cd.js";import"./assertThisInitialized-9aac20e6.js";const ee=i.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 34px;
	}
`,te=i.div`
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 18px;
`,ie=i.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`,oe=i.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 18px;
	overflow: hidden;
	border-radius: 8px;
	background: rgba(22, 31, 55, 0.5);
	width: 335px;
	height: 320px;
	@media (min-width: 768px) {
		width: 320px;
	}
	@media (min-width: 1440px) {
		width: 440px;
		height: 440px;
	}
`,ne=i.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 6px;
	background: ${e=>e.theme.colors.white};
	cursor: pointer;
	&:hover {
		transform: 1.2;
	}
`,re=i.p`
	color: ${e=>e.theme.colors.white};
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: ${20/16}px;
`,se=i.div`
	display: flex;
	flex-direction: column;
	gap: 34px;
	@media (min-width: 768px) {
		gap: 40px;
	}
`,j=i.input`
	width: 100%;
	padding: 0;
	padding-bottom: 14px;
	background-color: transparent;
	min-height: 23px;
	border: 0;
	border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
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
		color: rgba(243, 243, 243, 0.5);
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
`,S=i.div`
	position: relative;
`;i.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: 25px;
	left: 50%;
	transform: translate(-50%);
`;const _=i.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: -18px;
	left: 0;
`,M=i.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	position: relative;
`,I=i(z)`
	.select__menu {
		position: absolute;
		right: -5px;
		top: 35px;
		width: 170px;
		background-color: ${e=>e.theme.colors.blue};
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
		border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
		:hover {
			outline: 0;
			box-shadow: 0;
			outline: 0;
			box-shadow: none;
			border: 0;
			border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
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
		color: rgba(243, 243, 243, 0.4);
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
`,le=e=>p.createElement("svg",{width:29,height:28,viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M14.5 5.83334V22.1667",stroke:"#161F37",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M6.33203 14H22.6654",stroke:"#161F37",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),R=({getFile:e,register:a,control:u,errors:s})=>{const[c,m]=p.useState(null),f=$(X),w=$(Y),x=f.map(l=>({value:l.toLowerCase(),label:l})),g=w.map(l=>({value:l.toLowerCase(),label:l})),d=l=>{const o=l.target.files[0],r=new FileReader;o&&(r.readAsDataURL(o),r.onloadend=()=>{m(r.result),e(o)})},b=(l,o)=>{l&&o.find(r=>r.value===l)};return t.jsxs(ee,{children:[t.jsxs(oe,{children:[c&&t.jsx(ie,{src:c,alt:"photo"}),t.jsx("input",{id:"drinkThumb",type:"file",placeholder:"Add image",onChange:d,hidden:!0}),t.jsxs(te,{children:[t.jsx(ne,{htmlFor:"drinkThumb",children:t.jsx(le,{style:{width:28,height:28}})}),t.jsx(re,{children:"Add image"})]})]}),t.jsxs(se,{children:[t.jsxs(S,{children:[t.jsx(j,{...a("drink",{required:{value:!0,message:"Please fill the title field"}}),type:"text",placeholder:"Enter item title",autoComplete:"off"}),s.drink&&t.jsx(_,{children:s.drink.message})]}),t.jsxs(S,{children:[t.jsx(j,{...a("description",{required:{value:!0,message:"Please fill the description field"}}),type:"text",placeholder:"Enter about recipe",autoComplete:"off"}),s.description&&t.jsx(_,{children:s.description.message})]}),t.jsxs(M,{children:[t.jsx(j,{disabled:!0,type:"text",placeholder:"Category"}),t.jsx(C,{control:u,name:"category",rules:{required:"Please choose a category"},render:({field:{onChange:l,value:o}})=>t.jsx(I,{defaultValue:x[1],options:x,value:b(o,x),onChange:r=>l(r.label),classNamePrefix:"select"})}),s.category&&t.jsx(_,{children:s.category.message})]}),t.jsxs(M,{children:[t.jsx(j,{disabled:!0,type:"text",placeholder:"Glass"}),t.jsx(C,{control:u,name:"glass",rules:{required:"Please choose a glass"},render:({field:{onChange:l,value:o}})=>t.jsx(I,{defaultValue:g[0],options:g,value:b(o,g),onChange:r=>l(r.label),classNamePrefix:"select"})}),s.glass&&t.jsx(_,{children:s.glass.message})]})]})]})};R.propTypes={register:h.func.isRequired,getFile:h.func.isRequired,control:h.shape({}).isRequired,errors:h.shape({}).isRequired};const ae=i.h2`
	display: block;
	color: #f3f3f3;
	font-family: Manrope;
	font-size: 28px;
	font-weight: 600;
	line-height: ${32/28};
	@media (min-width: 768px) {
		font-size: 40px;
		line-height: ${44/40};
	}
`,k=({title:e})=>t.jsx(ae,{children:e});k.propTypes={title:h.string.isRequired};const pe=i.div`
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
`,ce=i.div`
	min-width: 104px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	padding: 9px 16px;
	@media (min-width: 768px) {
		min-width: 114px;
		height: 44px;
	}
`,P=i.button`
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		fill: rgba(243, 243, 243, 0.5);
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
`,de=i.p`
	display: inline-block;
	color: #f3f3f3;
	text-align: center;
	font-family: Manrope;
	font-size: 14px;
	line-height: ${18/14};
	@media (min-width: 768px) {
		font-size: 17px;
		line-height: 156%;
	}
`,he=i.ul`
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
`,me=i.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	width: 100%;
`,xe=i.input`
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
`,ge=i.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 8px;
`,ue=i.div`
	position: relative;
	padding: 16px 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	width: 101px;
	height: 50px;
	@media (min-width: 768px) {
		width: 150px;
		height: 56px;
		padding: 14px 24px;
	}
`;i.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: -17px;
	left: 16px;
`;const fe=i(z)`
	.select__menu {
		background-color: ${e=>e.theme.colors.blue};
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
		border: 1px solid rgba(243, 243, 243, 0.5);
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
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}
`,we=i(z)`
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
		color: ${e=>e.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		color: ${e=>e.theme.colors.white};
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}
`,be=i.button`
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	svg {
		fill: rgba(243, 243, 243, 0.5);
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
`,ye=e=>p.createElement("svg",{id:"icon-minus",viewBox:"0 0 32 32",...e},p.createElement("path",{d:"M27 17.6h-22c-0.8 0-1.4-0.8-1.4-1.6s0.6-1.6 1.6-1.6h22c0.8 0 1.6 0.6 1.6 1.6s-1 1.6-1.8 1.6z"})),ve=e=>p.createElement("svg",{id:"icon-plus",viewBox:"0 0 32 32",...e},p.createElement("path",{d:"M16 28.4c-0.8 0-1.6-0.6-1.6-1.6v-9.2h-9.4c-0.8 0-1.4-0.8-1.4-1.6s0.6-1.6 1.6-1.6h9.6v-9.4c0-0.8 0.6-1.6 1.6-1.6s1.6 0.6 1.6 1.6v9.6h9.6c0.8 0 1.6 0.6 1.6 1.6s-0.6 1.6-1.6 1.6h-10v9.6c0 0.4-0.8 1-1.6 1z"})),je=e=>p.createElement("svg",{id:"icon-x",viewBox:"0 0 32 32",...e},p.createElement("path",{d:"M25.067 26.311c-0.356 0-0.711-0.178-0.889-0.356l-8.178-8-8 8c-0.533 0.533-1.422 0.533-1.956 0s-0.533-1.422 0-1.956l8-8-8-8c-0.533-0.533-0.533-1.422 0-1.956s1.422-0.533 1.956 0l8 8 8-8c0.533-0.533 1.422-0.533 1.956 0s0.533 1.422 0 1.956l-8 8 8 8c0.533 0.533 0.533 1.422 0 1.956-0.356 0.178-0.533 0.356-0.889 0.356z"})),E=({ingredientsList:e,setIngredientsList:a})=>{const s=["ml","l","oz","cup","qt","tsp","tbsp"].map(o=>({value:o,label:o})),[c,m]=p.useState(0),w=$(K).map(o=>({value:o,label:o.title})),x=()=>{if(e.length>0){const o=[...e];o.pop(),a(o),m(c-1)}},g=()=>{a(o=>[...o,{ingredient:{_id:"64f5bcc8c175b57075cf2bf2",title:"Light rum",ingredientThumb:"https://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light%20rum.png","thumb-medium":"https://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light%20rum-Medium.png","thumb-small":"https://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Light%20rum-Small.png"},amount:"",unit:"ml"}]),m(c+1)},d=(o,r)=>{const n=[...e];n[r]={...n[r],ingredient:o.value},a(n)},b=(o,r)=>{let n=o.currentTarget.value;n<0&&(n=0,o.currentTarget.value=0);const y=[...e];y[r].amount=n,a(y)},l=(o,r)=>{const n=[...e];n[r].unit=o.value,a(n)};return t.jsxs("div",{children:[t.jsxs(pe,{children:[t.jsx(k,{title:"Ingredients"}),t.jsxs(ce,{children:[t.jsx(P,{type:"button",onClick:x,children:t.jsx(ye,{style:{width:16,height:16}})}),t.jsx(de,{children:c}),t.jsx(P,{type:"button",onClick:g,children:t.jsx(ve,{style:{width:16,height:16}})})]})]}),t.jsx(he,{children:e.map((o,r)=>t.jsxs(me,{children:[t.jsxs(ge,{children:[t.jsx(fe,{name:"ingredient",options:w,onChange:n=>d(n,r),classNamePrefix:"select",isSearchable:!0,defaultValue:w[0]}),t.jsxs(ue,{children:[t.jsx(xe,{autoFocus:"on",type:"text",name:"amount",onChange:n=>b(n,r),autoComplete:"off"}),t.jsx(we,{name:"unit",options:s,onChange:n=>l(n,r),classNamePrefix:"select",isSearchable:!0,defaultValue:s[0]})]})]}),t.jsx(be,{type:"button",onClick:x,children:t.jsx(je,{style:{width:18,height:18}})})]},r))})]})};E.propTypes={ingredientsList:h.arrayOf(h.shape({})).isRequired,setIngredientsList:h.func.isRequired};const _e=i.div`
	margin-top: 80px;
	position: relative;
`,$e=i.textarea`
	resize: none;
	padding: 16px 18px;
	width: 335px;
	height: 184px;
	border-radius: 14px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	background-color: transparent;
	margin-top: 40px;
	margin-bottom: 20px;
	color: ${e=>e.theme.colors.white};
	font-family: Manrope;
	font-size: 14px;
	line-height: ${18/14};
	::placeholder {
		color: rgba(243, 243, 243, 0.5);
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
`,ze=i.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: 40px;
	left: 18px;
`,F=({register:e,errors:a})=>t.jsxs(_e,{children:[t.jsx(k,{title:"Recipe Preparation"}),t.jsx($e,{...e("instructions",{required:{value:!0,message:"Please add instructions"}}),placeholder:"Enter the recipe"}),a.instructions&&t.jsx(ze,{children:a.instructions.message})]});F.propTypes={register:h.func.isRequired,errors:h.shape({}).isRequired};const ke=i.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 14px 40px;
	border-radius: 42px;
	background-color: ${e=>e.theme.colors.white};
	color: ${e=>e.theme.colors.blue};
	font-family: Manrope;
	font-size: 14px;
	font-weight: 600;
	line-height: 18px;
	border: 0;
	transition: background-color 250ms ease, color 250ms ease;
	:hover {
		background-color: ${e=>e.theme.colors.blue};
		color: ${e=>e.theme.colors.white};
	}
	@media (min-width: 768px) {
		font-size: 16px;
		padding: 18px 44px;
	}
`,L=()=>{const e=A();p.useEffect(()=>{e(B()),e(U()),e(G())},[e]);const[a,u]=p.useState(null),s=o=>{u(o)},[c,m]=p.useState([]),{register:f,handleSubmit:w,control:x,formState:{errors:g}}=N(),d=new FormData,b=D(),l=o=>{a===null&&v.error("Please add an image"),c.length===0&&v.error("Please add at least 2 ingredient");const r=c.map(n=>({...n.ingredient,measure:n.amount.concat(` ${n.unit}`)}));d.append("drink",o.drink),d.append("description",o.description),d.append("category",o.category),d.append("glass",o.glass),d.append("instructions",o.instructions),d.append("ingredients",JSON.stringify(r)),d.append("drinkThumb",a),Q(d).then(n=>{var y;if(((y=n.response)==null?void 0:y.status)===400)throw v.error(n.response.data.message),new Error(n.response.data.message);b("/my",{replace:!0}),v.success("You have successfully added a new recipe!")}).catch(n=>{console.log(n)})};return t.jsxs("form",{onSubmit:w(l),children:[t.jsx(R,{getFile:s,register:f,control:x,errors:g}),t.jsx(E,{ingredientsList:c,setIngredientsList:m}),t.jsx(F,{register:f,errors:g}),t.jsx(ke,{type:"submit",children:"Add"})]})};L.propTypes={};const Ce=i.ul`
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
`,Se=i.li`
	@media (min-width: 768px) {
		max-width: 336px;
	}
`,Me=i(V)`
	display: flex;
	justify-content: flex-start;
	gap: 14px;
`,Ie=i.img`
	width: 90px;
	height: 90px;
	border-radius: 10px;
`,Pe=i.h4`
	color: ${e=>e.theme.colors.white};
	font-size: 16px;
	font-weight: 500;
	line-height: ${22/16};
	margin-bottom: 8px;
`,Te=i.p`
	overflow: hidden;
	color: rgba(243, 243, 243, 0.5);
	font-size: 14px;
	font-weight: 400;
	line-height: ${18/14};
	margin-bottom: 3px;
	height: 57px;
`,q=()=>{const[e,a]=p.useState([]),u=O();return p.useEffect(()=>{Z().then(s=>{a(s)}).catch(s=>console.log(s))},[]),t.jsx(Ce,{children:e.length>0&&e.map(({_id:s,drink:c,drinkThumb:m,instructions:f})=>t.jsx(Se,{children:t.jsxs(Me,{to:`/recipe/${s}`,state:{from:u},children:[t.jsx(Ie,{src:m||"/public/plug-b.png",alt:c,loading:"lazy"}),t.jsxs("div",{children:[t.jsx(Pe,{children:c}),t.jsx(Te,{children:f})]})]})},s))})};q.propTypes={};const Re=i.div`
	@media (min-width: 1440px) {
		display: flex;
		align-items: flex-start;
		gap: 94px;
		margin-bottom: 140px;
	}
`,Ee=i.div`
	@media (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
`,Fe=i.div`
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
`,Le=i.div`
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
`,T=i.h3`
	color: ${e=>e.theme.colors.white};
	font-family: Manrope;
	font-size: 18px;
	font-weight: 500;
	line-height: ${24/18};
	@media (min-width: 768px) {
		font-size: 24px;
		line-height: ${32/24};
	}
`,Ne=()=>t.jsxs(W,{children:[t.jsx(J,{title:"Add recipe"}),t.jsxs(Re,{children:[t.jsx(L,{}),t.jsxs(Ee,{children:[t.jsxs(Fe,{children:[t.jsx(T,{children:"Follow Us"}),t.jsx(H,{})]}),t.jsxs(Le,{children:[t.jsx(T,{children:"Popular recipe"}),t.jsx(q,{})]})]})]})]});export{Ne as default};
