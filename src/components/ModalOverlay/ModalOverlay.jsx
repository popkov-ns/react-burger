import React from 'react';
import styleModalOverlay from './ModalOverlay.module.scss';

import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const ModalOverlay = ({ isOpen, setActive, title = '', children }) => {

    return (
        <>
            {isOpen &&
                <div className={styleModalOverlay.overlay} onClick={() => setActive(false)}>
                    <div className={styleModalOverlay.wrapp} onClick={e => e.stopPropagation()}>
                        <div className={styleModalOverlay.header}>
                            {title}
                            <CloseIcon type='primary' onClick={() => setActive(false)} />
                        </div>
                        {children}
                    </div>
                </div>
            }
            
        </>

    )
}

export default ModalOverlay;