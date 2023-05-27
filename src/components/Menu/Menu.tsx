import { ReactElement } from "react";

import './Menu.scss';

export function Menu(): ReactElement {
    return (
        <ol className="menu">
            <li className="menu__item">history</li>
            <li className="menu__item">team</li>
        </ol>
    );
}