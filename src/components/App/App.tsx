import React from 'react';
import styleApp from './App.module.scss';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import {IngredientsContext} from '../../context/ingredients';

function App() {

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const [error, serError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {throw new Error ('Ошибка!')}
        return res.json()
      })
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data.data);
        },
        (error) => {
          setIsLoaded(true);
          serError(error);
        })
  }, [])

  if (error) {
    return (
      <div className={styleApp.container}>
        <div className={styleApp.error}>Приносим свои извенения - произошла какая-то ошибка, перезагрузите страницу или зайдите позже.</div>
      </div>
    );
  } else {
    return (
      <>
        <IngredientsContext.Provider value={data}>
          <header className={styleApp.header}>
            <div className={styleApp.containerHeader}>
              <AppHeader />
            </div>
          </header>
          
          <section className={styleApp.main}>
            <div className={styleApp.container}>
              {!isLoaded ? <div className={styleApp.loaded}>Загрузка...</div> : <> <BurgerIngredients /> <BurgerConstructor /> </>}
            </div>
          </section>
        </IngredientsContext.Provider>
      </>
    );
  }
}

export default App;
