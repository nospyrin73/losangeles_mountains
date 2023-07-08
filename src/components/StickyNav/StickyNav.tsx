import { ReactElement } from 'react';
import { Menu } from '../Menu/Menu';

import './StickyNav.scss';
import { Logo } from '../Logo/Logo';

export function StickyNav(): ReactElement {
    return (
        <div className="sticky-nav">
            <Logo />
            <Menu />
        </div>
    );
}