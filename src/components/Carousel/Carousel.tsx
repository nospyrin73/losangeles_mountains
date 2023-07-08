import { ReactElement, useRef, useState } from 'react';

import './Carousel.scss';

export type Items = ReadonlyArray<{
    name: string;
    src: string;
}>;

export type CarouselProps = {
    items: Items;
    itemWidth?: number;
    visibleItems?: number;
    gap?: number;
};

export function Carousel({
    items,
    itemWidth = 220,
    visibleItems = 4,
    gap = 10
}: CarouselProps): ReactElement {
    const [activeCollection, setActiveCollection] = useState(0);

    const collectionCount = Math.ceil(items.length / visibleItems);
    const sliderWidth = (itemWidth * visibleItems) + (gap * (visibleItems));

    const sliderRef = useRef<HTMLDivElement>(null);

    const slide = (i: number) => () => {
        setActiveCollection(i);

        sliderRef.current?.style.setProperty(
            'transform',
            `translateX(${-sliderWidth * i}px)`
        );
    }

    return (
        <div
          className="carousel"
          style={ {
            ['--item-width' as string]: `${itemWidth}px`,
            ['--visible-items' as string]: `${visibleItems}`,
            ['--gap' as string]: `${gap}px`
          } }
        >
            <div className="carousel__slider" ref={ sliderRef }>
                { items.map(({ name, src }, i) => (
                    <div className="carousel__slide" key={ i }>
                        <img src={ src } alt={ name } />
                    </div>
                )) }
            </div>
            <ul className="carousel__dots">
                { Array.from({ length: collectionCount }, (_, i) => (
                    <li
                      key={ i }
                      className={ i === activeCollection ? 'active' : '' }
                      onClick={ slide(i)  }
                    />
                )) }
            </ul>
        </div>
    );
}