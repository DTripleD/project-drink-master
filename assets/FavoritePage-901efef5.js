import{n,P as p,j as e,h as A,a as y,b as J,c as j,r as c,v as k,M as z,w as f,x as T}from"./index-466e7060.js";import{M as K}from"./MainPageTitle-510de147.js";import{s as h,a as v}from"./favorite-selector-94e92a4d.js";import{S as F,D as L}from"./DeleteButton-9aa23800.js";import{S as M,M as Z,a as B}from"./RecipesList.styled-866f4fb7.js";import{P as H}from"./Pagination-68c9e3a5.js";import{E as R}from"./ErrorPage.styled-23b5090e.js";import"./assertThisInitialized-dcfe99bd.js";import"./white-bg@2x-60be6de5.js";const G=n.div`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    max-width: 342px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,O=n.img`
  display: block;
  transition: transform 600ms ease, box-shadow 400ms ease;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );

  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &:hover,
  &:focus {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,X=n.div`
  /* display: flex;
  flex-direction: column;
 
  justify-content: space-between; */
  /* height: 124px; */
  gap: 18px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column;
    justify-content: space-between; */
    gap: 24px;
    /* height: 252px; */
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    /* height: 252px; */
  }
`,P=n.h3`
  /* margin-bottom: 4px; */
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: ${i=>i.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 24px;

    line-height: 32px;
  }
`,S=n.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: ${i=>i.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`,N=n.p`
  display: inline-block;
  height: 45px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  color: ${i=>i.theme.colors.white};

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    display: inline-block;

    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`,Y=n.p`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAYAAAAbWs+BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8BSURBVHgB7d3bchrZFcbxhuaMTuiIZMvx5FAzl7lL7uJ3yAPkGfMGM3fJVXIzVTOVzFgj2RI62QgJaLppyF6gjdoYFBCw1Hj+vyoZkJBKyP2xd6996IQzpPz6z6/DdvhNMul83XUSGw6AKXUqYTd5HrqFb6tH31ajX0nYO69fv8m1nNabsBP+yQEwF91O95/F1OW3R0dHnjx25R8JW6PT+Fu32/3GATA3iUTiZdDN/36nlPm+Wq22k/JJadnMTdkBsADJcr2980buuaZ12/A7/l8dAAsjLd1q6fCXZCNsvHEALFwn9L9OmrLJngNg4boJ9xs5h+PcDVCQMMNsSQeAGgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKEo5wAi7O5vZzc31jOf5nZYfhJ7ntZvNVsfzWh0HT0bg8JlMJp2UsMn9XC6TlI/1tWLafr3RbIVe0wubnhcGQUgIp0DgnqBYzLvFQj6VTqfNwZh1U6l+z7zd7jiB+ccejLe3jbazhMxrc+19eT1p+wLvFfJZVz4cZ733uGs0TUvYaDRNK2heu2kJja6DzxC4CSWTycT21kamVFpLJ4xRz0mnXfkYHIxyINZM6K6vqy3f95fmANzc3MjKrYTtp59O6vLas9lssljMuflcxi2YQEb/BnL/IYR90hUNgra0fm2v1erU683QAYGbhHSvdrZLmXFBazTlYEr0ApU3LZ59ntxKV0w+Pny48S8uP7ScmFtdLZiW2+39/jc3d4HcSmvVNK+x2XwITSbjJiWE+VzOzeXlNvtJCG1XVH6ePJZu6PHxacP5lSNwj5B39hcHeznzzj74O0mrdW3C0zLv2uZrefmc1/TDaJjkYMzn8u72dimbTqd6B6GEdnVtNXVyctaIc2u3sb46OFer1W6Dcc/z/bDj+41OtNtsutfJbCbtFooFaQmT5lxw0OLZEP/aEbgxpHBw+HK/YA8UGzTTUgX2/MR0mboSKDmXi35v/2C869zU7oL1tZW0DV46lUweHu4X4ho6ec3FYr9FuqnVA99vT/U7SvFEPuR1y2PbFc2Yv0/QbtGldBiHG0kOlGjY5Hzk7dG7+tXVRz9aDAjaYa86l8tnxv4d5eA7eXfaqNe9XktgQ5fJZGL3jr+1VcrY+9Xq+NZtUrYrelOrBY0GlUxB4EbY29vORsN23GuRPn+3l6KA3A5X8Ya1292u6yYHz7Ghk2A7MVLI97vOUiyJnq9hfgjckNLGWtqOOcmBJ2EbV+L2W36kiJAaGR4J1SsTLikgyGPpmsqthM4MLmecmJDXbd9kTEse++LOsiJwEf0B335JXFQqV95j40l+8HAels1m3OGvD4et3zU9aci5nzze2FjNSKHBiYFVc65p78tYmoOFIHARMuAbraYdviwX9vd3c+POt1qtYHBekkl/+pxRYet3TcNO5fyqaZ+3u7uVc56ZhN6OoT2lWILJEbgI27rZbp+Q7qWcb9mpTlG+H3Tkueb2kxZhXNhsaymDwPV6o92bxWEC/tzncqXSw2u7vo7/WOEyY1jgnkzXsq2blP9rtVr78OVBwZbzZTJvqbRhBrA/tj5+rA3Gnv7z3+P6cLdTxu7Ghc06eXfedGJAutH2nLXR9Nq0botFC3dvdaU4ePO5u2u0pev3088nd2dnl54955Lg7e1u5cumimmfO+oc7/ziotXy/c64sMVJdN7kzc3sQwF4HC3cvcx90aM3+Tgy+13G0ZpeM1xbW0ttb/W7nDIx+bGfJWF9/77SlOGAuE/ijc6bvLm5W8rJ1suEwN1Lp9xea2/H1qIkQDLoLd3MjfX19CQHpnyPE3PRbrQZmKYyqYAu5T0757EdjA+KhGgZJiBPam3tYd4kxRIdtHBzJiV2143XDJJRTGE0YYslcq5ZLBRSxYIzs3bY7rZa7XCZliNpInBTkPJ9Pp9NjlvbVShkk68OD4rOkukvpZnfeCBLccYjcPfszH/js252dPGprGw2gRt5MJlvZQmKkUxwpjIOgbtnukChCVyqECmTj1rlLTMypNgwqpWTz1Wrt75M2ZLHUvm7urzxnZjJ5zNJ+zvKzJJGfbapXNGfJ6/59KwSizHGOCJw90zLFcpaMNdNJGSV8srKSmrN3EZXMds1cbJnx7ifUzm/askQgwRTVhHIwSifc2KkUNwddB+lWDLLYLcMnG9vP8w/PT298hg8H4/A3YtO2LUruS3PC8Lb27vgY7XWjo6rSUsnu1YNFwhOTyvN37x6UZQuqrzzmyM6jM5OeU7RmSXzmDd5sL+bH6wyuK62WNbzOAJ3T7qD0oJFWzSZ6nR5WfXHHUTlvZ3ewVar1f3Ts4tBK2Z6Vd2zykVDFrHKz9ve2syZVrERh+3kNkvrg6GAWReZ7u1tD6awyZ4tMlbp4FGc3UZId9Hel3f/4+Oz5riwSfnfvrO3Wv5nQZIVzhcX/bEt6aa+eFHOx2GVt+k2D9b6zdIa9eaWbqwOftaXND65SAQuolq9CexKgRVzPvdYQKJzEOuN0Qeu6YIG0s2S+zIPs1zezjvPaF6LTGX4w66ekLDJHi0OJkLgIqQraLqGntyXVulgf2fsNgjFlYeW4rGuonSzZFxK7kshJTrxWds8FpnKOeB+eW8wRH52dtGkSDI5AjdEtn2zcyXl/OTViL1HTPExYRdsTjIHUYoo0VXeo9bWLZoEZR6LTKObK0nrzeZA06FoMsLl1bWXy2cK2Ux/M9Ovvjr8ZGs72frNPrfR+P/bmUvLKTt3ffX6sFdE2dosZaS62emEc20ZRlVMreiOXGG73ZXupTOlQm97937YKJI8DYEboRcQEzBZ6S2hk/Ov37w6KN7c1AIpDkTXzk3aNetNfDZFlL29rVyviHKwM/fzuV+OK3Iu9dnvIy3y2v0OyGLWFlbmXlIkeRoCN4YNnSnpZ6QbKCGxuyen3MT9FnpBOE3XTIoorvlmu65unuR3GVd1XDWD+OO2aZ9WfybJOUWSJyJwj5DQySwR04p1orsn26/ncmn3d799tSIHoTyWmSWyReW79+fNcROcpRsm+/Hb7dOloHJ5Ofu2dGE4fnZ+dJGpzARxpiC7JpfLm1kbWIoksyFwE5BV38PbltuvyTmNXDEn+vxyeTf32HbmZ5Vzz85EkUKGCW5iUTNRhheZTjv2Ziq1eRs288bgUSSZDYGbgg1ePp+XuZJJMx4l14iTRQKDAPpmEFy2z0uZTpzvOyMDN1xEWeRMlFkWmcpMkmiR5PpDlT1PZkTgnsBeuun6g/PkA1CKKDLmJ/M27UyUt29P5rrh0Cw7ckVnklAkmR/G4Z6RjPlFZ6K8fFmea+VyZeWhMjnNjlzSDY3OJKFIMj8E7plJEcUOtM97Jkpp4yE0k+7IJa2iTMq2j0/GXMgET0PgYkAG2uc9EyU6b7L68XaiAerhy3RJkYSwzReBiwFbRLETp2UmyqwX+YjOm7y9m6x12zHnbdFpWxRJ5o/AxYQUUWT8Tu7PupznKfMmh4skTNtaDAIXIzJYPo/lPNNeyVS2lKBIooPAxcw8iijTXMlUWsPdne3eHifSpaVIslgELoakiCIXA5H70xZRpllkOlwkubqqtgjbYhG4GJIiilwMxBZR5Pxq0iKKnTcZht2uGed7tHWTy2pRJNFF4GIqWkQRkxRRovMm7+qN9mOzViTEDxOovTZFEh0ELsakiGKnVEkRRbZ8eOz5+XxuMIn6sXmTw0WSSuVyqhUEeDoCF3MyaTi65cNjRRRZfS6XP5bu4bhzMSmSHOzvUiR5Jm5x/cUbB7HmeV5YXCmkZFtocy7ndsypXbP5+V4qQRB2ZZFrozF6FboUSWRZkL26T+X8yjPPZbmNIlq4JWCLKHb6V//8K+9O+3OGiyRc8VQfgVsSUkQxLdKgiCKLXKeZiRItktTrFEmeC4FbIqOKKOP2zYySsblokeT8giLJcyFwS0aKKHJJLLkvRRTTcj06KN6bSbK72Su0UCR5fgRuCV1df/AnmYkiYbMXFJHHssKcsD0vAreEJi2ilMs7nxRJZIW5g2dF4JaUFFHkklj28cH+3iczUSSEdokORZL4IHBLrHdJrMuHS2LZIop0MaNFkven5xRJYoJdu5acFFEy6XTvSqtSRNk33ciVlX730hZJ5rkTGGZDC/cFkN2hbRFlNXJdcook8UPgvhDRIoqgSBJPBO4LIUWURrM1CBhFkngicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIgIHKCJwgCICBygicIAiAgcoInCAIi5XFSNyieCtrVLGeaJCPjf4/9zf3805M7i+rrZ83+fKO3NG4GJks7SeXl8rpp05mPXnBEHQubryuSDInBG4GKnd3gaFQs5NJBMJ55mk3P41wWu128DB3BG4GJFLCP/89l3DwReLogmgiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoIjAAYoIHKCIwAGKCBygiMABiggcoCiZcLpVB4CCTiXZ6Tg/OgAWLuw6laSbcn9wACxc6La/c++q76rFtRc5J+G8dAAsRrf9j+vjf33fK5oU3MJ35qbiAFiATqXgfpCMOa78U60etXdKf/g+6AQpWjpgjkzLVnCv/350dOTJw8Tw11+//uNGM0z9pZtIls3DsgNgKlL573bDH/yg82O18u+j6Nf+B0Xs8A0FcBQHAAAAAElFTkSuQmCC",w=({recipe:i,removeCocktail:o})=>e.jsxs(G,{children:[e.jsx(O,{src:i.drinkThumb?i.drinkThumb:E,alt:i.drink}),e.jsxs(X,{children:[e.jsx(P,{children:i.drink}),e.jsx(S,{children:i.glass})]}),e.jsx(N,{children:i.description||"Good cocktail"}),e.jsxs(Y,{children:[e.jsx(F,{id:i._id}),e.jsx(L,{id:i._id,text:"Delete",ariaLabel:"button for click",onClick:()=>o(i._id),type:"button"})]})]});w.propTypes={recipe:p.oneOfType([p.object,p.array])};const V=({currentItems:i,handleDeleteFavorite:o})=>{const s=A(h);return e.jsx(M,{children:s&&e.jsx(y,{})||e.jsx(Z,{children:i.map(a=>e.jsx("li",{children:e.jsx(w,{recipe:a,page:"favorite",cocktail:a,removeCocktail:o})},a._id))})})};n.section`
  padding-top: 80px;
  /* padding-bottom: 80px; */
  @media (min-width: 768px) {
    padding-top: 140px;
    /* padding-bottom: 136px; */
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
    padding-top: 160px;
    /* padding-bottom: 140px; */
  }
`;const te=()=>{J();const i=j(),o=A(v);A(h);const[s,a]=c.useState(()=>window.innerWidth>=1440?9:8);c.useEffect(()=>{const t=()=>{window.innerWidth>=1440?a(9):a(8)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const[r,m]=c.useState(1),I=r*s,C=I-s,g=o.slice(C,I),[l,x]=c.useState(1);c.useEffect(()=>{i(k()),x(Math.ceil(o.length/s))},[i]),c.useEffect(()=>{g.length===0&&r!==1&&m(t=>t-1)},[l,r]);const u=t=>{f.success("Deleting..."),i(T(t)).unwrap().then(d=>{x(Math.ceil(d.totalHits/s))}).then(()=>f.success("Delete success!"))},b=(t,d)=>{m(d)};return e.jsx(e.Fragment,{children:e.jsx(z,{children:e.jsxs(e.Fragment,{children:[e.jsx(K,{title:"Favorites"}),(g==null?void 0:g.length)!==0?e.jsx(V,{handleDeleteFavorite:u,currentItems:g}):e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(B,{children:"You havent added any favorite cocktails yet"})]}),l>1&&e.jsx(H,{totalPages:l,page:r,changeNum:b})]})})})};export{te as default};
