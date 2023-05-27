import { ReactElement } from 'react';

import './StickyNav.scss';
import { Menu } from '../Menu/Menu';

export function StickyNav(): ReactElement {
    return (
        <div className="StickyNav">
            <img src="./images/logo.svg" className="logo" />
            <Menu />
        </div>
    );
}