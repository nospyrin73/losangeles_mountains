import { ReactElement, useState, useLayoutEffect } from 'react';
import { Carousel } from '../Carousel/Carousel';

import { items } from './dummy_data.json';

import './History.scss';

export function History(): ReactElement {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const updateWidth = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', updateWidth);

        () => window.removeEventListener('resize', updateWidth);
    }, []);

    const visibleItems = windowWidth < 700 ? 2 : windowWidth < 930 ? 3 : undefined;
    const itemWidth = windowWidth < 470 ? 170 : undefined;


    return (
        <div className="history" id="history">
            <article className="history__statement">
                <div className="marked">
                    <span className="marked__number">01.</span>
                    <span className="marked__title">history</span>
                </div>
                <p className="history__body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                </p>
            </article>
            <section className="history__carousel-wrapper">
                <Carousel items={ items } visibleItems={ visibleItems } itemWidth={ itemWidth } />
            </section>
        </div>
    );
}