//!Favorites item

//*Import base
import styles from './favoritesItem.module.scss';
import { Link } from 'react-router-dom';

const FavoritesItem = ({ favorites, setFavorites, rocket }) => {
  return (
    <div key={rocket.id} className={styles.containerFavoritesItem}>
      <img
        className={styles.imageListDragon}
        src={rocket.flickr_images}
        alt={rocket.name}
      />
      <h2 className={styles.titleNameListDragon}>
        <Link to={rocket.id}>{rocket.name}</Link>
      </h2>
      <button
        onClick={() => setFavorites(!favorites)}
        className={styles.buttonFavoritesItem}
        type='button'
      >
        X
      </button>
    </div>
  );
};

export default FavoritesItem;
