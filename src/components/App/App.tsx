import React from 'react';
import styleApp from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <>
      <header className={styleApp.header}>
        <div className={styleApp.containerHeader}>
          <AppHeader />
        </div>
      </header>
      
      <section className={styleApp.main}>
        <div className={styleApp.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </section>
    </>
  );
}

export default App;
