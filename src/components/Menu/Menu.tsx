import { ReactElement } from "react";

import './Menu.scss';

export function Menu(): ReactElement {
    return (
        <ol className="menu">
            <li className="menu__item"><a href="#history">history</a></li>
            <li className="menu__item"><a href="#mountains">team</a></li>
        </ol>
    );
}