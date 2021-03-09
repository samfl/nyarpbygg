import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({handleToggleSidebar}) => {
    return (
        <header className="header">
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
        </header>
    );
}

export default Header; 