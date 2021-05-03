import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styleAppHeader from './AppHeader.module.scss';

function AppHeader() {
    return (
        <>
            <a className={styleAppHeader.logo} href='#1'>
                <Logo />
            </a>

            <nav className={styleAppHeader.menu}>
                <ul>
                    <li>
                        <a href='#2' className={`${styleAppHeader.btn} ${styleAppHeader.active} mr-1`}>
                            <BurgerIcon type="primary" />
                            <span>Конструктор</span>
                        </a>
                    </li> 
                    <li>
                        <a href='#3' className={styleAppHeader.btn}>
                            <ListIcon type="primary" />
                            <span>Лента заказов</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <a href='#4' className={styleAppHeader.btn}>
                <ProfileIcon type="primary" />
                <span>Личный кабинет</span>
            </a>
        </>
    )
}

export default AppHeader;
