import React from 'react';
import ReactDOM from 'react-dom';
import styleModalOverlay from './ModalOverlay.module.scss';

import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

const ModalOverlay = ({ isOpen, setActive, children }) => {

    React.useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen === true) {
                setActive(false);
            }
        })

        return () => {
            window.removeEventListener('keydown', () => {});
        }
    })

    return ReactDOM.createPortal (
        <>
            {isOpen &&
                <div className={styleModalOverlay.overlay} onClick={() => setActive(false)}>
                    <div className={styleModalOverlay.wrapp} onClick={e => e.stopPropagation()}>
                        <div className={styleModalOverlay.header}>
                            <CloseIcon type='primary' onClick={() => setActive(false)} />
                        </div>
                        {children}
                    </div>
                </div>
            }
            
        </>,
        modalRoot
    )
}

export default ModalOverlay;