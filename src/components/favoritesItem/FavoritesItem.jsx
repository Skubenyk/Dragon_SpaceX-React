//!Favorites item

//*Import base
import styles from './favoritesItem.module.scss';
import { Link } from 'react-router-dom';

const FavoritesItem = ({ favorite }) => {
  return (
    <div key={favorite.id} className={styles.containerFavoritesItem}>
      <img
        className={styles.imageListDragon}
        src={favorite.flickr_images}
        alt={favorite.name}
      />
      <h2 className={styles.titleNameListDragon}>
        <Link to='/'>{favorite.name}</Link>
      </h2>
    </div>
  );
};

export default FavoritesItem;
