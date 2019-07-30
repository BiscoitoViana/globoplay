import React from 'react';

import './Sidebar.css';
import '../../assets/styles/icons.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-list__item"><i className="icon-search"></i>Busca</li>
                <li className="sidebar-list__item"><i className="icon-home"></i>Início</li>
                <li className="sidebar-list__item"><i className="icon-rss"></i>Agora na Globo</li>
                <li className="sidebar-list__item"><i className="icon-envelope"></i>Categorias</li>
                <li className="sidebar-list__item"><i className="icon-user-circle"></i>Minha Conta</li>
            </ul>
        </aside>
    )
}

export default Sidebar;