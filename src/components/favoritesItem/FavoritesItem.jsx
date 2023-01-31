//!Favorites item

//*Import base
import styles from './favoritesItem.module.scss';
import { Link } from 'react-router-dom';

const FavoritesItem = ({ favorite, onRemove }) => {
  const removeHandler = (e, id) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <div key={favorite.id} className={styles.containerFavoritesItem}>
      <img
        className={styles.imageListDragon}
        src={favorite.image}
        alt={favorite.name}
      />
      <h2 className={styles.titleNameListDragon}>
        <Link to='/'>{favorite.name}</Link>
      </h2>
      <button
        onClick={(e) => removeHandler(e, favorite.id)}
        className={styles.buttonFavoritesItem}
        type='button'
      >
        X
      </button>
    </div>
  );
};

export default FavoritesItem;
