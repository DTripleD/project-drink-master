import{n as i,P as s,j as t,y as x,r as d,h as v,c as w,v as $,z as j,x as y,i as z,M as I,a as k}from"./index-8fabade3.js";import{a as P,d as l}from"./plug-m-b8799421.js";const T=i.h1`
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
`,g=({title:e})=>t.jsx("div",{children:t.jsx(T,{children:e})});g.propTypes={title:s.string};const q=i.p`
  font-size: 12px;
  color: ${e=>e.theme.colors.grey};
  line-height: calc(14/12);
  margin-bottom:8px;

  @media ${e=>e.theme.device.tablet} {
    font-size: 14px;
    line-height:calc(20/14);
  }
`,R=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,F=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,L=i.div`
width:335px;
border-radius:8px;
height:400px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,S=i.div`
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
`,h=i.button`
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
`,D=()=>{const{recipeId:e}=x();d.useState(null);const[o,n]=d.useState(!1),r=v(P),a=w();return d.useEffect(()=>{a($())},[a]),d.useEffect(()=>{const c=r.some(p=>p._id===e);n(c)},[r,e]),t.jsx("div",{children:o?t.jsx(h,{type:"button",onClick:()=>a(y(e)),children:"Remove from favorites"}):t.jsx(h,{type:"button",onClick:()=>a(j(e)),children:"Add to favorite recipe"})})},u=({ingridients:{drink:e,glass:o,drinkThumb:n,description:r}})=>t.jsxs(S,{children:[t.jsxs("div",{children:[t.jsx(q,{children:o}),t.jsx(g,{title:e}),t.jsx(R,{children:r||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."}),t.jsx(D,{})]}),t.jsx(L,{children:t.jsx(F,{src:n||"/plug-m.png",alt:e})})]});u.propTypes={ingridients:s.object,drink:s.string,glass:s.string,drinkThumb:s.string,description:s.string};const m=i.p`
  font-size: 16px;
  color: rgba(243, 243, 243, 0.5);
  line-height: calc(20/16);
  margin-bottom:20px;
  @media ${e=>e.theme.device.tablet}{
    margin-bottom:24px;
  }
`,E=i.p`
font-size: 16px;
  color: ${e=>e.theme.colors.grey};
  line-height:calc(20/16);
`,A=i.img`
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
`,M=i.ul`
display:flex;
flex-wrap:wrap;
gap:20px;
@media ${e=>e.theme.device.tablet}{
  gap:22px;
}
@media ${e=>e.theme.device.desktop}{
  gap:30px;
}
`,V=i.div`
display: flex;
	justify-content: space-between;
	align-items: center;
  margin-top:8px;
`,B=i.h3`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
font-size: 18px;
line-height: calc(24 / 18);
}
`,C=i.div`
padding-bottom:40px;
@media ${e=>e.theme.device.tablet}{
  padding-bottom:50px;
}
`,G=i.li`
width:157px;
@media ${e=>e.theme.device.tablet}{
  width:220px;
}
`,b=({ingridients:e})=>{if(!e)return t.jsx(m,{children:"Something went wrong,try again..."});const o=e.ingredients;return t.jsxs(C,{children:[t.jsx(m,{children:"Ingredients"}),t.jsx(M,{children:o.map((n,r)=>t.jsxs(G,{children:[t.jsx(A,{src:n["thumb-small"]||l,srcSet:`
              ${n["thumb-medium"]||l} 480w,
              ${n.ingredientThumb||l} 748w
            `,sizes:"(min-width: 1440px) 450px, (min-width:768px) 354px, (min-width:375px) 270px, 100vw",alt:n.title,loading:"lazy"}),t.jsxs(V,{children:[t.jsx(B,{children:n.title}),t.jsx(E,{children:n.measure})]})]},r))})]})};b.propTypes={ingridients:s.object,ingredients:s.array,title:s.string,measure:s.string,ingredientThumb:s.string};const W=i.div`
padding-top:40px;
padding-bottom:80px;
@media ${e=>e.theme.device.tablet}{
    padding-top:50px;
    padding-bottom:140px;
}
`,N=i.h2`
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
`,H=i.p`
color:${e=>e.theme.colors.white};
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
width:593px;
font-size: 16px;
line-height: calc(24/16);
}
`,U=i.p`
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
@media ${e=>e.theme.device.tablet}{
    font-size: 16px;
    line-height: calc(22/16);
}

`,_=i.div`
margin-top:40px;
@media ${e=>e.theme.device.desktop}{
    margin-top:60px;
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
}
`,J=i.div`
margin-bottom:46px;
@media ${e=>e.theme.device.tablet}{
    margin-bottom:40px;
}
@media ${e=>e.theme.device.desktop}{
    margin-bottom:0;
}
`,K=i.ul`
margin-top:60px;
display:flex;
flex-direction:column;
gap:14px;
list-style-type: disc;
`,O=i.li`
border-bottom: 1px solid rgba(243, 243, 243, 0.2);
padding-bottom:14px;

`,Q=i.img`
 border-radius:8px;
  width: 100%;
  height: auto;
`,X=i.div`
width:335px;
border-radius:8px;
height:430px;
overflow:hidden;
@media ${e=>e.theme.device.tablet}{
    width:704px;
}
@media ${e=>e.theme.device.desktop}{
    width:400px;

`,f=({ingridients:{description:e,instructions:o,drinkThumb:n,drink:r}})=>{const a=o.split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean);return t.jsxs(W,{children:[t.jsx(N,{children:"Recipe Preparation"}),t.jsxs(_,{children:[t.jsxs(J,{children:[t.jsxs(H,{children:[e||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."," "]}),t.jsx(K,{children:a.map((c,p)=>t.jsx(O,{children:t.jsx(U,{children:c.trim()})},p))})]}),t.jsx(X,{children:t.jsx(Q,{src:n||"/plug-m.png",alt:r})})]})]})};f.propTypes={ingridients:s.object,drink:s.string,drinkThumb:s.string,description:s.string,instructions:s.string};const Y=async e=>{try{const{data:o}=await z.get(`/recipes/${e}`);return o}catch(o){return o.response.data.message}},te=()=>{const{recipeId:e}=x(),[o,n]=d.useState(null);return d.useEffect(()=>{Y(e).then(r=>n(r))},[e]),d.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsx("div",{children:o?t.jsxs(I,{children:[t.jsx(u,{ingridients:o}),t.jsx(b,{ingridients:o}),t.jsx(f,{ingridients:o})]}):t.jsx(k,{})})};export{te as default};
