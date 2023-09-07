import{n as i,P as s,j as t,y as g,r as a,h,c as $,v as j,z as y,x as z,i as I,M as k,a as P}from"./index-cd0a58bf.js";import{a as T,s as q,d as l}from"./plug-m-b8799421.js";const L=i.h1`
  color: ${e=>e.theme.colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 32px;
font-weight: 600;
line-height: 38px;
margin-bottom: 20px;

@media (min-width: 768px) {
    font-size: 56px;
    line-height: 60px; 
    margin-bottom: 28px;
  }

  @media (min-width: 1440px) {
font-size: 64px;
line-height: 68px;
  }
`,u=({title:e})=>t.jsx("div",{children:t.jsx(L,{children:e})});u.propTypes={title:s.string};const R=i.p`
  font-size: 12px;
  color: ${e=>e.theme.colors.grey};
  line-height: calc(14/12);
  margin-bottom:8px;

  @media ${e=>e.theme.device.tablet} {
    font-size: 14px;
    line-height:calc(20/14);
  }
`,F=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,S=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,D=i.div`
width:335px;
border-radius:8px;
height:400px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,E=i.div`
padding-top:58px;
padding-bottom:40px;
@media ${e=>e.theme.device.tablet} {
  padding-top: 80px;
  padding-bottom: 80px;
 }

@media ${e=>e.theme.device.desktop}{
  padding-top:132px;
  padding-bottom:100px;
  display:flex;
  justify-content: space-between;
}
`,m=i.button`
  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.white};
  border-radius: 42px;
  padding: 14px 40px;
  margin-top: 40px;
  margin-bottom: 80px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  transition: 0.3s ease;
  &:hover,
  &focus,
  &:active {
    background-color: ${e=>e.theme.colors.black};
    color: ${e=>e.theme.colors.white};
    border-color: ${e=>e.theme.colors.white};
  }
  &:disabled,
  &[disabled] {
    background-color: #434d67;
    color: rgba(243, 243, 243, 0.2);
  }

  @media ${e=>e.theme.device.tablet} {
    fonst-size: 16px;
    line-height: calc(18 / 16);
  }
`,A=()=>{const{recipeId:e}=g(),[o,n]=a.useState(!1),r=h(T),d=$(),c=h(q);return console.log(c),a.useEffect(()=>{d(j())},[d]),a.useEffect(()=>{const p=r.some(w=>w._id===e);n(p)},[r,e]),t.jsx("div",{children:o?t.jsx(m,{disabled:c,type:"button",onClick:()=>d(z(e)),children:"Remove from favorites"}):t.jsx(m,{disabled:c,type:"button",onClick:()=>d(y(e)),children:"Add to favorite recipe"})})},b=({ingridients:{drink:e,glass:o,drinkThumb:n,description:r}})=>t.jsxs(E,{children:[t.jsxs("div",{children:[t.jsx(R,{children:o}),t.jsx(u,{title:e}),t.jsx(F,{children:r||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."}),t.jsx(A,{})]}),t.jsx(D,{children:t.jsx(S,{src:n||"/plug-m.png",alt:e})})]});b.propTypes={ingridients:s.object,drink:s.string,glass:s.string,drinkThumb:s.string,description:s.string};const x=i.p`
  font-size: 16px;
  color: rgba(243, 243, 243, 0.5);
  line-height: calc(20/16);
  margin-bottom:20px;
  @media ${e=>e.theme.device.tablet}{
    margin-bottom:24px;
  }
`,M=i.p`
font-size: 16px;
  color: ${e=>e.theme.colors.grey};
  line-height:calc(20/16);
`,V=i.img`
padding:25px;
background-color:${e=>e.theme.colors.blue};
width:157px;
height:157px;
border-radius: 8px;
@media ${e=>e.theme.device.tablet}{
  width:220px;
  height:220px;
  padding:32px;
}
`,B=i.ul`
display:flex;
flex-wrap:wrap;
gap:20px;
@media ${e=>e.theme.device.tablet}{
  gap:22px;
}
@media ${e=>e.theme.device.desktop}{
  gap:30px;
}
`,C=i.div`
display: flex;
	justify-content: space-between;
	align-items: center;
  margin-top:8px;
`,G=i.h3`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
font-size: 18px;
line-height: calc(24 / 18);
}
`,W=i.div`
padding-bottom:40px;
@media ${e=>e.theme.device.tablet}{
  padding-bottom:50px;
}
`,N=i.li`
width:157px;
@media ${e=>e.theme.device.tablet}{
  width:220px;
}
`,f=({ingridients:e})=>{if(!e)return t.jsx(x,{children:"Something went wrong,try again..."});const o=e.ingredients;return t.jsxs(W,{children:[t.jsx(x,{children:"Ingredients"}),t.jsx(B,{children:o.map((n,r)=>t.jsxs(N,{children:[t.jsx(V,{src:n["thumb-small"]||l,srcSet:`
              ${n["thumb-medium"]||l} 480w,
              ${n.ingredientThumb||l} 748w
            `,sizes:"(min-width: 1440px) 450px, (min-width:768px) 354px, (min-width:375px) 270px, 100vw",alt:n.title,loading:"lazy"}),t.jsxs(C,{children:[t.jsx(G,{children:n.title}),t.jsx(M,{children:n.measure})]})]},r))})]})};f.propTypes={ingridients:s.object,ingredients:s.array,title:s.string,measure:s.string,ingredientThumb:s.string};const H=i.div`
padding-top:40px;
padding-bottom:80px;
@media ${e=>e.theme.device.tablet}{
    padding-top:50px;
    padding-bottom:140px;
}
`,U=i.h2`
color: ${e=>e.theme.colors.white};
font-weight: 600;
font-size: 28px;
line-height: calc(32/28);
@media ${e=>e.theme.device.tablet}{
    font-size: 40px;
    line-height: calc(42/40);
}
@media ${e=>e.theme.device.desktop}{
margin-bottom:60px;
}
`,_=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,J=i.p`
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
    font-size: 16px;
    line-height: calc(22/16);
}

`,K=i.div`
margin-top:40px;
@media ${e=>e.theme.device.desktop}{
    margin-top:60px;
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
}
`,O=i.div`
margin-bottom:46px;
@media ${e=>e.theme.device.tablet}{
    margin-bottom:40px;
}
@media ${e=>e.theme.device.desktop}{
    margin-bottom:0;
}
`,Q=i.ul`
margin-top:60px;
display:flex;
flex-direction:column;
gap:14px;
list-style-type: disc;
`,X=i.li`
border-bottom: 1px solid rgba(243, 243, 243, 0.2);
padding-bottom:14px;

`,Y=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,Z=i.div`
width:335px;
border-radius:8px;
height:430px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,v=({ingridients:{description:e,instructions:o,drinkThumb:n,drink:r}})=>{const d=o.split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean);return t.jsxs(H,{children:[t.jsx(U,{children:"Recipe Preparation"}),t.jsxs(K,{children:[t.jsxs(O,{children:[t.jsxs(_,{children:[e||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."," "]}),t.jsx(Q,{children:d.map((c,p)=>t.jsx(X,{children:t.jsx(J,{children:c.trim()})},p))})]}),t.jsx(Z,{children:t.jsx(Y,{src:n||"/plug-m.png",alt:r})})]})]})};v.propTypes={ingridients:s.object,drink:s.string,drinkThumb:s.string,description:s.string,instructions:s.string};const ee=async e=>{try{const{data:o}=await I.get(`/recipes/${e}`);return o}catch(o){return o.response.data.message}},oe=()=>{const{recipeId:e}=g(),[o,n]=a.useState(null);return a.useEffect(()=>{ee(e).then(r=>n(r))},[e]),a.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsx("div",{children:o?t.jsxs(k,{children:[t.jsx(b,{ingridients:o}),t.jsx(f,{ingridients:o}),t.jsx(v,{ingridients:o})]}):t.jsx(P,{})})};export{oe as default};
