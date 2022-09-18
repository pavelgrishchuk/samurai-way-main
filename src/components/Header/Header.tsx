import React from "react";
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img
            src='data:image/png;base64,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'/>
    </header>
}

export default Header;