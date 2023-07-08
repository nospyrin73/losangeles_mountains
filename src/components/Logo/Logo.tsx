import { ReactElement } from "react";

import './Logo.scss';

export function Logo(): ReactElement {
    return (
        <div className="logo">
            <img src="./images/logo.svg" className="logo" />
            <h2 className="label">
                <div>losangeles</div>
                <div>mountains</div>
            </h2>
        </div>
    )
}