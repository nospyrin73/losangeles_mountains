import { ReactElement } from "react";
import './Landing.scss';
import { StickyNav } from "../StickyNav/StickyNav";
import { Menu } from "../Menu/Menu";

export function Landing(): ReactElement {
    return (
        <div className="landing">
            <header className="landing__header">
                <img src="./images/logo.svg" className="logo" />
                <Menu />
            </header>
            <h1 className="landing__text">
                <div>losangeles</div>
                <div>mountains</div>
            </h1>
            <div className="landing__foreground" />
            <StickyNav />
        </div>
    );
}