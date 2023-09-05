import{n as i,P as s,j as t,x as h,r as d,h as f,c as v,t as w,y as $,w as j,i as y,M as z,a as I}from"./index-0c6649d0.js";import{a as k}from"./favorite-selector-94e92a4d.js";const P=i.h1`
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
`,x=({title:e})=>t.jsx("div",{children:t.jsx(P,{children:e})});x.propTypes={title:s.string};const T=i.p`
  font-size: 12px;
  color: ${e=>e.theme.colors.grey};
  line-height: calc(14/12);
  margin-bottom:8px;

  @media ${e=>e.theme.device.tablet} {
    font-size: 14px;
    line-height:calc(20/14);
  }
`,q=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,R=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,F=i.div`
width:335px;
border-radius:8px;
height:400px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,L=i.div`
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
`,l=i.button`
color:${e=>e.theme.colors.black};
background-color:${e=>e.theme.colors.white};
border-radius:42px;
padding: 14px 40px;
margin-top:40px;
margin-bottom:80px;
font-size: 14px;
font-weight: 600;
line-height: calc(18/14);
transition: 0.3s ease;
&:hover,
&focus,
&:active {
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};
  border-color:${e=>e.theme.colors.white};
}
@media ${e=>e.theme.device.tablet}{
  fonst-size: 16px;
  line-height: calc(18/16);
}
`,S=()=>{const{recipeId:e}=h();d.useState(null);const[o,n]=d.useState(!1),r=f(k),a=v();return d.useEffect(()=>{a(w())},[a]),d.useEffect(()=>{const c=r.some(p=>p._id===e);n(c)},[r,e]),t.jsx("div",{children:o?t.jsx(l,{type:"button",onClick:()=>a(j(e)),children:"Remove from favorites"}):t.jsx(l,{type:"button",onClick:()=>a($(e)),children:"Add to favorite recipe"})})},g=({ingridients:{drink:e,glass:o,drinkThumb:n,description:r}})=>t.jsxs(L,{children:[t.jsxs("div",{children:[t.jsx(T,{children:o}),t.jsx(x,{title:e}),t.jsx(q,{children:r||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."}),t.jsx(S,{})]}),t.jsx(F,{children:t.jsx(R,{src:n||"/plug-m.png",alt:e})})]});g.propTypes={ingridients:s.object,drink:s.string,glass:s.string,drinkThumb:s.string,description:s.string};const m=i.p`
  font-size: 16px;
  color: rgba(243, 243, 243, 0.5);
  line-height: calc(20/16);
  margin-bottom:20px;
  @media ${e=>e.theme.device.tablet}{
    margin-bottom:24px;
  }
`,D=i.p`
font-size: 16px;
  color: ${e=>e.theme.colors.grey};
  line-height:calc(20/16);
`,E=i.img`
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
`,A=i.ul`
display:flex;
flex-wrap:wrap;
gap:20px;
@media ${e=>e.theme.device.tablet}{
  gap:22px;
}
@media ${e=>e.theme.device.desktop}{
  gap:30px;
}
`,M=i.div`
display: flex;
	justify-content: space-between;
	align-items: center;
  margin-top:8px;
`,V=i.h3`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
font-size: 18px;
line-height: calc(24 / 18);
}
`,B=i.div`
padding-bottom:40px;
@media ${e=>e.theme.device.tablet}{
  padding-bottom:50px;
}
`,C=i.li`
width:157px;
@media ${e=>e.theme.device.tablet}{
  width:220px;
}
`,u=({ingridients:e})=>{if(!e)return t.jsx(m,{children:"Something went wrong,try again..."});const o=e.ingredients;return t.jsxs(B,{children:[t.jsx(m,{children:"Ingredients"}),t.jsx(A,{children:o.map((n,r)=>t.jsxs(C,{children:[t.jsx(E,{src:n["thumb-small"]||"/plug-m.png",srcSet:`
              ${n["thumb-medium"]||"/plug-m.png"} 480w,
              ${n.ingredientThumb||"/plug-m.png"} 748w
            `,sizes:"(min-width: 1440px) 450px, (min-width:768px) 354px, (min-width:375px) 270px, 100vw",alt:n.title,loading:"lazy"}),t.jsxs(M,{children:[t.jsx(V,{children:n.title}),t.jsx(D,{children:n.measure})]})]},r))})]})};u.propTypes={ingridients:s.object,ingredients:s.array,title:s.string,measure:s.string,ingredientThumb:s.string};const G=i.div`
padding-top:40px;
padding-bottom:80px;
@media ${e=>e.theme.device.tablet}{
    padding-top:50px;
    padding-bottom:140px;
}
`,W=i.h2`
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
`,N=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,H=i.p`
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
    font-size: 16px;
    line-height: calc(22/16);
}

`,U=i.div`
margin-top:40px;
@media ${e=>e.theme.device.desktop}{
    margin-top:60px;
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
}
`,_=i.div`
margin-bottom:46px;
@media ${e=>e.theme.device.tablet}{
    margin-bottom:40px;
}
@media ${e=>e.theme.device.desktop}{
    margin-bottom:0;
}
`,J=i.ul`
margin-top:60px;
display:flex;
flex-direction:column;
gap:14px;
list-style-type: disc;
`,K=i.li`
border-bottom: 1px solid rgba(243, 243, 243, 0.2);
padding-bottom:14px;

`,O=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,Q=i.div`
width:335px;
border-radius:8px;
height:430px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,b=({ingridients:{description:e,instructions:o,drinkThumb:n,drink:r}})=>{const a=o.split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean);return t.jsxs(G,{children:[t.jsx(W,{children:"Recipe Preparation"}),t.jsxs(U,{children:[t.jsxs(_,{children:[t.jsxs(N,{children:[e||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."," "]}),t.jsx(J,{children:a.map((c,p)=>t.jsx(K,{children:t.jsx(H,{children:c.trim()})},p))})]}),t.jsx(Q,{children:t.jsx(O,{src:n||"/plug-m.png",alt:r})})]})]})};b.propTypes={ingridients:s.object,drink:s.string,drinkThumb:s.string,description:s.string,instructions:s.string};const X=async e=>{try{const{data:o}=await y.get(`/recipes/${e}`);return o}catch(o){return o.response.data.message}},ee=()=>{const{recipeId:e}=h(),[o,n]=d.useState(null);return d.useEffect(()=>{X(e).then(r=>n(r))},[e]),d.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsx("div",{children:o?t.jsxs(z,{children:[t.jsx(g,{ingridients:o}),t.jsx(u,{ingridients:o}),t.jsx(b,{ingridients:o})]}):t.jsx(I,{})})};export{ee as default};
