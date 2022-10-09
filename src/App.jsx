//!App

//*Import base
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React, { Suspense } from 'react';
import styles from './app.module.scss';

//*Import Axios to send data to the server
import axios from 'axios';

//*Import components
import ListDragon from './components/listDragon/ListDragon';
import Favorites from './components/favorites/Favorites';
import Preloader from './components/preloader/Preloader';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//*Import components lazy
const Dragon = React.lazy(() => import('./components/dragon/Dragon'));

const App = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  async function fetchRockets() {
    setLoading(true);
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/dragons');
      setRockets(response.data);
      setFavorites(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRockets();
  }, []);

  const addRockets = (name, flickr_images) => {
    if ((name, flickr_images)) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        name: name,
        image: flickr_images,
      };
      setFavorites([...favorites, newItem]);
    }
  };

  return (
    <>
      <Header />
      {error && <div className={styles.error}>Щось пішло не так!!!</div>}
      {loading && <Preloader />}
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route
            path='/favorites'
            element={<Favorites key={favorites.id} favorites={favorites} />}
          />
          <Route
            path='/'
            element={rockets.map((rocket) => (
              <ListDragon rocket={rocket} key={rocket.id} image={rocket} />
            ))}
          />
          <Route
            path='/5e9d058759b1ff74a7ad5f8f'
            element={
              rockets.map((rocket) => (
                <Dragon
                  key={rocket.id}
                  rocket={rocket}
                  image={rocket}
                  addRockets={addRockets}
                />
              ))[0]
            }
          />
          <Route
            path='/5e9d058859b1ffd8e2ad5f90'
            element={
              rockets.map((rocket) => (
                <Dragon
                  key={rocket.id}
                  rocket={rocket}
                  image={rocket}
                  addRockets={addRockets}
                />
              ))[1]
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
