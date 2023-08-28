import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { DrinkCard } from "../DrinkCard/DrinkCard";
import { Container } from "../Container/Container";
import { Cardwrapper, Section, SectionTitle } from "./PreviewDrinks.styled";

export const PreviewDrinks = ({ title, data = [] }) => {
  const linkTransform = encodeURIComponent(title);
  return (
    <Section>
      <Container>
        <Link to={`/main/drinks/${linkTransform}`} state={{ from: `${title}` }}>
          <SectionTitle>{title}</SectionTitle>
        </Link>
        <Cardwrapper>
          <Swiper
            loop={true} // infinite loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((cocktail) => (
              <SwiperSlide key={cocktail._id}>
                <DrinkCard cocktail={cocktail} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Cardwrapper>
      </Container>
    </Section>
  );
};

PreviewDrinks.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};
