//!Dragon

//*Import base
import styles from './dragon.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

//*Import slider Swiper
import Slider from '../slider/Slider';

const Dragon = (props) => {
  const { rocket, image, addRockets } = props;
  const [details, setDetails] = useState(true);

  const handleSubmit = () => {
    addRockets(rocket.name, rocket.flickr_images);
  };

  return (
    <div className={styles.containerDragon}>
      <img
        className={styles.imageDragon}
        src={rocket.flickr_images}
        alt={rocket.name}
      />
      <div className={styles.descriptionDragon}>
        <h2 className={styles.titleName}>{rocket.name}</h2>
        <h3 className={styles.titleDescription}>Опис</h3>
        <div className={styles.descriptionText}>{rocket.description}</div>
        <b>Вікіпедія: </b>
        <a href={rocket.wikipedia}>{rocket.wikipedia}</a>
        <h3 className={styles.titlePar}>Додаткові параметри:</h3>
        <div className={styles.dopParameter}>
          висота - {rocket.height_w_trunk.meters} м.
        </div>
        <div className={styles.dopParameter}>
          маса - {rocket.dry_mass_kg} кг.
        </div>
        <div className={styles.dopParameter}>рік - {rocket.first_flight}</div>
        <button
          onClick={() => setDetails((prev) => !prev)}
          className={styles.buttonDetails}
          type='button'
        >
          Деталі
        </button>
        <br />
        <div
          className={
            details ? styles.slider : classNames(styles.slider, styles.show)
          }
        >
          <Slider image={image} />
        </div>
        <button onClick={handleSubmit} className={styles.buttonFavorites}>
          Додати в обране
        </button>
      </div>
    </div>
  );
};

export default Dragon;
