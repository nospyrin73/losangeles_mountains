import { ReactElement } from 'react';

import './Footer.scss';
import { Logo } from '../Logo/Logo';

export function Footer(): ReactElement {
    return (
        <div className="footer inverted">
            <Logo />
            <div className="footer__copyright">
                copyright 2016. all rights reserved.
            </div>
        </div>
    )
}