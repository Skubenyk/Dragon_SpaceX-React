//*Swiper

// *Import base
import styles from './slider.module.scss';

//*Import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper';

//*Import styles for swiper
import 'swiper/scss/mousewheel';
import 'swiper/scss/keyboard';
import 'swiper/scss';

const Slider = ({ image }) => {
  return (
    <>
      {/* Initialization of the Swiper */}
      <Swiper
        modules={[Keyboard, Mousewheel]}
        slidesPerView={3}
        keyboard={{ enablet: true }}
        mousewheel={{ sensitivity: 5 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
      >
        <div className={styles.imageSlider}>
          {/* Slide 1 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={image.flickr_images[0]} alt={image.name} />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={image.flickr_images[1]} alt={image.name} />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={image.flickr_images[2]} alt={image.name} />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
