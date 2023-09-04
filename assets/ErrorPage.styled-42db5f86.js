import{n as r}from"./index-72401d94.js";const t="/project-drink-master/assets/porto-glass_s@2x-460778b7.jpg",a="/project-drink-master/assets/porto-glass_s@1x-011bfb22.jpg",i="/project-drink-master/assets/porto-glass_l@2x-e4434549.jpg",s="/project-drink-master/assets/porto-glass_l@1x-ed899528.jpg",o="/project-drink-master/assets/porto-glass_l@2x-e4434549.jpg",n="/project-drink-master/assets/porto-glass_l@1x-ed899528.jpg",g=r.div`
  background-image: linear-gradient(
      176.63deg,
      ${e=>e.theme.colors.black} 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg,
      ${e=>e.theme.colors.black} 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg,
      ${e=>e.theme.colors.black} -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg,
      ${e=>e.theme.colors.black} 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${a});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${t});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${s});
    width: 465px;
    height: 517px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${i});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${n});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${o});
    }
  }

  width: 375px;
  height: 476px;
  background-position: center;

  background-size: cover;
  position: relative;
  background-repeat: no-repeat;

  margin-left: auto;
  margin-right: auto;
  margin-top: 83px;
  margin-bottom: 140px;
`,l=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 301px;
  justify-content: space-between;
`,d=r.h2`
  font-weight: 600;
  font-size: 120px;
  line-height: 123px;

  color: rgba(243, 243, 243, 0.1);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 150px;
  }

  @media (min-width: 1440px) {
    font-size: 150px;
  }
`;export{g as E,l as T,d as a};
