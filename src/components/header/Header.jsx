//*Header

//*Import base
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

//*Import image
import logo from './../../assets/logo/SpaceX_Crew-1_logo.svg';

//*Import components
import Authorization from './../authorization/Authorization';
import Registration from './../registration/Registration';
import Burger from './../burger/Burger';

const Header = () => {
  //*Hook useState for active
  const [modalActive, setmodalActive] = useState(false);
  const [authorizationActive, setauthorizationActive] = useState(false);
  const [burgerShow, setburgerShow] = useState(false);
  return (
    <>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {/* Logo */}
          <div className={styles.headerLogo}>
            <Link className={styles.logo} to='/'>
              <img className={styles.logoImage} src={logo} alt={'logo'} />
            </Link>
          </div>
          <div className={styles.headerBlock}>
            <div
              //*Сlosing burger menu with a click anywhere
              onClick={() => setburgerShow(false)}
              //*Сonditions for switching styles in mode active
              className={
                burgerShow
                  ? classNames(styles.headerNavigation, styles.show)
                  : styles.headerNavigation
              }
            >
              {/* Navigation */}
              <nav className={styles.navigation} data-testid='navigation'>
                <ul className={styles.navigationList}>
                  <li className={styles.navigationItem}>
                    <Link className={styles.navigationLink} to='/'>
                      ГOЛOВНА
                    </Link>
                  </li>
                  <li className={styles.navigationItem}>
                    <Link
                      className={styles.navigationLink}
                      to='/favorites'
                      data-testid='favorites-link'
                    >
                      ОБРАНЕ
                    </Link>
                  </li>
                  <li className={styles.navigationItem}>
                    <Link
                      className={styles.navigationLink}
                      to='/profile'
                      data-testid='home-link'
                    >
                      ПРОФІЛЬ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Buttons */}
            <div className={styles.headerOther}>
              <button
                //*Open authorization form
                onClick={() => setauthorizationActive(true)}
                className={classNames(styles.button, styles.buttonTransparent)}
                type='button'
              >
                <span>ВХІД</span>
              </button>
              <button
                //*Open registration form
                onClick={() => setmodalActive(true)}
                className={styles.button}
                type='button'
              >
                <span>РЕЄСТРАЦІЯ</span>
              </button>
            </div>
            {/* Burger menu */}
            <Burger active={burgerShow} setActive={setburgerShow} />
          </div>
        </div>
      </header>
      {/* Authorization form */}
      <Authorization
        active={authorizationActive}
        setActive={setauthorizationActive}
      />
      {/* Registration form */}
      <Registration active={modalActive} setActive={setmodalActive} />
    </>
  );
};

export default Header;
