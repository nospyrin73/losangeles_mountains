import { ReactElement } from "react";
import { Menu } from "../Menu/Menu";

import './Landing.scss';

export function Landing(): ReactElement {
    return (
        <section className="landing">
            <header className="landing__header">
                <img src="./images/logo.svg" className="logo" />
                <Menu />
            </header>
        </section>
    );
}