import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    // <ThemeProvider theme={theme}>
    <LoaderWrapper>
      <div className="loading-animation">
        <div id="container">
          <div className="white"></div>
          <div id="beaker">
            <div className="beer-foam">
              <div className="foam-1"></div>
              <div className="foam-2"></div>
              <div className="foam-3"></div>
              <div className="foam-4"></div>
              <div className="foam-5"></div>
              <div className="foam-6"></div>
            </div>
            <div id="liquid">
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
              <div className="bubble bubble4"></div>
              <div className="bubble bubble5"></div>
            </div>
          </div>
        </div>
      </div>
    </LoaderWrapper>
    // </ThemeProvider>
  );
};

export default Loader;
