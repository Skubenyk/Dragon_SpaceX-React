//!Favorites

//*Import base
import styles from './favorites.module.scss';

//*Import components
import FavoritesItem from '../favoritesItem/FavoritesItem';

const Favorites = ({ favorites, setFavorites, rocket }) => {
  return (
    <div className={styles.containerFavorites}>
      <h1 className={styles.titleFavorites}>Обране</h1>
      <div className={styles.addFavorites}>
        {favorites && (
          <FavoritesItem
            key={rocket.id}
            rocket={rocket}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </div>
    </div>
  );
};

export default Favorites;
