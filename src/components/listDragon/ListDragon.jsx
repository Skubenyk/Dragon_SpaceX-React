//!List Dragon

//*Import base
import styles from './listDragon.module.scss';
import { Link } from 'react-router-dom';

const ListDragon = ({ rocket }) => {
  return (
    <div className={styles.containerListDragon}>
      <img
        className={styles.imageListDragon}
        src={rocket.flickr_images}
        alt={rocket.name}
      />
      <Link to={rocket.id}>
        <h1 className={styles.titleNameListDragon}>{rocket.name}</h1>
      </Link>
    </div>
  );
};

export default ListDragon;
