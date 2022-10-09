//!Favorites

//*Import base
import styles from './favorites.module.scss';

//*Import components
import FavoritesItem from '../favoritesItem/FavoritesItem';

const Favorites = ({ favorites }) => {
  return (
    <div className={styles.containerFavorites} key={favorites.id}>
      <h1 className={styles.titleFavorites}>Обране</h1>
      <div className={styles.addFavorites}>
        {favorites &&
          favorites.map((favorite) => (
            <FavoritesItem key={favorite.id} favorite={favorite} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
