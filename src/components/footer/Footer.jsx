//!Footer

//*Import base
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.footerTitle}>
        <a href='https://www.linkedin.com/in/yevhenii-skubenyk-a8969a125'>
          DRAGON SpaceX
        </a>
      </h1>
    </div>
  );
};

export default Footer;
