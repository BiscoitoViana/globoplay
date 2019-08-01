import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { keys } from '../../keys';

import './Sidebar.css';
import '../../assets/styles/icons.css';

const Sidebar = forwardRef((props, ref) => {
    const [focusedItem, setFocus] = useState(0);

    const menuItems = [
        {text: 'Busca', icon:'search'},
        {text: 'Início', icon:'home'},
        {text: 'Agora na Globo', icon:'rss'},
        {text: 'Categorias', icon:'envelope'},
        {text: 'Minha Conta', icon:'user-circle'}
    ]

    useImperativeHandle(ref, () => ({
        handleKeyPress(e) {
            switch(e.keyCode){
                case keys.KEY_UP:
                    prevItem();
                break;
                case keys.KEY_RIGHT:
                    props.setFocus('MOVIE_LIST');
                break;
                case keys.KEY_DOWN:
                    nextItem()
                break;
                default:
                break;
            }   
        }
    }));

    const nextItem = () => {
        if( focusedItem >= menuItems.length - 1 ) return false
        setFocus(prevFocus => prevFocus + 1);
    }
    const prevItem = () => {
        if( focusedItem === 0 ) return false
        setFocus(prevFocus => prevFocus - 1);
    }

    return (
        <aside className={`sidebar${props.focusedBlock === 'SIDE_BAR' ? ' active-block': ''}`}>
            <ul className="sidebar-list">
                {
                    menuItems.map( (item, index) => (
                        <li className={`sidebar-list__item${focusedItem === index ? ' active-item': ''}`}>
                            <i className={`icon-${ item.icon }`}></i>{ item.text }
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
})

export default Sidebar;